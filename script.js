// Data yang digunakan di seluruh aplikasi
const GAMES = [
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", url: "game.html?key=free-fire", needsServerId: false },
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", url: "game.html?key=mobile-legends", needsServerId: true },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", url: "game.html?key=honor-of-kings", needsServerId: true },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact", needsServerId: true },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corporation", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", url: "game.html?key=roblox", needsServerId: false },
    { key: "super-sus", name: "Super Sus", publisher: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", url: "game.html?key=super-sus", needsServerId: true },
    { key: "coc", name: "Clash of Clans", publisher: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", url: "game.html?key=coc", needsServerId: false },
    { key: "blood-strike", name: "Blood Strike", publisher: "NetEase", img: "https://files.catbox.moe/3y066i.jpg", url: "game.html?key=blood-strike", needsServerId: false },
    { key: "pubg", name: "PUBG Mobile", publisher: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg", needsServerId: false },
    { key: "garena-delta", name: "Garena Delta Force", publisher: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", url: "game.html?key=garena-delta", needsServerId: false },
    { key: "garena-undawn", name: "Garena Undawn", publisher: "Garena", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", url: "game.html?key=garena-undawn", needsServerId: false },
    { key: "valorant", name: "Valorant", publisher: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", url: "game.html?key=valorant", needsServerId: false },
    { key: "call-of-duty", name: "Call Of Duty", publisher: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=call-of-duty", needsServerId: false },
    { key: "eggy-party", name: "Eggy Party", publisher: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", url: "game.html?key=eggy-party", needsServerId: false },
    { key: "magic-ches-gogo", name: "Magic Ches Gogo", publisher: "Vizta Games", img: "https://files.catbox.moe/bbxhbo.jpg", url: "game.html?key=magic-ches-gogo", needsServerId: true },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://files.catbox.moe/n1fx91.png", qr: "https://files.catbox.moe/pa0iwo.png" },
    { id: "krom", name: "Bank Krom", img: "https://files.catbox.moe/j9nuwa.png", number: "770072009565", holder: "Walzshop ID" },
    { id: "dana", name: "Dana", img: "https://files.catbox.moe/9pvhjs.png", number: "083139243389", holder: "TI** SUT***" },
    { id: "gopay", name: "Gopay", img: "https://files.catbox.moe/q8v9ux.webp", number: "082298902274", holder: "TI** SUT***" }
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
    ],
    "pulsa": [
        { id: "pulsa-5k", label: "Pulsa Rp 5.000", price: 6500 },
        { id: "pulsa-10k", label: "Pulsa Rp 10.000", price: 11500 },
        { id: "pulsa-20k", label: "Pulsa Rp 20.000", price: 21500 },
        { id: "pulsa-50k", label: "Pulsa Rp 50.000", price: 51500 },
        { id: "pulsa-100k", label: "Pulsa Rp 100.000", price: 101500 }
    ]
};

// Variabel untuk menyimpan harga asli produk dan status voucher
let originalPrices = {};
let isVoucherApplied = false;

// Fungsi Global
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function selectOption(element) {
    const parent = element.closest('.options-grid');
    if (!parent) return;

    const siblings = parent.querySelectorAll(`.option-card`);
    siblings.forEach(sibling => {
        sibling.classList.remove('selected');
    });
    element.classList.add('selected');

    if (document.getElementById('topup-form')) {
        updateSummary();
    } else if (document.getElementById('topup-pulsa-form')) {
        updatePulsaSummary();
    }
}

function showNotification(message, isSuccess = true) {
    const container = document.querySelector('.notification-container') || document.body.appendChild(document.createElement('div'));
    container.classList.add('notification-container');

    container.innerHTML = '';

    const popup = document.createElement('div');
    popup.classList.add('notification-popup');

    const iconClass = isSuccess ? 'fa-check-circle' : 'fa-times-circle';
    const iconColor = isSuccess ? 'var(--selected-border)' : 'var(--price-color)';

    popup.innerHTML = `
        <i class="fas ${iconClass} icon" style="color:${iconColor};"></i>
        <span class="message">${message}</span>
    `;

    container.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('fade-out');
        popup.addEventListener('animationend', () => {
            popup.remove();
        });
    }, 3000);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Nomor berhasil disalin!', true);
    }).catch(err => {
        console.error('Gagal menyalin:', err);
        showNotification('Gagal menyalin nomor. Coba lagi.', false);
    });
}

// Logika Halaman Index
function renderGameCards() {
    const gameListContainer = document.getElementById('game-list');
    if (!gameListContainer) return;

    gameListContainer.innerHTML = '';
    GAMES.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add("game-card-custom");
        gameCard.innerHTML = `
            <a href="${game.url}">
                <img src="${game.img}" alt="${game.name}" class="game-card-img">
                <div class="game-card-content-custom">
                    <h3>${game.name}</h3>
                    <p>${game.publisher}</p>
                </div>
            </a>
        `;
        gameListContainer.appendChild(gameCard);
    });
}

