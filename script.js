/* ================== KONFIGURASI & DATA ================== */
const ADMIN_WA = "6282298902274";
const VOUCHERS = [
    { code: "WALZSHOP", percent: 2, description: "Diskon 2% untuk semua produk" },
    { code: "WALZPROMO", percent: 3, description: "Promo khusus 3% semua produk" },
    { code: "HEMAT2000", percent: 0, fixed: 2000, minPurchase: 50000, description: "Diskon Rp2.000 (min. Rp50.000)" },
    { code: "TOPUPSPECIAL", percent: 5, description: "Diskon 5% untuk top up pertama" },
    { code: "FREEDIAMOND", percent: 0, fixed: 5000, maxDiscount: 5000, description: "Diskon Rp5.000 (maks. Rp5.000)" }
];
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
    { key: "garena-delta-force", name: "Garena Delta Force", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", bannerImg: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", hasServerId: false, guide: "Buka menu profil di game dan Anda dapat menemukan User ID Anda.", url: "game.html?key=garena-delta-force" },
    { key: "call-of-duty", name: "Call Of Duty", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", bannerImg: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil game.", url: "game.html?key=call-of-duty" },
    { key: "valorant", name: "Valorant", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", bannerImg: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", hasServerId: false, guide: "User ID (Riot ID) dapat ditemukan di bawah nama akun Anda di bagian atas layar.", url: "game.html?key=valorant" },
    { key: "eggy-party", name: "Eggy Party", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", bannerImg: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil dalam game.", url: "game.html?key=eggy-party" },
    { key: "garena-undawn", name: "Garena Undawn", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", bannerImg: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", hasServerId: false, guide: "Buka menu profil dan User ID Anda akan terlihat.", url: "game.html?key=garena-undawn" },
];
const PROMOS = [
    { title: "Top Up Diamond FF Termurah", img: "https://files.catbox.moe/wz282d.png", gameKey: "free-fire" },
    { title: "Top Up Starlight MLBB Harga Cuan", img: "https://files.catbox.moe/97a2w3.jpg", gameKey: "mobile-legends" },
    { title: "Promo UC PUBG Mobile Khusus Member", img: "https://files.catbox.moe/c4c51z.jpg", gameKey: "pubg-mobile" },
    { title: "Blessing of the Welkin Moon Genshin", img: "https://files.catbox.moe/o3d2x9.jpg", gameKey: "genshin-impact" },
];
const PAYMENTS = [
    { id: "dana", name: "DANA", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", type: "ewallet", info: { number: "083139243389", name: "TI** SUT***" } },
    { id: "gopay", name: "GoPay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", type: "ewallet", info: { number: "082116690164", name: "TI** SUT***" } },
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", type: "qris", info: { qrisImg: "https://files.catbox.moe/5688406c-3c9f-4990-b77a-4f1eaba082ad.png" } },
    { id: "krom", name: "Krom Bank", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", type: "bank_transfer", info: { number: "770072009565", name: "TI** SUT***" } },
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

/* ================== UTILITAS & BANTUAN ================== */
const qs = (s, p = document) => p.querySelector(s);
const qsa = (s, p = document) => Array.from(p.querySelectorAll(s));
const fmtIDR = n => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

let selectedProduct = null;
let selectedPayment = null;
let appliedVoucher = null;
let currentGame = null;

// Caching DOM elements for performance
const el = {
    gamesGrid: qs("#games-grid"),
    promoSlider: qs("#promo-slider"),
    sliderDots: qs("#slider-dots"),
    gameTitle: qs("#game-title"),
    gameBanner: qs("#game-banner"),
    gameDescription: qs(".game-description"),
    serverIdGroup: qs("#server-id-group"),
    userIdInput: qs("#user-id"),
    serverIdInput: qs("#server-id"),
    productGrid: qs("#product-grid"),
    paymentGrid: qs("#payment-grid"),
    checkoutBtn: qs("#checkout-btn"),
    voucherBtn: qs("#voucher-btn"),
    voucherInput: qs("#voucher-input"),
    voucherListBtn: qs("#voucher-list-btn"),
    summaryProduct: qs("#summary-product"),
    summaryPayment: qs("#summary-payment"),
    summaryDiscountRow: qs("#summary-discount-row"),
    summaryDiscount: qs("#summary-discount"),
    summaryTotal: qs("#summary-total"),
    modalOverlay: qs("#modal-overlay"),
    promoListModal: qs("#promo-list-modal"),
    errorModal: qs("#error-modal"),
    checkoutModal: qs("#checkout-modal")
};

/* ================== FUNGSI UTAMA ================== */
document.addEventListener('DOMContentLoaded', () => {
    if (el.gamesGrid) {
        renderGameGrid();
        renderPromoSlider();
    } else if (el.gameBanner) {
        const urlParams = new URLSearchParams(window.location.search);
        const gameKey = urlParams.get('key');
        if (gameKey) {
            setupGamePage(gameKey);
            setupEventListeners();
        } else {
            window.location.href = 'index.html';
        }
    }
});

function renderGameGrid() {
    el.gamesGrid.innerHTML = GAMES.map(g => `
        <a class="game-card" href="${g.url}">
            <img src="${g.img}" alt="${g.name}">
            <span class="game-name">${g.name}</span>
        </a>
    `).join("");
}

function renderPromoSlider() {
    if (!el.promoSlider || !el.sliderDots) return;
    let current = 0;
    let timer = null;
    el.promoSlider.innerHTML = PROMOS.map(p => `
        <a href="${GAMES.find(g => g.key === p.gameKey)?.url || "#"}" class="slider__item" style="background-image: url(${p.img});"></a>
    `).join("");
    el.sliderDots.innerHTML = PROMOS.map((_, idx) => `<span class="dot" data-index="${idx}"></span>`).join("");

    const slides = qsa(".slider__item");
    const dots = qsa(".dot", el.sliderDots);

    function renderSlider() {
        if (slides.length > 0) {
            el.promoSlider.style.transform = `translateX(-${current * 100}%)`;
        }
        dots.forEach((d, idx) => d.classList.toggle("active", idx === current));
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        renderSlider();
    }

    function resetTimer() {
        if (timer) clearInterval(timer);
        if (slides.length > 1) {
            timer = setInterval(nextSlide, 4000);
        }
    }

    dots.forEach(d => d.addEventListener('click', e => {
        current = parseInt(e.target.dataset.index);
        renderSlider();
        resetTimer();
    }));

    renderSlider();
    resetTimer();
}

function setupGamePage(gameKeyFromUrl) {
    currentGame = GAMES.find(g => g.key === gameKeyFromUrl);
    if (!currentGame) {
        showErrorModal("Game tidak ditemukan!");
        setTimeout(() => window.location.href = "index.html", 2000);
        return;
    }
    document.title = `Walz Shop - Top Up ${currentGame.name}`;
    el.gameTitle.textContent = currentGame.name;
    el.gameBanner.src = currentGame.bannerImg;
    el.gameDescription.textContent = currentGame.guide;
    el.serverIdGroup.style.display = currentGame.hasServerId ? "block" : "none";
    renderProducts(currentGame.key);
    renderPayments();
    refreshSelections(); 
    checkProgress();
}

function setupEventListeners() {
    if (!el.checkoutBtn) return;
    el.userIdInput.addEventListener("input", checkProgress);
    if (currentGame.hasServerId) {
        el.serverIdInput.addEventListener("input", checkProgress);
    }
    el.voucherBtn.addEventListener("click", applyVoucher);
    el.voucherInput.addEventListener("input", () => {
        appliedVoucher = null;
        setVoucherStatus("");
        refreshSummary();
        renderPayments();
    });
    el.voucherListBtn.addEventListener("click", showVoucherListModal);
    el.checkoutBtn.addEventListener("click", openCheckoutModal);
    qsa("[data-close]").forEach(btn => btn.addEventListener("click", hideOverlay));
    el.modalOverlay.addEventListener("click", (e) => {
        if (e.target.id === "modal-overlay") hideOverlay();
    });
}

function renderProducts(gameKey) {
    const products = PRODUCTS[gameKey] || [];
    if (products.length > 0) {
        el.productGrid.innerHTML = products.map(p => {
            const badgesHtml = p.badges ? p.badges.map(b => `<span class="badge ${b}">${b.toUpperCase()}</span>`).join("") : '';
            return `
                <div class="product-card-modern" data-id="${p.id}">
                    ${badgesHtml}
                    <div class="product-label">${p.label}</div>
                    <div class="product-price">${fmtIDR(p.price)}</div>
                </div>
            `;
        }).join("");
        qsa(".product-card-modern", el.productGrid).forEach(card => card.addEventListener("click", handleProductClick));
    } else {
        el.productGrid.innerHTML = `<p class="empty-message">Produk untuk game ini belum tersedia.</p>`;
    }
}

function handleProductClick(e) {
    const card = e.currentTarget;
    const productId = card.dataset.id;
    selectedProduct = (PRODUCTS[currentGame.key] || []).find(p => p.id === productId) || null;
    selectedPayment = null;
    appliedVoucher = null;
    el.voucherInput.value = "";
    setVoucherStatus("");
    refreshSelections();
    checkProgress();
    renderPayments();
}

function renderPayments() {
    const paymentsHtml = PAYMENTS.map(pay => {
        const priceHtml = selectedProduct ? `<div class="payment-price">${fmtIDR(finalPrice())}</div>` : '';
        return `
            <div class="payment-card-modern" data-id="${pay.id}">
                <img src="${pay.img}" alt="${pay.name}">
                <div class="payment-label">${pay.name}</div>
                ${priceHtml}
            </div>
        `;
    }).join("");
    el.paymentGrid.innerHTML = paymentsHtml;
    qsa(".payment-card-modern", el.paymentGrid).forEach(card => card.addEventListener("click", handlePaymentClick));
}

function handlePaymentClick(e) {
    if (!selectedProduct) {
        showErrorModal("Silakan pilih nominal top-up terlebih dahulu.");
        return;
    }
    const card = e.currentTarget;
    const paymentId = card.dataset.id;
    selectedPayment = PAYMENTS.find(p => p.id === paymentId) || null;
    refreshSelections();
    checkProgress();
}

function applyVoucher() {
    if (!selectedProduct) {
        setVoucherStatus("Pilih nominal terlebih dahulu.", true);
        return;
    }
    const code = el.voucherInput.value.trim().toUpperCase();
    const voucher = VOUCHERS.find(v => v.code === code);
    appliedVoucher = null;
    if (!voucher) {
        setVoucherStatus("Kode voucher tidak valid.", true);
    } else if (voucher.minPurchase && selectedProduct.price < voucher.minPurchase) {
        setVoucherStatus(`Minimal transaksi ${fmtIDR(voucher.minPurchase)}.`, true);
    } else {
        appliedVoucher = voucher;
        const discount = calcDiscount(selectedProduct.price, voucher);
        setVoucherStatus(`Voucher ${voucher.code} diterapkan. Diskon ${fmtIDR(discount)}.`, false);
    }
    refreshSummary();
    renderPayments();
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
    let price = selectedProduct.price;
    if (appliedVoucher) {
        price -= calcDiscount(price, appliedVoucher);
    }
    return Math.max(0, price);
}

function refreshSelections() {
    qsa(".product-card-modern").forEach(c => c.classList.toggle("selected", selectedProduct && c.dataset.id === selectedProduct.id));
    qsa(".payment-card-modern").forEach(c => c.classList.toggle("selected", selectedPayment && c.dataset.id === selectedPayment.id));
    refreshSummary();
}

function refreshSummary() {
    const basePrice = selectedProduct?.price || 0;
    const finalP = finalPrice();
    const discount = basePrice - finalP;
    el.summaryProduct.textContent = selectedProduct?.label || "-";
    el.summaryTotal.textContent = fmtIDR(finalP);
    el.summaryDiscountRow.style.display = discount > 0 ? "table-row" : "none";
    el.summaryDiscount.textContent = `- ${fmtIDR(discount)}`;
    el.summaryPayment.textContent = selectedPayment?.name || "-";
    checkProgress();
}

function checkProgress() {
    const userId = el.userIdInput?.value.trim() || "";
    const serverId = currentGame?.hasServerId ? el.serverIdInput?.value.trim() : "ok";
    const isFormValid = userId && (currentGame?.hasServerId ? serverId : true) && selectedProduct && selectedPayment;
    el.checkoutBtn.disabled = !isFormValid;
}

function setVoucherStatus(text, isError = false) {
    const elVoucherStatus = qs("#voucher-status");
    if (elVoucherStatus) {
        elVoucherStatus.textContent = text;
        elVoucherStatus.className = `status-text ${isError ? 'error-text' : 'success-text'}`;
    }
}

function showVoucherListModal() {
    hideOverlay();
    const modalContent = VOUCHERS.map(v => `
        <div class="voucher-item">
            <div class="voucher-info">
                <h4>${v.code}</h4>
                <p>${v.description}</p>
            </div>
            <button class="btn btn-sm btn-choose" data-choose="${v.code}"><i class="fa-solid fa-hand-pointer"></i>Pilih</button>
        </div>
    `).join("");
    el.promoListModal.innerHTML = `
        <div class="modal-header">
            <h3>Daftar Kode Promo</h3>
            <button class="modal-close-btn" data-close><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-content-list">${modalContent}</div>
    `;
    qsa("[data-choose]", el.promoListModal).forEach(btn => btn.addEventListener("click", () => {
        el.voucherInput.value = btn.dataset.choose;
        closeModal(el.promoListModal);
        applyVoucher(); // Apply voucher automatically after selection
    }));
    openModal(el.promoListModal);
}

function showErrorModal(message) {
    hideOverlay();
    el.errorModal.innerHTML = `
        <div class="modal-header">
            <h3><i class="fa-solid fa-circle-exclamation"></i> Peringatan!</h3>
            <button class="modal-close-btn" data-close><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-content" style="text-align: center;">
            <p>${message}</p>
            <div style="margin-top: 1rem;"><button class="btn btn-confirm" onclick="closeModal(el.errorModal)">Oke</button></div>
        </div>
    `;
    openModal(el.errorModal);
}

function validateForm() {
    const userId = el.userIdInput?.value.trim();
    const serverId = currentGame?.hasServerId ? el.serverIdInput?.value.trim() : "ok";
    if (!userId) { showErrorModal("User ID wajib diisi."); return false; }
    if (currentGame?.hasServerId && !serverId) { showErrorModal("Server ID wajib diisi."); return false; }
    if (!selectedProduct) { showErrorModal("Pilih nominal top-up."); return false; }
    if (!selectedPayment) { showErrorModal("Pilih metode pembayaran."); return false; }
    return true;
}

function openCheckoutModal() {
    if (!validateForm()) return;
    hideOverlay();
    const userId = el.userIdInput.value.trim();
    const serverId = currentGame.hasServerId ? el.serverIdInput.value.trim() : null;
    const total = finalPrice();
    const discountAmount = selectedProduct.price - total;
    const waMsg = encodeURIComponent(`Halo admin, saya mau top-up:\n*Game:* ${currentGame.name}\n*User ID:* ${userId}\n${serverId ? `*Server ID:* ${serverId}\n` : ''}*Produk:* ${selectedProduct.label}\n*Metode Pembayaran:* ${selectedPayment.name}\n*Total Pembayaran:* ${fmtIDR(total)}\n\nMohon konfirmasi pesanan saya. Terima kasih.`);
    let payBlock = '';
    if (selectedPayment.type === "qris") {
        payBlock = `<div class="payment-info"><h4>Scan QRIS Berikut</h4><div class="qris-image-container"><img src="${selectedPayment.info.qrisImg}" alt="QRIS Code" class="qris-image"></div></div>`;
    } else {
        payBlock = `<div class="payment-info"><h4>Transfer ke Rekening Berikut</h4><div class="payment-img-container" style="text-align:center; margin-bottom: 1rem;"><img src="${selectedPayment.img}" alt="${selectedPayment.name}" style="max-width: 120px; height: auto;"></div><p><strong>A/N:</strong> ${selectedPayment.info.name || "-"}</p><div class="copy-field"><span id="account-number">${selectedPayment.info.number}</span><button class="btn" id="copy-account-btn"><i class="fa-solid fa-copy"></i>Salin</button></div></div>`;
    }
    el.checkoutModal.innerHTML = `
        <div class="modal-header"><h3><i class="fa-solid fa-circle-check"></i> Konfirmasi Pembelian</h3><button class="modal-close-btn" data-close><i class="fa-solid fa-xmark"></i></button></div>
        <div class="modal-content">
            <table class="summary-table">
                <tr><td>Game</td><td>${currentGame.name}</td></tr>
                <tr><td>Player ID</td><td>${userId}</td></tr>
                ${serverId ? `<tr><td>Server ID</td><td>${serverId}</td></tr>` : ''}
                <tr><td>Produk</td><td>${selectedProduct.label}</td></tr>
                <tr><td>Metode Bayar</td><td>${selectedPayment.name}</td></tr>
                ${appliedVoucher ? `<tr><td>Diskon Voucher</td><td>- ${fmtIDR(discountAmount)}</td></tr>` : ''}
            </table>
            <div class="summary-total" style="margin-top: 1.5rem;"><span>Total Pembayaran</span><span>${fmtIDR(total)}</span></div>
            ${payBlock}
            <div class="modal-footer" style="margin-top: 1.5rem;"><a href="https://wa.me/${ADMIN_WA}?text=${waMsg}" target="_blank" class="btn btn-confirm btn-block"><i class="fa-brands fa-whatsapp"></i>Chat Admin Sekarang</a><p class="instruction">Setelah bayar, kirim bukti transfer ke Admin agar pesanan segera diproses.</p></div>
        </div>
    `;
    const copyBtn = qs("#copy-account-btn", el.checkoutModal);
    if (copyBtn) copyBtn.addEventListener("click", () => copyToClipboard(selectedPayment.info.number, copyBtn));
    openModal(el.checkoutModal);
}

function showOverlay() {
    el.modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function hideOverlay() {
    el.modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    qsa(".modal").forEach(m => m.classList.remove("active"));
}

function openModal(modalElement) {
    showOverlay();
    modalElement.classList.add("active");
    const closeBtn = modalElement.querySelector("[data-close]");
    if (closeBtn) {
        closeBtn.onclick = () => {
            modalElement.classList.remove("active");
            const anyOpen = qsa(".modal.active").length > 0;
            if (!anyOpen) hideOverlay();
        };
    }
}

function closeModal(modalElement) {
    modalElement.classList.remove("active");
    const anyOpen = qsa(".modal.active").length > 0;
    if (!anyOpen) hideOverlay();
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const old = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-check"></i>Disalin!`;
        setTimeout(() => btn.innerHTML = old, 1500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Gagal menyalin. Silakan salin manual.');
    });
}
