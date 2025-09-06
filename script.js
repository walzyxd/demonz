/* ---------- CONFIG ---------- */
const ADMIN_WA = "6282298902274"; // nomor admin (digunakan pada WA link)
const SLIDE_INTERVAL_MS = 4000;

/* ---------- VOUCHERS (support percent or fixed amount) ---------- */
const VOUCHERS = [
  { code: "WALZSHOP", percent: 5 },
  { code: "WALZPROMO", percent: 5 },
  { code: "DEAL50", percent: 10 },
  { code: "CASH10K", amount: 10000 } // contoh voucher nominal
];

/* ---------- GAMES (used for index & links) ---------- */
const GAMES = [
  { key: "free-fire", name: "Free Fire", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", bannerImg: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", hasServerId: false, guide: "Temukan User ID Anda di profil game.", url: "game.html?game=free-fire" },
  { key: "mobile-legends", name: "Mobile Legends", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", bannerImg: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", hasServerId: true, guide: "User ID & Server dapat ditemukan di profil.", url: "game.html?game=mobile-legends" },
  { key: "pubg-mobile", name: "PUBG Mobile", img: "https://i.supaimg.com/00a77c87-f6b5-4e54-b325-bd3ac3d3e441.jpg", bannerImg: "https://i.supaimg.com/00a77c87-f6b5-4e54-b325-bd3ac3d3e441.jpg", hasServerId: false, guide: "User ID di profil game.", url: "game.html?game=pubg-mobile" },
  { key: "genshin-impact", name: "Genshin Impact", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", bannerImg: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", hasServerId: false, guide: "User ID (9 digit) di pojok kanan bawah.", url: "game.html?game=genshin-impact" },
  { key: "valorant", name: "Valorant", img: "https://i.supaimg.com/8bb768c4-d3f6-40e9-a267-90b7c6c62c24.jpg", bannerImg: "https://i.supaimg.com/8bb768c4-d3f6-40e9-a267-90b7c6c62c24.jpg", hasServerId: false, guide: "Riot ID (Nama#1234) di profil.", url: "game.html?game=valorant" },
  { key: "call-of-duty", name: "Call of Duty Mobile", img: "https://i.supaimg.com/55dcf25d-935f-4091-b445-9a1686bd6575.jpg", bannerImg: "https://i.supaimg.com/55dcf25d-935f-4091-b445-9a1686bd6575.jpg", hasServerId: false, guide: "User ID di profil game.", url: "game.html?game=call-of-duty" },
  { key: "honor-of-kings", name: "Honor of Kings", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", bannerImg: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", hasServerId: false, guide: "User ID di bagian profil.", url: "game.html?game=honor-of-kings" },
  { key: "roblox", name: "Roblox", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", bannerImg: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", hasServerId: false, guide: "Top up via gift card.", url: "game.html?game=roblox" },
  { key: "clash-of-clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", bannerImg: "https://files.catbox.moe/6aia0n.jpg", hasServerId: false, guide: "Player Tag dimulai '#'.", url: "game.html?game=clash-of-clans" },
  { key: "eggy-party", name: "Eggy Party", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", bannerImg: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", hasServerId: false, guide: "User ID di profil game.", url: "game.html?game=eggy-party" },
  { key: "garena-delta-force", name: "Garena Delta Force", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", bannerImg: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", hasServerId: false, guide: "User ID di profil.", url: "game.html?game=garena-delta-force" },
  { key: "garena-undawn", name: "Garena Undawn", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", bannerImg: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", hasServerId: false, guide: "User ID di profil.", url: "game.html?game=garena-undawn" },
  { key: "blood-strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", bannerImg: "https://files.catbox.moe/3y066i.jpg", hasServerId: false, guide: "User ID di profil.", url: "game.html?game=blood-strike" }
  // kamu bisa tambahkan lagi di sini jika ingin
];

