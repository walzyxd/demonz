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

const payments = [
  { id: "qris", name: "QRIS", logo: "https://i.ibb.co/pJxHd9c/qris.png" },
  { id: "dana", name: "Dana", logo: "https://i.ibb.co/z7WdV3j/dana.png" },
  { id: "ovo", name: "OVO", logo: "https://i.ibb.co/wKqZzNv/ovo.png" },
  { id: "gopay", name: "GoPay", logo: "https://i.ibb.co/VjzjrvQ/gopay.png" },
  { id: "shopeepay", name: "ShopeePay", logo: "https://i.ibb.co/sb3pbDK/shopeepay.png" },
];

// ================= RENDER GAMES =================
if (document.getElementById("games-grid")) {
  const gameGrid = document.getElementById("games-grid");
  games.forEach((g) => {
    const card = document.createElement("div");
    card.className = "game-card fade-in";
    card.innerHTML = `
      <img src="${g.banner}" alt="${g.name}">
      <h3>${g.name}</h3>
    `;
    card.addEventListener("click", () => {
      localStorage.setItem("selectedGame", g.id);
      window.location.href = "game.html";
    });
    gameGrid.appendChild(card);
  });
}

// ================= GAME DETAIL =================
if (document.getElementById("product-grid")) {
  const selectedGameId = localStorage.getItem("selectedGame");
  const game = games.find((g) => g.id === selectedGameId);

  if (game) {
    document.getElementById("game-banner").src = game.banner;
    document.querySelector(".game-name-h1").textContent = game.name;

    // Produk
    const productGrid = document.getElementById("product-grid");
    game.products.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <span>${p.name}</span>
        <span class="price">Rp ${p.price.toLocaleString()}</span>
      `;
      card.addEventListener("click", () => {
        document.querySelectorAll(".product-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        localStorage.setItem("selectedProduct", JSON.stringify(p));
        enableCheckout();
      });
      productGrid.appendChild(card);
    });

    // Pembayaran
    const paymentGrid = document.getElementById("payment-grid");
    payments.forEach((pm) => {
      const card = document.createElement("div");
      card.className = "payment-card";
      card.innerHTML = `
        <img src="${pm.logo}" alt="${pm.name}">
        <span>${pm.name}</span>
      `;
      card.addEventListener("click", () => {
        document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        localStorage.setItem("selectedPayment", JSON.stringify(pm));
        enableCheckout();
      });
      paymentGrid.appendChild(card);
    });

    // Checkout
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.addEventListener("click", () => {
      const userId = document.getElementById("user-id").value.trim();
      const serverId = document.getElementById("server-id").value.trim();
      if (!userId) {
        const input = document.getElementById("user-id");
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 500);
        alert("User ID wajib diisi!");
        return;
      }
      localStorage.setItem("userId", userId);
      localStorage.setItem("serverId", serverId);
      window.location.href = "cart.html";
    });

    function enableCheckout() {
      if (localStorage.getItem("selectedProduct") && localStorage.getItem("selectedPayment")) {
        checkoutBtn.disabled = false;
      }
    }
  }
}

// ================= CART =================
if (document.getElementById("summary-game")) {
  const gameId = localStorage.getItem("selectedGame");
  const product = JSON.parse(localStorage.getItem("selectedProduct") || "{}");
  const payment = JSON.parse(localStorage.getItem("selectedPayment") || "{}");
  const userId = localStorage.getItem("userId");
  const serverId = localStorage.getItem("serverId");
  const game = games.find((g) => g.id === gameId);

  if (game && product && payment) {
    document.getElementById("summary-game").textContent = game.name;
    document.getElementById("summary-user").textContent = userId || "-";
    document.getElementById("summary-server").textContent = serverId || "-";
    document.getElementById("summary-product").textContent = product.name;
    document.getElementById("summary-payment").textContent = payment.name;
    document.getElementById("summary-total").textContent = "Rp " + product.price.toLocaleString();

    document.getElementById("buy-btn").addEventListener("click", () => {
      const waNumber = "6281234567890"; // ganti dengan nomor admin
      const pesan = `Halo Admin, saya ingin top up:

Game: ${game.name}
User ID: ${userId}
Server: ${serverId}
Produk: ${product.name}
Metode Bayar: ${payment.name}
Total: Rp ${product.price.toLocaleString()}

Terima kasih 🙏`;

      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesan)}`;
      window.open(url, "_blank");
    });
  }
}

// ================= SLIDER =================
if (document.getElementById("promo-slider")) {
  const track = document.getElementById("promo-slider");
  const dotsContainer = document.getElementById("slider-dots");
  const slides = track.children;
  let currentIndex = 0;

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function goToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
    dotsContainer.children[index].classList.add("active");
    currentIndex = index;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 4000);
}