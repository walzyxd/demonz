/* ================== CONFIG & DATA ================== */
const ADMIN_WA = "6282298902274";

const VOUCHERS = [
  { code: "WALZSHOP", percent: 5, description: "Diskon 5% untuk semua produk" },
  { code: "WALZPROMO", percent: 5, description: "Promo khusus 5% semua produk" }
];

const GAMES = [
  { key: "free fire", name: "Free Fire", img: "https://files.catbox.moe/x5rvpg.jpg", server: false },
  { key: "mobile legends", name: "Mobile Legends", img: "https://files.catbox.moe/wcxi20.jpg", server: true },
  { key: "honor of kings", name: "Honor of Kings", img: "https://files.catbox.moe/rh78kj.jpg", server: false },
  { key: "genshin impact", name: "Genshin Impact", img: "https://files.catbox.moe/b91rfb.jpg", server: false },
  { key: "roblox", name: "Roblox", img: "https://files.catbox.moe/uvixa8.jpg", server: false },
  { key: "super sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", server: false },
  { key: "clash of clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", server: false },
  { key: "blood strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", server: false },
  { key: "pubg mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", server: false },
];

const PAYMENTS = [
  { id: "qris", name: "QRIS", img: "https://files.catbox.moe/crlcvj.jpg" },
  { id: "shopeepay", name: "ShopeePay", img: "https://files.catbox.moe/gub7ik.jpg" },
  { id: "dana", name: "Dana", img: "https://files.catbox.moe/f5ey4y.jpg" },
  { id: "gopay", name: "GoPay", img: "https://files.catbox.moe/je0irt.jpg" },
  { id: "ovo", name: "OVO", img: "https://files.catbox.moe/57f44a.jpg" },
];

const PRODUCTS = {
  "free fire": [
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
    { id: "ff-mw", label: "Membership Mingguan", price: 30500, badges: ["Member"] },
    { id: "ff-mb", label: "Membership Bulanan", price: 90000, badges: ["Member"] },
    { id: "ff-lvl6", label: "Level Up Pass Lv.6", price: 5500, badges: ["Level Up"] },
    { id: "ff-lvl10", label: "Level Up Pass Lv.10", price: 8800, badges: ["Level Up"] },
    { id: "ff-lvl15", label: "Level Up Pass Lv.15", price: 8800, badges: ["Level Up"] },
    { id: "ff-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["Level Up"] },
    { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] },
  ],
  "mobile legends": [
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
    { id: "ml-4830", label: "4830 Diamonds", price: 1140000 },
    { id: "ml-wdp", label: "Weekly Diamond Pass", price: 28000, badges: ["WDP"] },
    { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["Pass"] },
  ],
  "pubg mobile": [
    { id: "pubg-30", label: "30 UC", price: 7000 },
    { id: "pubg-60", label: "60 UC", price: 14000 },
    { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
    { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
    { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
    { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 },
    { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["Level Up"] },
    { id: "pubg-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] },
  ],
  "genshin impact": [
    { id: "gi-60", label: "60 Genesis Crystals", price: 14865 },
    { id: "gi-330", label: "330 Genesis Crystals", price: 72973 },
    { id: "gi-1090", label: "1090 Genesis Crystals", price: 229730 },
    { id: "gi-2240", label: "2240 Genesis Crystals", price: 440541 },
    { id: "gi-3880", label: "3880 Genesis Crystals", price: 734234 },
    { id: "gi-8080", label: "8080 Genesis Crystals", price: 1467568 },
    { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973, badges: ["Welkin"] },
  ],
  "honor of kings": [
    { id: "hok-16", label: "16 Tokens", price: 3300 },
    { id: "hok-80", label: "80 Tokens", price: 16500 },
    { id: "hok-240", label: "240 Tokens", price: 51000 },
    { id: "hok-400", label: "400 Tokens", price: 84000 },
    { id: "hok-560", label: "560 Tokens", price: 118000 },
    { id: "hok-830", label: "830 Tokens", price: 168000 },
    { id: "hok-1245", label: "1245 Tokens", price: 250000 },
    { id: "hok-2508", label: "2508 Tokens", price: 495000 },
    { id: "hok-4180", label: "4180 Tokens", price: 824000 },
    { id: "hok-8360", label: "8360 Tokens", price: 1648000 },
  ],
  "roblox": [
    { id: "rbx-50k", label: "Gift Card Rp50.000", price: 48440 },
    { id: "rbx-65k", label: "Gift Card Rp65.000", price: 62970 },
    { id: "rbx-100k", label: "Gift Card Rp100.000", price: 96500 },
    { id: "rbx-200k", label: "Gift Card Rp200.000", price: 193000 },
    { id: "rbx-500k", label: "Gift Card Rp500.000", price: 479000 },
  ],
  "super sus": [
    { id: "ss-100", label: "100 Goldstar", price: 11712 },
    { id: "ss-310", label: "310 Goldstar", price: 34234 },
    { id: "ss-520", label: "520 Goldstar", price: 57658 },
    { id: "ss-1060", label: "1060 Goldstar", price: 116216 },
    { id: "ss-2180", label: "2180 Goldstar", price: 239640 },
    { id: "ss-5600", label: "5600 Goldstar", price: 613514 },
    { id: "ss-weekly", label: "Weekly Card", price: 13514, badges: ["Weekly"] },
    { id: "ss-monthly", label: "Monthly Card", price: 134234, badges: ["Monthly"] },
    { id: "ss-vip", label: "Super VIP Card", price: 157658, badges: ["VIP"] },
  ],
  "clash of clans": [
    { id: "coc-500", label: "500 Gems", price: 75299 },
    { id: "coc-1200", label: "1200 Gems", price: 150499 },
    { id: "coc-2500", label: "2500 Gems", price: 300999 },
    { id: "coc-6500", label: "6500 Gems", price: 752399 },
    { id: "coc-14000", label: "14000 Gems", price: 1454599 },
  ],
  "blood strike": [
    { id: "bs-100", label: "100 + 5 Gold", price: 11999 },
    { id: "bs-300", label: "300 + 20 Gold", price: 34999 },
    { id: "bs-500", label: "500 + 40 Gold", price: 54999 },
    { id: "bs-1000", label: "1000 + 100 Gold", price: 110000 },
    { id: "bs-2000", label: "2000 + 260 Gold", price: 219999 },
    { id: "bs-5000", label: "5000 + 800 Gold", price: 549999 },
  ],
};

/* ================== UTILITY FUNCTIONS ================== */
const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
const fmtIDR = (n) => new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
}).format(n);

/* ================== EVENT LISTENERS ================== */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "index") {
    initIndexPage();
  } else if (page === "game") {
    initGamePage();
  }
});

