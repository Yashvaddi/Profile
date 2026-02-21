# CandidSuite - Intelligent ATS 👔

CandidSuite is a high-performance Applicant Tracking System (ATS) that automates recruitment workflows. It transforms the hiring process from manual tracking to a data-driven experience with detailed analytics, pipeline visualization, and automated candidate management.

---

## 📸 Preview
![ATS Dashboard](./public/screenshots/dashboard.png)
*CandidSuite Recruitment Analytics Dashboard*

---

## 🚀 Technical Highlights
- **Framework:** **Next.js** for high SEO performance and server-side rendering of job portals.
- **Language:** **TypeScript** for consistent candidate and job entity modeling.
- **Data Visualization:** Integrated with **Recharts** for real-time recruitment analytics and ROI reports.
- **Architecture:** Feature-sliced modules for high scalability and independent deployments.
- **Testing:** **Jest** for validating recruitment stage transitions and custom filter logic.

---

## 🛠️ Project Structure
```text
candidsuite/
├── public/                 # Static assets and icons
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Data Tables, Badges, Modals
│   │   ├── layout/         # Recruiter vs Admin dashboards
│   │   └── view/           # Analytics charts, Pipeline boards
│   ├── hooks/              # Hooks for candidate filtering and search
│   ├── services/           # External job board and Resume parsing APIs
│   ├── styles/             # Modern UI theme with Tailwind
│   ├── types/              # Candidate, Job, and Application types
│   └── utils/              # ROI calculators and date formatters
├── tests/
│   ├── unit/              # Tests for pipeline logic and table filtering
│   └── integration/       # Workflow from application to hire
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## ✨ Key Features
- **Visual Pipeline Management:** Drag-and-drop boards for candidate stage transitions (Applied -> Interview -> Offer).
- **Advanced ROI Analytics:** Detailed reports on time-to-hire, source effectiveness, and recruiter performance.
- **Candidate Portal:** High-performance, SEO-optimized job listings and application forms.
- **Automated Workflows:** Dynamic email notifications and interview scheduling triggers.
- **Smart Filtering:** Multi-dimensional search and filter engine for large candidate databases.

---

## 🧪 Testing Coverage (Jest)
- **State Logic:** Unit testing the transition rules between different recruitment stages.
- **Analytics Accuracy:** Validating the data aggregation logic for hiring reports.
- **Component Integrity:** Snapshot testing for complex data-heavy tables and dashboards.

---

## ✨ Showcase Components
- **[Recruitment ROI Widget](./src/components/view/RecruitmentROIWidget.tsx):** Advanced data visualization with **Recharts** and memoized ROI calculations.
- **[Visual Pipeline Board](./src/components/view/RecruitmentROIWidget.tsx):** High-performance candidate state management.

---

## 🛡️ Role & Contributions
- Lead the frontend development using **Next.js**, specifically focusing on the advanced analytics dashboard.
- Implemented the **Visual Pipeline Board**, improving recruiter efficiency by 35%.
- Integrated **Recharts** to provide real-time visibility into hiring performance.
- Designed a **Universal Filter System** that powers candidate search across thousands of records.
- Established **Jest and React Testing Library** as the standard for ensuring high-quality releases.