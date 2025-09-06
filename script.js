/* ================== KONFIGURASI ================== */
const ADMIN_WA = "6282298902274";
const ADMIN_EMAIL = "walzlonely@gmail.com";

const GAMES = [
    { key: "free-fire", name: "Free Fire", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", bannerImg: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", hasServerId: false, guide: "Temukan User ID Anda di bawah nama panggilan pada menu profil game.", url: "game.html?key=free-fire" },
    { key: "mobile-legends", name: "Mobile Legends", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", bannerImg: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", hasServerId: true, guide: "Temukan User ID dan Server ID di bawah nama panggilan saat Anda mengklik avatar profil.", url: "game.html?key=mobile-legends" },
    { key: "honor-of-kings", name: "Honor of Kings", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", bannerImg: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", hasServerId: false, guide: "User ID Anda ada di bagian bawah layar saat Anda membuka profil.", url: "game.html?key=honor-of-kings" },
    { key: "genshin-impact", name: "Genshin Impact", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", bannerImg: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", hasServerId: false, guide: "User ID (9 digit) terletak di sudut kanan bawah layar saat Anda berada di dalam game.", url: "game.html?key=genshin-impact" },
    { key: "roblox", name: "Roblox", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", bannerImg: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", hasServerId: false, guide: "Top up menggunakan Gift Card yang akan dikirim langsung ke akun Anda.", url: "game.html?key=roblox" },
    { key: "super-sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", bannerImg: "https://files.catbox.moe/j61uny.jpg", hasServerId: false, guide: "User ID dapat ditemukan di menu profil dalam game.", url: "game.html?key=super-sus" },
    { key: "clash-of-clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", bannerImg: "https://files.catbox.moe/6aia0n.jpg", hasServerId: false, guide: "User ID (Tag Pemain) adalah kombinasi huruf dan angka yang dimulai dengan tanda pagar (#).", url: "game.html?key=clash-of-clans" },
    { key: "blood-strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", bannerImg: "https://files.catbox.moe/3y066i.jpg", hasServerId: false, guide: "ID Anda dapat ditemukan di profil dalam game.", url: "game.html?key=blood-strike" },
    { key: "pubg-mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", bannerImg: "https://files.catbox.moe/tatuo9.jpg", hasServerId: false, guide: "Temukan User ID Anda di sudut kanan atas lobi game saat mengklik profil.", url: "game.html?key=pubg-mobile" },
    { key: "garena-delta-force", name: "Garena Delta Force", img: "https://files.catbox.moe/k3b8d0.png", bannerImg: "https://files.catbox.moe/k3b8d0.png", hasServerId: false, guide: "Buka menu profil di game dan Anda dapat menemukan User ID Anda.", url: "game.html?key=garena-delta-force" },
    { key: "call-of-duty", name: "Call Of Duty", img: "https://files.catbox.moe/k3b8d0.png", bannerImg: "https://files.catbox.moe/k3b8d0.png", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil game.", url: "game.html?key=call-of-duty" },
    { key: "valorant", name: "Valorant", img: "https://files.catbox.moe/k3b8d0.png", bannerImg: "https://files.catbox.moe/k3b8d0.png", hasServerId: false, guide: "User ID (Riot ID) dapat ditemukan di bawah nama akun Anda di bagian atas layar.", url: "game.html?key=valorant" },
    { key: "eggy-party", name: "Eggy Party", img: "https://files.catbox.moe/k3b8d0.png", bannerImg: "https://files.catbox.moe/k3b8d0.png", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil dalam game.", url: "game.html?key=eggy-party" },
    { key: "garena-undawn", name: "Garena Undawn", img: "https://files.catbox.moe/k3b8d0.png", bannerImg: "https://files.catbox.moe/k3b8d0.png", hasServerId: false, guide: "Buka menu profil dan User ID Anda akan terlihat.", url: "game.html?key=garena-undawn" },
];

const PROMOS = [
    { title: "Top Up Diamond FF Termurah", img: "https://files.catbox.moe/wz282d.png", gameKey: "free-fire" },
    { title: "Top Up Starlight MLBB Harga Cuan", img: "https://files.catbox.moe/97a2w3.jpg", gameKey: "mobile-legends" },
    { title: "Promo UC PUBG Mobile Khusus Member", img: "https://files.catbox.moe/c4c51z.jpg", gameKey: "pubg-mobile" },
    { title: "Blessing of the Welkin Moon Genshin", img: "https://files.catbox.moe/o3d2x9.jpg", gameKey: "genshin-impact" },
];

const PAYMENTS = [
    { id: "dana", name: "DANA" },
    { id: "gopay", name: "GoPay" },
    { id: "qris", name: "QRIS" },
    { id: "krom-bank", name: "Krom Bank" }
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
  const paymentGrid = qs("#payment-grid");

  if (productPriceEl && totalEl && checkoutBtn) {
    if (selectedProduct) {
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
      
      qsa(".payment-grid .grid-item .price").forEach(el => el.textContent = fmtIDR(finalP));

    } else {
      productPriceEl.textContent = "-";
      totalEl.textContent = "-";
      if (voucherRowEl) voucherRowEl.style.display = "none";
      qsa(".payment-grid .grid-item .price").forEach(el => el.textContent = "");
    }
  }

  if (selectedProduct && selectedPayment && qs("#user-id").value.trim()) {
      checkoutBtn.disabled = false;
  } else {
      checkoutBtn.disabled = true;
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
    gameKey: game.key, // Simpan gameKey untuk kembali
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
    qs(".main .container").innerHTML = `<p class="error-text" style="text-align:center;">Game tidak ditemukan. Silakan kembali ke halaman game.</p><a href="index.html" class="btn btn-confirm" style="margin-top:20px;">Kembali ke Beranda</a>`;
    return;
  }

  qs("#back-to-game").href = `game.html?key=${data.gameKey}`;
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
      const dots = qsa(".slider__dot");
      const slides = qsa(".slider__item");
      let currentSlide = 0;
      
      function updateSlider() {
          promoSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
          dots.forEach((dot, i) => {
              dot.classList.toggle("active", i === currentSlide);
          });
      }
      
      PROMOS.forEach(() => {
          const dot = document.createElement("div");
          dot.classList.add("slider__dot");
          sliderDots.appendChild(dot);
      });
      
      qsa(".slider__dot").forEach((dot, i) => {
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

  qs("#game-title-page").textContent = `${game.name} - Walz Shop`;
  qs("#game-banner").src = game.img;
  qs("#game-title").textContent = game.name;
  qs("#user-guide").textContent = game.guide;
  
  const serverIdInput = qs("#server-id");
  if (!game.hasServerId) {
    serverIdInput.style.display = "none";
    qs("label[for='server-id']").style.display = "none";
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
      <div class="label">${pay.name}</div>
      <div class="price"></div>
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

  qs("#user-id").addEventListener("input", refreshSummary);
  if (game.hasServerId) {
      qs("#server-id").addEventListener("input", refreshSummary);
  }

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
  
  refreshSummary();
}
