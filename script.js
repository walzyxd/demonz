// --- Data Konfigurasi ---
const GAMES = [
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", needsServerId: true },
    { key: "magic-ches-gogo", name: "Magic Ches Gogo", publisher: "Vizta Games", img: "https://files.catbox.moe/bbxhbo.jpg", needsServerId: true },
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", needsServerId: false },
    { key: "pubg", name: "PUBG Mobile", publisher: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", needsServerId: false },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", needsServerId: true },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", needsServerId: true },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corporation", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", needsServerId: false },
    { key: "super-sus", name: "Super Sus", publisher: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", needsServerId: true },
    { key: "coc", name: "Clash of Clans", publisher: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", needsServerId: false },
    { key: "blood-strike", name: "Blood Strike", publisher: "NetEase", img: "https://files.catbox.moe/3y066i.jpg", needsServerId: false },
    { key: "garena-delta", name: "Garena Delta Force", publisher: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b379a5bd976.png", needsServerId: false },
    { key: "garena-undawn", name: "Garena Undawn", publisher: "Garena", img: "https://i.supaimg.com/41450b00-c089-49f2-a1d3-7b379a5bd976.png", needsServerId: false },
    { key: "valorant", name: "Valorant", publisher: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", needsServerId: false },
    { key: "call-of-duty", name: "Call Of Duty", publisher: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", needsServerId: false },
    { key: "eggy-party", name: "Eggy Party", publisher: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", needsServerId: false }
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", qr: "https://files.catbox.moe/pa0iwo.png" },
    { id: "krom", name: "Bank Krom", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", number: "770072009565", holder: "Walzshop ID" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", number: "083139243389", holder: "Anom" },
    { id: "gopay", name: "Gopay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a965-73b301a5ba29.jpg", number: "082298902274", holder: "Anom" }
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
    "pubg": [
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
    "coc": [
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
    "garena-delta": [
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
        { id: "undawn-prep", label: "Quick Battle Prep", price: 94379, badges: ["sale"] }
    ],
    "magic-ches-gogo": [
        { id: "weekly-card", label: "Weekly Card", price: 31699, badges: ["weekly"] },
        { id: "first-100", label: "First Recharge 100 Diamonds", price: 12999, badges: ["first"] },
        { id: "first-300", label: "First Recharge 300 Diamonds", price: 38999, badges: ["first"] },
        { id: "first-500", label: "First Recharge 500 Diamonds", price: 64899, badges: ["first"] },
        { id: "first-1000", label: "First Recharge 1000 Diamonds", price: 129799, badges: ["first"] },
        { id: "d-12", label: "12 Diamonds", price: 3801, badges: ["hot"] },
        { id: "d-19", label: "19 Diamonds", price: 5667, badges: ["hot"] },
        { id: "d-28", label: "28 Diamonds", price: 8270, badges: ["hot"] },
        { id: "d-44", label: "44 Diamonds", price: 12172 },
        { id: "d-59", label: "59 Diamonds", price: 16107 },
        { id: "d-85", label: "85 Diamonds", price: 23305, badges: ["popular"] },
        { id: "d-170", label: "170 Diamonds", price: 45810, badges: ["popular"] },
        { id: "d-240", label: "240 Diamonds", price: 64998 },
        { id: "d-296", label: "296 Diamonds", price: 79691 },
        { id: "d-408", label: "408 Diamonds", price: 108816 },
        { id: "d-568", label: "568 Diamonds", price: 149099, badges: ["popular"] },
        { id: "d-875", label: "875 Diamonds", price: 226024 },
        { id: "d-2010", label: "2010 Diamonds", price: 496838 },
        { id: "d-4830", label: "4830 Diamonds", price: 1187450, badges: ["sale"] },
        { id: "d-86", label: "86 Diamonds", price: 20299 },
        { id: "d-172", label: "172 Diamonds", price: 40599 },
        { id: "d-257", label: "257 Diamonds", price: 60699 },
        { id: "d-344", label: "344 Diamonds", price: 81099 },
        { id: "d-516", label: "516 Diamonds", price: 121699, badges: ["popular"] },
        { id: "d-706", label: "706 Diamonds", price: 162199 },
        { id: "d-1346", label: "1346 Diamonds", price: 304199 },
        { id: "d-1825", label: "1825 Diamonds", price: 405499 },
        { id: "d-2195", label: "2195 Diamonds", price: 486599 },
        { id: "d-3688", label: "3688 Diamonds", price: 810999, badges: ["sale"] },
        { id: "d-5532", label: "5532 Diamonds", price: 1216499, badges: ["sale"] },
        { id: "d-9288", label: "9288 Diamonds", price: 2027499, badges: ["sale"] }
    ]
};

const BANNERS = [
    'https://files.catbox.moe/j20bgi.jpg',
    'https://files.catbox.moe/8g41jj.jpg',
    'https://files.catbox.moe/e87yj3.png'
];

// --- State Management
let cart = [];
let selectedGame = null;
let selectedPayment = null;
let selectedProduct = null; // Menambahkan state untuk produk yang dipilih
let isVoucherApplied = false;
const VOUCHER_CODE = "WALZPROMO";
const VOUCHER_DISCOUNT = 1000;
const ADMIN_WHATSAPP_NUMBER = "6282298902274";

// --- Global Functions
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

function showNotification(message, isSuccess = true) {
    const container = document.querySelector('.notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    if (!isSuccess) {
        notification.classList.add('error');
    }
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => {
            notification.remove();
        });
    }, 3000);
}

// --- Home Page Functions
let bannerIndex = 0;
let bannerInterval = null;

function renderBanners() {
    const container = document.getElementById('banner-container');
    const dotsContainer = document.getElementById('banner-dots');
    if (!container || !dotsContainer) return;

    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    BANNERS.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.innerHTML = `<img src="${src}" alt="Banner ${index + 1}">`;
        container.appendChild(slide);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => moveToBanner(index));
        dotsContainer.appendChild(dot);
    });
    updateBanners();
}

function updateBanners() {
    const container = document.getElementById('banner-container');
    const dots = document.querySelectorAll('.dot');
    if (!container || dots.length === 0) return;

    container.style.transform = `translateX(${-bannerIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === bannerIndex);
    });
}

function moveToBanner(index) {
    bannerIndex = index;
    updateBanners();
    clearInterval(bannerInterval);
    startBannerSlider();
}

function startBannerSlider() {
    bannerInterval = setInterval(() => {
        bannerIndex = (bannerIndex + 1) % BANNERS.length;
        updateBanners();
    }, 5000);
}

function renderGameCards(games, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    games.forEach(game => {
        const card = document.createElement('a');
        card.classList.add('game-card');
        card.href = `game.html?game=${game.key}`;
        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <div class="game-card-content">
                <h3>${game.name}</h3>
                <p>${game.publisher}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Game Page Functions
function renderGamePage() {
    const game = selectedGame;
    const products = PRODUCTS[game.key];
    
    // Render game info
    const gameInfoHeader = document.getElementById('game-info-header');
    if (gameInfoHeader) {
        gameInfoHeader.innerHTML = `
            <img src="${game.img}" alt="${game.name}" class="game-img">
            <div>
                <h2>${game.name}</h2>
                <div class="game-info-details">
                    <div class="game-detail-item">
                        <i class="fas fa-shield-alt"></i>
                        <p>Pembayaran Aman</p>
                    </div>
                    <div class="game-detail-item">
                        <i class="fas fa-certificate"></i>
                        <p>Official Distributor</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Show server ID input if needed
    const serverIdContainer = document.getElementById('server-id-container');
    if (serverIdContainer) {
        if (game.needsServerId) {
            serverIdContainer.innerHTML = `
                <div class="input-container">
                    <i class="fas fa-server input-icon"></i>
                    <input type="number" id="server-id" placeholder="Masukkan Server ID">
                </div>
            `;
        } else {
            serverIdContainer.innerHTML = '';
        }
    }
    
    // Render products with select effect
    const productListContainer = document.getElementById('product-list');
    if (productListContainer) {
        productListContainer.innerHTML = '';
        products.forEach(product => {
            const finalPrice = product.price; // Harga produk tidak berubah
            
            let badgeHtml = '';
            if (product.badges && product.badges.length > 0) {
                product.badges.forEach(badge => {
                    const badgeText = badge.charAt(0).toUpperCase() + badge.slice(1);
                    badgeHtml += `<span class="special-badge" data-badge="${badge}">${badgeText}</span>`;
                });
            }

            const card = document.createElement('div');
            card.classList.add('option-card', 'product');
            card.setAttribute('data-id', product.id);
            if (selectedProduct && selectedProduct.id === product.id) {
                card.classList.add('selected');
            }
            card.innerHTML = `
                ${badgeHtml}
                <div class="label">${product.label}</div>
                <div class="price-group">
                    <div class="price">${formatRupiah(finalPrice)}</div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                selectProduct(product);
            });
            
            productListContainer.appendChild(card);
        });
    }

    // Update checkout button state
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = !selectedProduct;
    }
}

function selectProduct(product) {
    selectedProduct = product;
    const cards = document.querySelectorAll('.option-card.product');
    cards.forEach(card => card.classList.remove('selected'));
    const selectedCard = document.querySelector(`.option-card[data-id="${product.id}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    updateCartDisplay();
}

function renderProductList(products, containerId, pageType) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    products.forEach(product => {
        const finalPrice = product.price; 
        
        let badgeHtml = '';
        if (product.badges && product.badges.length > 0) {
            product.badges.forEach(badge => {
                const badgeText = badge.charAt(0).toUpperCase() + badge.slice(1);
                badgeHtml += `<span class="special-badge" data-badge="${badge}">${badgeText}</span>`;
            });
        }
        
        const card = document.createElement('div');
        card.classList.add('option-card', 'product');
        card.setAttribute('data-id', product.id);
        
        const title = pageType === 'pulsa' ? product.label.split(' ').slice(0, 2).join(' ') : product.label;
        const description = pageType === 'pulsa' ? product.label.split(' ').slice(2).join(' ') : '';
        
        card.innerHTML = `
            ${badgeHtml}
            <div class="label">${title}</div>
            <div class="price-group">
                <p class="description">${description}</p>
                <div class="price">${formatRupiah(finalPrice)}</div>
            </div>
            <button class="add-to-cart-btn action-button" data-product-id="${product.id}">Pilih</button>
        `;
        
        card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const gameName = pageType === 'pulsa' ? 'Pulsa & Data' : 'Panel Pterodactyl';
            addToCart(product, gameName, pageType);
        });
        
        container.appendChild(card);
    });
}

function addToCart(product, gameName, gameKey) {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
        showNotification(`${product.label} sudah ada di keranjang!`, false);
        return;
    }
    
    cart.push({ game: { key: gameKey, name: gameName }, product });
    showNotification(`${product.label} berhasil ditambahkan ke keranjang!`);
    
    updateCartDisplay();
    showCartPopup();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCountElement = document.querySelector('.cart-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotalElement = document.querySelector('.cart-total .total-price');
    const cartCheckoutBtn = document.getElementById('cart-checkout-btn');

    // Update floating cart count
    if (cart.length > 0) {
        cartCountElement.textContent = cart.length;
        cartCountElement.classList.add('show');
    } else {
        cartCountElement.classList.remove('show');
    }

    // Update popup cart items
    if (cartItemsList) {
        cartItemsList.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li class="empty-cart-message">Keranjang Anda kosong.</li>';
        } else {
            cart.forEach(item => {
                const finalPrice = item.product.price;
                total += finalPrice;
                
                const li = document.createElement('li');
                li.classList.add('cart-item');
                li.innerHTML = `
                    <div class="cart-item-info">
                        <div class="item-name">${item.product.label} (${item.game.name})</div>
                        <div class="item-price">${formatRupiah(finalPrice)}</div>
                    </div>
                    <button class="cart-item-remove" data-product-id="${item.product.id}"><i class="fas fa-trash-alt"></i></button>
                `;
                li.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.product.id));
                cartItemsList.appendChild(li);
            });
        }
    }
    
    // Update total price and checkout button
    if (cartTotalElement) cartTotalElement.textContent = formatRupiah(total);
    if (cartCheckoutBtn) cartCheckoutBtn.disabled = cart.length === 0;
}

