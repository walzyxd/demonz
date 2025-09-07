// --- Data Konfigurasi ---
const GAMES = [
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", needsServerId: false },
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", needsServerId: true },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", needsServerId: true },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", needsServerId: true },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corporation", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", needsServerId: false },
    { key: "super-sus", name: "Super Sus", publisher: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", needsServerId: true },
    { key: "coc", name: "Clash of Clans", publisher: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", needsServerId: false },
    { key: "blood-strike", name: "Blood Strike", publisher: "NetEase", img: "https://files.catbox.moe/3y066i.jpg", needsServerId: false },
    { key: "pubg", name: "PUBG Mobile", publisher: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", needsServerId: false },
    { key: "garena-delta", name: "Garena Delta Force", publisher: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b379a5bd976.png", needsServerId: false },
    { key: "garena-undawn", name: "Garena Undawn", publisher: "Garena", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", needsServerId: false },
    { key: "valorant", name: "Valorant", publisher: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", needsServerId: false },
    { key: "call-of-duty", name: "Call Of Duty", publisher: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", needsServerId: false },
    { key: "eggy-party", name: "Eggy Party", publisher: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", needsServerId: false },
    { key: "magic-ches-gogo", name: "Magic Ches Gogo", publisher: "Vizta Games", img: "https://files.catbox.moe/bbxhbo.jpg", needsServerId: true },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", qr: "https://files.catbox.moe/pa0iwo.png" },
    { id: "krom", name: "Bank Krom", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", number: "770072009565", holder: "Walzshop ID" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", number: "083139243389", holder: "Anom" },
    { id: "gopay", name: "Gopay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", number: "082298902274", holder: "Anom" }
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

// --- State Management
let currentPage = 'home';
let selectedGame = null;
let selectedProduct = null;
let selectedPayment = null;
let isVoucherApplied = false;
const VOUCHER_CODE = "WALZPROMO";
const VOUCHER_DISCOUNT = 100;
const appContainer = document.getElementById('app-container');
const backButton = document.querySelector('.back-button');
const searchButton = document.querySelector('.search-icon');
const mainButton = document.getElementById('main-button');
const headerTitle = document.querySelector('.header-center h1');

// --- Fungsi Global
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

function showNotification(message, isSuccess = true) {
    const container = document.querySelector('.notification-container');
    const popup = document.createElement('div');
    popup.classList.add('notification-popup');
    const iconClass = isSuccess ? 'fa-check-circle' : 'fa-times-circle';
    const iconColor = isSuccess ? 'var(--price-color)' : 'var(--badge-hot)';
    popup.innerHTML = `<i class="fas ${iconClass} icon" style="color:${iconColor};"></i><span class="message">${message}</span>`;
    container.innerHTML = '';
    container.appendChild(popup);
    setTimeout(() => {
        popup.classList.add('fade-out');
        popup.addEventListener('animationend', () => popup.remove());
    }, 3000);
}

function updateMainButton() {
    let buttonText = "Lanjutkan";
    let isDisabled = true;
    let buttonAction = null;
    let showFooter = true;

    if (currentPage === 'home') {
        buttonText = "Lanjutkan";
        showFooter = false;
    } else if (currentPage === 'game') {
        const userId = document.getElementById('user-id')?.value;
        const serverId = document.getElementById('server-id')?.value;
        const whatsappNumber = document.getElementById('whatsapp-number')?.value;
        isDisabled = !selectedProduct || !selectedPayment || !userId || (selectedGame.needsServerId && !serverId) || !whatsappNumber;
        buttonText = "Konfirmasi";
        buttonAction = () => renderPage('cart');
    } else if (currentPage === 'cart') {
        isDisabled = false;
        buttonText = "Beli Sekarang";
        buttonAction = () => {
            const userId = document.getElementById('user-id').value;
            const serverId = selectedGame.needsServerId ? document.getElementById('server-id').value : '';
            const whatsappNumber = document.getElementById('whatsapp-number').value;

            const finalPrice = isVoucherApplied ? Math.max(0, selectedProduct.price - VOUCHER_DISCOUNT) : selectedProduct.price;
            const payment = PAYMENTS.find(p => p.id === selectedPayment.id);

            const adminWhatsapp = '6282298902274';
            const message = `Halo Admin, saya ingin konfirmasi pesanan saya.\n\n*Detail Pesanan:*\nGame: ${selectedGame.name}\nProduk: ${selectedProduct.label}\nPlayer ID: ${userId}${serverId ? ` (${serverId})` : ''}\nMetode Pembayaran: ${payment.name}\nTotal: ${formatRupiah(finalPrice)}\n\nNomor WA saya: ${whatsappNumber}\n\nMohon bantuannya untuk diproses, terima kasih.`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${adminWhatsapp}?text=${encodedMessage}`, '_blank');
        };
    } else if (currentPage === 'search') {
        showFooter = false;
    }
    
    mainButton.innerHTML = `<i class="fas fa-shopping-cart"></i> ${buttonText}`;
    mainButton.disabled = isDisabled;
    if (showFooter) {
        mainButton.style.display = 'flex';
    } else {
        mainButton.style.display = 'none';
    }

    if (buttonAction) {
        mainButton.onclick = buttonAction;
    }
}

function handleBackButton() {
    if (currentPage === 'game') {
        selectedGame = null;
        renderPage('home');
    } else if (currentPage === 'cart') {
        renderPage('game');
    } else if (currentPage === 'search') {
        renderPage('home');
    }
}

function handleSearchButton() {
    if (currentPage === 'search') {
        const query = document.querySelector('#search-box').value;
        renderSearchPage(query);
    } else {
        renderPage('search');
    }
}

// --- Render Halaman
function renderPage(page, data = {}) {
    currentPage = page;
    backButton.classList.toggle('hidden', page === 'home');
    mainButton.classList.remove('hidden');

    appContainer.innerHTML = '';
    
    if (page === 'home') {
        headerTitle.innerText = 'Walzshop';
        searchButton.classList.remove('hidden');
        mainButton.classList.add('hidden');
        renderHomePage();
    } else if (page === 'search') {
        headerTitle.innerText = 'Cari Game';
        searchButton.classList.add('hidden');
        mainButton.classList.add('hidden');
        renderSearchPage(data.query || '');
    } else if (page === 'game') {
        selectedGame = data.game;
        headerTitle.innerText = selectedGame.name;
        searchButton.classList.add('hidden');
        mainButton.classList.remove('hidden');
        renderGamePage();
    } else if (page === 'cart') {
        headerTitle.innerText = 'Ringkasan Pesanan';
        searchButton.classList.add('hidden');
        mainButton.classList.remove('hidden');
        renderCartPage();
    }
    updateMainButton();
}

function renderHomePage() {
    const homeContent = `
        <div class="banner-slider-container page-section">
            <div class="banner-slider" id="banner-slider">
                <img src="https://i.supaimg.com/00021b0e-f480-4573-b3c9-041793740266.jpg" alt="Banner 1" class="banner-image active">
                <img src="https://i.supaimg.com/f0407769-9f1c-4b95-a228-4448554d68e0.jpg" alt="Banner 2" class="banner-image">
                <img src="https://i.supaimg.com/62c14c5c-7471-46c4-b44c-905c28e83b4b.jpg" alt="Banner 3" class="banner-image">
            </div>
        </div>
        <div class="game-list-section page-section">
            <div class="page-section-header">
                <h2>Pilih Game</h2>
            </div>
            <div class="game-grid" id="game-list"></div>
        </div>
    `;
    appContainer.innerHTML = homeContent;
    renderGameCards(GAMES);
    setupBannerSlider();
}

function setupBannerSlider() {
    const slider = document.getElementById('banner-slider');
    const images = slider.querySelectorAll('.banner-image');
    let currentIndex = 0;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    setInterval(nextImage, 3000);
    showImage(currentIndex);
}

function renderSearchPage(query = '') {
    const searchContent = `
        <div class="search-bar page-section">
            <i class="fas fa-search"></i>
            <input type="text" id="search-box" placeholder="Cari Game..." value="${query}">
            <button class="clear-search" id="clear-search"><i class="fas fa-times-circle"></i></button>
        </div>
        <div id="search-stats" style="display:none; color: var(--text-light); margin-bottom: 15px;"></div>
        <div id="no-results" class="page-section" style="display:none; text-align: center;">
            <p>Tidak ada hasil yang ditemukan.</p>
        </div>
        <div class="game-grid" id="game-list"></div>
    `;
    appContainer.innerHTML = searchContent;
    setupSearchFunctionality();
    if (query) {
        document.getElementById('search-box').dispatchEvent(new Event('input'));
    } else {
        renderGameCards(GAMES);
    }
}

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
        } else {
            clearBtn.style.display = 'none';
            searchStats.style.display = 'none';
            noResults.style.display = 'none';
        }
        renderGameCards(results, currentQuery);
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        searchInput.dispatchEvent(new Event('input'));
    });
}

function renderGameCards(gamesToRender, query = '') {
    const gameListContainer = document.getElementById('game-list');
    if (!gameListContainer) return;
    
    gameListContainer.innerHTML = '';
    const gamesToDisplay = gamesToRender.length > 0 ? gamesToRender : GAMES;

    gamesToDisplay.forEach(game => {
        const gameCard = document.createElement('a');
        gameCard.classList.add("game-card");
        gameCard.href = "#";
        gameCard.onclick = (e) => {
            e.preventDefault();
            renderPage('game', { game: game });
        };

        let displayName = game.name;
        if (query) {
            const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            displayName = game.name.replace(regex, `<span class="highlight">$1</span>`);
        }

        gameCard.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <div class="game-card-content">
                <h3>${displayName}</h3>
                <p>${game.publisher}</p>
            </div>
        `;
        gameListContainer.appendChild(gameCard);
    });
}

function renderGamePage() {
    isVoucherApplied = false;
    const game = selectedGame;
    const products = PRODUCTS[game.key];

    const gamePageContent = `
        <div class="game-info-header">
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
        </div>

        <div class="step-section">
            <h3>1. Masukkan ID Akun</h3>
            <div class="input-container">
                <i class="fas fa-user input-icon"></i>
                <input type="number" id="user-id" placeholder="Masukkan User ID">
            </div>
            <div id="server-id-container"></div>
            <div class="input-container">
                <i class="fab fa-whatsapp input-icon"></i>
                <input type="number" id="whatsapp-number" placeholder="Nomor WhatsApp">
            </div>
        </div>

        <div class="step-section">
            <h3>2. Pilih Produk</h3>
            <div class="options-grid" id="product-list"></div>
        </div>

        <div class="step-section">
            <h3>3. Pilih Metode Pembayaran</h3>
            <div class="options-grid" id="payment-list"></div>
        </div>

        <div class="step-section">
            <h3>4. Kode Voucher (Opsional)</h3>
            <div class="promo-section">
                <input type="text" id="promo-code" placeholder="Kode Voucher">
                <button id="use-voucher-btn">Gunakan</button>
            </div>
        </div>
    `;

    appContainer.innerHTML = gamePageContent;

    if (game.needsServerId) {
        document.getElementById('server-id-container').innerHTML = `
            <div class="input-container">
                <i class="fas fa-server input-icon"></i>
                <input type="number" id="server-id" placeholder="Masukkan Server ID">
            </div>
        `;
        document.getElementById('server-id').addEventListener('input', updateMainButton);
    }
    
    document.getElementById('user-id').addEventListener('input', updateMainButton);
    document.getElementById('whatsapp-number').addEventListener('input', updateMainButton);
    document.getElementById('use-voucher-btn').addEventListener('click', applyVoucher);

    renderOptions('product-list', products, 'product');
    renderOptions('payment-list', PAYMENTS, 'payment');
}

function renderOptions(containerId, options, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    options.forEach(option => {
        const card = document.createElement('div');
        card.classList.add('option-card', type);
        card.setAttribute('data-id', option.id);
        
        let innerHtml = '';
        if (type === 'product') {
            const finalPrice = isVoucherApplied ? Math.max(0, option.price - VOUCHER_DISCOUNT) : option.price;
            const hasDiscount = isVoucherApplied && option.price > VOUCHER_DISCOUNT;
            
            const priceHtml = hasDiscount ? `
                <div class="original-price">${formatRupiah(option.price)}</div>
                <div class="price discounted-price">${formatRupiah(finalPrice)}</div>
            ` : `<div class="price">${formatRupiah(option.price)}</div>`;
            
            let badgeHtml = '';
            if (option.badges && option.badges.length > 0) {
                const badgeType = option.badges[0];
                const badgeText = badgeType.charAt(0).toUpperCase() + badgeType.slice(1);
                badgeHtml = `<span class="special-badge" data-badge="${badgeType}">${badgeText}</span>`;
            }

            innerHtml = `
                ${badgeHtml}
                <i class="fas fa-gem icon"></i>
                <div class="label">${option.label}</div>
                <div class="price-group">${priceHtml}</div>
            `;
        } else if (type === 'payment') {
            innerHtml = `<img src="${option.img}" alt="${option.name}"><div class="label">${option.name}</div>`;
        }
        
        card.innerHTML = innerHtml;
        card.onclick = () => selectOption(card, type);
        container.appendChild(card);
    });
}

function selectOption(element, type) {
    const container = element.closest('.options-grid');
    container.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');

    const optionId = element.dataset.id;
    if (type === 'product') {
        selectedProduct = PRODUCTS[selectedGame.key].find(p => p.id === optionId);
    } else if (type === 'payment') {
        selectedPayment = PAYMENTS.find(p => p.id === optionId);
    }
    updateMainButton();
}

function applyVoucher() {
    const promoCodeInput = document.getElementById('promo-code');
    const promoCode = promoCodeInput.value.toUpperCase();
    const products = PRODUCTS[selectedGame.key];

    if (promoCode === VOUCHER_CODE) {
        isVoucherApplied = true;
        renderOptions('product-list', products, 'product');
        updateMainButton();
        showNotification(`Voucher Berhasil digunakan! Potongan: ${formatRupiah(VOUCHER_DISCOUNT)}`);
    } else {
        isVoucherApplied = false;
        renderOptions('product-list', products, 'product');
        updateMainButton();
        showNotification('Voucher Tidak valid', false);
    }
}

function renderCartPage() {
    const userId = document.getElementById('user-id').value;
    const serverId = selectedGame.needsServerId ? document.getElementById('server-id').value : '';
    const whatsappNumber = document.getElementById('whatsapp-number').value;

    const game = selectedGame;
    const product = selectedProduct;
    const payment = selectedPayment;
    const finalPrice = isVoucherApplied ? Math.max(0, product.price - VOUCHER_DISCOUNT) : product.price;

    const cartContent = `
        <div class="cart-card-group">
            <div class="page-section">
                <h3>Detail Pesanan</h3>
                <div class="summary-details">
                    <div class="summary-detail-item">
                        <span class="label"><i class="fas fa-gamepad"></i> Game</span>
                        <span class="value">${game.name}</span>
                    </div>
                    <div class="summary-detail-item">
                        <span class="label"><i class="fas fa-gem"></i> Produk</span>
                        <span class="value">${product.label}</span>
                    </div>
                    <div class="summary-detail-item">
                        <span class="label"><i class="fas fa-user"></i> Player ID</span>
                        <span class="value">${userId}${serverId ? ` (${serverId})` : ''}</span>
                    </div>
                    <div class="summary-detail-item">
                        <span class="label"><i class="fab fa-whatsapp"></i> Nomor WhatsApp</span>
                        <span class="value">${whatsappNumber}</span>
                    </div>
                    <div class="summary-detail-item">
                        <span class="label"><i class="fas fa-wallet"></i> Metode Pembayaran</span>
                        <span class="value">
                            <img src="${payment.img}" alt="${payment.name}" class="payment-image">
                            ${payment.name}
                        </span>
                    </div>
                    ${isVoucherApplied ? `
                    <div class="summary-detail-item voucher-applied">
                        <span class="label"><i class="fas fa-ticket-alt"></i> Potongan Voucher</span>
                        <span class="value">- ${formatRupiah(VOUCHER_DISCOUNT)}</span>
                    </div>
                    ` : ''}
                </div>
                <div class="summary-total">
                    <span class="label">Total Pembayaran</span>
                    <span class="value">${formatRupiah(finalPrice)}</span>
                </div>
            </div>
            <div class="page-section payment-info-card" id="payment-info-section"></div>
        </div>
    `;

    appContainer.innerHTML = cartContent;
    renderPaymentInfo();
}

function renderPaymentInfo() {
    const payment = selectedPayment;
    const paymentInfoSection = document.getElementById('payment-info-section');
    if (payment.qr) {
        paymentInfoSection.innerHTML = `
            <h4>Scan untuk Bayar</h4>
            <img src="${payment.qr}" alt="QR Code" class="qr-code-image">
            <div class="qr-caption">⚠️Perhatian: Transfer harus sesuai Dengan Harga Yang Tertera Di Atas⚠️
            <br>Silakan scan kode QR di atas untuk melakukan pembayaran.</div>
        `;
    } else if (payment.number) {
        paymentInfoSection.innerHTML = `
            <h4>Transfer ke ${payment.name}</h4>
            <img src="${payment.img}" alt="${payment.name}" class="payment-image">
            <div class="payment-caption">A.N. ${payment.holder}</div>
            <div class="payment-number" data-number="${payment.number}">${payment.number}</div>
            <button class="copy-button">Salin Nomor</button>
        `;
        paymentInfoSection.querySelector('.copy-button').addEventListener('click', () => {
            copyToClipboard(payment.number);
        });
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Nomor berhasil disalin!');
    }).catch(err => {
        console.error('Gagal menyalin:', err);
        showNotification('Gagal menyalin nomor. Coba lagi.', false);
    });
}

// --- Main Init
document.addEventListener("DOMContentLoaded", () => {
    backButton.addEventListener('click', handleBackButton);
    searchButton.addEventListener('click', handleSearchButton);

    renderPage('home');
});
