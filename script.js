/* ================== KONFIGURASI ================== */
const ADMIN_WA = "6282298902274";
const ADMIN_EMAIL = "walzlonely@gmail.com";

/* ================== DATA VOUCHER ================== */
const VOUCHERS = [
  { code: "WALZSHOP", percent: 5, description: "Diskon 5% untuk semua produk" },
  { code: "WALZPROMO", percent: 5, description: "Promo khusus 5% semua produk" },
  { code: "HEMAT5000", percent: 0, fixed: 5000, minPurchase: 50000, description: "Diskon Rp5.000 (min. Rp50.000)" },
  { code: "TOPUPSPECIAL", percent: 15, description: "Diskon 15% untuk top up pertama" },
  { code: "FREEDIAMOND", percent: 0, fixed: 20000, maxDiscount: 20000, description: "Diskon Rp20.000 (maks. Rp20.000)" }
];

/* ================== DATA GAMES ================== */
const GAMES = [
  { key: "free-fire", name: "Free Fire", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", hasServerId: false, guide: "Temukan User ID Anda di bawah nama panggilan pada menu profil game." },
  { key: "mobile-legends", name: "Mobile Legends", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", hasServerId: true, guide: "Temukan User ID dan Server ID di bawah nama panggilan saat Anda mengklik avatar profil." },
  { key: "honor-of-kings", name: "Honor of Kings", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", hasServerId: false, guide: "User ID Anda ada di bagian bawah layar saat Anda membuka profil." },
  { key: "genshin-impact", name: "Genshin Impact", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", hasServerId: false, guide: "User ID (9 digit) terletak di sudut kanan bawah layar saat Anda berada di dalam game." },
  { key: "roblox", name: "Roblox", img: "https://i.supaimg.com/c8d8f1c7-b02c-46a3-a6e5-63a6487d622c.jpg", hasServerId: false, guide: "Top up menggunakan Gift Card yang akan dikirim langsung ke akun Anda." },
  { key: "super-sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", hasServerId: false, guide: "User ID dapat ditemukan di menu profil dalam game." },
  { key: "clash-of-clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", hasServerId: false, guide: "User ID (Tag Pemain) adalah kombinasi huruf dan angka yang dimulai dengan tanda pagar (#)." },
  { key: "blood-strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", hasServerId: false, guide: "ID Anda dapat ditemukan di profil dalam game." },
  { key: "pubg-mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", hasServerId: false, guide: "Temukan User ID Anda di sudut kanan atas lobi game saat mengklik profil." },
  { key: "garena-delta-force", name: "Garena Delta Force", img: "https://files.catbox.moe/qul2qy.png", hasServerId: false, guide: "Buka menu profil di game dan Anda dapat menemukan User ID Anda." },
  { key: "call-of-duty", name: "Call Of Duty", img: "https://files.catbox.moe/i1kcw5.webp", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil game." },
  { key: "valorant", name: "Valorant", img: "https://files.catbox.moe/3h9932.png", hasServerId: false, guide: "User ID (Riot ID) dapat ditemukan di bawah nama akun Anda di bagian atas layar." },
  { key: "eggy-party", name: "Eggy Party", img: "https://files.catbox.moe/59mdks.webp", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil dalam game." },
  { key: "garena-undawn", name: "Garena Undawn", img: "https://files.catbox.moe/o5bto9.webp", hasServerId: false, guide: "Buka menu profil dan User ID Anda akan terlihat." },
];

/* ================== DATA PROMO ================== */
const PROMOS = [
  { title: "Top Up Diamond FF Termurah", img: "https://files.catbox.moe/ijvqjo.png", gameKey: "free-fire" },
  { title: "Top Up Starlight MLBB Harga Cuan", img: "https://files.catbox.moe/dpr6d2.jpg", gameKey: "mobile-legends" },
  { title: "Promo UC PUBG Mobile Khusus Member", img: "https://files.catbox.moe/w43dgb.jpg", gameKey: "pubg-mobile" },
  { title: "Blessing of the Welkin Moon Genshin", img: "https://files.catbox.moe/uusd4l.jpg", gameKey: "genshin-impact" },
];

/* ================== DATA PAYMENT ================== */
const PAYMENTS = [
  { id: "dana", name: "DANA", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", type: "ewallet", info: { number: "083139243389", name: "TI** SUT***" } },
  { id: "gopay", name: "GoPay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", type: "ewallet", info: { number: "082116690164", name: "TI** SUT***" } },
  { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", type: "qris", info: { qrisImg: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg" } },
  { id: "krom", name: "Krom Bank", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", type: "bank_transfer", info: { number: "770072009565", name: "TI** SUT***" } },
];

/* ================== DATA PRODUK ================== */
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

/* ================== UTILITAS & BANTUAN ================== */
const qs = (s, p = document) => p.querySelector(s);
const qsa = (s, p = document) => Array.from(p.querySelectorAll(s));
const fmtIDR = n => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

function showOverlay() {
  qs("#modal-overlay")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function hideOverlay() {
  qs("#modal-overlay")?.classList.remove("active");
  document.body.style.overflow = "";
}

function openModal(id) {
  const m = qs(`#${id}`);
  if (!m) return;
  showOverlay();
  m.classList.add("active");
}

function closeModal(id) {
  const m = qs(`#${id}`);
  if (!m) return;
  m.classList.remove("active");
  const anyOpen = qsa(".modal.active").length > 0;
  if (!anyOpen) hideOverlay();
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = "Disalin!";
    setTimeout(() => btn.textContent = old, 1500);
  });
}

/* ================== INISIALISASI ================== */
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  // Toggle navigasi di perangkat seluler
  const navToggle = qs(".nav-toggle");
  const nav = qs(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => nav.classList.toggle("active"));
  }

  // Menutup modal saat mengklik overlay
  const overlay = qs("#modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target.id === "modal-overlay") {
        qsa(".modal.active").forEach(m => m.classList.remove("active"));
        hideOverlay();
      }
    });
  }

  if (page === "index") initIndex();
  if (page === "game") initGame();
});