function showCartPopup() {
    const popup = document.getElementById('cart-popup');
    if (popup) popup.classList.add('show');
}

function hideCartPopup() {
    const popup = document.getElementById('cart-popup');
    if (popup) popup.classList.remove('show');
}

function setupFloatingCart() {
    const floatingCartBtn = document.getElementById('floating-cart-button');
    const cartPopup = document.getElementById('cart-popup');
    const closePopupBtn = document.querySelector('.close-popup-btn');
    const cartCheckoutBtn = document.getElementById('cart-checkout-btn');

    if (floatingCartBtn) floatingCartBtn.addEventListener('click', showCartPopup);
    if (closePopupBtn) closePopupBtn.addEventListener('click', hideCartPopup);
    if (cartPopup) {
        cartPopup.addEventListener('click', (e) => {
            if (e.target.id === 'cart-popup') {
                hideCartPopup();
            }
        });
    }
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            const orderData = {
                items: cart.map(item => ({
                    gameKey: item.game.key,
                    productId: item.product.id,
                    price: item.product.price,
                    label: item.product.label
                })),
                isVoucherApplied: isVoucherApplied
            };
            localStorage.setItem('cartData', JSON.stringify(orderData));
            window.location.href = 'checkout.html';
        });
    }
    
    updateCartDisplay();
}