// Logika Halaman Game
function renderProducts(gameKey) {
    const productListContainer = document.getElementById("product-list");
    if (!productListContainer) return;

    productListContainer.innerHTML = '';
    const products = PRODUCTS[gameKey];
    const voucherDiscount = 100;

    if (products) {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("option-card");
            productDiv.setAttribute('data-id', product.id);

            let badgeHtml = '';
            if (product.badges && product.badges.length > 0) {
                const badgeText = product.badges[0].charAt(0).toUpperCase() + product.badges[0].slice(1);
                badgeHtml = `<span class="special-badge">${badgeText}</span>`;
            }

            const currentPrice = isVoucherApplied ? Math.max(0, product.price - voucherDiscount) : product.price;

            productDiv.innerHTML = `
                ${badgeHtml}
                <i class="fas fa-gem icon"></i>
                <div class="label">${product.label}</div>
                <div class="price-group">
                    ${isVoucherApplied ? `<div class="original-price">${formatRupiah(product.price)}</div>` : ''}
                    <div class="price">${formatRupiah(currentPrice)}</div>
                </div>
            `;

            productDiv.onclick = () => {
                selectOption(productDiv);
            };
            productListContainer.appendChild(productDiv);
        });
    }
}

function updateSummary() {
    const selectedProductCard = document.querySelector('#product-list .option-card.selected');
    const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
    const summaryCard = document.getElementById('summary-card');
    const confirmButton = document.getElementById('confirm-button');
    const userIdInput = document.getElementById('user-id');
    const whatsappInput = document.getElementById('whatsapp-number');
    const serverIdInput = document.getElementById('server-id');

    const gameKey = getUrlParameter('key');
    const game = GAMES.find(g => g.key === gameKey);

    const isProductSelected = !!selectedProductCard;
    const isPaymentSelected = !!selectedPaymentCard;
    const isIdValid = userIdInput && userIdInput.value.length > 0;
    const isWhatsappValid = whatsappInput && whatsappInput.value.length > 0;

    let isServerIdValid = true;
    if (game && game.needsServerId) {
        isServerIdValid = serverIdInput && serverIdInput.value.length > 0;
    }

    if (isProductSelected && isPaymentSelected && isIdValid && isWhatsappValid && isServerIdValid) {
        summaryCard.style.display = 'flex';
        confirmButton.disabled = false;

        const productId = selectedProductCard.dataset.id;
        const product = PRODUCTS[gameKey].find(p => p.id === productId);
        const voucherDiscount = 100;
        const finalPrice = isVoucherApplied ? Math.max(0, product.price - voucherDiscount) : product.price;

        document.getElementById('summary-product-details').innerHTML = `
            <i class="fas fa-gem" style="color:var(--accent-color);"></i>
            <span class="product-text">${product.label}</span>
        `;
        document.getElementById('summary-price').innerText = formatRupiah(finalPrice);
    } else {
        summaryCard.style.display = 'none';
        confirmButton.disabled = true;
    }
}