/* ================== LOGIKA HALAMAN BERANDA ================== */
function initIndex() {
  // Render grid game
  const grid = qs("#games-grid");
  if (grid) {
    grid.innerHTML = "";
    GAMES.forEach(g => {
      const a = document.createElement("a");
      a.className = "game-card";
      a.href = `game.html?key=${g.key}`;
      a.innerHTML = `
        <img src="${g.img}" alt="${g.name}">
        <p>${g.name}</p>
      `;
      grid.appendChild(a);
    });
  }

  // Logika slider promo
  const track = qs("#promo-slider");
  const dots = qs("#slider-dots");
  if (track && dots) {
    track.innerHTML = "";
    dots.innerHTML = "";
    PROMOS.forEach((p, idx) => {
      const item = document.createElement("a");
      item.className = "slider__item";
      item.href = `game.html?key=${p.gameKey}`;
      item.style.backgroundImage = `url(${p.img})`;
      track.appendChild(item);

      const dot = document.createElement("button");
      dot.className = "slider__dot";
      dot.addEventListener("click", () => go(idx));
      dots.appendChild(dot);
    });

    const slides = qsa(".slider__item", track);
    const dotEls = qsa(".slider__dot", dots);
    let current = 0;

    function render() {
      if (slides.length > 0) {
        track.style.transform = `translateX(-${current * 100}%)`;
      }
      dotEls.forEach(d => d.classList.remove("active"));
      if (dotEls[current]) dotEls[current].classList.add("active");
    }

    function next() {
      current = (current + 1) % slides.length;
      render();
    }
    
    function go(i) {
      current = i;
      render();
      if (slides.length > 1) {
        clearInterval(timer);
        timer = setInterval(next, 4000);
      }
    }

    let timer = slides.length > 1 ? setInterval(next, 4000) : null;
    render();
  }
}