function detectOperator(phoneNumber) {
    const prefixes = {
        'telkomsel': ['0811', '0812', '0813', '0821', '0822', '0852', '0853'],
        'xl': ['0817', '0818', '0819', '0859', '0878', '0877'],
        'indosat': ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
        '3': ['0895', '0896', '0897', '0898', '0899'],
        'axis': ['0831', '0832', '0833', '0838'],
        'smartfren': ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889']
    };
    if (!phoneNumber || phoneNumber.length < 3) return null;
    const prefix = phoneNumber.substring(0, 4);
    for (const operator in prefixes) {
        if (prefixes[operator].includes(prefix)) {
            return operator;
        }
    }
    return null;
}

// --- Checkout Page Functions
function renderCheckoutPage() {
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    if (!cartData || cartData.items.length === 0) {
        window.location.href = 'index.html';
        return;
    }
    
    // Render payment options
    renderOptions('payment-list', PAYMENTS, 'payment');
    
    // Render summary
    const summaryDetails = document.getElementById('summary-details');
    let subtotal = 0;
    
    summaryDetails.innerHTML = '';
    
    cartData.items.forEach(item => {
        subtotal += item.price;
        summaryDetails.innerHTML += `
            <div class="summary-detail-item">
                <span class="label"><i class="fas fa-gem"></i> ${item.label} (${item.gameKey})</span>
                <span class="value">${formatRupiah(item.price)}</span>
            </div>
        `;
    });
    
    let finalTotal = subtotal;
    if (cartData.isVoucherApplied) {
        finalTotal = Math.max(0, subtotal - VOUCHER_DISCOUNT);
        summaryDetails.innerHTML += `
            <div class="summary-detail-item voucher-applied">
                <span class="label"><i class="fas fa-ticket-alt"></i> Potongan Voucher</span>
                <span class="value">- ${formatRupiah(VOUCHER_DISCOUNT)}</span>
            </div>
        `;
    }
    
    document.getElementById('total-payment').textContent = formatRupiah(finalTotal);
    
    const userIdInput = document.getElementById('user-id');
    const whatsappInput = document.getElementById('whatsapp-number');
    const serverIdInput = document.getElementById('server-id');
    const payButton = document.getElementById('pay-button');
    
    const updatePayButtonState = () => {
        const hasUserId = userIdInput.value.trim().length > 0;
        const hasWhatsapp = whatsappInput.value.trim().length > 0;
        const hasPayment = selectedPayment !== null;
        
        let hasServerId = true;
        cartData.items.forEach(item => {
            const game = GAMES.find(g => g.key === item.gameKey);
            if (game && game.needsServerId && serverIdInput.value.trim().length === 0) {
                hasServerId = false;
            }
        });

        payButton.disabled = !(hasUserId && hasWhatsapp && hasPayment && hasServerId);
    };

    userIdInput.addEventListener('input', updatePayButtonState);
    whatsappInput.addEventListener('input', updatePayButtonState);
    if (serverIdInput) {
         serverIdInput.addEventListener('input', updatePayButtonState);
    }
    
    payButton.addEventListener('click', () => {
        const userId = userIdInput.value;
        const whatsapp = whatsappInput.value;
        const serverId = serverIdInput ? serverIdInput.value : 'N/A';
        
        const messageHeader = `Halo Admin, saya ingin konfirmasi pesanan saya.\n\n*Detail Pesanan:*\n`;
        let messageItems = '';
        cartData.items.forEach(item => {
            const gameName = GAMES.find(g => g.key === item.gameKey) ? GAMES.find(g => g.key === item.gameKey).name : item.gameKey;
            const price = item.price;
            messageItems += `- ${item.label} (${gameName}): ${formatRupiah(price)}\n`;
        });
        
        const messageFooter = `\nPlayer ID: ${userId}${serverId !== 'N/A' ? ` (${serverId})` : ''}\nNomor WhatsApp: ${whatsapp}\nMetode Pembayaran: ${selectedPayment.name}\nTotal: ${formatRupiah(finalTotal)}\n\nMohon bantuannya untuk diproses, terima kasih.`;
        
        const fullMessage = messageHeader + messageItems + messageFooter;
        
        const encodedMessage = encodeURIComponent(fullMessage);
        window.open(`https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
        
        // Clear cart after checkout
        cart = [];
        localStorage.removeItem('cartData');
        localStorage.removeItem('orderData');
    });
    
    updatePayButtonState();
}

function selectOption(element, type) {
    const container = element.closest('.options-grid');
    if (!container) return;
    container.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');

    const optionId = element.dataset.id;
    if (type === 'payment') {
        selectedPayment = PAYMENTS.find(p => p.id === optionId);
    }
    
    if (document.getElementById('pay-button')) {
        renderCheckoutPage();
    }
}

function renderOptions(containerId, options, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    options.forEach(option => {
        const card = document.createElement('div');
        card.classList.add('option-card');
        card.dataset.id = option.id;
        
        let contentHtml = '';
        if (type === 'payment') {
            contentHtml = `<img src="${option.img}" alt="${option.name}" />`;
        } else {
            contentHtml = `<div class="label">${option.label}</div>`;
        }
        
        card.innerHTML = contentHtml;
        card.addEventListener('click', () => selectOption(card, type));
        container.appendChild(card);
    });
}

// --- Initial Page Load
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.toLowerCase();
    const floatingCartBtn = document.getElementById('floating-cart-button');

    if (path.includes('game.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const gameKey = urlParams.get('game');
        selectedGame = GAMES.find(g => g.key === gameKey);
        if (selectedGame) {
            renderGamePage();
        } else {
            window.location.href = 'index.html';
        }
    } else if (path.includes('checkout.html')) {
        renderCheckoutPage();
    } else if (path.includes('index.html') || path === '/') {
        renderGameCards(GAMES, 'popular-games');
        renderBanners();
        startBannerSlider();
        if (floatingCartBtn) floatingCartBtn.style.display = 'none';
    } else if (path.includes('search.html')) {
        setupSearchFunctionality();
        renderGameCards(GAMES, 'game-list');
        if (floatingCartBtn) floatingCartBtn.style.display = 'none';
    } else if (path.includes('pulsa.html') || path.includes('pterodactyl.html')) {
         if (floatingCartBtn) floatingCartBtn.style.display = 'flex';
    }
    
    setupFloatingCart();
});

function setupSearchFunctionality() {
    const searchInput = document.getElementById('search-box');
    const clearBtn = document.getElementById('clear-search');
    const searchStats = document.getElementById('search-stats');
    const noResults = document.getElementById('no-results');
    
    if (!searchInput || !clearBtn || !searchStats || !noResults) return;

    searchInput.addEventListener('input', (e) => {
        const currentQuery = e.target.value;
        const results = GAMES.filter(game => game.name.toLowerCase().includes(currentQuery.toLowerCase()));

        if (currentQuery.length > 0) {
            clearBtn.style.display = 'block';
            if (results.length > 0) {
                noResults.style.display = 'none';
                searchStats.style.display = 'block';
                searchStats.textContent = `Ditemukan ${results.length} hasil untuk "${currentQuery}"`;
            } else {
                noResults.style.display = 'block';
                searchStats.style.display = 'none';
                noResults.querySelector('p').textContent = `Tidak ada hasil untuk "${currentQuery}"`;
            }
            renderGameCards(results, 'game-list', currentQuery);
        } else {
            clearBtn.style.display = 'none';
            searchStats.style.display = 'none';
            noResults.style.display = 'none';
            renderGameCards(GAMES, 'game-list');
        }
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        searchInput.dispatchEvent(new Event('input'));
    });
}
