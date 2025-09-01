/* =========================================================================
   style.css — Walz Shop (final)
   Theme: white background, purple text/accents
   Compatible with index.html + game.html + script.js provided earlier
   ========================================================================= */

/* =========================
   VARIABLES (THEME)
   ========================= */
:root{
  --primary: #6a0dad;         /* Accent purple */
  --primary-600: #5d38b6;
  --primary-100: #f3eaff;
  --text: #4b0082;            /* Main text purple */
  --muted: #7c68c4;           /* Muted / secondary text */
  --bg: #ffffff;              /* Page background */
  --card: #ffffff;            /* Card background */
  --border: #eeeaf6;          /* Subtle border */
  --success: #16a34a;
  --error: #ef4444;
  --shadow: 0 6px 20px rgba(99, 43, 169, 0.06);

  /* Badge colors */
  --badge-new: #1e88e5;
  --badge-hot: #e53935;
  --badge-sale: #fbc02d;
  --badge-member: #689f38;
  --badge-weekly: #00acc1;
  --badge-monthly: #43a047;
  --badge-levelup: #9c27b0;
  --badge-pass: #00796b;
  --badge-vip: #ffb300;
  --badge-welkin: #29b6f6;
}

/* =========================
   RESET / GLOBAL
   ========================= */
*{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
html,body{height:100%}
html{scroll-behavior:smooth}
body{
  margin:0;
  padding:0;
  font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.5;
  -webkit-tap-highlight-color: transparent;
}

/* accessibility focus outline */
:focus{outline:3px solid rgba(106,13,173,0.15);outline-offset:2px}

/* Utility */
.container{max-width:1140px;margin:0 auto;padding:20px}
.hidden{display:none !important}
.muted{color:var(--muted)}
.center{text-align:center}
.row{display:flex;gap:12px;align-items:center}

/* =========================
   HEADER / NAV
   ========================= */
.header{
  background:var(--bg);
  border-bottom:1px solid var(--border);
  position:sticky;
  top:0;
  z-index:1000;
}
.header .header-container{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:12px 20px;
}

/* Logo */
.logo{
  font-weight:700;
  font-size:1.15rem;
  color:var(--text);
  text-decoration:none;
  letter-spacing:0.4px;
}
.logo span{color:var(--primary)}

/* Nav */
.nav{display:flex;gap:14px;align-items:center}
.nav-item{
  color:var(--muted);
  font-weight:600;
  padding:6px 10px;
  border-radius:8px;
  transition:all .18s ease;
}
.nav-item:hover,
.nav-item.active{
  color:var(--primary);
  background:var(--primary-100);
}

/* mobile nav toggle */
.nav-toggle{
  display:none;
  border:0;
  background:transparent;
  color:var(--primary);
  font-size:1.2rem;
  cursor:pointer;
}
@media (max-width:820px){
  .nav{display:none}
  .nav.active{display:flex;flex-direction:column;position:absolute;left:0;right:0;top:56px;background:var(--bg);padding:12px;border-bottom:1px solid var(--border)}
  .nav-toggle{display:block}
}

/* =========================
   HERO (index)
   ========================= */
.hero{
  padding:36px 20px;
  text-align:center;
}
.hero h1{font-size:2rem;color:var(--primary);margin-bottom:6px}
.hero p{color:#444;margin-bottom:14px}

/* =========================
   SLIDER / PROMO
   ========================= */
.slider-container{border:1px solid var(--border);border-radius:12px;background:var(--card);overflow:hidden}
#promo-slider{
  display:flex;
  width:100%;
  transition:transform .45s ease;
  min-height:160px;
}
.slider__item{
  min-width:100%;
  height:220px;
  background-size:cover;
  background-position:center;
}
.slider__dots{display:flex;gap:8px;justify-content:center;padding:12px}
.slider__dot{
  width:9px;height:9px;border-radius:50%;background:#e8e7ee;border:1px solid var(--border);cursor:pointer;
}
.slider__dot.active{background:var(--primary)}

/* =========================
   GAMES GRID / OPTION CARD
   ========================= */
.grid-games,
.games-grid,
.options-grid{
  display:grid;
  gap:14px;
  grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
  margin-top:12px;
}
.game-card,
.option-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:12px;
  overflow:hidden;
  text-decoration:none;
  color:inherit;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:10px;
  transition:box-shadow .18s ease,transform .12s ease;
}
.game-card:hover,
.option-card:hover{
  transform:translateY(-6px);
  box-shadow:var(--shadow);
}

