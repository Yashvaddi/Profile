/**
 * @file PROJECT_MANAGEMENT.md
 * @description My Engineering Philosophy & Workflow
 */

# 🛡️ Engineering Management & Philosophy

As a Lead Frontend Developer/Consultant, I don't just write code; I design systems that are scalable, testable, and maintainable. Here is the framework I use to manage enterprise-level React and Next.js projects.

---

## 🏗️ 1. Architecture: The Feature-Based Approach
I move away from flat "components" and "hooks" folders. I use a **Domain-Driven Directory Structure**.
- **Shared UI**: Universal primitives (Buttons, Modals).
- **Features/**: Self-contained modules (e.g., `features/authentication`, `features/checkout`) containing their own components, hooks, and services.
- **Separation of Concerns**: UI (Appearance) is decoupled from Business Logic (Hooks).

## 🧪 2. Quality Assurance: TDD & CI/CD
Confidence in delivery comes from automated verification.
- **Unit Testing (Jest/RTL)**: All critical business logic and utility functions must have >80% coverage.
- **Integration Testing**: Using Playwright or Cypress for "Happy Path" user journeys.
- **Static Analysis**: Strict ESLint, Prettier, and TypeScript `strict: true` settings to catch errors before runtime.

## 🚀 3. Performance Optimization (Next.js Focus)
For high-traffic US-based platforms, latency is the enemy.
- **RSC (React Server Components)**: Leveraging server-side logic to reduce client bundles.
- **Image Optimization**: Custom loaders and Next/Image for WebP delivery.
- **Streaming & Suspense**: Loading the shells of pages immediately while data streams in.

## 🤝 4. Communication & Sprints
I bridge the gap between Product, Design, and Engineering.
- **Agile/Scrum**: Two-week sprints with clear Jira tickets and acceptance criteria.
- **Code Reviews**: Positive, constructive, and rigorous review process focused on readability and SOLID principles.
- **Documentation**: Code is self-documenting, while architecture is mapped in ADRs (Architecture Decision Records).

---

## 💠 5. Specialized Engineering Capabilities
Beyond standard SPA development, I specialize in "Heavy Frontend" domains:
- **3D Visualization Layer**: Engineering immersive browser-based 3D experiences using **Three.js** and **React Three Fiber** for real estate, healthcare, and gaming sectors.
- **Real-time Pipeline Engineering**: Architecting low-latency communication bridges using **Socket.IO** and **WebRTC** for financial dashboards and multi-channel CRMs.
- **Micro Frontend Orchestration**: Designing scalable module federation strategies that allow large teams to deploy independently without site-wide regressions.
- **Enterprise Design Systems**: Building accessible, performant component libraries from scratch using Radix UI or Headless UI primitives.

---

### My Tech Standards
- **Styling**: Tailwind CSS (Maintainability) or CSS Modules (Isolation).
- **State**: React Query (Server State) + Context API/Redux (Client State).
- **Safety**: Zod for runtime schema validation of API responses.
- **Performance**: Lighthouse 95+ scores as a non-negotiable standard.
