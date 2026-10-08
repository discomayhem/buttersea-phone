"use client";

import React, { useState } from "react";
import Image from "next/image";

interface DashboardProps {
  onLogout: () => void;
  userRole?: string;
  userName?: string;
}

export default function DashboardView({
  onLogout,
  userRole = "Department Manager",
  userName = "Mr. Employer",
}: DashboardProps) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Nav items from sidebar design image
  const navItems = [
    {
      id: "Dashboard",
      label: "Dashboard",
      icon: (isActive: boolean) => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isActive ? "#65d003" : "#ffffff"}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      ),
    },
    {
      id: "Tasks",
      label: "Tasks",
      icon: (isActive: boolean) => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isActive ? "#65d003" : "#ffffff"}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 11 3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          <path d="M14 18h4" />
          <path d="M12 21h6" />
        </svg>
      ),
    },
    {
      id: "Employees",
      label: "Employees",
      icon: (isActive: boolean) => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isActive ? "#65d003" : "#ffffff"}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.35-4.35" />
          <circle cx="11" cy="9" r="2.5" />
          <path d="M6.5 15.2a5 5 0 0 1 9 0" />
        </svg>
      ),
    },
    {
      id: "Leave Requests",
      label: "Leave\nRequests",
      icon: (isActive: boolean) => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isActive ? "#65d003" : "#ffffff"}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m15 15 3-3m0 0-3-3m3 3h-6" />
        </svg>
      ),
    },
    {
      id: "Announcements",
      label: "Announcements",
      icon: (isActive: boolean) => (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isActive ? "#65d003" : "#ffffff"}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ),
    },
  ];

  // Employee Attendance Rows exactly as shown in screenshot:
  // 5 attendance boxes: green = present, orange = late/leave, red = absent
  const attendanceList = [
    {
      name: "Marie Curie",
      status: "In-Office",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      records: ["#76cf00", "#76cf00", "#f98b3b", "#76cf00", "#76cf00"],
    },
    {
      name: "Albert Einstein",
      status: "In-Office",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      records: ["#76cf00", "#76cf00", "#76cf00", "#f98b3b", "#76cf00"],
    },
    {
      name: "Winston Churchill",
      status: "In-Office",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      records: ["#76cf00", "#76cf00", "#ff0000", "#76cf00", "#76cf00"],
    },
  ];

  // Notifications as shown in image
  const notificationsList = [
    {
      title: "Announcement 1",
      subtitle: "Bla bla bla announcement this,\nannouncement that.",
      tag: "Important",
      tagColor: "#e6e8ff",
      tagTextColor: "#5564f5",
      iconBg: "#4338ca",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      ),
    },
    {
      title: "Announcement 2",
      subtitle: "Bla bla bla announcement this,\nannouncement that.",
      tag: "Holiday",
      tagColor: "#e9f9df",
      tagTextColor: "#50b915",
      iconBg: "#22c55e",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Announcement 3",
      subtitle: "Bla bla bla announcement this,\nannouncement that.",
      tag: "General",
      tagColor: "#fef0e7",
      tagTextColor: "#f97316",
      iconBg: "#f97316",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="ems-dashboard-layout">
      {/* 1. BLACK SIDEBAR */}
      <aside className="ems-sidebar">
        {/* Top Logo */}
        <div className="sidebar-brand-wrapper">
          <div className="sidebar-logo-graphic">
            {/* Speed dash pill rainbow icon from screenshot */}
            <svg
              width="44"
              height="28"
              viewBox="0 0 54 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="rainbowGrad" x1="0" y1="0" x2="54" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="35%" stopColor="#eab308" />
                  <stop offset="70%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <rect x="2" y="4" width="14" height="4" rx="2" fill="url(#rainbowGrad)" />
              <rect x="2" y="13" width="18" height="4" rx="2" fill="url(#rainbowGrad)" />
              <rect x="2" y="22" width="12" height="4" rx="2" fill="url(#rainbowGrad)" />
              <rect x="25" y="4" width="25" height="22" rx="11" stroke="url(#rainbowGrad)" strokeWidth="4.2" fill="none" />
            </svg>
            <span className="sidebar-brand-title">Seabutter™</span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar-nav-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <div className="sidebar-icon-holder">{item.icon(isActive)}</div>
                <span className={`sidebar-label ${isActive ? "active-label" : ""}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Logout at bottom */}
        <div className="sidebar-footer">
          <button type="button" className="sidebar-nav-btn logout-btn" onClick={onLogout}>
            <div className="sidebar-icon-holder">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </div>
            <span className="sidebar-label">Logout</span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN DASHBOARD CONTENT AREA */}
      <main className="ems-main-content">
        {/* TOP HEADER: User Profile dropdown */}
        <header className="dashboard-topbar">
          <div className="user-profile-badge">
            <div className="profile-avatar-circle">
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#bdbdbd" />
                <circle cx="12" cy="9.2" r="4.2" fill="#ffffff" />
                <path d="M4.6 20.2c1.8-3.4 5.2-4.9 7.4-4.9s5.6 1.5 7.4 4.9" fill="#ffffff" />
              </svg>
            </div>
            <div className="profile-text-meta">
              <div className="profile-name-row">
                <span className="profile-user-name">{userName}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <span className="profile-user-role">{userRole}</span>
            </div>
          </div>
        </header>

        {/* HERO GREETING SECTION */}
        <section className="dashboard-hero-greeting">
          <h1 className="hero-title">
            Welcome back,<br />
            {userName}!
          </h1>
          <p className="hero-desc">Lorem ipsum dolor sit amet consectetur</p>
        </section>

        {/* 4 SUMMARY METRIC CARDS ROW */}
        <section className="metrics-cards-grid">
          {/* Card 1: Project Progress */}
          <div className="metric-card">
            <h3 className="metric-card-title">Project Progress</h3>
            <div className="metric-card-content progress-card-content">
              {/* Radial donut chart with 88% */}
              <div className="donut-chart-container">
                <svg width="96" height="96" viewBox="0 0 100 100" className="donut-svg">
                  {/* Background track circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#eef4e6"
                    strokeWidth="8"
                  />
                  {/* Progress circle 88% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#76cf00"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - 0.88)}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="donut-inner-text">
                  <span className="donut-number">88%</span>
                </div>
              </div>
              <div className="progress-delta-badge">
                <span className="delta-percent">12%+</span>
                <span className="delta-label">from previous week</span>
              </div>
            </div>
          </div>

          {/* Card 2: Leave Requests */}
          <div className="metric-card">
            <h3 className="metric-card-title">Leave Requests</h3>
            <div className="metric-card-content">
              <div className="stat-circle-row">
                <div className="stat-icon-circle bg-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3">
                    <circle cx="8" cy="8" r="3.5" />
                    <circle cx="16" cy="11" r="3" />
                    <path d="M2.5 19c.8-3.2 3.8-4.5 5.5-4.5s4.7 1.3 5.5 4.5" />
                    <path d="M14 15.5c1.2-.6 2.6-.7 3.8 0 1.2.7 2 2.1 2.2 3.5" />
                  </svg>
                </div>
                <div className="stat-count-meta">
                  <span className="stat-big-number">6</span>
                  <span className="stat-sub-label">Pending</span>
                </div>
              </div>
            </div>
            <button type="button" className="metric-link-btn" onClick={() => setActiveTab("Leave Requests")}>
              View all requests <span className="arrow-char">→</span>
            </button>
          </div>

          {/* Card 3: Announcements */}
          <div className="metric-card">
            <h3 className="metric-card-title">Announcements</h3>
            <div className="metric-card-content">
              <div className="stat-circle-row">
                <div className="stat-icon-circle bg-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.3">
                    <path d="M11 5 6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                </div>
                <div className="stat-count-meta">
                  <span className="stat-big-number">3</span>
                  <span className="stat-sub-label">Total</span>
                </div>
              </div>
            </div>
            <button type="button" className="metric-link-btn" onClick={() => setActiveTab("Announcements")}>
              View announcements <span className="arrow-char">→</span>
            </button>
          </div>

          {/* Card 4: Tasks */}
          <div className="metric-card">
            <h3 className="metric-card-title">Tasks</h3>
            <div className="metric-card-content">
              <div className="stat-circle-row">
                <div className="stat-icon-circle bg-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 4 4L19 6" />
                    <line x1="14" y1="12" x2="19" y2="12" />
                    <line x1="12" y1="17" x2="19" y2="17" />
                  </svg>
                </div>
                <div className="stat-count-meta">
                  <span className="stat-big-number">5</span>
                  <span className="stat-sub-label">Assigned</span>
                </div>
              </div>
            </div>
            <button type="button" className="metric-link-btn" onClick={() => setActiveTab("Tasks")}>
              View all assigned tasks <span className="arrow-char">→</span>
            </button>
          </div>
        </section>

        {/* BOTTOM SECTION: 2 LARGE CARDS (Notifications & Attendance) */}
        <section className="dashboard-detail-grid">
          {/* LEFT LARGE CARD: Notifications */}
          <div className="detail-panel-card">
            <div className="panel-card-header">
              <h2 className="panel-title">Notifications</h2>
              <button
                type="button"
                className="panel-view-all"
                onClick={() => setActiveTab("Announcements")}
              >
                View All →
              </button>
            </div>

            <div className="panel-items-list">
              {notificationsList.map((item, idx) => (
                <div key={idx} className="notification-row-item">
                  <div
                    className="notif-circle-icon"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {item.icon}
                  </div>
                  <div className="notif-text-content">
                    <h4 className="notif-title">{item.title}</h4>
                    <p className="notif-subtitle">{item.subtitle}</p>
                  </div>
                  <div className="notif-tag-wrap">
                    <span
                      className="notif-pill-badge"
                      style={{
                        backgroundColor: item.tagColor,
                        color: item.tagTextColor,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT LARGE CARD: Attendance */}
          <div className="detail-panel-card">
            <div className="panel-card-header">
              <h2 className="panel-title">Attendance</h2>
              <button
                type="button"
                className="panel-view-all"
                onClick={() => setActiveTab("Employees")}
              >
                View All →
              </button>
            </div>

            <div className="panel-items-list">
              {attendanceList.map((emp, idx) => (
                <div key={idx} className="attendance-row-item">
                  <div className="attend-user-info">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={emp.avatar}
                      alt={emp.name}
                      className="attend-avatar"
                    />
                    <div className="attend-name-status">
                      <span className="attend-name">{emp.name}</span>
                      <span className="attend-status-indicator">
                        <span className="green-dot" />
                        {emp.status}
                      </span>
                    </div>
                  </div>

                  {/* 5 Attendance boxes */}
                  <div className="attend-indicators-row">
                    {emp.records.map((color, cIdx) => (
                      <div
                        key={cIdx}
                        className="attend-status-box"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