/* ---------- PRODUCTS (mapping per game key) ----------
   Saya gunakan data produk panjang (diamonds, membership, passes, dsb).
   Jika butuh tambahan game / SKU, tinggal tambahkan key & array.
--------------------------------------------- */
const PRODUCTS = {
  "free-fire": [
    { id: "ff-5", label: "5 Diamonds", price: 901 },
    { id: "ff-12", label: "12 Diamonds", price: 1802 },
    { id: "ff-50", label: "50 Diamonds", price: 7207 },
    { id: "ff-70", label: "70 Diamonds", price: 9009 },
    { id: "ff-140", label: "140 Diamonds", price: 18018 },
    { id: "ff-355", label: "355 Diamonds", price: 45045 },
    { id: "ff-720", label: "720 Diamonds", price: 90090 },
    { id: "ff-1450", label: "1450 Diamonds", price: 180180 },
    { id: "ff-2180", label: "2180 Diamonds", price: 270270 },
    { id: "ff-3640", label: "3640 Diamonds", price: 450450 },
    { id: "ff-mw", label: "Membership Mingguan", price: 30500, badges: ["member"] },
    { id: "ff-mb", label: "Membership Bulanan", price: 90000, badges: ["member"] },
    { id: "ff-lvl6", label: "Level Up Pass Lv.6", price: 5500, badges: ["levelup"] },
    { id: "ff-lvl10", label: "Level Up Pass Lv.10", price: 8800, badges: ["levelup"] },
    { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["pass"] }
  ],
  "mobile-legends": [
    { id: "ml-3", label: "3 Diamonds", price: 1171 },
    { id: "ml-5", label: "5 Diamonds", price: 1423 },
    { id: "ml-12", label: "12 Diamonds", price: 3323 },
    { id: "ml-19", label: "19 Diamonds", price: 5223 },
    { id: "ml-28", label: "28 Diamonds", price: 7600 },
    { id: "ml-44", label: "44 Diamonds", price: 11400 },
    { id: "ml-59", label: "59 Diamonds", price: 15200 },
    { id: "ml-85", label: "85 Diamonds", price: 21850 },
    { id: "ml-170", label: "170 Diamonds", price: 43700 },
    { id: "ml-240", label: "240 Diamonds", price: 61750 },
    { id: "ml-296", label: "296 Diamonds", price: 76000 },
    { id: "ml-408", label: "408 Diamonds", price: 104500 },
    { id: "ml-568", label: "568 Diamonds", price: 142500 },
    { id: "ml-875", label: "875 Diamonds", price: 218500 },
    { id: "ml-2010", label: "2010 Diamonds", price: 475000 },
    { id: "ml-wdp", label: "Weekly Diamond Pass", price: 28000, badges: ["weekly"] },
    { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["pass"] }
  ],
  "pubg-mobile": [
    { id: "pubg-30", label: "30 UC", price: 7000 },
    { id: "pubg-60", label: "60 UC", price: 14000 },
    { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
    { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
    { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
    { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 }
  ],
  "genshin-impact": [
    { id: "gi-60", label: "60 Genesis Crystals", price: 14865 },
    { id: "gi-330", label: "330 Genesis Crystals", price: 72973 },
    { id: "gi-1090", label: "1090 Genesis Crystals", price: 229730 },
    { id: "gi-2240", label: "2240 Genesis Crystals", price: 440541 },
    { id: "gi-3880", label: "3880 Genesis Crystals", price: 734234 }
  ],
  "valorant": [
    { id: "val-475", label: "475 Points", price: 54349 },
    { id: "val-1000", label: "1000 Points", price: 108799 },
    { id: "val-2050", label: "2050 Points", price: 217499 },
    { id: "val-3650", label: "3650 Points", price: 372199 }
  ],
  "call-of-duty": [
    { id: "codm-31", label: "31 CP", price: 4899 },
    { id: "codm-63", label: "63 CP", price: 9699 },
    { id: "codm-128", label: "128 CP", price: 19399 },
    { id: "codm-321", label: "321 CP", price: 48499 }
  ],
  "honor-of-kings": [
    { id: "hok-16", label: "16 Tokens", price: 3300 },
    { id: "hok-80", label: "80 Tokens", price: 16500 },
    { id: "hok-240", label: "240 Tokens", price: 51000 }
  ],
  "roblox": [
    { id: "rbx-50k", label: "Gift Card Rp50.000", price: 48440 },
    { id: "rbx-100k", label: "Gift Card Rp100.000", price: 96500 },
    { id: "rbx-200k", label: "Gift Card Rp200.000", price: 193000 }
  ],
  "clash-of-clans": [
    { id: "coc-500", label: "500 Gems", price: 75299 },
    { id: "coc-1200", label: "1200 Gems", price: 150499 }
  ],
  "eggy-party": [
    { id: "eggy-60", label: "60 + 3 Bonus", price: 13999 },
    { id: "eggy-120", label: "120 + 6 Bonus", price: 26999 },
    { id: "eggy-300", label: "300 + 24 Bonus", price: 68499 }
  ],
  "garena-delta-force": [
    { id: "delta-30", label: "30 + 2", price: 7499 },
    { id: "delta-60", label: "60 + 3", price: 14999 },
    { id: "delta-300", label: "300 + 36", price: 74999 }
  ],
  "garena-undawn": [
    { id: "undawn-rc80", label: "RC 80", price: 14599 },
    { id: "undawn-rc250", label: "RC 250", price: 43699 },
    { id: "undawn-rc920", label: "RC 920", price: 144599 }
  ],
  "blood-strike": [
    { id: "bs-100", label: "100 + 5 Gold", price: 11999 },
    { id: "bs-300", label: "300 + 20 Gold", price: 34999 }
  ]
  // Tambahkan game/produk lain di sini jika perlu
};

/* ---------- PAYMENTS (ikon optional) ---------- */
const PAYMENTS = [
  { id: "qris", label: "QRIS" },
  { id: "gopay", label: "GoPay" },
  { id: "shopeepay", label: "ShopeePay" },
  { id: "dana", label: "DANA" }
];

/* ---------- PROMOS (slider images) ---------- */
const PROMOS = [
  "https://i.ibb.co/2tqX1wC/promo1.jpg",
  "https://i.ibb.co/4sNsyFQ/promo2.jpg",
  "https://i.ibb.co/F77xBsz/promo3.jpg"
];

/* ---------- HELPERS ---------- */
function formatIDR(val) {
  if (typeof val !== "number") val = Number(val) || 0;
  return "Rp " + val.toLocaleString("id-ID");
}

function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

function shakeElement(el) {
  if (!el) return;
  el.style.animation = "shake 0.6s";
  setTimeout(() => { el.style.animation = ""; }, 650);
}

/* ---------- SLIDER ---------- */
let slideIndex = 0;
let slideTimer = null;
function initSlider() {
  const track = document.getElementById("promo-slider");
  const dots = document.getElementById("slider-dots");
  if (!track || !dots) return;

  // populate slides
  track.innerHTML = "";
  dots.innerHTML = "";
  PROMOS.forEach((url, idx) => {
    const item = document.createElement("div");
    item.className = "slider__item";
    item.innerHTML = `<img src="${url}" alt="Promo ${idx + 1}" />`;
    track.appendChild(item);

    const dot = document.createElement("button");
    dot.className = "slider__dot";
    if (idx === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      setSlide(idx);
      resetSlideTimer();
    });
    dots.appendChild(dot);
  });

  setSlide(0);
  resetSlideTimer();
}
function setSlide(idx) {
  const track = document.getElementById("promo-slider");
  const dots = document.querySelectorAll(".slider__dot");
  if (!track) return;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d,i) => d.classList.toggle("active", i === idx));
  slideIndex = idx;
}
function nextSlide() {
  const total = PROMOS.length;
  setSlide((slideIndex + 1) % total);
}
function resetSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, SLIDE_INTERVAL_MS);
}

