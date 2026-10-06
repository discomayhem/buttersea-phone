---
name: seabutter-ems-plan
description: Authoritative, production-grade architectural and implementation blueprint for the Seabutter Employee Management System (EMS), based on the official User Manual and Frontend Design guidelines.
---

# Seabutter™ Employee Management System (EMS) — Final Architecture & Implementation Plan

> **Document Version:** 1.0.0  
> **Prepared For:** Seabutter EMS Desktop Web Application  
> **Primary References:**  
> - [Seabutter EMS User Manual v1.0 (by Gabriel Enrile)](https://www.figma.com/design/pvJAWBn09eAt3EE6L3HaFU/EMS-GABRIELENRILE?node-id=4042-149&t=QLfHGqgJissWNZae-1)  
> - `frontend-design/SKILL.md` (Design Principles, Aesthetic Direction, Typography & Copywriting)  
> - Next.js 16 App Router + React 19 + TypeScript + Vanilla CSS Design System  

---

## 1. Executive Summary & Product Vision

The **Seabutter Employee Management System (EMS)** is a high-productivity, web-based desktop workplace platform designed to unify daily operations for both employees and managers. It provides seamless tracking of attendance, task lifecycles, company announcements, profile management, and leave workflows with dedicated role views.

### Key Objectives
1. **Unified Dual Workspaces**: Seamless transitions between **Employee Workspace** and **Manager Workspace** with role-tailored dashboards and permission boundaries.
2. **High-Density Desktop Productivity**: Clean, scannable information hierarchy optimized for desktop screens (1280px–1920px) using persistent sidebars, split-pane modules, and instant status indicators.
3. **Authentic "Seabutter" Visual Identity**: Reject generic AI boilerplate (avoiding default Claude terracotta or generic grey SaaS cards) in favor of a bespoke, coastal maritime theme featuring Deep Oceanic Slate, Sea Salt Whites, and Warm Butter-Amber accents.
4. **Resilient Local & Simulated State**: Full client-side interactivity supporting live clock-in/out, leave submission and approval workflows, task assignment and status updates, notification toasts, and profile change queues.

---

## 2. Design System & Aesthetics (per `frontend-design/SKILL.md`)

### 2.1 Color Palette Token System
Inspired by maritime nautical heritage and the "Seabutter" culinary/maritime aesthetic:

| Token Name | Hex Code | Role & Usage |
|---|---|---|
| `--color-canvas-base` | `#0B1321` | Deep Oceanic Obsidian — Primary dark canvas background |
| `--color-canvas-surface` | `#121E31` | Deep Naval Surface — Sidebar and container panels |
| `--color-canvas-card` | `#19273F` | Elevated Coastal Card — Cards, tables, modal surfaces |
| `--color-canvas-border` | `rgba(148, 163, 184, 0.14)` | Subtle Slate Dividers & hair-thin card borders |
| `--color-butter-primary` | `#F59E0B` | Warm Salt Butter Amber — Primary actions, active highlights |
| `--color-butter-hover` | `#D97706` | Deep Butter Amber — Hover and focus states |
| `--color-text-primary` | `#F8FAFC` | Sea Salt White — Crisp headings, high-contrast values |
| `--color-text-secondary` | `#94A3B8` | Slate Mist — Descriptive text, secondary captions |
| `--color-status-present` | `#10B981` | Seafoam Emerald — Present status, Approved, Completed |
| `--color-status-late` | `#F59E0B` | Warm Amber — Late attendance, Pending reviews, In-progress |
| `--color-status-absent` | `#EF4444` | Beacon Crimson — Absent records, Rejected leaves, Urgent tasks |
| `--color-status-home` | `#38BDF8` | Coastal Azure — "At Home" remote work status indicator |

### 2.2 Typography Scale
- **Display & Headings**: `Plus Jakarta Sans` or `Outfit` (600/700 weight, deliberate tracking, no pseudo-bolding).
- **Body & Data Tables**: `Inter` (400/500 weight, line length capped under 75 characters for prose).
- **Metric Badges & Codes**: Clean sans-serif with tabular numbers (`font-variant-numeric: tabular-nums`) for Employee IDs (`SB-8821`), timestamps, and office hour totals.

### 2.3 Layout & Structural Conventions
- **Desktop First**: Dual-pane layouts for Manager Tasks (Create Left | Overview Right), Announcements (Compose Left | Feed Right), and Leave Requests (Filing Form + Live History Table).
- **Persistent Left Navigation**: 260px fixed sidebar with role badges, module highlights, and active route indicators.
- **Micro-Interactions**: Direct feedback for actions (e.g., immediate badge shift when clicking "Clock In", real-time counter updates upon leave approval).
- **Copywriting Standard**: Plain verbs, active voice ("Clock In", "Submit Request", "Approve", "Reject", "Post Announcement", "Save Changes").

---

## 3. Complete Screen Inventory & Functional Mapping

As defined in Section 2 of the *Seabutter EMS User Manual*, the system comprises **14 core modules and screens**:

```
Seabutter EMS Architecture
├── Authentication & Onboarding
│   ├── [Screen 1] Login (Employee ID + Password + Forgot Password)
│   ├── [Screen 2] Sign-Up (9-field registration form for employer review)
│   └── [Screen 3] Registration Confirmation (Simulation, Employee ID issuance, 1-min cooldown)
│
├── Employee Workspace
│   ├── [Screen 4] Employee Dashboard (Project progress, widgets, quick clock status)
++│   ├── [Screen 5] Attendance Records (Date selector, clock-in/out, hours spent, status badges)
│   ├── [Screen 6] Announcements (Workplace notices, priority sorting, dept filters)
│   ├── [Screen 7] Assigned Tasks (Duties, priority levels, deadlines, status transitions)
│   ├── [Screen 8] Personal Details (Profile view, permitted edits, employer approval state)
│   └── [Screen 9] Leave Request & History (Filing form with file proof + status table)
│
└── Manager Workspace
    ├── [Screen 10] Manager Dashboard (Department KPIs, pending queue, overview)
    ├── [Screen 11] Manager Tasks (Dual-pane: Task Creator on Left | Overview on Right)
    ├── [Screen 12] Employees Attendance Overview (Work location, multi-day dots, filters)
    ├── [Screen 13] Manager Leave Requests (4 Metric cards + Actionable Approval Table)
    └── [Screen 14] Announcements Management (Composer on Left | Live Feed on Right)
```

### Detailed Screen Specifications

#### 3.1 Authentication Flow (Screens 1–3)
- **Login Screen**:
  - Inputs: Employee ID (`SB-XXXX`) and Password.
  - Role Toggle: Instant switcher between **Demo Employee (Gabriel Enrile)** and **Demo Manager (Sarah Jenkins)** for rapid testing.
  - Action links: "Create One" (routes to Sign-Up) and "Forgot Password" (interactive modal).
- **Sign-Up Screen**:
  - Fields: First Name, Last Name, Email Address, Contact Number, Department, Date of Birth, Gender, Password, Password Confirmation.
  - Employer Review note clearly stated.
- **Registration Confirmation Screen**:
  - Displays generated Employee ID issued to the email.
  - Interactive "Resend Confirmation" button with a live **60-second cooldown timer** and lock-out guard.

#### 3.2 Employee Modules (Screens 4–9)
- **Screen 4: Employee Dashboard**:
  - Header: Welcome banner with current time, date, and Quick Clock In/Out action.
  - Summary Cards: Department Project Progress (animated bar), Assigned Tasks (count & urgent items), Pending Leave Requests, Latest Announcement highlight.
  - Quick Attendance Card: Today's hours recorded, clock-in timestamp.
- **Screen 5: Attendance Records**:
  - Controls: Period selector (This Week, This Month, Custom Date Range).
  - Summary Metrics: Days Present, Days Late, Days Absent, Total Office Hours.
  - Interactive Table: Date, Day, Clock-In Time, Clock-Out Time, Duration (HH:mm), Status Badge (Present, Late, Absent).
- **Screen 6: Announcements Feed**:
  - Sorting: By Recency or Priority (Urgent, Normal, Informational).
  - Department filtering (All, Engineering, Operations, Design, Marketing).
  - Notice cards with date badge, priority tag, message body, and author badge.
- **Screen 7: Assigned Tasks**:
  - Filters: All, Pending, In Progress, Submitted, Completed.
  - Sort: By Due Date or Priority.
  - Task Cards/Table: Title, Department, Due Date, Priority indicator (Low / Moderate / Urgent), Status updater (allows employee to transition status).
- **Screen 8: Personal Details (Profile)**:
  - Read-Only Org Fields: Employee ID, Department, Position, Hire Date.
  - Editable Fields: Username, Email, Phone Number, Date of Birth, Blood Type, Next of Kin, Gender, Avatar photo upload.
  - "Pending Employer Confirmation" state banner when profile edits are saved.
- **Screen 9: Leave Request (Integrated Layout)**:
  - Form (Top or Left): Leave Type (Vacation, Sick, Emergency, Maternity/Paternity), Start Date, End Date, Reason, Proof of Leave attachment dropzone.
  - Status Panel (Bottom or Right): Paginated table of past leave submissions with status pills (Pending, Approved, Rejected) and reviewer comments.

#### 3.3 Manager Modules (Screens 10–14)
- **Screen 10: Main Manager Dashboard**:
  - Department KPI Overview: Total Department Employees, At Work Today, On Leave, Tasks Due This Week.
  - Pending Action Center: Direct shortcuts to review pending leaves and unassigned tasks.
- **Screen 11: Manager Tasks (Dual-Pane Split Layout)**:
  - Left Pane (Task Creation Form): Task Title, Detailed Description, Due Date, Priority (Low, Moderate, Urgent), Assignee Dropdown, Department Dropdown, "Create Task" button.
  - Right Pane (Task Overview List): Filterable list by assignee, department, or priority; status progress indicators and deletion/reassignment controls.
- **Screen 12: Employees Attendance Overview**:
  - Filters: Department selector, Status filter ("At Work", "At Home", "On Leave"), Month/Period selector.
  - Employee Table: Employee Name, ID, Department, Current Status Badge, 7-Day Attendance Indicator Matrix (color-coded dots for Present, Late, Absent, Leave), and pagination controls.
- **Screen 13: Manager Leave Requests Review**:
  - Top 4 Metric Cards: **Pending (yellow)**, **Approved (green)**, **Rejected (red)**, **Total Requests (navy)**.
  - Request Table: Employee Name, ID, Department, Leave Type, Duration (Dates & Total Days), Proof File indicator, One-click "Approve" and "Reject" buttons with confirmation feedback.
- **Screen 14: Announcements Management (Split Layout)**:
  - Left Pane (Composer): Notice Title, Message Body, Target Department dropdown (All Departments or specific), Priority Selector, "Post Announcement" button.
  - Right Pane (Active Announcements Feed): Live preview of posted notices with deletion and edit controls.

---

## 4. Technical Architecture & Data Models

### 4.1 TypeScript Data Schemas (`src/types/ems.ts`)

```typescript
export type UserRole = "employee" | "manager";

export type WorkStatus = "at_work" | "at_home" | "on_leave";

export type AttendanceStatus = "present" | "late" | "absent";

export type TaskPriority = "low" | "moderate" | "urgent";

export type TaskStatus = "pending" | "in_progress" | "submitted" | "completed";

export type LeaveStatus = "pending" | "approved" | "rejected";

export type LeaveType = "vacation" | "sick" | "emergency" | "maternity_paternity";

export interface UserProfile {
  id: string;              // e.g. "SB-8821"
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  department: string;
  position: string;
  role: UserRole;
  avatarUrl: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  nextOfKin: string;
  pendingChanges?: Partial<UserProfile>;
}

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  date: string;           // "YYYY-MM-DD"
  day: string;            // "Monday"
  clockIn: string | null; // "08:52 AM"
  clockOut: string | null;// "05:30 PM"
  durationHours: number;
  status: AttendanceStatus;
}

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  department: string;
  assignedToId: string;
  assignedToName: string;
  dueDate: string;
  priority: TaskPriority;
  status: TaskStatus;
  completedOnTime?: boolean;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  leaveType: LeaveType;
  description: string;
  startDate: string;
  endDate: string;
  daysCount: number;
  proofFileName?: string;
  reason: string;
  status: LeaveStatus;
  submittedAt: string;
  reviewedBy?: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  message: string;
  date: string;
  priority: TaskPriority;
  targetDepartment: string; // "All" or Department name
  postedBy: string;
}
```

### 4.2 Application File Structure

```text
buttersea-phone-main/
├── src/
│   ├── app/
│   │   ├── globals.css                # Custom Seabutter design tokens, resets, cards, tables
│   │   ├── layout.tsx                 # Root layout with Inter + Plus Jakarta Sans fonts
│   │   ├── page.tsx                   # Main dynamic EMS application container
│   │   └── api/
│   │       └── hello/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx            # Role-aware persistent sidebar navigation
│   │   │   └── TopHeader.tsx          # Current role switcher, date/time, quick profile badge
│   │   ├── auth/
│   │   │   ├── LoginView.tsx          # Screen 1
│   │   │   ├── SignUpView.tsx         # Screen 2
│   │   │   └── ConfirmationModal.tsx  # Screen 3 (with 60s cooldown timer)
│   │   ├── employee/
│   │   │   ├── EmployeeDashboard.tsx  # Screen 4
│   │   │   ├── AttendanceView.tsx     # Screen 5
│   │   │   ├── AnnouncementsFeed.tsx  # Screen 6
│   │   │   ├── TasksListView.tsx      # Screen 7
│   │   │   ├── ProfileDetailsView.tsx # Screen 8
│   │   │   └── LeaveRequestView.tsx   # Screen 9 (Form + Status history)
│   │   └── manager/
│   │       ├── ManagerDashboard.tsx   # Screen 10
│   │       ├── ManagerTasksView.tsx   # Screen 11 (Split pane creator & list)
│   │       ├── EmployeesDirectory.tsx # Screen 12 (Attendance grid & status)
│   │       ├── ManagerLeaveView.tsx   # Screen 13 (4 metrics + approval actions)
│   │       └── ManagerAnnouncements.tsx # Screen 14 (Composer + Active notices)
│   ├── context/
│   │   └── EmsContext.tsx             # Shared interactive state (users, tasks, leaves, clocks)
│   └── types/
│       └── ems.ts                     # TypeScript definitions
├── grill-me/
│   └── SKILL.md                       # This master specification & execution plan
└── package.json
```

---

## 5. Implementation Roadmap & Execution Phases

### Phase 1: Foundation & Design Tokens (`globals.css`)
- Replace the legacy phone landing styling with the Seabutter Maritime token system.
- Build reusable UI classes: `.ems-card`, `.ems-table`, `.badge-present`, `.badge-late`, `.badge-absent`, `.btn-butter`, `.split-container`, `.sidebar-nav-item`.
- Verify dark/light contrast ratios (WCAG AAA for text, AA for UI controls).

### Phase 2: Core State Engine & Context (`EmsContext.tsx`)
- Populate authentic mock initial data representing:
  - 1 Default Manager ("Sarah Jenkins", Operations)
  - 4 Diverse Employees (including "Gabriel Enrile", Engineering)
  - 10+ Historical Attendance records with clock-in/out stamps
  - 6 Assigned tasks with varying priorities and statuses
  - 4 Leave requests (2 Pending, 1 Approved, 1 Rejected)
  - 3 Active Announcements across Engineering and All Departments.
- Implement state mutation methods:
  - `clockIn()`, `clockOut()`
  - `submitLeaveRequest()`, `reviewLeaveRequest(id, 'approved' | 'rejected')`
  - `createTask()`, `updateTaskStatus(id, newStatus)`
  - `createAnnouncement()`, `deleteAnnouncement(id)`
  - `updateProfile()`, `approveProfileChanges()`

### Phase 3: Authentication & Workspace Frame
- Implement the role switcher allowing one-click toggling between Gabriel (Employee) and Sarah (Manager).
- Implement Login, Sign-Up with field validation, and Registration Confirmation with live countdown.
- Assemble the persistent Sidebar with notification badges and dynamic active module selection.

### Phase 4: Employee Workspace Modules (Screens 4–9)
- Build the Employee Dashboard with interactive project progress meter and live clock button.
- Build Attendance Records with date range filtering and calculated hours.
- Build Announcements feed with priority tags and department filtering.
- Build Assigned Tasks with status transition buttons.
- Build Profile Details with editable fields and pending confirmation banner.
- Build Leave Request module combining the upload form with paginated status history.

### Phase 5: Manager Workspace Modules (Screens 10–14)
- Build Manager Dashboard summarizing department capacity and pending action queues.
- Build Manager Tasks dual-pane view: creator on left, overview table on right.
- Build Employees Directory with work status pills and 7-day attendance dot matrix.
- Build Manager Leave Requests with 4 metric cards and instant Approve/Reject triggers.
- Build Announcements Manager with composer and department targeting.

### Phase 6: Polish, Verification & Responsiveness
- Add micro-animations for state changes (toast alerts on actions).
- Verify all 14 screens against the *Seabutter EMS User Manual*.
- Run `npm run build` to ensure zero TypeScript or build errors.

---

## 6. Verification & Quality Checklist

- [x] All 14 screens from the User Manual catalogued with exact requirements.
- [x] Strict adherence to `frontend-design/SKILL.md` (no generic AI defaults, bespoke palette, intentional typography).
- [x] Complete support for dual workflows: Employee self-service and Manager supervisory controls.
- [x] Realistic mock data matching Gabriel Enrile's Figma specification.
- [x] Fully typed Next.js App Router codebase with zero external CSS library dependencies.
