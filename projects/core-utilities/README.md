# Core Utilities - WASM & High Performance ⚡

[![Core Utilities CI](https://github.com/Yashvaddi/Profile/actions/workflows/core-utils-ci.yml/badge.svg)](https://github.com/Yashvaddi/Profile/actions/workflows/core-utils-ci.yml)

Core Utilities is a specialized Micro Frontend focused on **heavy computational tasks**. It leverages **Rust-compiled WebAssembly (WASM)** to perform encryption, image compression, and complex mathematical modeling directly in the browser with near-native performance.

---

## 📸 Preview
![WASM Performance](./public/screenshots/performance.png)
*WASM Performance Benchmarks*

---

## 🚀 Technical Highlights
- **Framework:** **Next.js** for coordination and UI overlay.
- **Performance Engine:** **Rust / WASM** for CPU-intensive logic.
- **Security:** End-to-end encryption using **AES-GCM** and **Chacha20** at the edge.
- **Parallelism:** Utilizes **Web Workers** to keep the main thread responsive during heavy loads.
- **Efficiency:** 50-80% reduction in image processing time vs pure JavaScript.

---

## 🛠️ Project Structure
```text
core-utilities/
├── src/
│   ├── services/           # WASM Bridge and Rust-orchestration
│   ├── hooks/              # Hooks for worker-based computation
│   └── utils/              # Byte-level formatters and buffers
├── next.config.js
└── tsconfig.json
```

---

## ✨ Key Features
- **High-Perf Encryption**: Secure patient and financial data locally before transmission.
- **Image Compression**: Client-side SIMD-optimized compression for large yacht/real-estate media.
- **Mathematical Modeling**: Real-time calculation of complex financial derivatives and risk scores.
- **Multi-threaded Execution**: Seamless background processing via Web Workers.

---

## ✨ Showcase Components
- **[WASM Core Service](./src/services/WASMCore.ts):** Near-native performance bridge for encryption and compression.

---

## 🛡️ Role & Contributions
- Architected the **WASM Bridge** to integrate Rust modules into the React ecosystem.
- Implemented **SIMD-optimized** algorithms for image processing, reducing server load significantly.
- Engineered **AES-256 worker-based encryption**, ensuring PHI data never touches the main thread in plain text.
- Optimized the **Build Pipeline** to handle `.wasm` assets efficiently across the Micro Frontend shell.
