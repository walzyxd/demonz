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

/* ================= PAYMENT ================= */
const payments = [
  { name: "QRIS", image: "https://files.catbox.moe/crlcvj.jpg" },
  { name: "ShopeePay", image: "https://files.catbox.moe/gub7ik.jpg" },
  { name: "Dana", image: "https://i.imghippo.com/files/qhn1355Ds.jpg" },
  { name: "Gopay", image: "https://files.catbox.moe/lRYZ9422LGY.jpg" },
  { name: "OVO", image: "https://files.catbox.moe/sIRs2824EY.jpg" }
];

/* ================= PRODUCTS ================= */
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

/* ================= RENDER GAME LIST ================= */
function renderGames() {
  const grid = document.getElementById("gamesGrid");
  if (!grid) return;
  grid.innerHTML = "";
  GAMES.forEach(g => {
    const card = document.createElement("a");
    card.href = `game.html?game=${encodeURIComponent(g.key)}`;
    card.className = "game-card";
    card.innerHTML = `
      <img src="${g.img}" alt="${g.name}" />
      <p>${g.name}</p>
    `;
    grid.appendChild(card);
  });
}

/* ================= RENDER PRODUCTS ================= */
function renderProducts(gameKey) {
  const list = document.getElementById("productList");
  if (!list) return;
  list.innerHTML = "";
  const products = PRODUCTS[gameKey] || [];
  products.forEach(p => {
    const item = document.createElement("div");
    item.className = "product-card";
    item.dataset.id = p.id;
    item.dataset.price = p.price;
    item.innerHTML = `
      <span>${p.label}</span>
      <small>Rp ${p.price.toLocaleString()}</small>
      ${p.badges ? `<div class="badges">${p.badges.map(b => `<span>${b}</span>`).join("")}</div>` : ""}
    `;
    item.addEventListener("click", () => selectProduct(item));
    list.appendChild(item);
  });
}

/* ================= PRODUCT SELECTION ================= */
let selectedProduct = null;
function selectProduct(el) {
  document.querySelectorAll(".product-card").forEach(card => card.classList.remove("selected"));
  el.classList.add("selected");
  selectedProduct = {
    id: el.dataset.id,
    label: el.querySelector("span").innerText,
    price: parseInt(el.dataset.price)
  };
  document.getElementById("summary").innerText = `Produk dipilih: ${selectedProduct.label} - Rp ${selectedProduct.price.toLocaleString()}`;
}

/* ================= RENDER PAYMENTS ================= */
function renderPayments() {
  const list = document.getElementById("paymentList");
  if (!list) return;
  list.innerHTML = "";
  payments.forEach(p => {
    const el = document.createElement("div");
    el.className = "payment-card";
    el.dataset.name = p.name;
    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <span>${p.name}</span>
    `;
    el.addEventListener("click", () => selectPayment(el));
    list.appendChild(el);
  });
}

let selectedPayment = null;
function selectPayment(el) {
  document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  selectedPayment = el.dataset.name;
}

/* ================= CHECKOUT ================= */
function checkout(gameKey) {
  const userId = document.getElementById("userId")?.value?.trim();
  const serverId = document.getElementById("serverId")?.value?.trim();
  const voucherCode = document.getElementById("voucherCode")?.value?.trim().toUpperCase();

  if (!userId) return alert("Masukkan ID dulu!");
  if (NEED_SERVER_KEYS.has(gameKey) && !serverId) return alert("Masukkan Server ID juga!");
  if (!selectedProduct) return alert("Pilih produk dulu!");
  if (!selectedPayment) return alert("Pilih metode pembayaran dulu!");

  let price = selectedProduct.price;
  let discountLabel = "";
  const voucher = VOUCHERS.find(v => v.code === voucherCode);
  if (voucher) {
    if (voucher.type === "percent") {
      price = Math.floor(price * (1 - voucher.value / 100));
      discountLabel = ` (Sudah diskon ${voucher.label})`;
    }
  }

  const msg = `Halo Admin, saya mau Top Up:
- Game: ${gameKey}
- ID: ${userId}${serverId ? " (Server: " + serverId + ")" : ""}
- Produk: ${selectedProduct.label}
- Harga: Rp ${price.toLocaleString()}${discountLabel}
- Pembayaran: ${selectedPayment}`;

  const waUrl = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank");
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  renderGames();
  const params = new URLSearchParams(window.location.search);
  const gameKey = params.get("game");
  if (gameKey) {
    // update banner & title
    const game = GAMES.find(g => g.key === gameKey);
    if (game) {
      document.getElementById("gameBanner").src = game.img;
      document.getElementById("gameTitle").innerText = game.name;
    }
    renderProducts(gameKey);
    renderPayments();
    document.getElementById("checkoutBtn")?.addEventListener("click", () => checkout(gameKey));
  }
});