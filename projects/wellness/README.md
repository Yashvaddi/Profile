# Wellness - Healthcare Commerce Platform 🏥

[![Wellness MFE CI](https://github.com/Yashvaddi/Profile/actions/workflows/wellness-ci.yml/badge.svg)](https://github.com/Yashvaddi/Profile/actions/workflows/wellness-ci.yml)


Wellness is a high-performance healthcare commerce platform built with **Next.js** and **TypeScript**. It facilitates secure connectivity between patients, pharmacies, and clinics, streamlining medicine fulfillment through automated routing and real-time tracking.

---

## 📸 Preview
![Healthcare Dashboard](./public/screenshots/dashboard.png)
*Wellness Healthcare Commerce Dashboard*

---

## 🚀 Technical Highlights
- **Framework:** Next.js (App Router) for optimized performance and SEO.
- **Language:** TypeScript for type-safe development and better maintainability.
- **Architecture:** Modular, component-driven architecture aligned with HIPAA compliance standards.
- **Testing:** Comprehensive unit and integration tests using **Jest** and React Testing Library.

---

## 🛠️ Project Structure
The project follows a scalable Next.js directory structure, ensuring a clear separation of concerns:

```text
wellness/
├── public/                 # Static assets and screenshots
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Buttons, Inputs, Modals
│   │   ├── layout/         # Header, Footer, Sidebar
│   │   └── view/           # Page-specific complex components
│   ├── hooks/              # Custom React hooks for business logic
│   ├── services/           # API integration and external services
│   ├── styles/             # Global styles and Tailwind configurations
│   ├── types/              # TypeScript interfaces and types
│   └── utils/              # Helper functions and constants
├── tests/
│   ├── unit/              # Unit tests for components and hooks
│   └── integration/       # Integration tests for end-to-end flows
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Styling configuration
└── tsconfig.json           # TypeScript configuration
```

---

## ✨ Key Features
- **Multi-channel Order Ingestion:** Real-time synchronization with external e-commerce platforms.
- **Automated Pharmacy Routing:** Intelligent order distribution based on location and inventory.
- **Pharmacy Tracking Dashboard:** End-to-end visibility for fulfillers with real-time status updates.
- **Secure Payment Integration:** PCI-compliant processing via **Authorize.net**.
- **HIPAA Compliance:** Encrypted patient data (AES-256) and digital consent management.

---

## 🧪 Testing Coverage (Jest)
We prioritize reliability through a robust testing suite:
- **Unit Tests:** Ensuring individual components (forms, buttons, charts) render correctly and handle edge cases.
- **Hook Testing:** Validating state transitions and side effects in custom hooks.
- **Mocking:** Utilizing `jest.mock` for API calls and external services to ensure isolated test environments.

---

## ✨ Showcase Components
- **[Order Service Layer](./src/services/order.service.ts):** Encapsulated business logic for HIPAA-aligned order routing.
- **[Secure API Client](./src/services/api.ts):** Custom Axios instance with compliance interceptors.
- **[Domain Types](./src/types/index.ts):** Strict TypeScript modeling for healthcare entities.

---

## 🛡️ Role & Contributions
- Lead the frontend development using **Next.js**, focusing on the patient and pharmacy dashboards.
- Architecture the **Order Mapping Engine** that syncs diverse product catalogs into a unified system.
- Implemented secure documentation flows for digital consent, ensuring HIPAA alignment.
- Integrated **Authorize.net** for seamless and secure payment processing.
- Maintained **80%+ test coverage** using Jest to ensure production stability.