/* ================== LOGIKA HALAMAN GAME ================== */
let selectedProduct = null;
let selectedPayment = null;
let appliedVoucher = null;

function initGame() {
  const url = new URLSearchParams(location.search);
  const key = url.get("key");
  const game = GAMES.find(g => g.key === key);
  
  if (!game) {
    qs(".container.game-page").innerHTML = `<div class="card"><p class="muted">Game tidak ditemukan. Silakan kembali ke beranda.</p><div style="margin-top:8px"><a class="btn btn-ghost" href="index.html">Kembali</a></div></div>`;
    return;
  }

  // Atur konten halaman
  qs("#game-title").textContent = game.name;
  const banner = qs("#game-banner");
  banner.src = game.img;
  banner.alt = game.name;
  qs("#game-guide").textContent = game.guide;
  const serverGroup = qs("#server-group");
  serverGroup.style.display = game.hasServerId ? "block" : "none";

  // Render produk
  const productGrid = qs("#product-grid");
  const products = PRODUCTS[game.key] || [];
  productGrid.classList.add("items-grid");
  productGrid.innerHTML = "";
  if (products.length > 0) {
    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "item product-card";
      div.dataset.id = p.id;
      div.dataset.price = p.price;
      div.innerHTML = `
        <div class="label">${p.label}</div>
        <div class="price">${fmtIDR(p.price)}</div>
        ${p.badges ? p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join("") : ""}
      `;
      div.addEventListener("click", () => {
        selectedProduct = p;
        appliedVoucher = null; 
        setVoucherStatus("");
        qs("#voucher-input").value = "";
        refreshSelections();
      });
      productGrid.appendChild(div);
    });
  } else {
    productGrid.innerHTML = `<p class="muted">Produk untuk game ini belum tersedia.</p>`;
  }

  // Render metode pembayaran
  const paymentGrid = qs("#payment-grid");
  paymentGrid.classList.add("items-grid");
  paymentGrid.innerHTML = "";
  if (PAYMENTS.length > 0) {
    PAYMENTS.forEach(pay => {
      const div = document.createElement("div");
      div.className = "item payment-card";
      div.dataset.id = pay.id;
      div.innerHTML = `
        <img class="pay-logo" src="${pay.img}" alt="${pay.name}">
        <div class="label">${pay.name}</div>
      `;
      div.addEventListener("click", () => {
        selectedPayment = pay;
        refreshSelections();
      });
      paymentGrid.appendChild(div);
    });
  } else {
    paymentGrid.innerHTML = `<p class="muted">Metode pembayaran belum tersedia.</p>`;
  }

  // Fungsionalitas Voucher
  const voucherBtn = qs("#voucher-btn");
  const voucherListBtn = qs("#voucher-list-btn");
  const voucherInput = qs("#voucher-input");

  if (voucherBtn) {
    voucherBtn.addEventListener("click", () => {
      if (!selectedProduct) {
        setVoucherStatus("Silakan pilih nominal terlebih dahulu.", true);
        return;
      }
      const code = voucherInput.value.trim().toUpperCase();
      const v = VOUCHERS.find(x => x.code === code);
      appliedVoucher = null;
      if (!v) {
        setVoucherStatus("Kode voucher tidak valid.", true);
        refreshSummary();
        return;
      }
      if (v.minPurchase && selectedProduct.price < v.minPurchase) {
        setVoucherStatus(`Minimal transaksi ${fmtIDR(v.minPurchase)}.`, true);
        refreshSummary();
        return;
      }

      appliedVoucher = v;
      const discount = calcDiscount(selectedProduct.price, v);
      
      const originalText = voucherBtn.textContent;
      voucherBtn.textContent = "Berhasil!";
      voucherBtn.classList.add("btn-success");
      setTimeout(() => {
        voucherBtn.textContent = originalText;
        voucherBtn.classList.remove("btn-success");
      }, 2000);

      setVoucherStatus(`Voucher ${v.code} diterapkan. Diskon ${fmtIDR(discount)}.`, false);
      refreshSummary();
    });
  }

  if (voucherListBtn) {
    voucherListBtn.addEventListener("click", () => {
      const modal = qs("#voucher-list-modal");
      modal.innerHTML = `
        <div class="modal__head">
          <div class="modal__title">Daftar Kode Voucher</div>
          <button class="modal__close" data-close="voucher-list-modal">&times;</button>
        </div>
        <div class="voucher-list">
          ${VOUCHERS.map(v => `
            <div class="voucher-item">
              <div class="voucher-info">
                <div class="voucher-code">${v.code}</div>
                <div class="voucher-desc">${v.description}</div>
              </div>
              <button class="btn btn-secondary" data-choose="${v.code}">Pilih</button>
            </div>
          `).join("")}
        </div>
      `;
      qsa("[data-choose]", modal).forEach(btn => {
        btn.addEventListener("click", () => {
          voucherInput.value = btn.dataset.choose;
          closeModal("voucher-list-modal");
          setTimeout(() => voucherBtn.click(), 300); 
        });
      });
      setupModalClose(modal);
      openModal("voucher-list-modal");
    });
  }

  // Tombol checkout
  const checkoutBtn = qs("#checkout-btn");
  checkoutBtn.addEventListener("click", () => openCheckout(game));

  // Inisialisasi awal
  refreshSelections();
}

