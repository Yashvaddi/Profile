import React, { useState } from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

interface Measurement {
  id: string;
  points: number[];
  length: number;
}

/**
 * Lead Developer Practice: Canvas-based Interaction
 * roofing measurement tool using Konva.js.
 * Showcases: Complex coordinate mapping, event handling on Canvas, and stateful drawing.
 */
export const RoofingCanvasBuilder: React.FC = () => {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = (e: any) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    const newId = `m-${measurements.length + 1}`;
    setMeasurements([...measurements, { id: newId, points: [pos.x, pos.y], length: 0 }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastMeasurement = measurements[measurements.length - 1];
    
    // Update the last point of the current line
    const newPoints = [lastMeasurement.points[0], lastMeasurement.points[1], point.x, point.y];
    const newLength = Math.sqrt(
      Math.pow(point.x - lastMeasurement.points[0], 2) + 
      Math.pow(point.y - lastMeasurement.points[1], 2)
    );

    const updated = [...measurements.slice(0, -1), { ...lastMeasurement, points: newPoints, length: newLength }];
    setMeasurements(updated);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="flex flex-col items-center bg-slate-900 p-8 rounded-2xl shadow-2xl">
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <h3 className="text-white font-bold text-xl">Nuway Measurement Canvas</h3>
        <div className="flex gap-4">
          <span className="text-slate-400 text-sm">Mode: <b className="text-blue-400">Measurement</b></span>
          <button 
            onClick={() => setMeasurements([])}
            className="text-white hover:text-red-400 transition-colors text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden cursor-crosshair">
        <Stage 
          width={800} 
          height={500}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            <Text 
              text="Click and drag to measure roof segments (ft)" 
              x={20} y={20} fill="#cbd5e1" 
            />
            {measurements.map((m) => (
              <React.Fragment key={m.id}>
                <Line
                  points={m.points}
                  stroke="#3b82f6"
                  strokeWidth={4}
                  lineCap="round"
                  lineJoin="round"
                />
                {m.length > 5 && (
                  <Text
                    x={(m.points[0] + m.points[2]) / 2}
                    y={(m.points[1] + m.points[3]) / 2 - 20}
                    text={`${(m.length / 10).toFixed(1)} ft`}
                    fill="#1e293b"
                    fontStyle="bold"
                  />
                )}
              </React.Fragment>
            ))}
          </Layer>
        </Stage>
      </div>

      <div className="w-full mt-6 grid grid-cols-4 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-xs">Total Segments</p>
          <p className="text-white font-bold text-lg">{measurements.length}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-xs">Total Footing</p>
          <p className="text-white font-bold text-lg">
            {(measurements.reduce((acc, m) => acc + m.length, 0) / 10).toFixed(1)} ft
          </p>
        </div>
      </div>
    </div>
  );
};
