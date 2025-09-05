/* ===============================
   CONFIGURASI & DATA GAME/PRODUK
================================= */
const ADMIN_WA = "6282298902274";

const VOUCHERS = [
  { code: "WALZSHOP", percent: 5 },
  { code: "WALZPROMO", percent: 10 }
];

const GAMES = [
  {
    key: "free-fire",
    name: "Free Fire",
    img: "https://files.catbox.moe/x5rvpg.jpg",
    desc: "Top-up Diamond Free Fire termurah, proses cepat.",
    products: [
      { id: "ff-5", label: "5 Diamonds", price: 1000 },
      { id: "ff-50", label: "50 Diamonds", price: 9000 },
      { id: "ff-100", label: "100 Diamonds", price: 18000 },
      { id: "ff-500", label: "500 Diamonds", price: 90000 }
    ]
  },
  {
    key: "mobile-legends",
    name: "Mobile Legends",
    img: "https://files.catbox.moe/2fj1ak.jpg",
    desc: "Top-up Diamond Mobile Legends instan, aman, murah.",
    products: [
      { id: "ml-50", label: "50 Diamonds", price: 15000 },
      { id: "ml-100", label: "100 Diamonds", price: 30000 },
      { id: "ml-250", label: "250 Diamonds", price: 75000 },
      { id: "ml-500", label: "500 Diamonds", price: 150000 }
    ]
  },
  {
    key: "roblox",
    name: "Roblox",
    img: "https://files.catbox.moe/xyz123.jpg",
    desc: "Top-up Robux cepat dan terpercaya.",
    products: [
      { id: "rb-80", label: "80 Robux", price: 12000 },
      { id: "rb-400", label: "400 Robux", price: 55000 },
      { id: "rb-800", label: "800 Robux", price: 110000 },
      { id: "rb-1700", label: "1700 Robux", price: 230000 }
    ]
  },
  {
    key: "delta-force",
    name: "Delta Force",
    img: "https://files.catbox.moe/abc123.jpg",
    desc: "Isi kredit Delta Force dengan mudah.",
    products: [
      { id: "df-100", label: "100 Credits", price: 20000 },
      { id: "df-500", label: "500 Credits", price: 95000 },
      { id: "df-1000", label: "1000 Credits", price: 190000 }
    ]
  },
  {
    key: "codm",
    name: "Call of Duty Mobile",
    img: "https://files.catbox.moe/cod123.jpg",
    desc: "Top-up CP CODM instan tanpa ribet.",
    products: [
      { id: "codm-80", label: "80 CP", price: 12000 },
      { id: "codm-400", label: "400 CP", price: 55000 },
      { id: "codm-800", label: "800 CP", price: 110000 },
      { id: "codm-2000", label: "2000 CP", price: 270000 }
    ]
  },
  {
    key: "blood-strike",
    name: "Blood Strike",
    img: "https://files.catbox.moe/bs123.jpg",
    desc: "Top-up item Blood Strike dengan mudah dan cepat.",
    products: [
      { id: "bs-50", label: "50 Credits", price: 15000 },
      { id: "bs-150", label: "150 Credits", price: 45000 },
      { id: "bs-300", label: "300 Credits", price: 90000 }
    ]
  },
  {
    key: "super-sus",
    name: "Super Sus",
    img: "https://files.catbox.moe/ss123.jpg",
    desc: "Top-up Gold Super Sus langsung masuk.",
    products: [
      { id: "ss-100", label: "100 Gold", price: 20000 },
      { id: "ss-500", label: "500 Gold", price: 95000 },
      { id: "ss-1000", label: "1000 Gold", price: 190000 }
    ]
  },
  {
    key: "undawn",
    name: "Garena Undawn",
    img: "https://files.catbox.moe/ud123.jpg",
    desc: "Isi UC Undawn terpercaya dan cepat.",
    products: [
      { id: "ud-60", label: "60 UC", price: 15000 },
      { id: "ud-300", label: "300 UC", price: 70000 },
      { id: "ud-600", label: "600 UC", price: 140000 }
    ]
  },
  {
    key: "valorant",
    name: "Valorant",
    img: "https://files.catbox.moe/val123.jpg",
    desc: "Top-up Valorant Points resmi dan murah.",
    products: [
      { id: "val-125", label: "125 VP", price: 15000 },
      { id: "val-420", label: "420 VP", price: 50000 },
      { id: "val-700", label: "700 VP", price: 80000 },
      { id: "val-1375", label: "1375 VP", price: 150000 }
    ]
  }
];

