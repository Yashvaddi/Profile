# 🌐 Deep Micro Frontend Architecture (MFE)

This portfolio implements a **Polyglot & Deep Micro Frontend Architecture**. Unlike simple SPAs, this system is designed for massive scale, where each "project" is an independent Micro-Remote that can be hosted on different infrastructures and connected to diverse backend ecosystems.

---

## 🏗️ 1. Orchestration Layer (The Shell)
The **Shell Application** (Host) provides the global layout, shared authentication, and dynamic loading of remote modules.
- **Dynamic Module Loading**: Remote MFEs are injected at runtime.
- **Shared State Bridge**: A lightweight event bus (RxJS or Custom Events) used to sync data between MFEs without tight coupling.

---

## 🌎 2. Polyglot Backend connectivity
Each Micro Frontend is paired with a specific backend technology to showcase high-level integration capabilities:

| MFE Project | Frontend | Backend (API) | Core API / Integration |
| :--- | :--- | :--- | :--- |
| **Wellness** | Next.js | **Node.js (NestJS)** | HIPAA Compliance, SSL Certs |
| **Sales CRM** | React | **Python (FastAPI)** | WhatsApp Business API, Socket.IO |
| **Discover Equestrian** | Next.js | **Go (Golang)** | Google Maps API (Advanced Markers) |
| **BoatDox** | React | **Java & Spring Boot** | Open Street Maps, Secure PDFs |
| **CandidSuite** | Next.js | **Laravel (PHP)** | Gmail UI / IMAP Integration |
| **Nuway Roofing** | React | **.NET (C# Core)** | Real-time Quotation Engine |
| **Core Utilities** | WASM | **Rust** | High-perf Encryption & Image Compression |

---

## 💉 3. Advanced Connectivity Adapters
Each MFE uses an **Adapter Pattern** to isolate external API logic from the UI components.

### Example: The Gmail UI Bridge (CandidSuite)
We mirror the Gmail experience within CandidSuite using local state management while syncing with the Laravel/IMAP backend.

### Example: WhatsApp Business Integration (Sales CRM)
A real-time listener hook in the Python/FastAPI backend pushes messages via Socket.IO to the React MFE.

## 💠 4. Advanced Visualizations & Real-time Engines
This architecture includes high-performance modules designed to handle complex data and visualization:

- **3D Geospatial Engine (Discover Equestrian)**: Uses **Three.js** to render 3D property site plans and estate terrains directly in the browser, providing an immersive stakeholder experience.
- **Real-time Analytics Engine (Sales CRM)**: Implements animated data streams with **Framer Motion** and **Socket.IO**, allowing for sub-second updates to sales pipelines and message throughput metrics.
- **WASM Acceleration (Core Utilities)**: Offloads heavy computation (like image compression for yacht listings) to **Rust-compiled WebAssembly**, ensuring the main thread remains responsive.

---

## 🚀 5. Deployment & CI/CD Strategy
- **Independent Matrix Builds**: GitHub Actions validate each MFE in parallel, ensuring that a failure in one module doesn't block the deployment of others.
- **Containerization**: Each Remote MFE is containerized with an optimized multi-stage `Dockerfile`.
- **Orchestration**: A global `docker-compose` configuration allows developers to launch the entire multi-language ecosystem with a single command.
- **Edge Delivery**: Remotes are served via AWS CloudFront for low latency in global markets.