/* ---------- INDEX: render games list ---------- */
function renderGamesGrid() {
  const grid = document.getElementById("games-grid");
  if (!grid) return;
  grid.innerHTML = "";
  GAMES.forEach(g => {
    const card = document.createElement("div");
    card.className = "game-card fade-in";
    card.innerHTML = `
      <a href="${g.url}" aria-label="Top up ${g.name}">
        <img src="${g.img}" alt="${g.name}">
        <h3>${g.name}</h3>
        <p>Top up cepat & aman</p>
      </a>
    `;
    grid.appendChild(card);
  });
}

/* ---------- GAME PAGE: render products & payments ---------- */
let selectedProduct = null;
let selectedPayment = null;

function renderGameDetail() {
  const gameKey = getQueryParam("game");
  if (!gameKey) return;
  const game = GAMES.find(g => g.key === gameKey);
  if (!game) return;

  // header/banner
  const banner = document.getElementById("game-banner");
  const nameH1 = document.querySelector(".game-name-h1");
  const descP = document.querySelector(".game-description");
  if (banner) banner.src = game.bannerImg || game.img || "";
  if (nameH1) nameH1.textContent = game.name;
  if (descP) descP.textContent = game.guide || "";

  // show/hide server input
  const serverInput = document.getElementById("server-id");
  if (serverInput) serverInput.style.display = game.hasServerId ? "block" : "none";

  // products
  const productGrid = document.getElementById("product-grid");
  if (productGrid) {
    productGrid.innerHTML = "";
    const items = PRODUCTS[gameKey] || [];
    if (!items.length) productGrid.innerHTML = `<p class="section-description">Produk belum tersedia untuk game ini.</p>`;
    items.forEach(p => {
      const el = document.createElement("div");
      el.className = "product-card";
      el.tabIndex = 0;
      el.dataset.id = p.id;
      el.dataset.price = p.price;
      el.innerHTML = `<h4>${p.label || p.name}</h4><p>${formatIDR(p.price)}</p>`;
      el.addEventListener("click", () => {
        document.querySelectorAll(".product-card").forEach(x => x.classList.remove("selected"));
        el.classList.add("selected");
        selectedProduct = { id: p.id, label: p.label || p.name, price: p.price };
        updateSummaryPreview();
      });
      el.addEventListener("keydown", e => { if (e.key === "Enter") el.click(); });
      productGrid.appendChild(el);
    });
  }

  // payments
  const paymentGrid = document.getElementById("payment-grid");
  if (paymentGrid) {
    paymentGrid.innerHTML = "";
    PAYMENTS.forEach(pm => {
      const el = document.createElement("div");
      el.className = "payment-card";
      el.tabIndex = 0;
      el.dataset.id = pm.id;
      el.innerHTML = `<p>${pm.label}</p>`;
      el.addEventListener("click", () => {
        document.querySelectorAll(".payment-card").forEach(x => x.classList.remove("selected"));
        el.classList.add("selected");
        selectedPayment = { id: pm.id, label: pm.label };
        updateSummaryPreview();
      });
      el.addEventListener("keydown", e => { if (e.key === "Enter") el.click(); });
      paymentGrid.appendChild(el);
    });
  }

  // checkout button
  const btn = document.getElementById("checkout-btn");
  if (btn) {
    btn.addEventListener("click", onCheckoutFromGame);
  }

  // voucher list button (in header)
  document.getElementById("voucher-list-btn")?.addEventListener("click", showVoucherListModal);
  document.getElementById("voucher-list-btn")?.addEventListener("keydown", e => { if(e.key === "Enter") showVoucherListModal(); });
}

