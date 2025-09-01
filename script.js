/*****************************************************
 * CONFIG DATA
 *****************************************************/
const GAMES = [
  {
    id: "ff",
    name: "Free Fire",
    banner: "https://files.catbox.moe/hugf64.jpg",
    guide: "Masukkan User ID & Server ID (contoh: 123456789 / 1234).",
    requireServer: true,
    products: [
      { id: "ff-5", label: "5 Diamonds", price: 1000 },
      { id: "ff-12", label: "12 Diamonds", price: 2000 },
      { id: "ff-50", label: "50 Diamonds", price: 7000 },
      { id: "ff-70", label: "70 Diamonds", price: 10000 },
      { id: "ff-100", label: "100 Diamonds", price: 14000 }
    ]
  },
  {
    id: "ml",
    name: "Mobile Legends",
    banner: "https://files.catbox.moe/x7jqm9.jpg",
    guide: "Masukkan User ID & Server ID (contoh: 12345678 / 1234).",
    requireServer: true,
    products: [
      { id: "ml-86", label: "86 Diamonds", price: 20000 },
      { id: "ml-172", label: "172 Diamonds", price: 40000 },
      { id: "ml-257", label: "257 Diamonds", price: 60000 },
      { id: "ml-344", label: "344 Diamonds", price: 80000 },
      { id: "ml-514", label: "514 Diamonds", price: 120000 }
    ]
  }
];

const PAYMENTS = [
  { id: "dana", name: "DANA" },
  { id: "ovo", name: "OVO" },
  { id: "gopay", name: "GoPay" },
  { id: "qris", name: "QRIS" }
];

const VOUCHERS = [
  { code: "WALZ10", type: "percent", value: 10, desc: "Diskon 10% untuk semua produk" },
  { code: "WALZ5K", type: "fixed", value: 5000, desc: "Diskon Rp5.000 minimal belanja Rp20.000" }
];

/*****************************************************
 * UTILITAS
 *****************************************************/
function formatRp(num) {
  return "Rp" + num.toLocaleString("id-ID");
}

function findGameById(id) {
  return GAMES.find(g => g.id === id);
}

function calcDiscount(price, voucher) {
  if (!voucher) return 0;
  if (voucher.type === "percent") {
    return Math.floor(price * (voucher.value / 100));
  }
  if (voucher.type === "fixed" && price >= 20000) {
    return voucher.value;
  }
  return 0;
}

/*****************************************************
 * INDEX PAGE
 *****************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "index") initIndex();
  if (page === "game") initGame();
});

function initIndex() {
  const grid = document.getElementById("games-grid");
  if (!grid) return;
  grid.innerHTML = "";
  GAMES.forEach(g => {
    const div = document.createElement("div");
    div.className = "game-card";
    div.innerHTML = `
      <a href="game.html?game=${g.id}">
        <img src="${g.banner}" alt="${g.name}">
        <h3>${g.name}</h3>
      </a>`;
    grid.appendChild(div);
  });

  // slider promo contoh
  const slider = document.getElementById("promo-slider");
  if (slider) {
    slider.innerHTML = `
      <div class="slide"><img src="https://files.catbox.moe/uw8ytr.jpg" alt="Promo 1"></div>
      <div class="slide"><img src="https://files.catbox.moe/q2tsnd.jpg" alt="Promo 2"></div>
    `;
  }
}

/*****************************************************
 * GAME PAGE
 *****************************************************/
let currentGame = null;
let selectedProduct = null;
let selectedPayment = null;
let appliedVoucher = null;

function initGame() {
  const params = new URLSearchParams(window.location.search);
  const gid = params.get("game");
  currentGame = findGameById(gid);
  if (!currentGame) return;

  // isi header game
  document.getElementById("game-banner").src = currentGame.banner;
  document.getElementById("game-title").textContent = currentGame.name;
  document.getElementById("game-guide").textContent = currentGame.guide;
  if (currentGame.requireServer) {
    document.getElementById("server-group").style.display = "block";
  }

  // produk
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  currentGame.products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.dataset.id = p.id;
    div.innerHTML = `<h4>${p.label}</h4><p>${formatRp(p.price)}</p>`;
    div.addEventListener("click", () => selectProduct(p, div));
    grid.appendChild(div);
  });

  // payment
  const pg = document.getElementById("payment-grid");
  pg.innerHTML = "";
  PAYMENTS.forEach(pay => {
    const div = document.createElement("div");
    div.className = "payment-card";
    div.dataset.id = pay.id;
    div.innerHTML = `<h4>${pay.name}</h4><p class="pay-price">Pilih nominal dulu</p>`;
    div.addEventListener("click", () => selectPayment(pay, div));
    pg.appendChild(div);
  });

  // voucher tombol
  document.getElementById("voucher-btn").addEventListener("click", applyVoucher);
  document.getElementById("voucher-list-btn").addEventListener("click", showVoucherList);

  // checkout
  document.getElementById("checkout-btn").addEventListener("click", openCheckout);
}

