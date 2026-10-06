"use client";

import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";

export default function LoginPage() {
  const [view, setView] = useState<"login" | "signup" | "confirmation">("login");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  // Sign up state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("Female");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="ems-auth-container">
      {/* LEFT PANEL */}
      <section className="ems-left-panel">
        {/* Brand Logo */}
        <div className="seabutter-brand">
          <svg
            className="seabutter-logo-svg"
            viewBox="0 0 54 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Seabutter Logo"
          >
            {/* Speed dashes on left */}
            <rect x="2" y="5.5" width="13" height="3.5" rx="1.75" fill="white" />
            <rect x="2" y="13.5" width="13" height="3.5" rx="1.75" fill="white" />
            {/* Oval loop on right */}
            <rect
              x="19"
              y="5.5"
              width="26"
              height="15.5"
              rx="7.75"
              stroke="white"
              strokeWidth="3.2"
              fill="none"
            />
          </svg>
          <span className="seabutter-brand-name">Seabutter™</span>
        </div>

        {/* Dynamic Left Content based on View */}
        {view === "login" && (
          <div>
            <h1 className="hero-headline">
              Join{"\n"}hundreds{"\n"}of users{"\n"}today
            </h1>
            <p className="hero-subtitle">
              Don’t have an account yet?{" "}
              <button
                type="button"
                onClick={() => setView("signup")}
                className="hero-subtitle-link"
              >
                Create One
              </button>
            </p>
          </div>
        )}

        {view === "signup" && (
          <div>
            <h1 className="hero-headline">
              Create your{"\n"}account
            </h1>
            <p className="hero-subtitle">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setView("login")}
                className="hero-subtitle-link"
              >
                Log-in now
              </button>
            </p>
          </div>
        )}

        {view === "confirmation" && (
          <div>
            <div className="confirmation-icon-wrap">
              <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Mail outline */}
                <rect x="4" y="6" width="76" height="54" rx="10" stroke="white" strokeWidth="6" />
                <path d="M8 12L42 38L76 12" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                {/* Checkmark */}
                <circle cx="70" cy="54" r="18" fill="white" />
                <path d="M62 54L68 60L79 48" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="hero-headline">
              Confirmation{"\n"}sent!
            </h1>
            <p className="hero-subtitle">
              Open your email to find your Employee ID.
            </p>
          </div>
        )}
      </section>

      {/* RIGHT PANEL */}
      <section className="ems-right-panel">
        {/* VIEW 1: EXACT LOGIN SCREEN (IMAGE 3) */}
        {view === "login" && (
          <div className="ems-form-box">
            {/* Avatar with soft floating drop shadow */}
            <div className="avatar-floating-container">
              <div className="avatar-disc">
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="7.5" r="4.2" fill="white" />
                  <path
                    d="M4.5 21C4.5 16.8 7.8 14 12 14C16.2 14 19.5 16.8 19.5 21"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="avatar-shadow" aria-hidden="true" />
            </div>

            {/* Login Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="ems-form-group">
                <label htmlFor="employeeId" className="ems-label">
                  Employee ID
                </label>
                <input
                  id="employeeId"
                  type="text"
                  className="ems-input"
                  placeholder="24-2545-483"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  autoComplete="username"
                />
              </div>

              <div className="ems-form-group">
                <label htmlFor="password" className="ems-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="ems-input"
                  placeholder="•••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>

              <button type="submit" className="btn-login-green">
                Log-in
              </button>

              <button
                type="button"
                className="forgot-password-link"
                onClick={() => alert("Password recovery instructions will be sent to your registered email.")}
              >
                Forgot Password
              </button>
            </form>
          </div>
        )}

        {/* VIEW 2: SIGN UP SCREEN (IMAGE 2) */}
        {view === "signup" && (
          <div className="ems-form-box" style={{ maxWidth: "420px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div className="avatar-disc-small">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="7.5" r="4.2" fill="white" />
                  <path d="M4.5 21C4.5 16.8 7.8 14 12 14C16.2 14 19.5 16.8 19.5 21" fill="white" />
                </svg>
              </div>
            </div>
            <h2 className="ems-form-title">Sign Up</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setView("confirmation");
              }}
            >
              <div className="form-grid-2">
                <div className="ems-form-group">
                  <label className="ems-label">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="ems-input"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="ems-form-group">
                  <label className="ems-label">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="ems-input"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="ems-form-group">
                <label className="ems-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="ems-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-grid-2">
                <div className="ems-form-group">
                  <label className="ems-label">
                    Contact Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    className="ems-input"
                    placeholder="Enter your phone number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="ems-form-group">
                  <label className="ems-label">
                    Department <span className="required">*</span>
                  </label>
                  <div className="ems-select-wrap">
                    <select
                      className="ems-select"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      required
                    >
                      <option value="" disabled>Enter your department</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Operations">Operations</option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                    </select>
                    <ChevronDown size={16} className="ems-select-icon" />
                  </div>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="ems-form-group">
                  <label className="ems-label">
                    Date of Birth <span className="required">*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="date"
                      className="ems-input"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="ems-form-group">
                  <label className="ems-label">
                    Gender <span className="required">*</span>
                  </label>
                  <div className="ems-select-wrap">
                    <select
                      className="ems-select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <ChevronDown size={16} className="ems-select-icon" />
                  </div>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="ems-form-group">
                  <label className="ems-label">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="ems-input"
                    placeholder="Create a password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="ems-form-group">
                  <label className="ems-label">
                    Confirm Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="ems-input"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-login-green">
                Create Account
              </button>

              <p className="form-subtext">
                A confirmation will be sent to your email to activate your account.
              </p>
            </form>
          </div>
        )}

        {/* VIEW 3: CONFIRMATION SCREEN (IMAGE 1) */}
        {view === "confirmation" && (
          <div className="ems-form-box" style={{ maxWidth: "420px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div className="avatar-disc-small">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="7.5" r="4.2" fill="white" />
                  <path d="M4.5 21C4.5 16.8 7.8 14 12 14C16.2 14 19.5 16.8 19.5 21" fill="white" />
                </svg>
              </div>
            </div>
            <h2 className="ems-form-title">Sign Up</h2>

            <div className="form-grid-2">
              <div className="ems-form-group">
                <label className="ems-label">First Name</label>
                <input type="text" className="ems-input" value="Marie" disabled />
              </div>
              <div className="ems-form-group">
                <label className="ems-label">Last Name</label>
                <input type="text" className="ems-input" value="Curie" disabled />
              </div>
            </div>

            <div className="ems-form-group">
              <label className="ems-label">Email Address</label>
              <input type="text" className="ems-input" value="iwonanobelprize@gmail.com" disabled />
            </div>

            <div className="form-grid-2">
              <div className="ems-form-group">
                <label className="ems-label">Contact Number</label>
                <input type="text" className="ems-input" value="+63 969 420 6767" disabled />
              </div>
              <div className="ems-form-group">
                <label className="ems-label">Department</label>
                <input type="text" className="ems-input" value="Operations" disabled />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="ems-form-group">
                <label className="ems-label">Date of Birth</label>
                <input type="text" className="ems-input" value="07/11/1867" disabled />
              </div>
              <div className="ems-form-group">
                <label className="ems-label">Gender</label>
                <input type="text" className="ems-input" value="Female" disabled />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="ems-form-group">
                <label className="ems-label">Password</label>
                <input type="password" className="ems-input" value="•••••••••••" disabled />
              </div>
              <div className="ems-form-group">
                <label className="ems-label">Confirm Password</label>
                <input type="password" className="ems-input" value="•••••••••••" disabled />
              </div>
            </div>

            <button
              type="button"
              className="btn-login-green"
              onClick={() => setView("login")}
            >
              Back to Log-in
            </button>

            <p className="form-subtext">
              Didn’t work? Click to{" "}
              <button
                type="button"
                className="resend-link"
                onClick={() => alert("Confirmation link resent to your email.")}
              >
                Resend
              </button>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