function setupGamePage() {
    const gameKey = getUrlParameter('key');
    const game = GAMES.find(g => g.key === gameKey);
    const productListContainer = document.getElementById("product-list");
    const paymentListContainer = document.getElementById("payment-list");
    const gameInfoHeader = document.getElementById("game-info-header");
    const serverIdContainer = document.getElementById("server-id-container");
    const promoCodeInput = document.getElementById('promo-code');

    if (!game || !productListContainer || !paymentListContainer) {
        window.location.href = 'index.html';
        return;
    }

    gameInfoHeader.innerHTML = `
        <img src="${game.img}" alt="${game.name}" class="game-img">
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
    `;

    if (game.needsServerId) {
        serverIdContainer.innerHTML = `
            <i class="fas fa-server input-icon"></i>
            <input type="number" id="server-id" placeholder="Masukkan Server ID">
        `;
    } else {
        serverIdContainer.innerHTML = '';
    }

    if (PRODUCTS[gameKey]) {
        PRODUCTS[gameKey].forEach(p => {
            originalPrices[p.id] = p.price;
        });
    }

    renderProducts(gameKey);

    PAYMENTS.forEach(payment => {
        const paymentDiv = document.createElement("div");
        paymentDiv.classList.add("option-card", "payment");
        paymentDiv.setAttribute('data-id', payment.id);
        paymentDiv.innerHTML = `
            <img src="${payment.img}" alt="${payment.name}">
            <div class="label">${payment.name}</div>
        `;
        paymentDiv.onclick = () => {
            selectOption(paymentDiv);
        };
        paymentListContainer.appendChild(paymentDiv);
    });

    document.getElementById('user-id').addEventListener('input', updateSummary);
    if (game.needsServerId) {
        document.getElementById('server-id').addEventListener('input', updateSummary);
    }
    document.getElementById('whatsapp-number').addEventListener('input', updateSummary);

    document.getElementById('use-voucher-btn').addEventListener('click', () => {
        const promoCode = promoCodeInput.value.toUpperCase();
        const voucherDiscount = 100;
        if (promoCode === "WALZPROMO") {
            isVoucherApplied = true;
            renderProducts(gameKey);
            updateSummary();
            showNotification(`Voucher Berhasil digunakan! Potongan: ${formatRupiah(voucherDiscount)}`, true);
        } else {
            isVoucherApplied = false;
            renderProducts(gameKey);
            updateSummary();
            showNotification('Voucher Tidak valid', false);
        }
    });

    document.getElementById('confirm-button').addEventListener('click', () => {
        const selectedProductCard = document.querySelector('#product-list .option-card.selected');
        const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');

        const productId = selectedProductCard ? selectedProductCard.dataset.id : '';
        const paymentId = selectedPaymentCard ? selectedPaymentCard.dataset.id : '';
        const userId = document.getElementById('user-id').value;
        const serverId = game.needsServerId ? document.getElementById('server-id').value : '';
        const whatsappNumber = document.getElementById('whatsapp-number').value;

        if (productId && paymentId && userId && whatsappNumber) {
            const url = `cart.html?game_key=${gameKey}&product_id=${productId}&payment_id=${paymentId}&user_id=${userId}&server_id=${serverId}&whatsapp_number=${whatsappNumber}&voucher_applied=${isVoucherApplied}`;
            window.location.href = url;
        } else {
            showNotification('Mohon lengkapi semua data pesanan terlebih dahulu.', false);
        }
    });
}

