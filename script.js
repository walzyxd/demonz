/* ================== KONFIGURASI ================== */
const ADMIN_WA = "6282298902274";
const ADMIN_EMAIL = "walzlonely@gmail.com";

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
  qs("#user-guide").textContent = game.guide;
  
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
