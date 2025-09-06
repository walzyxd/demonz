/* ================== KONFIGURASI ================== */
const ADMIN_WA = "6282298902274";
const ADMIN_EMAIL = "walzlonely@gmail.com";

const GAMES = [
  { key: "free-fire", name: "Free Fire", img: "https://files.catbox.moe/ldccdf.jpg", hasServerId: false, guide: "Temukan User ID Anda di bawah nama panggilan pada menu profil game." },
  { key: "mobile-legends", name: "Mobile Legends", img: "https://files.catbox.moe/6ns43w.jpg", hasServerId: true, guide: "Temukan User ID dan Server ID di bawah nama panggilan saat Anda mengklik avatar profil." },
  { key: "genshin-impact", name: "Genshin Impact", img: "https://files.catbox.moe/he48wt.jpg", hasServerId: false, guide: "User ID (9 digit) terletak di sudut kanan bawah layar saat Anda berada di dalam game." },
  { key: "pubg-mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", hasServerId: false, guide: "Temukan User ID Anda di sudut kanan atas lobi game saat mengklik profil." },
  { key: "valorant", name: "Valorant", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", hasServerId: false, guide: "User ID (Riot ID) dapat ditemukan di bawah nama akun Anda di bagian atas layar." },
  { key: "garena-delta-force", name: "Garena Delta Force", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", hasServerId: false, guide: "Temukan User ID Anda di profil game." },
  { key: "garena-undawn", name: "Garena Undawn", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", hasServerId: true, guide: "Temukan User ID dan Server ID di profil game Anda." },
  { key: "call-of-duty", name: "Call of Duty", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", hasServerId: false, guide: "Temukan User ID Anda di profil game." },
  { key: "eggy-party", name: "Eggy Party", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", hasServerId: true, guide: "Temukan User ID dan Server ID di profil game Anda." },
];

const PROMOS = [
  { title: "Top Up Diamond FF Termurah", img: "https://files.catbox.moe/ijvqjo.png", gameKey: "free-fire" },
  { title: "Top Up Starlight MLBB Harga Cuan", img: "https://files.catbox.moe/dpr6d2.jpg", gameKey: "mobile-legends" },
  { title: "Promo UC PUBG Mobile Khusus Member", img: "https://files.catbox.moe/w43dgb.jpg", gameKey: "pubg-mobile" },
  { title: "Blessing of the Welkin Moon Genshin", img: "https://files.catbox.moe/uusd4l.jpg", gameKey: "genshin-impact" },
];

const PAYMENTS = [
  { id: "dana", name: "DANA", img: "https://files.catbox.moe/0j5opw.png", type: "ewallet", info: { number: "083139243389", name: "TI** SUT***" } },
  { id: "gopay", name: "GoPay", img: "https://files.catbox.moe/37vcbe.jpg", type: "ewallet", info: { number: "082116690164", name: "TI** SUT***" } },
  { id: "qris", name: "QRIS", img: "https://files.catbox.moe/pa0iwo.png", type: "qris", info: { qrisImg: "https://files.catbox.moe/pa0iwo.png" } },
];

const PRODUCTS = {
  "free-fire": [
    { id: "ff-5", label: "5 Diamonds", price: 901 },
    { id: "ff-12", label: "12 Diamonds", price: 1802 },
    { id: "ff-70", label: "70 Diamonds", price: 9009 },
    { id: "ff-140", label: "140 Diamonds", price: 18018 },
    { id: "ff-355", label: "355 Diamonds", price: 45045 },
    { id: "ff-720", label: "720 Diamonds", price: 90090 },
  ],
  "mobile-legends": [
    { id: "ml-3", label: "3 Diamonds", price: 1171 },
    { id: "ml-5", label: "5 Diamonds", price: 1423 },
    { id: "ml-12", label: "12 Diamonds", price: 3323 },
    { id: "ml-19", label: "19 Diamonds", price: 5223 },
    { id: "ml-28", label: "28 Diamonds", price: 7600 },
  ],
  "genshin-impact": [
    { id: "gi-60", label: "60 Genesis Crystals", price: 14865 },
    { id: "gi-330", label: "330 Genesis Crystals", price: 72973 },
    { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973, badges: ["welkin"] },
  ],
  "pubg-mobile": [
    { id: "pubg-30", label: "30 UC", price: 7000 },
    { id: "pubg-60", label: "60 UC", price: 14000 },
    { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
  ],
  "valorant": [
    { id: "val-475", label: "475 Points", price: 54349 },
    { id: "val-1000", label: "1000 Points", price: 108799 },
  ],
  "garena-delta-force": [
    { id: "gdf-50", label: "50 G-Coin", price: 15000 },
    { id: "gdf-100", label: "100 G-Coin", price: 30000 },
  ],
  "garena-undawn": [
    { id: "gu-30", label: "30 Coupons", price: 10000 },
    { id: "gu-100", label: "100 Coupons", price: 32000 },
  ],
  "call-of-duty": [
    { id: "cod-80", label: "80 CP", price: 15000 },
    { id: "cod-400", label: "400 CP", price: 70000 },
  ],
  "eggy-party": [
    { id: "ep-60", label: "60 Egg Coins", price: 10000 },
    { id: "ep-120", label: "120 Egg Coins", price: 20000 },
  ],
};

const VOUCHERS = [
  { code: "WALZSHOP", percent: 5, description: "Diskon 5% untuk semua produk" },
  { code: "HEMAT5000", percent: 0, fixed: 5000, minPurchase: 50000, description: "Diskon Rp5.000 (min. Rp50.000)" },
];

/* ================== HELPERS ================== */
const qs = (s, p = document) => p.querySelector(s);
const qsa = (s, p = document) => Array.from(p.querySelectorAll(s));
const fmtIDR = n => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

let selectedProduct = null;
let selectedPayment = null;
let appliedVoucher = null;

function setVoucherStatus(text, isError = false) {
  const el = qs("#voucher-status");
  if (!el) return;
  el.textContent = text;
  el.className = `status-text ${isError ? 'error' : 'success'}`;
}

function calcDiscount(price, voucher) {
  let discount = 0;
  if (voucher.percent) discount = Math.floor(price * voucher.percent / 100);
  if (voucher.fixed) discount = voucher.fixed;
  if (voucher.maxDiscount) discount = Math.min(discount, voucher.maxDiscount);
  return Math.max(0, discount);
}

function finalPrice() {
  if (!selectedProduct) return 0;
  const base = selectedProduct.price;
  const disc = appliedVoucher ? calcDiscount(base, appliedVoucher) : 0;
  return Math.max(0, base - disc);
}

function refreshSummary() {
  const productPriceEl = qs("#summary-product-price");
  const voucherRowEl = qs("#summary-voucher-row");
  const voucherPriceEl = qs("#summary-voucher-price");
  const totalEl = qs("#total-price");
  const checkoutBtn = qs("#checkout-btn");

  if (productPriceEl && totalEl && checkoutBtn) {
    if (selectedProduct && selectedPayment) {
      const basePrice = selectedProduct.price;
      const finalP = finalPrice();
      const discount = basePrice - finalP;

      productPriceEl.textContent = fmtIDR(basePrice);
      totalEl.textContent = fmtIDR(finalP);

      if (voucherRowEl && voucherPriceEl) {
        if (appliedVoucher && discount > 0) {
          voucherRowEl.style.display = "flex";
          voucherPriceEl.textContent = `- ${fmtIDR(discount)}`;
        } else {
          voucherRowEl.style.display = "none";
        }
      }

      checkoutBtn.disabled = false;
    } else {
      productPriceEl.textContent = "-";
      totalEl.textContent = "-";
      if (voucherRowEl) voucherRowEl.style.display = "none";
      checkoutBtn.disabled = true;
    }
  }
}

function validateForm(hasServer) {
  let ok = true;
  const user = qs("#user-id").value.trim();
  const server = hasServer ? qs("#server-id").value.trim() : "";

  const errorUserEl = qs("#error-user");
  const errorProductEl = qs("#error-product");
  const errorPaymentEl = qs("#error-payment");

  if(errorUserEl) errorUserEl.textContent = "";
  if(errorProductEl) errorProductEl.textContent = "";
  if(errorPaymentEl) errorPaymentEl.textContent = "";

  if (!user) { if(errorUserEl) errorUserEl.textContent = "User ID wajib diisi."; ok = false; }
  if (hasServer && !server) { if(errorUserEl) errorUserEl.textContent = "User ID dan Server ID wajib diisi."; ok = false; }
  if (!selectedProduct) { if(errorProductEl) errorProductEl.textContent = "Pilih salah satu nominal."; ok = false; }
  if (!selectedPayment) { if(errorPaymentEl) errorPaymentEl.textContent = "Pilih salah satu metode bayar."; ok = false; }

  return ok;
}

function saveTransactionData(game) {
  const userId = qs("#user-id").value.trim();
  const serverId = game.hasServerId ? qs("#server-id").value.trim() : null;
  const transactionData = {
    game: game.name,
    userId: userId,
    serverId: serverId,
    product: selectedProduct.label,
    payment: selectedPayment.name,
    price: selectedProduct.price,
    voucher: appliedVoucher,
    finalPrice: finalPrice()
  };
  localStorage.setItem("walzShopTransaction", JSON.stringify(transactionData));
}

function updateCartPage() {
  const data = JSON.parse(localStorage.getItem("walzShopTransaction"));
  if (!data) {
    qs(".main .container").innerHTML = `<p class="error-text" style="text-align:center;">Tidak ada data transaksi. Silakan kembali ke halaman game.</p><a href="index.html" class="btn btn-confirm" style="margin-top:20px;">Kembali ke Beranda</a>`;
    return;
  }

  qs("#summary-game").textContent = data.game;
  qs("#summary-user").textContent = data.userId;
  qs("#summary-product").textContent = data.product;
  qs("#summary-payment").textContent = data.payment;
  qs("#summary-total").textContent = fmtIDR(data.finalPrice);

  const serverRow = qs("#server-row");
  if (data.serverId) {
    serverRow.style.display = "table-row";
    qs("#summary-server").textContent = data.serverId;
  } else {
    serverRow.style.display = "none";
  }

  const voucherRow = qs("#voucher-row");
  if (data.voucher) {
    const discount = data.price - data.finalPrice;
    if (discount > 0) {
      voucherRow.style.display = "table-row";
      qs("#summary-voucher").textContent = `- ${fmtIDR(discount)}`;
    } else {
      voucherRow.style.display = "none";
    }
  } else {
    voucherRow.style.display = "none";
  }

  const buyBtn = qs("#buy-btn");
  if (buyBtn) {
    const waMsg = `Halo Admin, saya ingin konfirmasi pesanan top-up:
*Game:* ${data.game}
*User ID:* ${data.userId}
${data.serverId ? `*Server ID:* ${data.serverId}\n` : ""}*Produk:* ${data.product}
*Metode:* ${data.payment}
*Total:* ${fmtIDR(data.finalPrice)}
Terima kasih.`;
    buyBtn.onclick = () => window.open(`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(waMsg)}`, '_blank');
  }
}

/* ================== INIT ================== */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const navToggle = qs(".nav-toggle");
  const nav = qs(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => nav.classList.toggle("active"));
  }

  if (page === "index") {
    initIndexPage();
  } else if (page === "game") {
    initGamePage();
  } else if (page === "cart") {
    updateCartPage();
  }
});

function initIndexPage() {
  const gamesGrid = qs("#games-grid");
  gamesGrid.innerHTML = GAMES.map(g => `
    <a href="game.html?key=${g.key}" class="game-card">
      <img src="${g.img}" alt="${g.name}">
      <p>${g.name}</p>
    </a>
  `).join("");

  const promoSlider = qs("#promo-slider");
  const sliderDots = qs("#slider-dots");
  promoSlider.innerHTML = PROMOS.map(p => `
    <div class="slider__item">
      <a href="game.html?key=${p.gameKey}">
        <img src="${p.img}" alt="${p.title}">
      </a>
    </div>
  `).join("");
  
  if (PROMOS.length > 0) {
      PROMOS.forEach(() => {
          const dot = document.createElement("div");
          dot.classList.add("slider__dot");
          sliderDots.appendChild(dot);
      });
      
      const dots = qsa(".slider__dot");
      const slides = qsa(".slider__item");
      let currentSlide = 0;
      
      function updateSlider() {
          promoSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
          dots.forEach((dot, i) => {
              dot.classList.toggle("active", i === currentSlide);
          });
      }
      
      dots.forEach((dot, i) => {
          dot.addEventListener("click", () => {
              currentSlide = i;
              updateSlider();
          });
      });
      
      setInterval(() => {
          currentSlide = (currentSlide + 1) % slides.length;
          updateSlider();
      }, 4000);
      
      updateSlider();
  }
}

function initGamePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameKey = urlParams.get('key');
  const game = GAMES.find(g => g.key === gameKey);

  if (!game) {
    qs(".main .container").innerHTML = `<p class="error-text" style="text-align:center;">Game tidak ditemukan. Silakan kembali ke halaman utama.</p><a href="index.html" class="btn btn-confirm" style="margin-top:20px;">Kembali ke Beranda</a>`;
    return;
  }

  qs("#game-banner").src = game.img;
  qs("#game-title").textContent = game.name;
  
  const serverIdInput = qs("#server-id");
  if (!game.hasServerId) {
    serverIdInput.style.display = "none";
  }

  const productGrid = qs("#product-grid");
  const paymentGrid = qs("#payment-grid");
  
  productGrid.innerHTML = (PRODUCTS[gameKey] || []).map(p => `
    <div class="grid-item" data-id="${p.id}" data-price="${p.price}">
      ${p.badges ? p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join("") : ""}
      <div class="label">${p.label}</div>
      <div class="price">${fmtIDR(p.price)}</div>
    </div>
  `).join("");
  
  paymentGrid.innerHTML = PAYMENTS.map(pay => `
    <div class="grid-item" data-id="${pay.id}">
      <img src="${pay.img}" alt="${pay.name}">
      <div class="label">${pay.name}</div>
    </div>
  `).join("");

  qsa(".product-grid .grid-item").forEach(item => {
    item.addEventListener("click", () => {
      qsa(".product-grid .grid-item").forEach(p => p.classList.remove("selected"));
      item.classList.add("selected");
      selectedProduct = {
        id: item.dataset.id,
        label: item.querySelector(".label").textContent,
        price: parseInt(item.dataset.price)
      };
      appliedVoucher = null;
      qs("#voucher-input").value = "";
      setVoucherStatus("");
      refreshSummary();
    });
  });

  qsa(".payment-grid .grid-item").forEach(item => {
    item.addEventListener("click", () => {
      qsa(".payment-grid .grid-item").forEach(p => p.classList.remove("selected"));
      item.classList.add("selected");
      selectedPayment = PAYMENTS.find(p => p.id === item.dataset.id);
      refreshSummary();
    });
  });

  qs("#voucher-btn").addEventListener("click", () => {
    const code = qs("#voucher-input").value.trim().toUpperCase();
    if (!selectedProduct) {
      setVoucherStatus("Pilih nominal terlebih dahulu.", true);
      return;
    }
    const voucher = VOUCHERS.find(v => v.code === code);
    if (!voucher) {
      setVoucherStatus("Kode voucher tidak valid.", true);
      appliedVoucher = null;
    } else if (voucher.minPurchase && selectedProduct.price < voucher.minPurchase) {
      setVoucherStatus(`Minimal transaksi ${fmtIDR(voucher.minPurchase)}.`, true);
      appliedVoucher = null;
    } else {
      appliedVoucher = voucher;
      setVoucherStatus(`Voucher berhasil diterapkan.`, false);
    }
    refreshSummary();
  });
  
  qs("#checkout-btn").addEventListener("click", () => {
    if (validateForm(game.hasServerId)) {
      saveTransactionData(game);
      window.location.href = "cart.html";
    }
  });
}
