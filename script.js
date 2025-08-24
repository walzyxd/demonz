/* ================= CONFIG ================= */
const ADMIN_WA = "6282298902274";
const VOUCHERS = [
  { code: "WALZPROMO", type: "percent", value: 10, label: "Diskon 10%" }
];

/* ================= DATA GAME ================= */
const NEED_SERVER_KEYS = new Set(["mobile legends", "honor of kings"]);

const GAMES = [
  { key: "free fire", name: "Free Fire", img: "https://files.catbox.moe/x5rvpg.jpg", needServer: NEED_SERVER_KEYS.has("free fire") },
  { key: "mobile legends", name: "Mobile Legends", img: "https://files.catbox.moe/wcxi20.jpg", needServer: NEED_SERVER_KEYS.has("mobile legends") },
  { key: "honor of kings", name: "Honor of Kings", img: "https://files.catbox.moe/rh78kj.jpg", needServer: NEED_SERVER_KEYS.has("honor of kings") },
  { key: "genshin impact", name: "Genshin Impact", img: "https://files.catbox.moe/b91rfb.jpg", needServer: NEED_SERVER_KEYS.has("genshin impact") },
  { key: "roblox", name: "Roblox", img: "https://files.catbox.moe/uvixa8.jpg", needServer: NEED_SERVER_KEYS.has("roblox") },
  { key: "super sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", needServer: NEED_SERVER_KEYS.has("super sus") },
  { key: "clash of clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", needServer: NEED_SERVER_KEYS.has("clash of clans") },
  { key: "blood strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", needServer: NEED_SERVER_KEYS.has("blood strike") },
  { key: "pubg mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", needServer: NEED_SERVER_KEYS.has("pubg mobile") }
];

const payments = [
  { name: "QRIS", image: "https://files.catbox.moe/crlcvj.jpg" },
  { name: "Dana", image: "https://i.imghippo.com/files/GTZi5615xp.jpg" },
  { name: "Gopay", image: "https://i.imghippo.com/files/NF3980AI.jpg" },
  { name: "ShopeePay", image: "https://files.catbox.moe/gub7ik.jpg" },
  { name: "OVO", image: "https://i.imghippo.com/files/fSpV2194O.jpg" }
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
    { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] }
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
    { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["Pass"] }
  ],
  "pubg mobile": [
    { id: "pubg-30", label: "30 UC", price: 7000 },
    { id: "pubg-60", label: "60 UC", price: 14000 },
    { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
    { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
    { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
    { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 },
    { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["Level Up"] },
    { id: "pubg-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] }
  ],
};

/* ================= UTILS ================= */
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];
const fmt = n => "Rp " + (n || 0).toLocaleString("id-ID");
const toKey = s => s.trim().toLowerCase();

function showVoucherToast(text = "Voucher telah digunakan!") {
  let t = document.createElement("div");
  t.className = "voucher-toast";
  t.textContent = text;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 320);
  }, 2200);
}

/* ================= INDEX PAGE ================= */
(() => {
  const slidesWrap = qs(".slides");
  if (slidesWrap) {
    let idx = 0;
    setInterval(() => {
      if (!slidesWrap.children.length) return;
      idx = (idx + 1) % slidesWrap.children.length;
      slidesWrap.style.transform = `translateX(-${idx * 100}%)`;
    }, 3500);
  }

  const grid = qs("#gamesGrid");
  if (grid) {
    GAMES.forEach(g => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img class="thumb" src="${g.img}" alt="${g.name}">
        <h3>${g.name}</h3>
      `;
      card.addEventListener("click", () => {
        localStorage.setItem("selectedGame", JSON.stringify(g));
        window.location.href = "game.html";
      });
      grid.appendChild(card);
    });
  }
})(); // end index page

/* ================= GAME PAGE ================= */
(() => {
  const page = qs("#gamePage");
  if (!page) return;

  const g = JSON.parse(localStorage.getItem("selectedGame") || "{}");
  if (!g.key) {
    qs("#gameContent").innerHTML = "<p style='text-align:center'>Game tidak ditemukan.</p>";
    return;
  }

  qs("#gameBanner").src = g.img;
  qs("#gameTitle").textContent = g.name;

  const form = qs("#topupForm");
  const uidInput = qs("#userId");
  const serverInput = qs("#serverId");
  if (g.needServer) {
    serverInput.style.display = "block";
  } else {
    serverInput.style.display = "none";
  }

  /* Render produk */
  const prodWrap = qs("#productList");
  prodWrap.innerHTML = "";
  (PRODUCTS[g.key] || []).forEach(p => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "product-btn";
    btn.textContent = `${p.label} - ${fmt(p.price)}`;
    btn.addEventListener("click", () => selectProduct(p));
    prodWrap.appendChild(btn);
  });

  let selectedProduct = null;
  function selectProduct(p) {
    selectedProduct = p;
    qsa(".product-btn").forEach(b => b.classList.remove("active"));
    event.target.classList.add("active");
    updateSummary();
  }

  /* Render payment */
  const payWrap = qs("#paymentList");
  let selectedPayment = null;
  payments.forEach(pm => {
    const card = document.createElement("div");
    card.className = "pay-card";
    card.innerHTML = `<img src="${pm.image}" alt="${pm.name}"><span>${pm.name}</span>`;
    card.addEventListener("click", () => {
      selectedPayment = pm;
      qsa(".pay-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      updateSummary();
    });
    payWrap.appendChild(card);
  });

  /* Voucher */
  const voucherInput = qs("#voucherCode");
  let discount = 0;
  qs("#applyVoucher").addEventListener("click", () => {
    const code = toKey(voucherInput.value);
    const v = VOUCHERS.find(v => toKey(v.code) === code);
    if (v && selectedProduct) {
      if (v.type === "percent") discount = selectedProduct.price * v.value / 100;
      else if (v.type === "fixed") discount = v.value;
      showVoucherToast(v.label);
      updateSummary();
    } else {
      showVoucherToast("Voucher tidak valid");
    }
  });

  /* Update Summary */
  function updateSummary() {
    const sum = qs("#summary");
    if (!selectedProduct || !selectedPayment) {
      sum.innerHTML = "<p>Pilih produk dan metode pembayaran</p>";
      return;
    }
    const total = selectedProduct.price - discount;
    sum.innerHTML = `
      <p><strong>${selectedProduct.label}</strong></p>
      <p>Harga: ${fmt(selectedProduct.price)}</p>
      <p>Diskon: -${fmt(discount)}</p>
      <p>Total: <strong>${fmt(total)}</strong></p>
      <button id="checkoutBtn" class="checkout-btn">Checkout via WhatsApp</button>
    `;
    qs("#checkoutBtn").addEventListener("click", checkout);
  }

  /* Checkout */
  function checkout() {
    if (!selectedProduct || !selectedPayment) {
      alert("Pilih produk & pembayaran!");
      return;
    }
    const uid = uidInput.value.trim();
    if (!uid) {
      alert("Masukkan User ID!");
      return;
    }
    const server = g.needServer ? serverInput.value.trim() : "";
    const total = selectedProduct.price - discount;
    let msg = `Halo Admin, saya ingin top up:\n\nGame: ${g.name}\nProduk: ${selectedProduct.label}\nHarga: ${fmt(selectedProduct.price)}\nDiskon: ${fmt(discount)}\nTotal: ${fmt(total)}\n\nUser ID: ${uid}`;
    if (server) msg += `\nServer: ${server}`;
    msg += `\nPembayaran: ${selectedPayment.name}\n\nTerima kasih.`;

    const url = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }
})();