/* update small preview in game page (if using summary preview) */
function updateSummaryPreview() {
  // optional small UI update, for now we just set checkout button state
  const btn = document.getElementById("checkout-btn");
  const userId = document.getElementById("user-id")?.value?.trim();
  if (btn) btn.disabled = !(selectedProduct && selectedPayment && userId);
}

/* ---------- CHECKOUT (on game page) ---------- */
function onCheckoutFromGame() {
  const userInput = document.getElementById("user-id");
  const userId = userInput?.value?.trim();
  const serverInput = document.getElementById("server-id");
  const serverId = serverInput?.value?.trim();

  if (!userId) {
    // focus + shake + modal error
    userInput?.focus();
    shakeElement(userInput);
    showErrorModal("User ID wajib diisi.");
    return;
  }
  if (!selectedProduct) {
    const prodFirst = document.querySelector(".product-card");
    prodFirst?.scrollIntoView({ behavior: "smooth", block: "center" });
    showErrorModal("Pilih nominal top up terlebih dahulu.");
    return;
  }
  if (!selectedPayment) {
    const payFirst = document.querySelector(".payment-card");
    payFirst?.scrollIntoView({ behavior: "smooth", block: "center" });
    showErrorModal("Pilih metode pembayaran terlebih dahulu.");
    return;
  }

  // assemble cart
  const gameKey = getQueryParam("game");
  const game = GAMES.find(g => g.key === gameKey) || {};
  const cart = {
    gameKey,
    gameName: game.name || "",
    userId,
    serverId,
    product: selectedProduct,
    payment: selectedPayment,
    subtotal: selectedProduct.price,
    voucher: null,
    total: selectedProduct.price
  };

  localStorage.setItem("walz_cart", JSON.stringify(cart));
  // redirect to cart page
  window.location.href = "cart.html";
}