// Logika Halaman Cart
function setupCartPage() {
    const params = new URLSearchParams(window.location.search);
    const gameKey = params.get('game_key');
    const productId = params.get('product_id');
    const paymentId = params.get('payment_id');
    const userId = params.get('user_id');
    const serverId = params.get('server_id');
    const whatsappNumber = params.get('whatsapp_number');
    const voucherApplied = params.get('voucher_applied') === 'true';

    const game = GAMES.find(g => g.key === gameKey);
    const product = PRODUCTS[gameKey] ? PRODUCTS[gameKey].find(p => p.id === productId) : null;
    const payment = PAYMENTS.find(p => p.id === paymentId);

    const cartSummaryCard = document.getElementById('cart-summary-card');
    const paymentInfoSection = document.getElementById('payment-info-section');
    const payButton = document.getElementById('pay-button');

    if (game && product && payment && cartSummaryCard) {
        const voucherDiscount = 100;
        const finalPrice = voucherApplied ? Math.max(0, product.price - voucherDiscount) : product.price;

        cartSummaryCard.innerHTML = `
            <h3>Rincian Pesanan</h3>
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
                <span class="label"><i class="fas fa-wallet"></i> Metode Pembayaran</span>
                <span class="value">
                    <img src="${payment.img}" alt="${payment.name}" class="payment-image">
                    ${payment.name}
                </span>
            </div>
            <div class="summary-detail-item">
                <span class="label"><i class="fab fa-whatsapp"></i> Nomor WhatsApp</span>
                <span class="value">${whatsappNumber}</span>
            </div>
            <div class="summary-total">
                <span class="label">Total Pembayaran</span>
                <span class="value">${formatRupiah(finalPrice)}</span>
            </div>
        `;

        let paymentContent = '';
        if (payment.qr) {
            paymentContent = `
                <h4>Scan untuk Bayar</h4>
                <img src="${payment.qr}" alt="QR Code" class="qr-code-image">
                <div class="qr-caption">⚠️Perhatian: Transfer harus sesuai Dengan Harga Yang Tertera Di Atas⚠️
Silakan scan kode QR di atas untuk melakukan pembayaran. Setelah berhasil, klik **Bayar Sekarang**.</div>
            `;
        } else if (payment.number) {
            paymentContent = `
                <h4>Transfer ke ${payment.name}</h4>
                <img src="${payment.img}" alt="${payment.name}" class="payment-image">
                <div class="payment-caption">A.N. ${payment.holder}</div>
                <div class="payment-number">${payment.number}</div>
                <button class="copy-button" onclick="copyToClipboard('${payment.number}')">Salin Nomor</button>
            `;
        }

        paymentInfoSection.innerHTML = paymentContent;

        payButton.addEventListener('click', () => {
            const adminWhatsapp = '6282298902274';
            const message = `Halo Admin, saya ingin konfirmasi pesanan saya.\n\n*Detail Pesanan:*\nGame: ${game.name}\nProduk: ${product.label}\nPlayer ID: ${userId}${serverId ? ` (${serverId})` : ''}\nMetode Pembayaran: ${payment.name}\nTotal: ${formatRupiah(finalPrice)}\n\nNomor WA saya: ${whatsappNumber}\n\nMohon bantuannya untuk diproses, terima kasih.`;
            const encodedMessage = encodeURIComponent(message);
            window.location.href = `https://wa.me/${adminWhatsapp}?text=${encodedMessage}`;
        });
    } else {
        cartSummaryCard.innerHTML = `
            <h3>Terjadi Kesalahan</h3>
            <p style="text-align: center; color: var(--text-light);">Data pesanan tidak ditemukan. Silakan kembali ke halaman utama.</p>
        `;
        if (payButton) payButton.style.display = 'none';
        if (paymentInfoSection) paymentInfoSection.style.display = 'none';
    }
}

// Logika Halaman Pulsa
function renderPulsaProducts() {
    const pulsaListContainer = document.getElementById("pulsa-list");
    if (!pulsaListContainer) return;
    
    pulsaListContainer.innerHTML = '';
    const products = PRODUCTS["pulsa"];
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("option-card");
        productDiv.setAttribute('data-id', product.id);
        productDiv.setAttribute('data-label', product.label);
        productDiv.innerHTML = `
            <div class="label">${product.label}</div>
            <div class="price-group">
                <div class="price">${formatRupiah(product.price)}</div>
            </div>
        `;
        productDiv.onclick = () => selectOption(productDiv);
        pulsaListContainer.appendChild(productDiv);
    });
}

function updatePulsaSummary() {
    const selectedProductCard = document.querySelector('#pulsa-list .option-card.selected');
    const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
    const summaryCard = document.getElementById('summary-card');
    const confirmButton = document.getElementById('confirm-button');
    const phoneNumberInput = document.getElementById('phone-number');

    const isProductSelected = !!selectedProductCard;
    const isPaymentSelected = !!selectedPaymentCard;
    const isPhoneValid = phoneNumberInput && phoneNumberInput.value.length >= 10;

    if (isProductSelected && isPaymentSelected && isPhoneValid) {
        summaryCard.style.display = 'flex';
        confirmButton.disabled = false;

        const productLabel = selectedProductCard.dataset.label;
        const productId = selectedProductCard.dataset.id;
        const product = PRODUCTS["pulsa"].find(p => p.id === productId);

        document.getElementById('summary-product-details').innerHTML = `
            <i class="fas fa-mobile-alt" style="color:var(--accent-color);"></i>
            <span class="product-text">${productLabel}</span>
        `;
        document.getElementById('summary-price').innerText = formatRupiah(product.price);
    } else {
        summaryCard.style.display = 'none';
        confirmButton.disabled = true;
    }
}

