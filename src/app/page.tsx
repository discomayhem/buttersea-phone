"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Zap, 
  Camera, 
  Cpu, 
  BatteryCharging, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  Flame, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Play, 
  ArrowRight,
  Sliders,
  Eye,
  Layers,
  Award,
  Globe,
  Star,
  ShoppingBag
} from "lucide-react";

type ColorVariant = {
  id: string;
  name: string;
  colorHex: string;
  image: string;
  tagline: string;
};

const colors: ColorVariant[] = [
  {
    id: "neon",
    name: "Cosmic Cyber Violet",
    colorHex: "#8b5cf6",
    image: "/images/neon-flagship.jpg",
    tagline: "Iridescent aerospace glass shifting under neon light"
  },
  {
    id: "titanium",
    name: "Natural Milled Titanium",
    colorHex: "#d4d1cb",
    image: "/images/hero-phone.jpg",
    tagline: "Grade 5 raw titanium chassis with brushed champagne accents"
  },
  {
    id: "ceramic",
    name: "Dune Sand Ceramic",
    colorHex: "#d9d0c1",
    image: "/images/display-front.jpg",
    tagline: "Micro-etched matte ceramic with anti-glare paper finish"
  },
  {
    id: "basalt",
    name: "Basalt Obsidian",
    colorHex: "#1f2430",
    image: "/images/crown-macro.jpg",
    tagline: "Deep satin anodized slate with precision knurled crown"
  }
];