/* ================== STATE GLOBAL & FUNGSI BANTUAN ================== */
function setVoucherStatus(text, isError = false) {
  const el = qs("#voucher-status");
  if (el) {
    el.textContent = text;
    el.className = `status-text ${text ? (isError ? 'error' : 'success') : ''}`;
  }
}

function calcDiscount(price, voucher) {
  let discount = 0;
  if (voucher.percent) {
    discount = price * (voucher.percent / 100);
  } else if (voucher.fixed) {
    discount = voucher.fixed;
  }
  if (voucher.maxDiscount && discount > voucher.maxDiscount) {
    discount = voucher.maxDiscount;
  }
  return Math.floor(discount);
}

function finalPrice() {
  if (!selectedProduct) return 0;
  const base = selectedProduct.price;
  const disc = appliedVoucher ? calcDiscount(base, appliedVoucher) : 0;
  return Math.max(0, base - disc);
}

function refreshSelections() {
  qsa(".product-card").forEach(c => c.classList.toggle("selected", selectedProduct && c.dataset.id === selectedProduct.id));
  qsa(".payment-card").forEach(c => c.classList.toggle("selected", selectedPayment && c.dataset.id === selectedPayment.id));
  
  refreshSummary();
}

function refreshSummary() {
  const summary = qs("#summary-box");
  const priceBox = qs("#price-box");
  const totalEl = qs("#total-price");
  const checkoutBtn = qs("#checkout-btn");

  if (!(selectedProduct && selectedPayment)) {
    summary.innerHTML = `<p class="muted">Pilih nominal & metode bayar untuk melihat total.</p>`;
    priceBox.style.display = "none";
    checkoutBtn.disabled = true;
    return;
  }

  const base = selectedProduct.price;
  const total = finalPrice();
  const discount = base - total;

  summary.innerHTML = `
    <div class="row"><span>Produk</span><span><strong>${selectedProduct.label}</strong></span></div>
    <div class="row"><span>Harga</span><span><strong>${fmtIDR(base)}</strong></span></div>
    <div class="row"><span>Metode</span><span><strong>${selectedPayment.name}</strong></span></div>
    ${appliedVoucher ? `<div class="row"><span>Voucher</span><span><strong>- ${fmtIDR(discount)}</strong></span></div>` : ""}
  `;

  priceBox.style.display = "flex";
  totalEl.textContent = fmtIDR(total);
  checkoutBtn.disabled = false;
}

function setError(sel, text) {
  const el = qs(sel);
  if (el) el.textContent = text || "";
}

