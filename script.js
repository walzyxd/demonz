/* ================== CONFIG ================== */
const ADMIN_WA = "6282298902274";
const VOUCHERS = [
  { code: "WALZSHOP", percent: 5 },
  { code: "WALZPROMO", percent: 10 }
];

const GAMES = [
  {
    key: "freefire",
    name: "Free Fire",
    img: "https://files.catbox.moe/x5rvpg.jpg",
    desc: "Top up diamond Free Fire cepat & murah."
  },
  {
    key: "mlbb",
    name: "Mobile Legends",
    img: "https://files.catbox.moe/yz5h8u.jpg",
    desc: "Top up diamond MLBB original server."
  },
  {
    key: "pubgm",
    name: "PUBG Mobile",
    img: "https://files.catbox.moe/9z4xul.jpg",
    desc: "Top up UC PUBG Mobile mudah & aman."
  },
  {
    key: "genshin",
    name: "Genshin Impact",
    img: "https://files.catbox.moe/9d9n4x.jpg",
    desc: "Top up Genesis Crystals untuk Genshin Impact."
  },
  {
    key: "roblox",
    name: "Roblox",
    img: "https://files.catbox.moe/j8jz42.jpg",
    desc: "Top up Robux Roblox cepat & aman."
  },
  {
    key: "deltaforce",
    name: "Delta Force",
    img: "https://files.catbox.moe/5o7nzh.jpg",
    desc: "Top up Delta Force langsung masuk akun."
  },
  {
    key: "codm",
    name: "Call of Duty Mobile",
    img: "https://files.catbox.moe/wndzjf.jpg",
    desc: "Top up CP CODM instan dan terpercaya."
  },
  {
    key: "bloodstrike",
    name: "Blood Strike",
    img: "https://files.catbox.moe/wvm4m5.jpg",
    desc: "Top up Blood Strike instan."
  },
  {
    key: "supersus",
    name: "Super Sus",
    img: "https://files.catbox.moe/af6r7b.jpg",
    desc: "Top up Star untuk Super Sus."
  },
  {
    key: "undawn",
    name: "Garena Undawn",
    img: "https://files.catbox.moe/l82rfy.jpg",
    desc: "Top up Garena Undawn cepat dan mudah."
  },
  {
    key: "valorant",
    name: "Valorant",
    img: "https://files.catbox.moe/0k7t8c.jpg",
    desc: "Top up VP Valorant langsung masuk."
  }
];

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
        { id: "ff-lvl15", label: "Level Up Pass Lv.15", price: 8800, badges: ["levelup"] },
        { id: "ff-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["levelup"] },
        { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["pass"] },
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
        { id: "ml-4830", label: "4830 Diamonds", price: 1140000 },
        { id: "ml-wdp", label: "Weekly Diamond Pass", price: 28000, badges: ["weekly"] },
        { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["pass"] },
    ],
    "pubg-mobile": [
        { id: "pubg-30", label: "30 UC", price: 7000 },
        { id: "pubg-60", label: "60 UC", price: 14000 },
        { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
        { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
        { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
        { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 },
        { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["levelup"] },
        { id: "pubg-booyah", label: "BooYah Pass", price: 50000, badges: ["pass"] },
    ],
    "genshin-impact": [
        { id: "gi-60", label: "60 Genesis Crystals", price: 14865 },
        { id: "gi-330", label: "330 Genesis Crystals", price: 72973 },
        { id: "gi-1090", label: "1090 Genesis Crystals", price: 229730 },
        { id: "gi-2240", label: "2240 Genesis Crystals", price: 440541 },
        { id: "gi-3880", label: "3880 Genesis Crystals", price: 734234 },
        { id: "gi-8080", label: "8080 Genesis Crystals", price: 1467568 },
        { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973, badges: ["welkin"] },
    ],
    "honor-of-kings": [
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
    "super-sus": [
        { id: "ss-100", label: "100 Goldstar", price: 11712 },
        { id: "ss-310", label: "310 Goldstar", price: 34234 },
        { id: "ss-520", label: "520 Goldstar", price: 57658 },
        { id: "ss-1060", label: "1060 Goldstar", price: 116216 },
        { id: "ss-2180", label: "2180 Goldstar", price: 239640 },
        { id: "ss-5600", label: "5600 Goldstar", price: 613514 },
        { id: "ss-weekly", label: "Weekly Card", price: 13514, badges: ["weekly"] },
        { id: "ss-monthly", label: "Monthly Card", price: 134234, badges: ["monthly"] },
        { id: "ss-vip", label: "Super VIP Card", price: 157658, badges: ["vip"] },
    ],
    "clash-of-clans": [
        { id: "coc-500", label: "500 Gems", price: 75299 },
        { id: "coc-1200", label: "1200 Gems", price: 150499 },
        { id: "coc-2500", label: "2500 Gems", price: 300999 },
        { id: "coc-6500", label: "6500 Gems", price: 752399 },
        { id: "coc-14000", label: "14000 Gems", price: 1454599 },
    ],
    "blood-strike": [
        { id: "bs-100", label: "100 + 5 Gold", price: 11999 },
        { id: "bs-300", label: "300 + 20 Gold", price: 34999 },
        { id: "bs-500", label: "500 + 40 Gold", price: 54999 },
        { id: "bs-1000", label: "1000 + 100 Gold", price: 110000 },
        { id: "bs-2000", label: "2000 + 260 Gold", price: 219999 },
        { id: "bs-5000", label: "5000 + 800 Gold", price: 549999 },
    ],
    "eggy-party": [
        { id: "eggy-weekly", label: "Weekly Egg Coin Pack", price: 14799, badges: ["weekly"] },
        { id: "eggy-yoyo", label: "Yoyo Membership", price: 27799, badges: ["member"] },
        { id: "eggy-shiny", label: "Shiny Coin Jar", price: 42699, badges: ["hot"] },
        { id: "eggy-aquarius", label: "Energetic Aquarius", price: 14499, badges: ["new"] },
        { id: "eggy-capricorn", label: "Obsidian Capricorn", price: 14399, badges: ["new"] },
        { id: "eggy-libra", label: "Elegant Libra", price: 14499, badges: ["new"] },
        { id: "eggy-sagittarius", label: "Wandering Sagittarius", price: 14399, badges: ["new"] },
        { id: "eggy-scorpio", label: "Mysterious Scorpio", price: 14399, badges: ["new"] },
        { id: "eggy-spring-small", label: "Spring Egg Coin Pack Small", price: 14399, badges: ["sale"] },
        { id: "eggy-spring-big", label: "Spring Egg Coin Pack Big", price: 163399, badges: ["sale"] },
        { id: "eggy-10", label: "10 Eggy Coins", price: 2199 },
        { id: "eggy-60", label: "60 + 3 Bonus", price: 13999 },
        { id: "eggy-120", label: "120 + 6 Bonus", price: 26999 },
        { id: "eggy-300", label: "300 + 24 Bonus", price: 68499 },
        { id: "eggy-600", label: "600 + 57 Bonus", price: 138599 },
        { id: "eggy-1250", label: "1250 + 144 Bonus", price: 251099 },
        { id: "eggy-1880", label: "1880 + 216 Bonus", price: 378099 },
        { id: "eggy-3180", label: "3180 + 423 Bonus", price: 630199 },
        { id: "eggy-6480", label: "6480 + 903 Bonus", price: 1244999 },
    ],
    "call-of-duty": [
        { id: "codm-31", label: "31 CP", price: 4899 },
        { id: "codm-63", label: "63 CP", price: 9699 },
        { id: "codm-128", label: "128 CP", price: 19399 },
        { id: "codm-321", label: "321 CP", price: 48499 },
        { id: "codm-645", label: "645 CP", price: 99999 },
        { id: "codm-800", label: "800 CP", price: 119999 },
        { id: "codm-1373", label: "1373 CP", price: 193999, badges: ["hot"] },
        { id: "codm-2060", label: "2060 CP", price: 290999 },
        { id: "codm-2750", label: "2750 CP", price: 379999 },
        { id: "codm-3564", label: "3564 CP", price: 484999 },
        { id: "codm-5619", label: "5619 CP", price: 729999, badges: ["sale"] },
        { id: "codm-7656", label: "7656 CP", price: 969999 },
        { id: "codm-15312", label: "15312 CP", price: 1999999 },
        { id: "codm-38280", label: "38280 CP", price: 4999999 },
        { id: "codm-76560", label: "76560 CP", price: 9999999 },
    ],
    "valorant": [
        { id: "val-475", label: "475 Points", price: 54349 },
        { id: "val-1000", label: "1000 Points", price: 108799 },
        { id: "val-2050", label: "2050 Points", price: 217499, badges: ["hot"] },
        { id: "val-3650", label: "3650 Points", price: 372199 },
        { id: "val-5350", label: "5350 Points", price: 544999 },
        { id: "val-11000", label: "11000 Points", price: 1089999, badges: ["hot"] },
    ],
    "garena-delta-force": [
        { id: "delta-tide", label: "Tide Supplies", price: 8499, badges: ["new"] },
        { id: "delta-adv", label: "Tide Supplies Advanced", price: 24499, badges: ["new"] },
        { id: "delta-genesis", label: "Black Hawk Down Genesis", price: 41999, badges: ["new"] },
        { id: "delta-redefine", label: "Black Hawk Down Redefine", price: 84999, badges: ["new"] },
        { id: "delta-18", label: "18 + 1", price: 4999 },
        { id: "delta-30", label: "30 + 2", price: 7499 },
        { id: "delta-60", label: "60 + 3", price: 14999, badges: ["hot"] },
        { id: "delta-300", label: "300 + 36", price: 74999 },
        { id: "delta-420", label: "420 + 62", price: 99999 },
        { id: "delta-680", label: "680 + 105", price: 139999 },
        { id: "delta-1280", label: "1280 + 264", price: 279999 },
        { id: "delta-1680", label: "1680 + 385", price: 349999 },
        { id: "delta-3280", label: "3280 + 834", price: 699999 },
        { id: "delta-6480", label: "6480 + 1944", price: 1399999, badges: ["sale"] },
        { id: "delta-12960", label: "12960 + 3888", price: 2799999 },
        { id: "delta-19440", label: "19440 + 5832", price: 4199999 },
    ],
    "garena-undawn": [
        { id: "undawn-bulanan", label: "Kartu Bulanan", price: 47299, badges: ["member"] },
        { id: "undawn-growth", label: "Growth Fund", price: 94799, badges: ["hot"] },
        { id: "undawn-glory", label: "Glory Pass Premium", price: 142299, badges: ["pass"] },
        { id: "undawn-elite", label: "Elite Fund Rebate LV 80", price: 126999, badges: ["new"] },
        { id: "undawn-ace", label: "Ace Fund", price: 143999, badges: ["hot"] },
        { id: "undawn-rc80", label: "RC 80", price: 14599 },
        { id: "undawn-rc250", label: "RC 250", price: 43699 },
        { id: "undawn-rc450", label: "RC 450", price: 72799 },
        { id: "undawn-rc920", label: "RC 920", price: 144599 },
        { id: "undawn-rc1850", label: "RC 1850", price: 290099 },
        { id: "undawn-rc2800", label: "RC 2800", price: 435599 },
        { id: "undawn-rc4750", label: "RC 4750", price: 726599 },
        { id: "undawn-rc9600", label: "RC 9600", price: 1454099, badges: ["sale"] },
        { id: "undawn-rc33000", label: "RC 33.000", price: 4849999 },
        { id: "undawn-rc66500", label: "RC 66.500", price: 9699999 },
        { id: "undawn-mingguan", label: "Kartu Mingguan", price: 28599, badges: ["weekly"] },
        { id: "undawn-glory-s7", label: "Glory Pass Premium S7", price: 143999, badges: ["pass"] },
        { id: "undawn-glory-s16", label: "Glory Pass Premium S16", price: 143999, badges: ["pass"] },
        { id: "undawn-prep", label: "Quick Battle Prep", price: 94379, badges: ["sale"] },
    ]
};

const PAYMENTS = [
  { id: "qris", name: "QRIS", img: "https://files.catbox.moe/crlcvj.jpg" },
  { id: "dana", name: "DANA", img: "https://i.imghippo.com/files/qhn1355Ds.jpg" },
  { id: "gopay", name: "GoPay", img: "https://i.imghippo.com/files/lRYZ9422LG.jpg" },
  { id: "shopeepay", name: "ShopeePay", img: "https://files.catbox.moe/gub7ik.jpg" }
];

let selectedGame = null;
let selectedProduct = null;
let selectedPayment = null;
let appliedVoucher = null;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================== INIT PAGES ================== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("games-grid")) renderGameList();
  if (document.getElementById("product-grid")) initGamePage();
  if (document.getElementById("cart-items")) renderCartPage();
});