/* square game image used on index & game page */
.game-image-square,
.game-thumbnail,
.game-banner{
  width:100%;
  aspect-ratio:1/1;
  object-fit:cover;
  border-radius:10px;
  display:block;
}

/* text inside card */
.game-card p,
.option-card h3{
  margin-top:10px;
  font-weight:700;
  font-size:0.98rem;
  text-align:center;
  color:var(--text);
}

/* CTA in card */
.option-card .btn-secondary{margin-top:8px;display:inline-block}

/* =========================
   CARDS, PANELS & LAYOUT
   ========================= */
.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:12px;
  padding:14px;
  box-shadow:0 6px 18px rgba(25,8,43,0.02);
}

/* generic section title */
.section-title{font-size:1.1rem;font-weight:700;color:var(--primary);margin-bottom:8px}

/* =========================
   GUIDE / INFO BLOCKS
   ========================= */
.guide-section{background:var(--primary-100);border:1px solid var(--border);padding:16px;border-radius:12px}
.guide-list{padding-left:18px;margin-top:8px;color:#333}
.guide-list li{margin-bottom:6px}

/* =========================
   STEPS (GAME PAGE)
   ========================= */
.steps{display:flex;flex-direction:column;gap:14px}
.step{padding:12px}
.step__head{display:flex;align-items:center;gap:12px}
.step__num{
  min-width:36px;height:36px;border-radius:8px;background:var(--primary-100);color:var(--primary);font-weight:800;display:grid;place-items:center;
  font-size:0.95rem;
}
.step__title{font-weight:700}

/* =========================
   FORMS / INPUTS
   ========================= */
.input,
.form-input{
  width:100%;
  padding:10px 12px;
  border-radius:10px;
  border:1px solid var(--border);
  background:#fff;
  color:var(--text);
  font-size:0.98rem;
}
.input::placeholder,
.form-input::placeholder{color:#bfb5e6}
.input:focus,
.form-input:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 6px rgba(106,13,173,0.06)}

/* small helpers */
.form-group label{display:block;font-weight:600;margin-bottom:6px}
.error-text{color:var(--error);font-size:0.9rem;min-height:1.2em}

/* voucher row */
.voucher-row,
.voucher-box{display:flex;gap:8px;align-items:center}
.voucher-input{flex:1}

/* =========================
   ITEMS: products & payments
   ========================= */
.grid-items{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px}
.item,
.product-card,
.payment-card{
  border:1px solid var(--border);
  background:#fff;
  border-radius:12px;
  padding:10px;
  text-align:center;
  cursor:pointer;
  position:relative;
  transition:transform .14s ease,box-shadow .14s ease,border-color .14s ease;
}
.item:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.item .label{font-weight:700}
.item .price{margin-top:6px;color:var(--muted);font-size:0.92rem}
.item.selected{border-color:var(--primary);background:var(--primary-100);box-shadow:inset 0 0 0 2px rgba(106,13,173,0.03)}
.grid-payments .item{display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px}
.pay-logo{width:56px;height:56px;object-fit:contain}

/* small payment price label appended on payment-card dynamically */
.payment-price{font-weight:800;color:var(--text);margin-top:6px;}

/* badges (small ribbons) */
.product-badge{
  position:absolute;
  top:8px;
  right:8px;
  padding:6px 8px;
  border-radius:10px;
  color:#fff;
  font-weight:700;
  font-size:0.72rem;
  text-transform:capitalize;
  box-shadow:0 2px 8px rgba(0,0,0,0.06);
}
.badge-new{background:var(--badge-new)}
.badge-hot{background:var(--badge-hot)}
.badge-sale{background:var(--badge-sale)}
.badge-member{background:var(--badge-member)}
.badge-weekly{background:var(--badge-weekly)}
.badge-monthly{background:var(--badge-monthly)}
.badge-levelup{background:var(--badge-levelup)}
.badge-pass{background:var(--badge-pass)}
.badge-vip{background:var(--badge-vip)}
.badge-welkin{background:var(--badge-welkin)}

/* =========================
   SUMMARY / PRICE
   ========================= */
.summary-box{border:1px dashed var(--border);border-radius:10px;padding:12px;background:#fff}
.summary-box p{display:flex;justify-content:space-between;margin:6px 0}
.summary-placeholder{color:var(--muted);font-style:italic}

/* price row */
.price-row{display:flex;justify-content:space-between;align-items:center;padding-top:12px;border-top:1px solid var(--border);font-weight:800}
.price{color:var(--success);font-weight:900}

/* =========================
   BUTTONS (GLOBAL)
   ========================= */
.btn{
  display:inline-flex;align-items:center;gap:8px;justify-content:center;
  padding:10px 14px;border-radius:10px;border:0;font-weight:800;cursor:pointer;
  transition:transform .12s ease,background .12s ease,opacity .12s ease;
}
.btn:active{transform:translateY(1px)}
.btn[disabled]{opacity:.55;cursor:not-allowed;transform:none}

.btn-primary{
  background:var(--primary);color:#fff;border:1px solid var(--primary);
}
.btn-primary:hover{background:var(--primary-600)}

.btn-secondary{
  background:transparent;color:var(--primary);border:1px solid var(--primary);
}
.btn-ghost{background:#fff;color:var(--primary);border:1px solid var(--border)}
.btn-link{background:none;border:0;color:var(--primary);font-weight:700}

/* small utility buttons */
.copy-btn{padding:8px 10px;border-radius:8px;border:1px solid var(--primary);background:var(--primary);color:#fff;cursor:pointer}

/* =========================
   MODAL / OVERLAY
   ========================= */
/* overlay */
#modal-overlay{
  position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.35);z-index:999;
  -webkit-backdrop-filter: blur(2px);backdrop-filter: blur(2px);
}
#modal-overlay.active{display:flex}

/* modal baseline (modal elements may exist outside overlay) */
.modal{
  display:none;
  position:fixed;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  z-index:1000;
  width:95%;
  max-width:560px;
  border-radius:12px;
  box-shadow:0 20px 50px rgba(0,0,0,0.15);
}
.modal.active{display:block}

.modal .modal__head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--border)}
.modal .modal__title{font-weight:800;color:var(--primary)}
.modal .modal__body{padding:16px}
.modal .modal__foot{padding:12px 16px;border-top:1px solid var(--border);display:flex;gap:10px;justify-content:flex-end}