function validateForm(hasServer) {
  let ok = true;
  const user = qs("#user-id").value.trim();
  const server = hasServer ? qs("#server-id").value.trim() : "";

  setError("#error-user", "");
  setError("#error-server", "");
  setError("#error-product", "");
  setError("#error-payment", "");

  if (!user) { setError("#error-user", "User ID wajib diisi."); ok = false; }
  if (hasServer && !server) { setError("#error-server", "Server ID wajib diisi."); ok = false; }
  if (!selectedProduct) { setError("#error-product", "Pilih salah satu nominal."); ok = false; }
  if (!selectedPayment) { setError("#error-payment", "Pilih salah satu metode bayar."); ok = false; }

  return ok;
}

function setupModalClose(modalEl) {
  const id = modalEl.id;
  const closeBtn = modalEl.querySelector("[data-close]");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal(id));
  }
}

/* ================== MODAL CHECKOUT ================== */
function openCheckout(game) {
  if (!validateForm(game.hasServerId)) return;

  const userId = qs("#user-id").value.trim();
  const serverId = game.hasServerId ? qs("#server-id").value.trim() : null;
  const total = finalPrice();

  const waMsg =
    `Halo Admin, saya ingin konfirmasi pesanan top-up:
*Game:* ${game.name}
*User ID:* ${userId}
${game.hasServerId ? `*Server ID:* ${serverId}\n` : ""}*Produk:* ${selectedProduct.label}
*Metode:* ${selectedPayment.name}
*Total:* ${fmtIDR(total)}
Terima kasih.`;

  const modal = qs("#checkout-modal");
  
  let payBlock = '';
  if (selectedPayment.type === "qris") {
    payBlock = `
      <div class="copy-wrap" style="align-items:center">
        <p class="muted">Scan QRIS berikut untuk pembayaran</p>
        <img class="qris" src="${selectedPayment.info.qrisImg}" alt="QRIS">
      </div>
    `;
  } else {
    payBlock = `
      <div class="copy-wrap">
        <img class="pay-logo" src="${selectedPayment.img}" alt="${selectedPayment.name}">
        <p style="font-weight:800">${selectedPayment.name}</p>
        <p class="muted">A/N: ${selectedPayment.info.name || "-"}</p>
        <p style="font-weight:800;font-size:1.1rem">${selectedPayment.info.number}</p>
        <button class="copy-btn" id="copy-account">Salin Nomor</button>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="modal__head">
      <div class="modal__title">Konfirmasi Pembelian</div>
      <button class="modal__close" data-close="checkout-modal">&times;</button>
    </div>

    <div class="checkout-summary-list">
      <div class="row"><span>Game</span><strong>${game.name}</strong></div>
      <div class="row"><span>User ID</span><strong>${userId}</strong></div>
      ${game.hasServerId ? `<div class="row"><span>Server ID</span><strong>${serverId}</strong></div>` : ""}
      <div class="row"><span>Produk</span><strong>${selectedProduct.label}</strong></div>
      <div class="row"><span>Metode</span><strong>${selectedPayment.name}</strong></div>
      ${appliedVoucher ? `<div class="row"><span>Voucher</span><span><strong>- ${fmtIDR(selectedProduct.price - finalPrice())}</strong></span></div>` : ""}
      <div class="row" style="border-top:1px solid var(--border-color);padding-top:8px">
        <span>Total Bayar</span><strong style="color:var(--primary-color)">${fmtIDR(total)}</strong>
      </div>
    </div>

    <div style="margin:12px 0">${payBlock}</div>

    <div class="actions">
      <a class="btn btn-ghost" href="https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener">
        <i class="fa-brands fa-whatsapp"></i> Chat Admin
      </a>
      <button class="btn btn-primary" data-close="checkout-modal">Tutup</button>
    </div>

    <p class="muted" style="margin-top:8px">Setelah bayar, kirim bukti transfer ke Admin agar diproses.</p>
  `;

  const copyBtn = qs("#copy-account", modal);
  if (copyBtn) {
    copyBtn.addEventListener("click", () => copyToClipboard(selectedPayment.info.number, copyBtn));
  }

  setupModalClose(modal);
  openModal("checkout-modal");
}