/* ---------- CART PAGE ---------- */
function renderCartPage() {
  const cart = JSON.parse(localStorage.getItem("walz_cart") || "null");
  if (!cart) return;

  // fill account
  const userInput = document.getElementById("user-id");
  const serverInput = document.getElementById("server-id");
  if (userInput) { userInput.value = cart.userId || ""; userInput.readOnly = true; }
  if (serverInput) { serverInput.value = cart.serverId || ""; serverInput.readOnly = true; }

  // summary
  document.getElementById("summary-product") && (document.getElementById("summary-product").textContent = cart.product?.label || "-");
  document.getElementById("summary-payment") && (document.getElementById("summary-payment").textContent = cart.payment?.label || "-");
  document.getElementById("summary-total") && (document.getElementById("summary-total").textContent = formatIDR(cart.total || cart.subtotal || 0));

  // enable checkout on cart page
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.disabled = false;
    checkoutBtn.addEventListener("click", () => {
      // final confirmation modal with WA link
      const modalContent = `
        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
        <h2>Siap untuk Pembayaran</h2>
        <p>Produk: <strong>${cart.product?.label}</strong></p>
        <p>Metode: <strong>${cart.payment?.label}</strong></p>
        <p>Total: <strong>${formatIDR(cart.total || cart.subtotal)}</strong></p>
        <div style="margin-top:10px;">
          <a href="https://wa.me/${ADMIN_WA}?text=Saya%20ingin%20membeli%20${encodeURIComponent(cart.product?.label)}%20untuk%20${encodeURIComponent(cart.gameName || "")}%20(ID:%20${encodeURIComponent(cart.userId)})" target="_blank" class="btn btn-primary" style="display:inline-block;width:100%">Bayar via WhatsApp</a>
        </div>
      `;
      showCheckoutModal(modalContent);
    });
  }

  // voucher apply
  document.getElementById("voucher-btn")?.addEventListener("click", () => {
    const code = document.getElementById("voucher-input")?.value?.trim().toUpperCase();
    const statusEl = document.getElementById("voucher-status");
    const discountRow = document.getElementById("summary-discount-row");
    const discountCell = document.getElementById("summary-discount");
    const totalCell = document.getElementById("summary-total");

    if (!code) {
      statusEl && (statusEl.textContent = "Masukkan kode voucher dulu.");
      return;
    }

    const found = VOUCHERS.find(v => v.code === code);
    if (!found) {
      statusEl && (statusEl.textContent = "Voucher tidak valid.");
      statusEl?.classList.add("status-error");
      return;
    }

    // compute discount
    const base = cart.subtotal;
    let discount = 0;
    if (found.percent) discount = Math.floor(base * found.percent / 100);
    else if (found.amount) discount = found.amount;
    const newTotal = Math.max(0, base - discount);

    // update cart in localStorage
    cart.voucher = found;
    cart.total = newTotal;
    localStorage.setItem("walz_cart", JSON.stringify(cart));

    // update UI
    discountRow && (discountRow.style.display = "table-row");
    discountCell && (discountCell.textContent = `- ${formatIDR(discount)}`);
    totalCell && (totalCell.textContent = formatIDR(newTotal));
    statusEl && (statusEl.textContent = `Voucher ${found.code} diterapkan!`);
    statusEl && statusEl.classList.remove("status-error");
    statusEl && statusEl.classList.add("status-success");
  });

  document.getElementById("voucher-list-btn")?.addEventListener("click", showVoucherListModal);
}

