# Wellness - Healthcare Commerce Platform

Wellness is a healthcare commerce platform built with **Next.js** (frontend) and **Nest.js** (backend) that connects patients, pharmacies, and clinics. It centralizes orders coming from external e‑commerce systems and automates routing, fulfillment, and tracking across multiple pharmacies in the US, while keeping patient data encrypted and consent-driven.

## What the platform does

- Syncs orders from external e‑commerce platforms into the Wellness system and keeps them in sync through the full lifecycle.
- Automatically routes orders to the correct pharmacy based on configuration, location, and availability.
- Lets pharmacies manage and track orders through an internal pharmacy tracking application integrated with Wellness.
- Supports both **online** and **offline** orders across multiple pharmacies in the US.
- Processes secure online payments via **Authorize.net**. 
- Maps external product catalogs (e‑commerce SKUs) to each pharmacy’s internal medicine catalog, including dosage, strength, and other attributes.
- Implements patient consent flows and encrypted storage of sensitive data to align with US healthcare/HIPAA expectations. 

## Tech stack

- **Frontend:** Next.js, React, TypeScript, component-driven UI  
- **Backend:** Nest.js (Node.js), modular architecture, REST APIs 
- **Cloud:** AWS (for secure hosting, storage, and encryption of data at rest and in transit) 
- **Payments:** Authorize.net payment gateway for card transactions 
- **Security & Compliance:**
  - Encrypted patient data (at rest and in transit) using industry-standard algorithms. 
  - Digital consent capture and signed consent records bound to patient and order data. 
  - HIPAA‑aligned workflows, privacy/consent pages, and access control around PHI. 

## Key features

- **Multi‑channel order ingestion:**  
  Integrates with multiple e‑commerce sources; whenever a patient places an order there, the order is automatically created and synced inside Wellness.

- **Automated pharmacy routing:**  
  Routes orders to the appropriate pharmacy and pushes them into the pharmacy’s tracking system for processing and fulfillment.

- **Pharmacy tracking & EPS‑style workflow:**  
  Pharmacies can view, accept, process, and complete orders via an internal tracking UI integrated with Wellness.

- **Product mapping engine:**  
  Maps e‑commerce products to pharmacy medicines, including strength, dosage, and formulation, ensuring the correct medication is dispensed.

- **Online & offline orders:**  
  Supports online checkout with Authorize.net, as well as offline/phone orders managed through the same unified workflow.

- **Secure consent & questionnaires:**  
  Patients complete consent forms and questionnaires, which are **signed**, stored, and encrypted, with auditable records of when and what they agreed to. 

## Role & contributions

- Implemented frontend flows in **Next.js** for:
  - Order listing, details, and status tracking for patients and pharmacies.
  - Pharmacy dashboards for managing orders and inventory mappings.
  - Consent and questionnaire UIs with clear UX around signing and submitting.
- Worked on **Nest.js** API integration, connecting e‑commerce orders, pharmacy systems, and payment flows.
- Helped design encrypted storage patterns and access control boundaries around sensitive patient and order data. 
- Contributed to HIPAA‑aligned compliance pages (privacy, consent, rights) and to overall secure, scalable architecture. 