const PAYMENTS = [
  { id: "qris", label: "QRIS", img: "https://files.catbox.moe/crlcvj.jpg" },
  { id: "dana", label: "DANA", img: "https://i.imghippo.com/files/qhn1355Ds.jpg" },
  { id: "gopay", label: "GoPay", img: "https://i.imghippo.com/files/lRYZ9422LG.jpg" },
  { id: "shopeepay", label: "ShopeePay", img: "https://files.catbox.moe/gub7ik.jpg" }
];

/* ===============================
   UTIL & STORAGE
================================= */
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  alert("Produk ditambahkan ke keranjang!");
}

/* ===============================
   INDEX PAGE RENDER
================================= */
function renderGames() {
  const grid = document.getElementById("games-grid");
  if (!grid) return;
  grid.innerHTML = "";
  GAMES.forEach(game => {
    const card = document.createElement("a");
    card.className = "game-card";
    card.href = `game.html?game=${game.key}`;
    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}">
      <h3>${game.name}</h3>
    `;
    grid.appendChild(card);
  });
}

/* ===============================
   GAME PAGE RENDER
================================= */
function getGameFromURL() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("game");
  return GAMES.find(g => g.key === key);
}

function renderGamePage() {
  const game = getGameFromURL();
  if (!game) return;

  document.querySelector(".game-name-h1").textContent = game.name;
  document.getElementById("game-banner").src = game.img;
  document.querySelector(".game-description").textContent = game.desc;

  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = "";
  game.products.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = prod.id;
    card.dataset.label = prod.label;
    card.dataset.price = prod.price;
    card.innerHTML = `
      <p>${prod.label}</p>
      <strong>Rp ${prod.price.toLocaleString()}</strong>
    `;
    card.addEventListener("click", () => {
      document.querySelectorAll(".product-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      updateSummary();
    });
    productGrid.appendChild(card);
  });

  const paymentGrid = document.getElementById("payment-grid");
  paymentGrid.innerHTML = "";
  PAYMENTS.forEach(pay => {
    const card = document.createElement("div");
    card.className = "payment-card";
    card.dataset.id = pay.id;
    card.dataset.label = pay.label;
    card.innerHTML = `
      <img src="${pay.img}" alt="${pay.label}">
      <p>${pay.label}</p>
    `;
    card.addEventListener("click", () => {
      document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      updateSummary();
    });
    paymentGrid.appendChild(card);
  });

  document.getElementById("checkout-btn").addEventListener("click", checkout);
}

/* ===============================
   SUMMARY & VOUCHERS
================================= */
function updateSummary() {
  const product = document.querySelector(".product-card.selected");
  const payment = document.querySelector(".payment-card.selected");
  const totalEl = document.getElementById("summary-total");
  const prodEl = document.getElementById("summary-product");
  const payEl = document.getElementById("summary-payment");

  if (!product || !payment) {
    document.getElementById("checkout-btn").disabled = true;
    return;
  }

  const price = parseInt(product.dataset.price);
  prodEl.textContent = product.dataset.label;
  payEl.textContent = payment.dataset.label;
  totalEl.textContent = `Rp ${price.toLocaleString()}`;
  document.getElementById("checkout-btn").disabled = false;
}

document.getElementById("voucher-btn")?.addEventListener("click", () => {
  const code = document.getElementById("voucher-input").value.trim().toUpperCase();
  const status = document.getElementById("voucher-status");
  const voucher = VOUCHERS.find(v => v.code === code);
  if (voucher) {
    status.textContent = `Voucher ${voucher.code} berhasil! Diskon ${voucher.percent}%`;
    status.style.color = "green";
  } else {
    status.textContent = "Voucher tidak valid.";
    status.style.color = "red";
  }
});

/* ===============================
   CHECKOUT
================================= */
function checkout() {
  const userId = document.getElementById("user-id").value.trim();
  const product = document.querySelector(".product-card.selected");
  const payment = document.querySelector(".payment-card.selected");
  if (!userId || !product || !payment) {
    alert("Lengkapi semua data!");
    return;
  }

  const item = {
    game: getGameFromURL().name,
    product: product.dataset.label,
    price: parseInt(product.dataset.price),
    payment: payment.dataset.label,
    userId
  };

  addToCart(item);
  window.location.href = "cart.html";
}

/* ===============================
   CART PAGE
================================= */
function renderCart() {
  const container = document.querySelector(".cart-items-list");
  if (!container) return;
  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-cart">Keranjang kosong</p>`;
    return;
  }

  cart.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-info">
        <img src="${GAMES.find(g => g.name === item.game)?.img}" alt="${item.game}">
        <div>
          <p class="cart-item-title">${item.game}</p>
          <p>${item.product}</p>
        </div>
      </div>
      <div class="cart-item-price">Rp ${item.price.toLocaleString()}</div>
    `;
    container.appendChild(div);
  });
}

/* ===============================
   INIT
================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderGames();
  renderGamePage();
  renderCart();
});