.modal .voucher-list{display:flex;flex-direction:column;gap:10px}
.modal .voucher-item{display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);padding:10px;border-radius:10px;background:#fff}

/* QRIS / copy wrap */
.copy-wrap{display:flex;flex-direction:column;align-items:center;gap:10px;padding:12px;border-radius:10px;border:1px dashed var(--border);background:#fff}
.qris{width:220px;height:auto;border-radius:10px;display:block}

/* =========================
   FLOATING WHATSAPP (both class variants supported)
   ========================= */
.wa-float,
.floating-wa{
  position:fixed;right:20px;bottom:20px;background:#25d366;color:#fff;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;font-size:1.4rem;box-shadow:0 8px 20px rgba(0,0,0,0.12);z-index:1200;text-decoration:none;
}
.wa-float:hover,.floating-wa:hover{transform:scale(1.06);transition:transform .12s ease}

/* =========================
   FOOTER
   ========================= */
.footer{border-top:1px solid var(--border);padding:18px 20px;text-align:center;color:var(--muted);margin-top:28px}
.footer p{margin:6px 0}

/* =========================
   RESPONSIVE ADJUSTMENTS
   ========================= */
@media (max-width:900px){
  .container{padding:16px}
  .game-image-square{width:100px;height:100px}
  .hero h1{font-size:1.6rem}
  .grid-games{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}
}
@media (max-width:700px){
  .header .header-container{padding:10px}
  .game-image-square{width:96px;height:96px}
  .grid-games{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}
  .form-grid{grid-template-columns:1fr}
  .steps{gap:12px}
  .step__head{gap:10px}
  .modal{max-width:92%}
}

/* =========================
   EXTRA UTILITIES
   ========================= */
.kv{display:flex;justify-content:space-between;gap:10px}
.small{font-size:0.85rem}
.badge-pill{display:inline-block;padding:4px 8px;border-radius:999px;background:var(--primary);color:#fff;font-weight:700}

/* =========================
   LEGACY / BACKWARDS compat (support variations used in multiple HTML snippets)
   ========================= */
/* Listen for both #promo-slider .slider__item and .slider-item */
.slider-item{min-width:100%;height:220px;background-size:cover;background-position:center}
.slider-dot{width:9px;height:9px;border-radius:50%;display:inline-block}
.game-banner{width:120px;height:120px;border-radius:12px;object-fit:cover;}

/* Finish */