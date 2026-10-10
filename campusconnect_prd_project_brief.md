# CampusConnect — Product Requirements Document (PRD) & Project Brief

**Version:** 1.0  
**Status:** Active Draft / In Review  
**Target Market:** Higher Education Ecosystem in India (Campuses, Tier 1–3 Colleges, Universities)  
**Primary Users:** College Students, Faculty & Department Heads, Campus Clubs, Local Businesses, Student Recruiters  

---

## 1. Executive Summary & Product Vision

### 1.1 The Vision
**CampusConnect** is an India-centric campus operating platform designed to bridge the everyday fragmentation experienced across Indian higher education institutions. Rather than functioning as a siloed learning management system (LMS) or a generic jobs board, CampusConnect unifies **student career discovery** (micro-internships, part-time gigs, campus jobs, hackathons), **institutional problem reporting & SLA tracking** (*CampusFix*), and **local hyper-local commerce & student-friendly services** into a single cohesive, transparent, and trustworthy ecosystem.

### 1.2 Tagline & Brand Promise
- **Primary Tagline:** *"Connect. Discover. Grow on Campus."*
- **Supporting Value Proposition:** *"One platform for verified opportunities, accountable campus solutions, and meaningful collegiate connections."*

---

## 2. Problem Statement & Opportunity Analysis

| Dimension | Current Reality on Indian Campuses | The CampusConnect Solution |
| :--- | :--- | :--- |
| **Career & Internships** | Unverified WhatsApp/Telegram groups, ghost listings, predatory unpaid tasks, scam training fees. | Verified, college-vetted opportunity marketplace with transparent INR (₹) stipends, fixed durations, and applicant pipeline tracking. |
| **Campus Infrastructure** | Broken hostel Wi-Fi, faulty classroom projectors, water cooler failures lost in physical registers without SLAs. | **CampusFix**: A 5-phase transparent civic resolution pipeline (*Reported → Under Review → Assigned → In Progress → Resolved*) with student upvotes and geo-proof. |
| **Local Services** | Overpaying for printing, erratic laptop repair, untrusted PG tiffin services around campus clusters. | Curated local business directory with verified college-student discounts, ratings, and turnaround times. |
| **Faculty & Clubs** | Notice boards that get overlooked; poor inter-college collaboration for technical fests and hackathons. | Targeted departmental announcements, intra/inter-campus event ticketing, and club talent discovery. |

---

## 3. User Personas & Target Audiences

### Persona A: The Aspiring Student (Aryan Sharma, 21 — DTU / Tier 2–3 Engineering & Arts)
- **Pain Points:** Wants relevant hands-on experience and stipend income before 7th semester placements. Struggles to find legitimate remote or hybrid work within Delhi-NCR or their college city.
- **Goals:** Quick 1-click applications via a verified student profile, track application stages in real-time, report Wi-Fi downtime in the hostel.

### Persona B: The Campus Administrator / Faculty In-Charge (Prof. Ananya Iyer — Facilities / Dean of Student Welfare)
- **Pain Points:** Overwhelmed with informal complaints, lack of accountability among third-party HVAC, network, and maintenance contractors.
- **Goals:** Centralized triage board, automated ticket assignment to contractors, student satisfaction metrics, instant campus broadcasts.

### Persona C: The Local Entrepreneur / Recruiter (Rohan Mehta — Tech Founder & Local Print Hub Owner)
- **Pain Points:** High hiring overhead on generic platforms; inability to target verified undergraduate talent directly.
- **Goals:** Post micro-internships or part-time campus ambassador roles in under 2 minutes; attract student footfall through exclusive discounts.

---

## 4. Key Functional Modules & Scope

### 4.1 Module 1: The Opportunity Engine
- **Search & Advanced Filtering:** Search by location (e.g., Delhi-NCR, Bengaluru, Pune, Panipat, Tier-2 cities), work mode (Remote, Hybrid, On-site), stipend range (₹0 – ₹30,000+), duration, and required tech/creative skills.
- **Listing Structure:** Company verification badge, role specifics, weekly hours commitment, direct stipend disclosure, applicant count, and deadline countdown.
- **Application Flow:** Fast-apply with pre-verified college ID credentials, portfolio link attachments, and real-time status updates (*Applied → Viewed → Shortlisted → Interview → Offer*).