/* ---------- MODALS ---------- */
function showErrorModal(message) {
  const modal = document.getElementById("error-modal");
  const overlay = document.getElementById("modal-overlay");
  if (!modal || !overlay) return;
  modal.innerHTML = `<div class="error-icon"><i class="fas fa-times-circle"></i></div>
                     <h2>Terjadi Kesalahan</h2>
                     <p>${message}</p>
                     <div class="modal-footer"><button class="btn btn-secondary" onclick="closeOverlay()">Tutup</button></div>`;
  overlay.classList.add("active");
  overlay.style.display = "flex";
  // auto focus on close button accessible
}
function showCheckoutModal(contentHTML) {
  const modal = document.getElementById("checkout-modal");
  const overlay = document.getElementById("modal-overlay");
  if (!modal || !overlay) return;
  modal.innerHTML = contentHTML + `<div style="margin-top:12px;text-align:right"><button class="btn btn-secondary" onclick="closeOverlay()">Tutup</button></div>`;
  overlay.classList.add("active");
  overlay.style.display = "flex";
}
function showVoucherListModal() {
  const modal = document.getElementById("promo-list-modal");
  const overlay = document.getElementById("modal-overlay");
  if (!modal || !overlay) return;
  modal.innerHTML = `<h2 id="promo-list-title">Daftar Voucher</h2>
    <ul style="margin-top:.6rem;padding-left:1rem">
      ${VOUCHERS.map(v => `<li><strong>${v.code}</strong> — ${v.percent? v.percent + "%": (v.amount? formatIDR(v.amount): "")}</li>`).join("")}
    </ul>
    <div class="modal-footer"><button class="btn btn-secondary" onclick="closeOverlay()">Tutup</button></div>`;
  overlay.classList.add("active");
  overlay.style.display = "flex";
}
function closeOverlay() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("active");
  overlay.style.display = "none";
}

/* ---------- UTILS: rendering & init ---------- */
function initPage() {
  // set year(s)
  document.querySelectorAll("#year").forEach(el => { el.textContent = new Date().getFullYear(); });

  // Init slider & index if present
  if (document.getElementById("promo-slider")) initSlider();
  if (document.getElementById("games-grid")) renderGamesGrid();

  // If on game page
  if (document.getElementById("product-grid")) {
    renderGameDetail();
    // keep user-id input listener to enable checkout button as user types
    const userid = document.getElementById("user-id");
    userid?.addEventListener("input", () => {
      const btn = document.getElementById("checkout-btn");
      if (!btn) return;
      btn.disabled = !(userid.value.trim() && selectedProduct && selectedPayment);
    });
  }

  // If on cart page
  if (document.getElementById("summary-product")) renderCartPage();

  // close overlay on background click (optional)
  document.getElementById("modal-overlay")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) closeOverlay();
  });

  // voucher-list btn at top of index
  document.getElementById("voucher-list-btn")?.addEventListener("click", showVoucherListModal);
}

/* ---------- init DOMContentLoaded ---------- */
document.addEventListener("DOMContentLoaded", () => {
  try {
    initPage();
  } catch (err) {
    console.error("Init error:", err);
  }
});

/* ---------- Exports to global (so HTML buttons can call) ---------- */
window.showVoucherListModal = showVoucherListModal;
window.closeOverlay = closeOverlay;
window.showErrorModal = showErrorModal;
window.showCheckoutModal = showCheckoutModal;