function setupPulsaPage() {
    const paymentListContainer = document.getElementById("payment-list");
    const phoneNumberInput = document.getElementById('phone-number');
    const confirmButton = document.getElementById('confirm-button');

    if (!paymentListContainer || !phoneNumberInput) return;

    renderPulsaProducts();
    
    PAYMENTS.forEach(payment => {
        const paymentDiv = document.createElement("div");
        paymentDiv.classList.add("option-card", "payment");
        paymentDiv.setAttribute('data-id', payment.id);
        paymentDiv.innerHTML = `
            <img src="${payment.img}" alt="${payment.name}">
            <div class="label">${payment.name}</div>
        `;
        paymentDiv.onclick = () => selectOption(paymentDiv);
        paymentListContainer.appendChild(paymentDiv);
    });

    phoneNumberInput.addEventListener('input', updatePulsaSummary);
    document.getElementById('pulsa-list').addEventListener('click', updatePulsaSummary);
    document.getElementById('payment-list').addEventListener('click', updatePulsaSummary);

    confirmButton.addEventListener('click', () => {
        const selectedProductCard = document.querySelector('#pulsa-list .option-card.selected');
        const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
        const productLabel = selectedProductCard.dataset.label;
        const paymentName = selectedPaymentCard.dataset.id;
        const phoneNumber = phoneNumberInput.value;
        
        const product = PRODUCTS["pulsa"].find(p => p.id === selectedProductCard.dataset.id);

        const adminWhatsapp = '6282298902274';
        const message = `Halo Admin, saya ingin konfirmasi pesanan pulsa.\n\n*Detail Pesanan:*\nNomor HP: ${phoneNumber}\nProduk: ${productLabel}\nMetode Pembayaran: ${paymentName}\nTotal: ${formatRupiah(product.price)}\n\nMohon bantuannya untuk diproses, terima kasih.`;
        const encodedMessage = encodeURIComponent(message);
        
        window.location.href = `https://wa.me/${adminWhatsapp}?text=${encodedMessage}`;
    });
}

// Logika Halaman Panel
function setupPanelPage() {
    const productNameInput = document.getElementById('user-name');
    const whatsappInput = document.getElementById('user-whatsapp');
    const productCards = document.querySelectorAll('#panel-product-list .option-card');
    const orderButton = document.getElementById('panel-order-button');
    let selectedProduct = null;

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            productCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            selectedProduct = {
                name: card.dataset.name,
                price: card.dataset.price
            };
            
            updatePanelButtonStatus();
        });
    });

    [productNameInput, whatsappInput].forEach(input => {
        input.addEventListener('input', updatePanelButtonStatus);
    });

    function updatePanelButtonStatus() {
        if (productNameInput.value && whatsappInput.value && selectedProduct) {
            orderButton.disabled = false;
        } else {
            orderButton.disabled = true;
        }
    }
    
    orderButton.addEventListener('click', () => {
        const name = productNameInput.value;
        const whatsapp = whatsappInput.value;
        
        if (!name || !whatsapp || !selectedProduct) {
            showNotification('Mohon lengkapi semua data.', false);
            return;
        }

        const adminWhatsapp = '6282298902274';
        const message = `Halo Admin, saya ingin memesan layanan Panel Pterodactyl.\n\n*Detail Pesanan:*\nNama: ${name}\nNomor WhatsApp: ${whatsapp}\nPaket: ${selectedProduct.name}\nHarga: ${formatRupiah(selectedProduct.price)}\n\nMohon bantuannya untuk diproses, terima kasih.`;
        const encodedMessage = encodeURIComponent(message);
        
        window.location.href = `https://wa.me/${adminWhatsapp}?text=${encodedMessage}`;
    });

    updatePanelButtonStatus();
}

// DOMContentLoaded Event Listener Utama
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.game-grid-custom')) {
        renderGameCards();
    } else if (document.getElementById('topup-form')) {
        setupGamePage();
    } else if (document.getElementById('cart-summary-card')) {
        setupCartPage();
    } else if (document.getElementById('topup-pulsa-form')) {
        setupPulsaPage();
    } else if (document.getElementById('panel-order-button')) {
        setupPanelPage();
    }
});