### 4.2 Module 2: CampusFix (Civic Problem Solver)
- **Reporting Interface:** Problem title, multi-tier categories (*Classroom Infra, Wi-Fi & IT, Water/Hygiene, Hostel, Electrical/HVAC*), exact campus block/room location, priority tag, image/photo upload, and optional anonymous toggle.
- **Resolution Pipeline:**
  1. *Reported* (Logged with timestamp)
  2. *Under Review* (Validated by estate management)
  3. *Assigned* (Dispatched to contractor or internal department)
  4. *In Progress* (Live progress log & technician ETA)
  5. *Resolved* (Proof log signed off with verification)
- **Crowdsourced Urgency:** Student upvoting mechanism to escalate critical infrastructure bottlenecks to student council and administration.

### 4.3 Module 3: Campus Services & Local Directory
- **Categories:** High-speed thesis printing & binding, stationery, laptop repair, PG accommodations, tiffin/mess subscriptions, and event rentals.
- **Merchant Listings:** Distance from main college gate, student star ratings, exclusive student-ID discount badges, and instant WhatsApp/call triggers.

### 4.4 Module 4: Events & Hackathons Hub
- **Categorization:** Technical hackathons, case competitions, cultural fests, placement readiness workshops, and guest lectures.
- **Registration System:** Individual and team registrations, countdown timers, venue hall designations, and calendar sync (*Google / Outlook*).

### 4.5 Module 5: Role-Based Dashboards
- **Student Dashboard:** Active applications kanban, saved roles, upcoming registered events, active CampusFix ticket updates, profile strength meter.
- **Faculty / Admin Dashboard:** CampusFix ticket assignment matrix, contractor SLA tracking, departmental notices publisher, student project approvals.
- **Business / Employer Dashboard:** Active listings manager, candidate vetting pool, student discount flyer publisher, engagement analytics.

---

## 5. Technical Architecture & Non-Functional Requirements

### 5.1 Design System & UI Specifications
- **Brand Tokens:**
  - Primary Accent: Royal Indigo / Violet (`#6C5CE7`)
  - Secondary Accent: Electric Teal / Cyan (`#00CEC9`)
  - Neutral Ground: Clean Warm White (`#FBF8FF` to `#FFFFFF`)
  - Text Hierarchy: Deep Navy (`#1C1F37`) with muted slate secondary text (`#717595`)
  - Radii & Elevation: 12px–16px rounded pill cards, soft 0–12px diffused drop shadows.
  - Typography: Plus Jakarta Sans / Inter for readable, modern tech-startup legibility.

### 5.2 Responsive & Code Quality Principles
- **No-Framework Beginner Friendly:** Clean, semantic HTML5, utility or clean custom CSS with root CSS custom variables (`--primary`, `--surface`, `--text`), and plain vanilla ES6 JavaScript.
- **Device Support:** 100% fluid responsive design across mobile (390px portrait), tablet, and desktop (1440px+). Zero horizontal scroll.
- **Accessibility & Performance:** Fast sub-second page loads, WCAG AA color contrast compliance on all interactive CTA badges, legible typography scale.

---

## 6. Business Model & Monetization Roadmap

1. **Student Plus (Freemium - ₹99/mo):** Advanced AI resume tailoring, priority application alerts, early hackathon access.
2. **Local Merchant & Business Subscriptions (₹499/mo):** Verified merchant badge, featured placement on campus services feed, direct student messaging.
3. **Institutional Enterprise SLA (Annual Contract):** Dedicated CampusFix resolution engine for estates, facilities SLA auditing, automated WhatsApp escalation workflows for college administration.

---

## 7. Deliverables & Screen Roadmap

- [x] **Home Page (`Home - CampusConnect`)** — Hero, trust logos, metric counters, problem/solution breakdown.
- [x] **Opportunities Marketplace (`Opportunities - CampusConnect`)** — Filterable job & internship catalog with INR stipends.
- [x] **CampusFix Civic Hub (`CampusFix - Problem Solver`)** — Issue submission flow and live resolution feed.
- [x] **Student Dashboard (`Student Dashboard - CampusConnect`)** — Daily personalized student command center.
- [ ] **Opportunity Details Page** — Deep-dive job specs, company overview, role requirements, and similar roles.
- [ ] **Campus Services Directory** — Local business cards with discounts and gate distance.
- [ ] **Campus Events & Hackathons** — Interactive calendar, competition prize pools, and registration.
- [ ] **Faculty / Administration Portal** — Ticket assignment matrix and campus notices publisher.
- [ ] **Business / Recruiter Dashboard** — Candidate shortlisting pipeline and posting interface.
- [ ] **Authentication Flows (Login / Multi-Role Signup)** — Student, Faculty, and Business onboarding.