/*****************************************************
 * PRODUK & PEMBAYARAN
 *****************************************************/
function selectProduct(p, el) {
  selectedProduct = p;
  document.querySelectorAll(".product-card").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  updateSummary();
}

function selectPayment(p, el) {
  selectedPayment = p;
  document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  updateSummary();
}

function finalPrice() {
  if (!selectedProduct) return 0;
  const base = selectedProduct.price;
  const disc = appliedVoucher ? calcDiscount(base, appliedVoucher) : 0;
  return base - disc;
}

function updateSummary() {
  const summaryBox = document.getElementById("summary-box");
  const priceBox = document.getElementById("price-box");
  const btn = document.getElementById("checkout-btn");

  if (!selectedProduct || !selectedPayment) {
    summaryBox.innerHTML = `<p class="muted">Pilih nominal & metode bayar untuk melihat total.</p>`;
    priceBox.style.display = "none";
    btn.disabled = true;
    return;
  }

  const base = selectedProduct.price;
  const disc = appliedVoucher ? calcDiscount(base, appliedVoucher) : 0;
  const total = finalPrice();

  summaryBox.innerHTML = `
    <p><strong>Game:</strong> ${currentGame.name}</p>
    <p><strong>Produk:</strong> ${selectedProduct.label}</p>
    <p><strong>Metode:</strong> ${selectedPayment.name}</p>
    <p><strong>Harga:</strong> ${formatRp(base)}</p>
    ${disc > 0 ? `<p><strong>Diskon:</strong> -${formatRp(disc)} (${appliedVoucher.code})</p>` : ""}
  `;
  priceBox.style.display = "flex";
  document.getElementById("total-price").textContent = formatRp(total);
  btn.disabled = false;

  // update harga di kartu pembayaran
  document.querySelectorAll(".payment-card").forEach(card => {
    card.querySelector(".pay-price").textContent = formatRp(total);
  });
}

/*****************************************************
 * VOUCHER
 *****************************************************/
function applyVoucher() {
  const input = document.getElementById("voucher-input").value.trim().toUpperCase();
  const status = document.getElementById("voucher-status");
  const found = VOUCHERS.find(v => v.code === input);
  if (!found) {
    status.textContent = "Kode voucher tidak valid.";
    appliedVoucher = null;
  } else {
    appliedVoucher = found;
    status.textContent = `Voucher ${found.code} diterapkan: ${found.desc}`;
  }
  updateSummary();
}

function showVoucherList() {
  const modal = document.getElementById("voucher-list-modal");
  const overlay = document.getElementById("modal-overlay");

  modal.innerHTML = `<h3>Daftar Voucher</h3>
    <ul class="voucher-list">
      ${VOUCHERS.map(v => `
        <li>
          <span><strong>${v.code}</strong> - ${v.desc}</span>
          <button class="btn-apply" data-code="${v.code}">Gunakan</button>
        </li>
      `).join("")}
    </ul>
    <button class="btn btn-secondary btn-block" id="close-voucher">Tutup</button>`;

  modal.classList.add("active");
  overlay.classList.add("active");

  document.querySelectorAll(".btn-apply").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("voucher-input").value = btn.dataset.code;
      modal.classList.remove("active");
      overlay.classList.remove("active");
      applyVoucher();
    });
  });

  document.getElementById("close-voucher").addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
}

/*****************************************************
 * CHECKOUT
 *****************************************************/
function openCheckout() {
  const modal = document.getElementById("checkout-modal");
  const overlay = document.getElementById("modal-overlay");

  const userId = document.getElementById("user-id").value;
  const serverId = document.getElementById("server-id")?.value || "-";

  modal.innerHTML = `
    <h3>Detail Transaksi</h3>
    <p><strong>Game:</strong> ${currentGame.name}</p>
    <p><strong>User ID:</strong> ${userId} ${currentGame.requireServer ? `/ ${serverId}` : ""}</p>
    <p><strong>Produk:</strong> ${selectedProduct.label}</p>
    <p><strong>Pembayaran:</strong> ${selectedPayment.name}</p>
    <p><strong>Total:</strong> ${formatRp(finalPrice())}</p>
    ${appliedVoucher ? `<p><strong>Voucher:</strong> ${appliedVoucher.code}</p>` : ""}
    <button class="btn btn-primary btn-block" id="pay-now">Bayar Sekarang</button>
    <button class="btn btn-secondary btn-block" id="close-checkout">Batal</button>
  `;

  modal.classList.add("active");
  overlay.classList.add("active");

  document.getElementById("pay-now").addEventListener("click", () => {
    alert("Pesanan berhasil dibuat! Silakan lanjutkan pembayaran.");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.getElementById("close-checkout").addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
}