/* ================== GAME LIST ================== */
function renderGameList() {
  const grid = document.getElementById("games-grid");
  grid.innerHTML = "";
  GAMES.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `<img src="${game.img}" alt="${game.name}"><h3>${game.name}</h3>`;
    card.addEventListener("click", () => window.location.href = `game.html?game=${game.key}`);
    grid.appendChild(card);
  });
}

/* ================== GAME PAGE ================== */
function initGamePage() {
  const gameKey = new URLSearchParams(window.location.search).get("game");
  selectedGame = GAMES.find((g) => g.key === gameKey);
  if (!selectedGame) return;

  document.querySelector(".game-name-h1").textContent = selectedGame.name;
  document.querySelector(".game-description").textContent = selectedGame.desc;
  document.getElementById("game-banner").src = selectedGame.img;

  renderProducts(gameKey);
  renderPayments();
  document.getElementById("voucher-btn").addEventListener("click", applyVoucher);
  document.getElementById("checkout-btn").addEventListener("click", addToCart);
}

function renderProducts(key) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  PRODUCTS[key].forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.textContent = `${product.label} - Rp ${product.price.toLocaleString()}`;
    div.addEventListener("click", () => selectProduct(product, div));
    grid.appendChild(div);
  });
}

function renderPayments() {
  const grid = document.getElementById("payment-grid");
  grid.innerHTML = "";
  PAYMENTS.forEach((pay) => {
    const div = document.createElement("div");
    div.className = "payment-card";
    div.innerHTML = `<img src="${pay.img}" alt="${pay.name}"><p>${pay.name}</p>`;
    div.addEventListener("click", () => selectPayment(pay, div));
    grid.appendChild(div);
  });
}

