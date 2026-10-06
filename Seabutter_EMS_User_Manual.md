# Seabutter | Manager and Employee Management System

## User Manual

**Version:** 1.0
**Prepared by:** Gabriel Enrile
**Date:** September 27, 2026
**Figma Link:** [EMS-GABRIELENRILE](https://www.figma.com/design/pvJAWBn09eAt3EE6L3HaFU/EMS-GABRIELENRILE?node-id=4042-149&t=QLfHGqgJissWNZae-1)

A practical guide to account access, attendance, tasks, announcements, profiles, leave requests, and manager controls.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Screen Inventory](#2-screen-inventory)
3. [Employee Authentication & Account Setup](#3-employee-authentication--account-setup)
4. [Employee Workspace](#4-employee-workspace)
5. [Tasks and Personal Profile](#5-tasks-and-personal-profile)
6. [Leave Requests](#6-leave-requests)
7. [Manager Workspace](#7-manager-workspace)
8. [Manager Leave and Announcement Controls](#8-manager-leave-and-announcement-controls)
9. [Status, Navigation, and Interface Conventions](#9-status-navigation-and-interface-conventions)
10. [Quick Reference](#10-quick-reference)
11. [Document Information](#11-document-information)

---

## 1. Introduction

### 1.1 System Overview

The Seabutter Employee Management System (EMS) is a web-based workplace platform designed to centralize routine employee and manager activities. It helps employees navigate their tasks and manage their personal online workspace, creating a more fluid and seamless workplace on the desktop. It provides a single interface for attendance monitoring, task management, announcements, personal profile maintenance, and leave requests, with easy-to-follow controls and a smooth, responsive UI.

### 1.2 Objectives

- Provide employees with a clear and convenient digital workspace.
- Allow convenient use through an easy-to-follow UI that supports quick workspace actions.
- Track attendance records, including clock-in and clock-out information.
- Organize and manage assigned tasks and make their status easier to monitor.
- Improve access to workplace announcements and leave-request information.
- Give managers a consolidated view of employees, tasks, leave requests, and announcements.

### 1.3 System Features (Employee)

- Activate account using Employee ID and company email
- Log in (the default password is sent to the email)
- Change default password and username on first login
- View and update personal profile
- View attendance records
- View assigned tasks
- Update task status
- View announcements
- Create leave requests
- View leave request status
- Change password

---

## 2. Screen Inventory

| # | Module / Screen | Purpose & Functionality |
|---|-----------------|-------------------------|
| 1 | Login | Secure entry using an Employee ID and password. Includes access to account creation and password recovery. |
| 2 | Sign Up | Collects employee information for account creation and employer review. |
| 3 | Confirmation | Confirms registration and sends the Employee ID to the registered email address. |
| 4 | Employee Dashboard | Summarizes project progress, announcements, leave requests, tasks, notifications, and attendance. |
| 5 | Attendance Records | Displays dated clock-in, clock-out, and attendance-status information. |
| 6 | Announcements | Lists scheduled workplace notices and activities with sorting options. |
| 7 | Assigned Tasks | Shows employee duties, dates, priority, and task status. |
| 8 | Personal Details | Allows permitted profile information to be reviewed or updated. |
| 9 | Leave Request | Provides a form for submitting leave requests and a history/status view. |
| 10 | Manager Dashboard | Summarizes department activity and provides manager-level navigation. |
| 11 | Manager Tasks | Creates and assigns tasks to employees or departments. |
| 12 | Employees | Displays employee attendance and work-location status. |
| 13 | Leave Requests | Lets managers review and approve or reject submitted requests. |
| 14 | Announcements Management | Creates announcements and selects their target department and priority. |

---

# Part I: Employee Screens

## 3. Employee Authentication & Account Setup

Employee access begins through the login and registration workflow. The system uses an Employee ID and password as the primary credentials for account access.

### 3.1 Login

The Login page is the sign-in screen. Enter the assigned Employee ID and password, then select **Log-in**. Users who do not yet have an account, or who are interested in joining the site, can follow the **Create One** link to begin registration. The interface also provides a **Forgot Password** option for account recovery.

### 3.2 Sign-Up

The Sign-Up page is a redesigned page where new users create their account. It collects the employee's first name, last name, email address, contact number, department, date of birth, gender, password, and password confirmation. Every account created through the Sign-Up process is reviewed and confirmed by the employer, who also provides the Employee ID associated with the account.

### 3.3 Registration Confirmation

After registration is completed, a confirmation message is sent to the user's email. The message contains the Employee ID and a confirmation button that redirects the user to the Login page. The employee then signs in using the provided Employee ID and the password created during registration.

If an account is logged in on an unknown device, the employee is sent a notification and can decide whether to allow the sign-in to be confirmed.

### 3.4 Resending Confirmation

If the confirmation message fails to arrive at the registered email, the user is given the option to resend the message after a **1-minute cooldown**. Numerous failed attempts will render the request invalid, and it returns to its original state after **one hour**.

### Access Notes

- Use the exact Employee ID issued for the account.
- Complete all required registration fields before submitting the form.
- Check the registered email address for the Employee ID and confirmation message.
- Use the resend option only after the displayed cooldown has ended.

---

## 4. Employee Workspace

The employee workspace combines frequently used information with direct access to the system's main functions. The sidebar provides navigation to **Dashboard, Attendance, Announcements, Tasks, Your Profile, Leave Request,** and **Logout**.

### 4.1 Employee Dashboard

The Dashboard is the employee's home screen. It is an improved, redesigned overview of each page, including every useful element a user needs to keep track of without leaving the main board. It presents summary cards for project progress, announcements, pending leave requests, and assigned tasks. The middle of the screen holds page cards, including the current progress of a project assigned to the user's department. It also displays recent notifications and a compact attendance summary so important information can be checked without opening each module individually.

Selecting a **View All** control opens the corresponding module for a more complete record.

### 4.2 Attendance Records

The Attendance Records page displays the employee's attendance history. Records include the date, day, clock-in time, clock-out time, attendance status, and the duration of hours the employee has spent in the office. A date control on the right side of the page adjusts the calendar so the employee can review attendance for a selected date or period.

The page makes present, late, and absent records easier to review while also showing the time recorded for each workday.

### 4.3 Announcements

The Announcements page lists every office event, activity, and notice that is scheduled. Entries can be organized using the available sorting controls, including priority and recency. This gives employees one place to review scheduled workplace information. Employees are encouraged to attend as many events and activities as possible.

---

## 5. Tasks and Personal Profile

### 5.1 Assigned Tasks

The Assigned Tasks page displays duties assigned to the employee. Each entry provides task-related information such as its description, date, priority, and current status, including whether tasks were completed on time. Sorting controls allow the employee to organize the list by recency or priority.

The task list helps employees distinguish pending work from submitted or completed work and identify higher-priority items more quickly.

### 5.2 Personal Details

The Personal Details page contains the employee's profile information. Depending on the field and system permissions, the employee can review or update information such as name, username, password, email address, date of birth, contact number, blood type, next of kin, gender, and profile photo.

Profile changes are subject to employer confirmation; the profile is only updated once the employer has confirmed all the details. Employee ID and department information are presented as organization-controlled details rather than ordinary editable profile fields.

### Profile Good Practice

- Keep contact information current.
- Review personal details before saving changes.
- Use accurate information for fields that may be referenced by the employer.
- Do not alter organization-assigned identifiers unless the system explicitly permits it.

---

## 6. Leave Requests

### 6.1 Filing a Leave Request

The Leave Request page allows an employee to file a request for an absence for any valid reason. The form requires the employee name, leave description, first and last day of absence, supporting **Attached Proof of Leave**, and a reason for leave.

After the required information is completed, the employee submits the request for employer review. The employer can check the validity of the request, and the manager can then decide whether to approve or reject it.

### 6.2 Viewing Leave Request Status

The page merges the **Leave Request Status** panel and the main Leave Request page, giving users easier accessibility and more space to work with. Employees can review previous requests and their current status, and pagination is provided for navigating a longer request history.

### Before Submitting

- Enter a clear explanation for the requested leave.
- Verify the first and last dates of absence.
- Attach supporting proof when required.
- Review the request before selecting **Submit Request**.

---

# Part II: Manager Screens

## 7. Manager Workspace

Manager accounts use a related interface with additional controls for department-level oversight. The manager sidebar provides access to **Dashboard, Tasks, Employees, Leave Requests, Announcements,** and **Logout**. The Manager Login page works the same way as the employee Login page (see [3.1](#31-login)).

### 7.1 Main Manager Dashboard

The Manager (Employer) Dashboard consists of tools that make it easier to navigate between pages without leaving the main page. It summarizes information that requires supervisory attention, including project progress, pending leave requests, announcements, assigned tasks, notifications, and employee attendance information.

Although the layout resembles the employee dashboard, the manager view wields a higher level of authority, with a broader department-level perspective and access to management functions.

### 7.2 Creating and Assigning Tasks

The Tasks page is where the employer creates, manages, and assigns tasks. It is divided into a task creation area (on the left) and a task overview list (on the right). A manager can enter a task name and description, select a due date and priority (which configures the urgency of the task), assign the task to an employee, and optionally specify a department using the Department dropdown.

The Task Overview area lists existing tasks with information on each task and the department it is assigned to, and supports filtering and navigation. Priority indicators help distinguish low, moderate, and urgent work.

### 7.3 Employee Attendance Overview

The Employees page helps the employer keep track of the attendance record of each employee. Each entry includes identifying information, department, current work status (at work, at home, or on leave), and a sequence of attendance indicators for the selected dates.

Filters and dropdowns allow the manager to review records by period (including previous months), department, and activity status, such as who is currently at work. Pagination is used when the employee list extends beyond one page.

---

## 8. Manager Leave and Announcement Controls

### 8.1 Reviewing Leave Requests

The manager Leave Requests page is where the employer keeps track of every request sent by employees. Four summary cards at the top show **Pending, Approved, Rejected,** and **Total** requests. The request table includes employee, department, leave type, start date, end date, number of days, and available actions.

Managers can review individual requests and approve or reject them with the click of a button.

### 8.2 Posting Announcements

The Announcements management page allows the manager to create workplace notices and post them to any department under their management. The form (on the left) includes a title, message, date, priority, and target department. Existing announcements are shown alongside the creation form for easier reference.

The target department setting determines which employees see the announcement, while the priority setting communicates its relative importance.

### Manager Responsibilities

- Assign tasks with clear descriptions, realistic due dates, and appropriate priorities.
- Review leave requests using the information and supporting documents provided.
- Use department filters when reviewing employee records.
- Post announcements to the correct audience and select priority carefully.

---

# Part III: General Reference

## 9. Status, Navigation, and Interface Conventions

### 9.1 Sidebar Navigation

Both employee and manager interfaces use a persistent left-side navigation menu. The currently selected module is highlighted, allowing users to identify their location in the system at a glance.

### 9.2 Status Indicators

The interface uses labeled status indicators to communicate attendance, task priority, leave status, and other conditions. Rely on both the text label and its surrounding context when interpreting a record.

### 9.3 Search, Filters, and Pagination

Several modules provide search fields, dropdown filters, sorting controls, or pagination. These controls reduce the amount of information shown at once and make older or more specific records easier to locate.

### 9.4 Saving and Submitting Information

Forms should be reviewed before submission. Where the interface provides a **Save Changes**, **Create Task**, **Submit Request**, or **Post Announcement** control, selecting it commits the information entered in the form.

### General Usage

- Read field labels before entering information.
- Use filters to narrow large lists instead of scanning every record.
- Confirm dates and selected departments before submitting manager actions.
- Log out when finished, especially on a shared or public computer.

---

## 10. Quick Reference

| Role | Action | Procedure |
|------|--------|-----------|
| Employee | Log in | Enter Employee ID and password, then select **Log-in**. |
| Employee | Review attendance | Open **Attendance** and select the relevant period. |
| Employee | Check tasks | Open **Tasks** and review status, priority, and dates. |
| Employee | Update profile | Open **Your Profile**, edit permitted fields, and save changes. |
| Employee | Request leave | Open **Leave Request**, complete the form, attach proof when required, and submit. |
| Manager | Create a task | Open **Tasks**, complete the task form, select assignee/department, and create the task. |
| Manager | Review employees | Open **Employees** and use period, department, and status filters. |
| Manager | Process leave | Open **Leave Requests**, review the request, then approve or reject it. |
| Manager | Post announcement | Open **Announcements**, enter the notice, choose priority and department, then post. |

---

## 11. Document Information

- **System:** Seabutter Manager and Employee Management System
- **Document:** User Manual
- **Version:** 1.0
- **Prepared by:** Gabriel Enrile
- **Date:** September 27, 2026