/* ================== INDEX PAGE LOGIC ================== */
function initIndexPage() {
  const gamesGrid = qs("#gamesGrid");
  if (!gamesGrid) return;
  gamesGrid.innerHTML = "";

  GAMES.forEach(game => {
    const card = document.createElement("a");
    card.className = "game-card-coda";
    card.href = "#";
    card.addEventListener("click", (e) => {
      e.preventDefault();
      selectGame(game);
    });

    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}" class="game-thumb-coda">
      <h3 class="game-name-coda">${game.name}</h3>
    `;
    gamesGrid.appendChild(card);
  });
}

function selectGame(game) {
  localStorage.setItem("walz_game_key", game.key);
  localStorage.setItem("walz_game_name", game.name);
  localStorage.setItem("walz_game_img", game.img);
  localStorage.setItem("walz_game_server", game.server ? "1" : "0");
  window.location.href = "game.html";
}

/* ================== GAME PAGE LOGIC ================== */
function initGamePage() {
  const gameTitle = qs("#gameTitle");
  const banner = qs("#gameBanner");
  const serverWrap = qs("#serverWrap");
  const productGrid = qs("#productGrid");
  const paymentGrid = qs("#paymentGrid");
  const voucherInput = qs("#voucherCode");
  const useVoucherBtn = qs("#useVoucherBtn");
  const checkoutBtn = qs("#checkoutBtn");
  const summaryBox = qs("#summary");
  const voucherList = qs("#voucherList");

  if (!gameTitle || !banner) return;

  const gameKey = localStorage.getItem("walz_game_key");
  const gameData = GAMES.find(g => g.key === gameKey) || GAMES[0];

  gameTitle.textContent = gameData.name;
  banner.src = gameData.img;
  banner.alt = gameData.name;
  serverWrap.style.display = gameData.server ? "block" : "none";

  let selectedProduct = null;
  let selectedPayment = null;
  let appliedVoucher = null;

  function updateSummary() {
    if (!summaryBox) return;
    if (!selectedProduct) {
      summaryBox.innerHTML = `<p>Pilih produk terlebih dahulu.</p>`;
      return;
    }

    let total = selectedProduct.price;
    if (appliedVoucher) {
      total = Math.round(total * (1 - appliedVoucher.percent / 100));
    }

    const paymentMethod = selectedPayment ? selectedPayment.name : "—";
    
    summaryBox.innerHTML = `
      <p>Produk: <b>${selectedProduct.label}</b></p>
      <p>Pembayaran: <b>${paymentMethod}</b></p>
      <p>Total: <b>${fmtIDR(total)}</b></p>
    `;
  }

  function renderProducts() {
    productGrid.innerHTML = "";
    const items = PRODUCTS[gameData.key] || [];

    items.forEach(product => {
      const card = document.createElement("div");
      card.className = `product-card-coda`;
      card.dataset.id = product.id;
      card.innerHTML = `
        <p class="p-title-coda">${product.label}</p>
        <p class="p-price-coda">${fmtIDR(product.price)}</p>
      `;
      card.addEventListener("click", () => {
        selectedProduct = product;
        updateUI();
      });
      productGrid.appendChild(card);
    });
  }

  function renderPayments() {
    paymentGrid.innerHTML = "";

    PAYMENTS.forEach(payment => {
      const card = document.createElement("div");
      card.className = `payment-card-coda`;
      card.dataset.id = payment.id;
      card.innerHTML = `
        <img src="${payment.img}" alt="${payment.name}" class="payment-logo-coda">
        <p class="payment-name-coda">${payment.name}</p>
      `;
      card.addEventListener("click", () => {
        selectedPayment = payment;
        updateUI();
      });
      paymentGrid.appendChild(card);
    });
  }

  function renderVoucherList() {
    voucherList.innerHTML = `<b>Daftar Voucher:</b>`;
    const list = document.createElement("ul");
    list.style.cssText = "padding-left: 20px; margin: 5px 0 0 0;";
    VOUCHERS.forEach(v => {
      const item = document.createElement("li");
      item.innerHTML = `<b>${v.code}</b> — ${v.description}`;
      list.appendChild(item);
    });
    voucherList.appendChild(list);
  }

  function updateUI() {
    qsa('.product-card-coda', productGrid).forEach(c => c.classList.remove('active'));
    if (selectedProduct) {
      qs(`.product-card-coda[data-id="${selectedProduct.id}"]`)?.classList.add('active');
    }
    qsa('.payment-card-coda', paymentGrid).forEach(c => c.classList.remove('active'));
    if (selectedPayment) {
      qs(`.payment-card-coda[data-id="${selectedPayment.id}"]`)?.classList.add('active');
    }
    updateSummary();
  }

  // Initial renders
  renderProducts();
  renderPayments();
  renderVoucherList();

  // Event listeners
  useVoucherBtn.addEventListener("click", () => {
    const code = voucherInput.value.trim().toUpperCase();
    const foundVoucher = VOUCHERS.find(v => v.code === code);
    if (!foundVoucher) {
      alert("Kode voucher tidak valid.");
      appliedVoucher = null;
    } else {
      appliedVoucher = foundVoucher;
      alert(`Voucher "${foundVoucher.code}" berhasil diterapkan. Diskon ${foundVoucher.percent}%!`);
    }
    updateSummary();
  });

  checkoutBtn.addEventListener("click", () => {
    const userId = qs("#userId").value.trim();
    const serverId = gameData.server ? qs("#serverId").value.trim() : null;

    if (!userId) {
      alert("User ID wajib diisi.");
      return;
    }
    if (gameData.server && !serverId) {
      alert("Server ID wajib diisi.");
      return;
    }
    if (!selectedProduct) {
      alert("Pilih nominal terlebih dahulu.");
      return;
    }
    if (!selectedPayment) {
      alert("Pilih metode pembayaran terlebih dahulu.");
      return;
    }

    let finalPrice = selectedProduct.price;
    if (appliedVoucher) {
      finalPrice = Math.round(finalPrice * (1 - appliedVoucher.percent / 100));
    }

    const message = `Halo, saya ingin top up.\n\n` +
      `*Detail Transaksi WalzShop*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🎮 Game: ${gameData.name}\n` +
      `🆔 ID: ${userId}\n` +
      (gameData.server ? `🌐 Server ID: ${serverId}\n` : '') +
      `💎 Produk: ${selectedProduct.label}\n` +
      `💳 Pembayaran: ${selectedPayment.name}\n` +
      (appliedVoucher ? `🏷 Voucher: ${appliedVoucher.code} (${appliedVoucher.percent}% off)\n` : '') +
      `💰 Total: ${fmtIDR(finalPrice)}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `✅ Mohon konfirmasi ke admin.`
      ;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ADMIN_WA}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  });
}