/* ================== SELECTION ================== */
function selectProduct(product, element) {
  selectedProduct = product;
  document.querySelectorAll(".product-card").forEach((p) => p.classList.remove("selected"));
  element.classList.add("selected");
  updateSummary();
}

function selectPayment(payment, element) {
  selectedPayment = payment;
  document.querySelectorAll(".payment-card").forEach((p) => p.classList.remove("selected"));
  element.classList.add("selected");
  updateSummary();
}

/* ================== VOUCHER ================== */
function applyVoucher() {
  const input = document.getElementById("voucher-input").value.trim().toUpperCase();
  const status = document.getElementById("voucher-status");
  appliedVoucher = VOUCHERS.find((v) => v.code === input);
  if (appliedVoucher) {
    status.textContent = `Voucher ${appliedVoucher.code} berhasil! Diskon ${appliedVoucher.percent}%`;
    status.style.color = "green";
    showToast(`Voucher ${appliedVoucher.code} diterapkan!`);
  } else {
    status.textContent = "Voucher tidak valid";
    status.style.color = "red";
  }
  updateSummary();
}

/* ================== SUMMARY ================== */
function updateSummary() {
  const btn = document.getElementById("checkout-btn");
  if (!selectedProduct || !selectedPayment) return btn.disabled = true;
  btn.disabled = false;

  let price = selectedProduct.price, discount = 0;
  if (appliedVoucher) {
    discount = (price * appliedVoucher.percent) / 100;
    price -= discount;
  }

  document.getElementById("summary-product").textContent = selectedProduct.label;
  document.getElementById("summary-payment").textContent = selectedPayment.name;
  document.getElementById("summary-total").textContent = `Rp ${price.toLocaleString()}`;
  if (discount > 0) {
    document.getElementById("summary-discount-row").style.display = "table-row";
    document.getElementById("summary-discount").textContent = `Rp ${discount.toLocaleString()}`;
  } else document.getElementById("summary-discount-row").style.display = "none";
}

