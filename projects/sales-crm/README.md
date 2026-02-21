# Sales CRM - Enterprise Lead Management 📊

[![Sales CRM MFE CI](https://github.com/Yashvaddi/Profile/actions/workflows/sales-crm-ci.yml/badge.svg)](https://github.com/Yashvaddi/Profile/actions/workflows/sales-crm-ci.yml)


Sales CRM is a robust platform designed for IT companies to track, communicate, and convert leads with advanced multi-channel integration. It transitions leads from basic contact info to advanced communication phases using real-time sync and automated messaging.

---

## 📸 Preview
![CRM Pipeline](./public/screenshots/dashboard.png)
*Sales CRM Lead Pipeline Management*

---

## 🚀 Technical Highlights
- **Framework:** **Next.js** for enterprise-grade performance and routing.
- **Language:** **TypeScript** for robust state management across complex lead pipelines.
- **Real-time Communication:** Integrated with **Socket.IO** and **WebRTC** for live video calls and instant messaging.
- **Integrations:** **WhatsApp Business API**, Email SMTP, and generic messaging automation.
- **Testing:** **Jest** for ensuring lead status transitions and communication triggers.

---

## 🛠️ Project Structure
```text
sales-crm/
├── public/                 # Static assets and icons
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Modals, Lead Cards, Pipes
│   │   ├── layout/         # Dashboard navigation, Sidebars
│   │   └── view/           # Communication widgets, Pipeline views
│   ├── hooks/              # Hooks for lead filtering and real-time alerts
│   ├── services/           # WhatsApp API and RTC services
│   ├── styles/             # Modular CSS and Tailwind configuration
│   ├── types/              # Lead, User, and Communication types
│   └── utils/              # Status formatters and message templates
├── tests/
│   ├── unit/              # Tests for pipeline stage logic
│   └── integration/       # Multi-channel messaging workflows
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## ✨ Key Features
- **Lead Lifecycle Tracking:** Advanced pipeline management from initial contact to conversion.
- **Multi-Channel Communication:** Integrated Calling, SMS, Email, and **WhatsApp Business API**.
- **Automated Messaging:** Support for generic messaging, auto-replies, and follow-up sequences.
- **Domain Integration:** Automated user creation and email associations within the company domain.
- **Interactive Dashboards:** Real-time visibility into lead status, communication history, and team performance.

---

## 🧪 Testing Coverage (Jest)
- **Status Transitions:** Unit testing the logic that move leads through different lifecycle phases.
- **Communication Flow:** Mocking WhatsApp and Email APIs to verify message triggers and logging.
- **User Permissions:** Ensuring secure access to lead data based on team roles and assignments.

---

## ✨ Showcase Components
- **[Lead Pipeline Component](./src/components/view/LeadPipeline.tsx):** Drag-and-drop workflow with real-time Socket.IO sync.
- **[Real-time Socket Hook](./src/hooks/useSocket.ts):** Abstracted communication layer for multi-channel tracking.

---

## 🛡️ Role & Contributions
- Architected the **Lead Tracking System** using Next.js, enabling granular status management.
- Integrated **WhatsApp Business API** and **WebRTC** for seamless multi-channel communication.
- Built the **Automated Reply Engine**, significantly improving lead response times.
- Designed the **Real-time Notification System** using Socket.IO to alert users of new leads.
- Implemented **Jest-based testing** for all communication service layers, ensuring 99.9% uptime for messaging.