export default function LandingPage() {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(colors[0]);
  const [zoomLevel, setZoomLevel] = useState<"0.5x" | "1x" | "3x" | "10x">("1x");
  const [nightMode, setNightMode] = useState<boolean>(false);
  const [chargeMinutes, setChargeMinutes] = useState<number>(10);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [gameTest, setGameTest] = useState<"genshin" | "cyber" | "racing">("genshin");

  // Configurator state
  const [storage, setStorage] = useState<"256GB" | "512GB" | "1TB">("512GB");
  const [tradeIn, setTradeIn] = useState<boolean>(true);
  const [carePlus, setCarePlus] = useState<boolean>(false);
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  // Zoom specs
  const zoomSpecs = {
    "0.5x": { lens: "13mm f/2.2 Ultra-Wide", fov: "120° Field of View", scale: 1.0 },
    "1x": { lens: "24mm f/1.4 200MP Main OIS", fov: "84° Wide Angle", scale: 1.2 },
    "3x": { lens: "70mm f/2.4 Optical Portrait", fov: "34° Portrait Telephoto", scale: 1.5 },
    "10x": { lens: "240mm f/4.0 Periscope Optical", fov: "10° Super Telephoto", scale: 2.1 }
  };

  // Battery charge math: 0 mins = 0%, 18 mins = 100%
  const batteryPct = Math.min(100, Math.round((chargeMinutes / 18) * 100));

  // Pricing math
  const getBasePrice = () => {
    let base = 899;
    if (storage === "512GB") base += 100;
    if (storage === "1TB") base += 250;
    if (carePlus) base += 129;
    if (tradeIn) base -= 200;
    return Math.max(0, base);
  };

  const currentPrice = getBasePrice();
  const monthlyPrice = (currentPrice / 24).toFixed(2);

  const faqs = [
    {
      q: "What makes the Buttersea Ultra 5G camera system unique?",
      a: "The camera is engineered around a massive 1/1.12-inch 200MP sensor with a physical optical iris, custom quad-prism periscope zoom, and real-time neural ISP that captures 16-bit ProRAW with zero shutter lag."
    },
    {
      q: "How fast is the 120W HyperCharge technology?",
      a: "Our dual-cell solid-state architecture charges the 5,400mAh battery from 0% to 50% in just 7 minutes, and reaches a full 100% charge in 18 minutes with active cryogenic thermal management."
    },
    {
      q: "Is Buttersea Ultra compatible with all 5G networks globally?",
      a: "Yes. It supports Sub-6GHz and mmWave across 38 global 5G bands, dual physical SIMs, dynamic eSIM switching, and Two-Way Emergency Satellite SOS communication."
    },
    {
      q: "What is included in the ButterseaCare+ warranty?",
      a: "ButterseaCare+ provides 2 years of unlimited accidental damage protection, express global replacement, 24/7 priority technician support, and free battery replacements if capacity drops below 85%."
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo-group">
            <div className="logo-icon">
              <Zap size={22} />
            </div>
            <span className="logo-text">Buttersea™</span>
            <span className="logo-tag">ULTRA 5G</span>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#showcase" className="nav-link">Overview</a></li>
              <li><a href="#camera" className="nav-link">Camera Studio</a></li>
              <li><a href="#performance" className="nav-link">Performance</a></li>
              <li><a href="#battery" className="nav-link">HyperCharge</a></li>
              <li><a href="#compare" className="nav-link">Compare</a></li>
              <li><a href="#pricing" className="nav-link">Pre-Order</a></li>
            </ul>
          </nav>

          <div className="nav-cta">
            <a href="#pricing" className="btn-glow">
              <ShoppingBag size={16} /> Pre-Order Now
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="showcase">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="hero-pill-badge">
                <Sparkles size={16} />
                <span>NEXT-GEN FLAGSHIP • QUANTUM SNAP X 3NM ARCHITECTURE</span>
              </div>

              <h1 className="hero-main-title">
                Beyond Horizon. <br />
                <span className="gradient-text">The Ultimate Next-Gen Smartphone.</span>
              </h1>

              <p className="hero-lead-text" style={{ margin: "0 auto 2.5rem" }}>
                Experience groundbreaking 200MP Quad-Optics, 165Hz Fluid ProMotion AMOLED, and 120W HyperCharge enclosed in aerospace-grade grade 5 titanium.
              </p>

              <div className="hero-cta-row" style={{ justifyContent: "center" }}>
                <a href="#pricing" className="btn-glow" style={{ fontSize: "1.05rem", padding: "0.85rem 2.2rem" }}>
                  Pre-Order From ${currentPrice} <ArrowRight size={18} />
                </a>
                <button 
                  onClick={() => setVideoModalOpen(true)}
                  className="btn-glass"
                  style={{ fontSize: "1.05rem", padding: "0.85rem 1.75rem" }}
                >
                  <Play size={18} fill="#fff" /> Watch Keynote Film
                </button>
              </div>
            </div>

            {/* 3D Showcase Box with Live Color Switcher */}
            <div className="hero-showcase-box">
              <div className="showcase-grid">
                <div className="showcase-media-container">
                  <Image
                    src={selectedColor.image}
                    alt={selectedColor.name}
                    fill
                    priority
                    sizes="(max-width: 960px) 100vw, 650px"
                    className="showcase-img"
                  />
                  <div className="floating-badge floating-badge-top">
                    <Camera size={16} color="#00f2fe" /> 200MP OIS Quad Camera
                  </div>
                  <div className="floating-badge floating-badge-bottom">
                    <Zap size={16} color="#a855f7" /> 120W HyperCharge (18 min)
                  </div>
                </div>

                <div className="color-selector-panel">
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--neon-cyan)", fontWeight: 700, letterSpacing: "0.08em" }}>
                      CHOOSE YOUR FINISH
                    </span>
                    <h2 style={{ fontSize: "1.8rem", marginTop: "0.25rem", marginBottom: "0.5rem" }}>
                      {selectedColor.name}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                      {selectedColor.tagline}
                    </p>
                  </div>

                  <div className="color-palette-row">
                    {colors.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedColor(c)}
                        className={`color-btn ${selectedColor.id === c.id ? "active" : ""}`}
                        style={{ backgroundColor: c.colorHex }}
                        title={c.name}
                      />
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.5rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem" }}>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>DISPLAY</span>
                      <span style={{ fontWeight: 700, fontSize: "1rem" }}>6.82" 165Hz AMOLED</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>PROCESSOR</span>
                      <span style={{ fontWeight: 700, fontSize: "1rem" }}>Quantum Snap X (3nm)</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>BATTERY</span>
                      <span style={{ fontWeight: 700, fontSize: "1rem" }}>5,400 mAh Solid-State</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>DURABILITY</span>
                      <span style={{ fontWeight: 700, fontSize: "1rem" }}>IP68 Armor Shield</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stats Strip */}
            <div className="stats-banner">
              <div className="stat-box">
                <span className="stat-number gradient-cyan">200 MP</span>
                <span className="stat-label">Ultra-Resolution Sensor</span>
              </div>
              <div className="stat-box">
                <span className="stat-number gradient-purple">165 Hz</span>
                <span className="stat-label">Dynamic LTPO ProMotion</span>
              </div>
              <div className="stat-box">
                <span className="stat-number gradient-text">18 MIN</span>
                <span className="stat-label">120W HyperCharge Full</span>
              </div>
              <div className="stat-box">
                <span className="stat-number" style={{ color: "var(--neon-emerald)" }}>5,400 mAh</span>
                <span className="stat-label">Up to 48hr Battery Life</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Camera Zoom & Night Sight Studio */}
        <section className="container" id="camera" style={{ marginBottom: "5rem" }}>
          <div className="section-title-wrap">
            <span className="section-tag">PRO-GRADE OPTICS</span>
            <h2 className="section-heading">
              Studio Cinema in <span className="gradient-text">Your Pocket</span>
            </h2>
            <p className="section-desc">
              Four dedicated optical focal lengths engineered with Zeiss sapphire glass and an active quad-prism periscope.
            </p>
          </div>

          <div className="interactive-studio">
            <div className="camera-sim-grid">
              <div className="camera-preview-viewport">
                <Image
                  src={nightMode ? "/images/neon-flagship.jpg" : "/images/hero-phone.jpg"}
                  alt="Camera Viewfinder Preview"
                  fill
                  style={{
                    objectFit: "cover",
                    transform: `scale(${zoomSpecs[zoomLevel].scale})`,
                    filter: nightMode ? "brightness(1.25) contrast(1.15)" : "none",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease"
                  }}
                />
                
                <div className="camera-hud-overlay">
                  <div className="hud-top">
                    <span>LIVE VIEW • {zoomSpecs[zoomLevel].lens}</span>
                    <span>{nightMode ? "🌙 NIGHT SIGHT ON" : "☀️ HDR AUTO"}</span>
                  </div>
                  <div className="hud-crosshair" />
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#fff" }}>
                    <span>FOV: {zoomSpecs[zoomLevel].fov}</span>
                    <span>16-BIT RAW • 8K 60FPS</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>Interactive Focal Selector</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Switch between physical optical lenses to preview real-time perspective and framing adjustments:
                </p>

                <div className="zoom-lens-selector">
                  {(["0.5x", "1x", "3x", "10x"] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setZoomLevel(lvl)}
                      className={`zoom-btn ${zoomLevel === lvl ? "active" : ""}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>

                <div style={{ background: "rgba(0, 0, 0, 0.4)", borderRadius: "var(--radius-md)", padding: "1.25rem", border: "1px solid var(--border-subtle)", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>ACTIVE OPTIC:</span>
                    <span style={{ color: "var(--neon-cyan)", fontWeight: 700, fontSize: "0.9rem" }}>{zoomSpecs[zoomLevel].lens}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>SENSOR COVERAGE:</span>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>{zoomSpecs[zoomLevel].fov}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", background: "rgba(255, 255, 255, 0.05)", borderRadius: "var(--radius-md)" }}>
                  <div>
                    <span style={{ fontWeight: 700, display: "block" }}>Night Sight AI Engine</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Multi-frame photon accumulation</span>
                  </div>
                  <button
                    onClick={() => setNightMode(!nightMode)}
                    className="btn-glass"
                    style={{
                      padding: "0.4rem 1rem",
                      fontSize: "0.85rem",
                      borderColor: nightMode ? "var(--neon-cyan)" : "var(--border-subtle)",
                      background: nightMode ? "rgba(0, 242, 254, 0.2)" : "transparent"
                    }}
                  >
                    {nightMode ? "Enabled" : "Disabled"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 120W HyperCharge & Solid-State Battery Section */}
        <section className="container" id="battery" style={{ marginBottom: "5rem" }}>
          <div className="section-title-wrap">
            <span className="section-tag">ENDLESS ENERGY</span>
            <h2 className="section-heading">
              120W HyperCharge. <span className="gradient-cyan">18 Minutes to 100%.</span>
            </h2>
            <p className="section-desc">
              Slide to test real-world charge curve with active dual-vapor cryogenic cooling.
            </p>
          </div>

          <div className="charge-sim-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>CHARGE DURATION</span>
                <h3 style={{ fontSize: "2rem", color: "var(--neon-cyan)" }}>{chargeMinutes} Minutes</h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>BATTERY CAPACITY</span>
                <h3 style={{ fontSize: "2rem", color: "#fff" }}>{batteryPct}% Charged</h3>
              </div>
            </div>

            <div className="battery-meter-bar">
              <div className="battery-meter-fill" style={{ width: `${batteryPct}%` }} />
            </div>

            <input
              type="range"
              min="0"
              max="18"
              value={chargeMinutes}
              onChange={(e) => setChargeMinutes(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--neon-cyan)", cursor: "pointer" }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1.5rem", textAlign: "center" }}>
              <div style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.03)", borderRadius: "var(--radius-sm)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>ESTIMATED USAGE</span>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>
                  {Math.round((batteryPct / 100) * 48)} Hours
                </span>
              </div>
              <div style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.03)", borderRadius: "var(--radius-sm)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>PEAK WATTAGE</span>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--neon-cyan)" }}>
                  {chargeMinutes < 12 ? "120W Fast Stream" : "45W Smart Trickle"}
                </span>
              </div>
              <div style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.03)", borderRadius: "var(--radius-sm)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>CELL TEMPERATURE</span>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--neon-emerald)" }}>
                  {28 + Math.round((chargeMinutes / 18) * 6)}°C (Cryo-Cool)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quantum-8 Performance & Gaming Beast */}
        <section className="container" id="performance" style={{ marginBottom: "5rem" }}>
          <div className="section-title-wrap">
            <span className="section-tag">UNLEASHED PERFORMANCE</span>
            <h2 className="section-heading">
              Snapdragon Quantum-8. <span className="gradient-purple">3nm Powerhouse.</span>
            </h2>
            <p className="section-desc">
              Hardware-accelerated real-time ray tracing and an octa-core CPU clocked at 4.2GHz for console-grade gaming.
            </p>
          </div>

          <div className="interactive-studio">
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", overflowX: "auto" }}>
              <button 
                className={`zoom-btn ${gameTest === "genshin" ? "active" : ""}`}
                onClick={() => setGameTest("genshin")}
              >
                🎮 Open-World RPG (Max 4K)
              </button>
              <button 
                className={`zoom-btn ${gameTest === "cyber" ? "active" : ""}`}
                onClick={() => setGameTest("cyber")}
              >
                🏎️ Ray-Tracing Racer 165Hz
              </button>
              <button 
                className={`zoom-btn ${gameTest === "racing" ? "active" : ""}`}
                onClick={() => setGameTest("racing")}
              >
                🧠 8K 60FPS AI Video Render
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              <div style={{ padding: "1.5rem", background: "rgba(0,0,0,0.4)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>FPS STABILITY</span>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--neon-emerald)" }}>
                  {gameTest === "genshin" ? "120 FPS" : gameTest === "cyber" ? "165 FPS" : "60 FPS"}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block" }}>Zero frame drops</span>
              </div>

              <div style={{ padding: "1.5rem", background: "rgba(0,0,0,0.4)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>CPU LOAD</span>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--neon-cyan)" }}>
                  {gameTest === "genshin" ? "38%" : gameTest === "cyber" ? "52%" : "74%"}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block" }}>High thermal headroom</span>
              </div>

              <div style={{ padding: "1.5rem", background: "rgba(0,0,0,0.4)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>GPU NPU AI</span>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--neon-purple)" }}>
                  75 TOPS
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block" }}>Neural super-sampling</span>
              </div>

              <div style={{ padding: "1.5rem", background: "rgba(0,0,0,0.4)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>EFFICIENCY GAIN</span>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--neon-amber)" }}>
                  +42%
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", display: "block" }}>Over previous gen</span>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Features 6-Card Grid */}
        <section className="container">
          <div className="section-title-wrap">
            <span className="section-tag">NEXT-LEVEL ENGINEERING</span>
            <h2 className="section-heading">Built Without Compromise</h2>
            <p className="section-desc">Every subsystem has been pushed beyond industry benchmarks.</p>
          </div>

          <div className="cards-grid">
            <div className="feature-glass-card">
              <div className="feature-icon-box icon-cyan">
                <Radio />
              </div>
              <h3 className="card-h3">Global 5G & Satellite SOS</h3>
              <p className="card-p">
                Connect anywhere on Earth with 38 multi-band 5G antennas and two-way orbital emergency messaging.
              </p>
            </div>

            <div className="feature-glass-card">
              <div className="feature-icon-box icon-purple">
                <ShieldCheck />
              </div>
              <h3 className="card-h3">Titanium Armor & IP68</h3>
              <p className="card-p">
                Grade 5 aerospace titanium monocoque with dual-sided ceramic shield glass waterproof up to 6 meters.
              </p>
            </div>

            <div className="feature-glass-card">
              <div className="feature-icon-box icon-emerald">
                <Flame />
              </div>
              <h3 className="card-h3">CryoVapor Cooling Matrix</h3>
              <p className="card-p">
                Dual 6,500mm² graphene liquid vapor chambers keep peak clock speeds sustainable under extreme heavy loads.
              </p>
            </div>

            <div className="feature-glass-card">
              <div className="feature-icon-box icon-pink">
                <Sliders />
              </div>
              <h3 className="card-h3">Tactile Knurled Crown</h3>
              <p className="card-p">
                Physical rotary encoder dial allows micro-stepping manual camera exposure, aperture, ISO, and haptics.
              </p>
            </div>

            <div className="feature-glass-card">
              <div className="feature-icon-box icon-amber">
                <Eye />
              </div>
              <h3 className="card-h3">3,200 Nit Peak AMOLED</h3>
              <p className="card-p">
                Ultra-bright HDR10+ and Dolby Vision support with 2160Hz PWM eye-protection dimming in dark environments.
              </p>
            </div>

            <div className="feature-glass-card">
              <div className="feature-icon-box icon-blue">
                <Cpu />
              </div>
              <h3 className="card-h3">Buttersea Neural OS 5</h3>
              <p className="card-p">
                On-device generative LLM intelligence that transcribes calls, isolates audio studio noise, and automates workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Flagship Comparison Table */}
        <section className="container" id="compare" style={{ marginBottom: "5rem" }}>
          <div className="section-title-wrap">
            <span className="section-tag">THE BENCHMARK</span>
            <h2 className="section-heading">How Buttersea Ultra Compares</h2>
            <p className="section-desc">See how the spec sheet matches up against conventional flagship devices.</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature Specification</th>
                  <th className="highlight-col">Buttersea Ultra 5G</th>
                  <th>Standard Pro Phone</th>
                  <th>Generic Flagship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Main Camera Resolution</td>
                  <td className="highlight-col">200MP OIS (1/1.12" Sensor)</td>
                  <td>48MP (1/1.3" Sensor)</td>
                  <td>50MP (1/1.4" Sensor)</td>
                </tr>
                <tr>
                  <td>Display Refresh Rate</td>
                  <td className="highlight-col">165Hz Dynamic LTPO 4.0</td>
                  <td>120Hz ProMotion</td>
                  <td>120Hz Standard</td>
                </tr>
                <tr>
                  <td>Charging Speed</td>
                  <td className="highlight-col">120W HyperCharge (18 min)</td>
                  <td>27W (75 min)</td>
                  <td>45W (58 min)</td>
                </tr>
                <tr>
                  <td>Chassis Material</td>
                  <td className="highlight-col">Grade 5 Milled Titanium</td>
                  <td>Aluminum / Titanium Skin</td>
                  <td>Aluminum Alloy</td>
                </tr>
                <tr>
                  <td>Physical Hardware Controls</td>
                  <td className="highlight-col">Rotary Haptic Crown Dial</td>
                  <td>Solid Button</td>
                  <td>Standard Volume Keys</td>
                </tr>
                <tr>
                  <td>Battery Capacity</td>
                  <td className="highlight-col">5,400 mAh Solid-State</td>
                  <td>4,440 mAh Li-Ion</td>
                  <td>5,000 mAh Li-Ion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Pre-Order Configurator */}
        <section className="container pricing-section" id="pricing">
          <div className="configurator-card">
            <div className="config-options-group">
              <span className="section-tag">LIMITED LAUNCH OFFER</span>
              <h2 style={{ fontSize: "2.5rem", lineHeight: 1.1 }}>
                Configure Your <br />
                <span className="gradient-text">Buttersea Ultra 5G</span>
              </h2>

              {/* Storage options */}
              <div>
                <label style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", display: "block", marginBottom: "0.75rem" }}>
                  Select Storage Capacity
                </label>
                <div className="storage-grid">
                  {(["256GB", "512GB", "1TB"] as const).map((cap) => (
                    <button
                      key={cap}
                      onClick={() => setStorage(cap)}
                      className={`storage-btn ${storage === cap ? "active" : ""}`}
                    >
                      <span>{cap}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                        {cap === "256GB" ? "Included" : cap === "512GB" ? "+$100" : "+$250"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trade-in toggle */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", background: "rgba(0,0,0,0.3)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div>
                  <span style={{ fontWeight: 700, display: "block" }}>Trade-In Old Smartphone</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--neon-emerald)" }}>Instant $200 trade-in credit applied</span>
                </div>
                <button
                  onClick={() => setTradeIn(!tradeIn)}
                  className="btn-glass"
                  style={{ padding: "0.4rem 1rem", fontSize: "0.85rem", borderColor: tradeIn ? "var(--neon-emerald)" : "var(--border-subtle)" }}
                >
                  {tradeIn ? "Credit Applied" : "No Trade-In"}
                </button>
              </div>

              {/* ButterseaCare+ */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", background: "rgba(0,0,0,0.3)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)" }}>
                <div>
                  <span style={{ fontWeight: 700, display: "block" }}>ButterseaCare+ (2 Years)</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Unlimited accidental damage & express replacement (+$129)</span>
                </div>
                <button
                  onClick={() => setCarePlus(!carePlus)}
                  className="btn-glass"
                  style={{ padding: "0.4rem 1rem", fontSize: "0.85rem", borderColor: carePlus ? "var(--neon-cyan)" : "var(--border-subtle)" }}
                >
                  {carePlus ? "Added" : "Add"}
                </button>
              </div>
            </div>

            {/* Price calculation and checkout card */}
            <div style={{ background: "rgba(5, 8, 20, 0.8)", borderRadius: "var(--radius-lg)", padding: "2.5rem", border: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {orderComplete ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--neon-emerald)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <Check size={36} />
                  </div>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>Pre-Order Reserved!</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                    Order #BU-92849 has been confirmed. Free express insured shipping begins next week.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      <button
                        onClick={() => setIsMonthly(false)}
                        className={`zoom-btn ${!isMonthly ? "active" : ""}`}
                        style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                      >
                        Full Payment
                      </button>
                      <button
                        onClick={() => setIsMonthly(true)}
                        className={`zoom-btn ${isMonthly ? "active" : ""}`}
                        style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                      >
                        24-Mo Financing (0% APR)
                      </button>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>YOUR TOTAL</span>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                        <span style={{ fontSize: "3rem", fontWeight: 900, fontFamily: "var(--font-heading)", color: "var(--neon-cyan)" }}>
                          ${isMonthly ? monthlyPrice : currentPrice}
                        </span>
                        {isMonthly && <span style={{ color: "var(--text-secondary)" }}>/month</span>}
                      </div>
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-secondary)", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem" }}>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Check size={16} color="#00f2fe" /> Model: Buttersea Ultra 5G
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Check size={16} color="#00f2fe" /> Finish: {selectedColor.name}
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Check size={16} color="#00f2fe" /> Capacity: {storage}
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Check size={16} color="#00f2fe" /> Free 120W Gallium Nitride Charger Included
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setOrderComplete(true)}
                    className="btn-glow"
                    style={{ width: "100%", marginTop: "2rem", padding: "1rem", fontSize: "1.1rem" }}
                  >
                    Lock In Pre-Order Now
                  </button>
                </>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="container">
          <div className="section-title-wrap">
            <span className="section-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-heading">Everything You Need to Know</h2>
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="faq-question"
                >
                  <span>{f.q}</span>
                  {activeFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeFaq === i && (
                  <div className="faq-answer">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Video Modal Demo */}
      {videoModalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-glow)", borderRadius: "var(--radius-xl)", padding: "2rem", maxWidth: "700px", width: "100%", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Buttersea Ultra 5G Keynote</h3>
            <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "1.5rem" }}>
              <Image
                src="/images/neon-flagship.jpg"
                alt="Keynote presentation"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)" }}>
                <span className="btn-glow" style={{ padding: "1rem 1.5rem" }}>▶ Video Stream Active</span>
              </div>
            </div>
            <button onClick={() => setVideoModalOpen(false)} className="btn-glass" style={{ width: "100%" }}>
              Close Keynote
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main-grid">
            <div>
              <div className="logo-group" style={{ marginBottom: "1rem" }}>
                <div className="logo-icon">
                  <Zap size={20} />
                </div>
                <span className="logo-text">Buttersea™</span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Engineering next-generation mobile hardware with uncompromised optics, speed, and titanium craftsmanship.
              </p>
            </div>

            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#showcase">Buttersea Ultra 5G</a></li>
                <li><a href="#camera">Quad-Optics Studio</a></li>
                <li><a href="#battery">120W HyperCharger</a></li>
                <li><a href="#pricing">ButterseaCare+</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Trade-In Program</a></li>
                <li><a href="#">Warranty & Repair</a></li>
                <li><a href="#">Global 5G Bands</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Buttersea</a></li>
                <li><a href="#">Keynote & Press</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-legal-bar">
            <span>© {new Date().getFullYear()} Buttersea Technologies Inc. All rights reserved.</span>
            <span>Privacy Policy • Terms of Service • Sales & Refunds • Legal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