/* ================== CART ================== */
function addToCart() {
  const userId = document.getElementById("user-id").value.trim();
  if (!userId) return showToast("Masukkan User ID terlebih dahulu");

  cart.push({
    game: selectedGame.name,
    product: selectedProduct.label,
    payment: selectedPayment.name,
    price: selectedProduct.price,
    discount: appliedVoucher ? appliedVoucher.percent : 0,
    userId
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Produk berhasil ditambahkan ke keranjang!");
  window.location.href = "cart.html";
}

function renderCartPage() {
  const cartItems = document.getElementById("cart-items");
  const totalItems = document.getElementById("cart-total-items");
  const totalPrice = document.getElementById("cart-total-price");
  const checkoutBtn = document.getElementById("cart-checkout-btn");

  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Keranjang kosong, ayo belanja dulu!</p>`;
    checkoutBtn.disabled = true;
    totalItems.textContent = "0"; totalPrice.textContent = "Rp 0"; return;
  }

  let total = 0;
  cart.forEach((item) => {
    let finalPrice = item.price;
    if (item.discount > 0) finalPrice -= (item.price * item.discount) / 100;
    total += finalPrice;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-info">
        <img src="${GAMES.find((g) => g.name === item.game).img}" alt="${item.game}">
        <div>
          <p class="cart-item-title">${item.game}</p>
          <small>${item.product} | ${item.payment}</small><br>
          <small>User ID: ${item.userId}</small>
        </div>
      </div>
      <p class="cart-item-price">Rp ${finalPrice.toLocaleString()}</p>`;
    cartItems.appendChild(div);
  });

  totalItems.textContent = cart.length;
  totalPrice.textContent = `Rp ${total.toLocaleString()}`;
  checkoutBtn.disabled = false;
  checkoutBtn.addEventListener("click", () => {
    showToast("Pesanan diproses via WhatsApp Admin...");
    window.open(`https://wa.me/${ADMIN_WA}?text=Halo, saya ingin memesan: ${encodeURIComponent(JSON.stringify(cart, null, 2))}`);
  });
}

/* ================== TOAST ================== */
function showToast(message) {
  const container = document.getElementById("toast-container") || (() => {
    const c = document.createElement("div");
    c.id = "toast-container"; document.body.appendChild(c); return c;
  })();
  const toast = document.createElement("div");
  toast.className = "toast"; toast.textContent = message; container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = "0"; setTimeout(() => toast.remove(), 300); }, 2500);
}