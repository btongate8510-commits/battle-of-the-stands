/* ==========================================
   BATTLE OF THE STANDS - HOMEPAGE STYLES
   ========================================== */

/* Hero Section Container */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 540px;
  background: url('../images/background/stadium-bg.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Floating Timer Badge - Top Center */
.top-floating-timer {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(2, 6, 23, 0.9);
  border: 2px solid #38bdf8;
  border-radius: 8px;
  padding: 6px 24px;
  font-family: monospace, sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 2px;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
  z-index: 15;
}

/* Mascot Positioning */
.mascot-left {
  position: absolute;
  left: 2%;
  bottom: -20px;
  height: 480px;
  z-index: 5;
  object-fit: contain;
}

.mascot-right {
  position: absolute;
  right: 2%;
  bottom: -20px;
  height: 480px;
  z-index: 5;
  object-fit: contain;
}

/* Center Logo Shield */
.hero-center-brand {
  text-align: center;
  z-index: 10;
  margin-top: 30px;
}

.main-hero-shield {
  max-width: 380px;
  height: auto;
  filter: drop-shadow(0 0 25px rgba(0, 0, 0, 0.8));
}

/* Bottom Center Tagline */
.hero-bottom-tagline {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-weight: 900;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
  z-index: 10;
  white-space: nowrap;
}

/* Lower 3-Column Interactive Card Grid */
.main-card-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr 1fr;
  gap: 20px;
  max-width: 1300px;
  margin: 30px auto;
  padding: 0 20px;
  position: relative;
  z-index: 20;
}

/* Base Grid Card Box Styling */
.grid-card {
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: 12px;
  padding: 20px;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

.card-title-header {
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  padding-bottom: 10px;
  margin-bottom: 15px;
  text-align: center;
}

.card-title-header h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #38bdf8;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Left Card: AP Top 25 Standings */
.ap-rank-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 15px 0;
}

.ap-rank-list li {
  display: flex;
  gap: 15px;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-weight: 700;
  font-size: 1rem;
}

.ap-rank-list .num {
  color: #38bdf8;
  width: 20px;
}

.card-footer-sub {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  text-align: right;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Center Card: Matchup Ring Dials */
.dial-matchup-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 25px 0;
}

.dial-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 0.9rem;
}

.blue-ring-dial {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
}

.gold-ring-dial {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #f59e0b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
}

.vs-text-badge {
  font-size: 1.8rem;
  font-weight: 900;
  color: #ffffff;
  font-style: italic;
}

.matchup-banner-footer {
  text-align: center;
}

.matchup-banner-footer p {
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.vote-matchup-blue-btn {
  width: 100%;
  padding: 12px;
  background: #0284c7;
  color: #ffffff;
  font-weight: 800;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.2s ease, transform 0.1s ease;
}

.vote-matchup-blue-btn:hover {
  background: #0369a1;
  transform: translateY(-1px);
}

/* Right Card: College Football Feature / Spotlight */
.field-diagram-box {
  background: #15803d;
  border: 2px solid #ffffff;
  height: 95px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin: 15px 0;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);
}

.spotlight-text-content {
  text-align: left;
}

.spotlight-text-content h4 {
  font-size: 0.85rem;
  color: #38bdf8;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 2px;
}

.spotlight-text-content h3 {
  font-size: 1.2rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 8px;
}

.spotlight-text-content p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}