const GAMES = [
    { key: "free-fire", name: "Free Fire", description: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", url: "game.html?key=free-fire" },
    { key: "mobile-legends", name: "Mobile Legends", description: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", url: "game.html?key=mobile-legends" },
    { key: "honor-of-kings", name: "Honor of Kings", description: "Tencent", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", url: "game.html?key=honor-of-kings" },
    { key: "genshin-impact", name: "Genshin Impact", description: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact" },
    { key: "roblox", name: "Roblox", description: "Roblox Corp", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", url: "game.html?key=roblox" },
    { key: "super-sus", name: "Super Sus", description: "Happyverse", img: "https://files.catbox.moe/j61uny.jpg", url: "game.html?key=super-sus" },
    { key: "clash-of-clans", name: "Clash of Clans", description: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", url: "game.html?key=clash-of-clans" },
    { key: "blood-strike", name: "Blood Strike", description: "NetEase Games", img: "https://files.catbox.moe/3y066i.jpg", url: "game.html?key=blood-strike" },
    { key: "pubg", name: "PUBG Mobile", description: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg" },
    { key: "garena-delta", name: "Garena Delta Force", description: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", url: "game.html?key=garena-delta" },
    { key: "garena-undawn", name: "Garena Undawn", description: "Garena", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", url: "game.html?key=garena-undawn" },
    { key: "valorant", name: "Valorant", description: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", url: "game.html?key=valorant" },
    { key: "call-of-duty", name: "Call Of Duty", description: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=call-of-duty" },
    { key: "eggy-party", name: "Eggy Party", description: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", url: "game.html?key=eggy-party" },
];

const PAYMENTS = {
    "qris": [
        { id: "qris-all", name: "QRIS", subLabel: "(Semua Pembayaran)", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", price: 3896 },
        { id: "qris-dana", name: "Dana", subLabel: "", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", price: 3896 },
        { id: "gopay", name: "Gopay", subLabel: "", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", price: 3925 },
        { id: "bank-krom", name: "Bank Krom", subLabel: "", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", price: 3829 },
    ]
};

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

const VOUCHER = {
    "WALZPROMO": 0.1 // 10% diskon
};

// --- Carousel Data ---
const carouselImages = [
    "https://files.catbox.moe/hrtpys.jpg",
    "https://files.catbox.moe/8g41jj.jpg",
    "https://files.catbox.moe/e87yj3.png",
    "https://files.catbox.moe/uusd4l.jpg"
];

let currentSlide = 0;
let slideInterval;
let appliedVoucher = null;

// --- Fungsi Global ---
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
    
    updateSummary();
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function showVoucherModal(title, message) {
    document.getElementById('voucher-modal-title').innerText = title;
    document.getElementById('voucher-modal-message').innerText = message;
    document.getElementById('voucher-modal').style.display = 'flex';
}

function updateSummary() {
    const selectedProductCard = document.querySelector('#product-list .option-card.selected');
    const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
    const summaryCard = document.getElementById('summary-card');
    const summaryProductDetails = document.getElementById('summary-product-details');
    const summaryPrice = document.getElementById('summary-price');
    const gameKey = getUrlParameter('key');
    const userIdInput = document.getElementById('user-id');
    const serverIdInput = document.getElementById('server-id');
    const confirmButton = document.getElementById('confirm-button');

    const userId = userIdInput.value;
    const serverId = serverIdInput ? serverIdInput.value : '';
    
    const isIdValid = userId.length > 0 && (serverIdInput ? serverId.length > 0 : true);
    
    if (selectedProductCard && selectedPaymentCard && isIdValid) {
        summaryCard.style.display = 'block';
        confirmButton.disabled = false;
        
        const productId = selectedProductCard.dataset.id;
        const product = PRODUCTS[gameKey].find(p => p.id === productId);
        let finalPrice = product.price;

        if (appliedVoucher) {
            finalPrice = finalPrice - (finalPrice * appliedVoucher);
        }

        summaryProductDetails.innerHTML = `
            <i class="fas fa-gem" style="color:var(--text-color);"></i>
            <span class="product-text">${product.label}</span>
        `;
        summaryPrice.innerHTML = `<span class="price-text">${formatRupiah(finalPrice)}</span>`;

    } else {
        summaryCard.style.display = 'none';
        confirmButton.disabled = true;
    }
}

// --- Fungsi Vouchers ---
function applyVoucher() {
    const voucherCode = document.getElementById('voucher-code').value.toUpperCase();
    if (VOUCHER[voucherCode]) {
        appliedVoucher = VOUCHER[voucherCode];
        updateSummary();
        showVoucherModal('Voucher Berhasil', `Kode voucher berhasil diterapkan! Diskon ${(appliedVoucher * 100)}%.`);
    } else {
        appliedVoucher = null;
        updateSummary();
        showVoucherModal('Voucher Gagal', 'Kode voucher tidak valid atau tidak ditemukan.');
    }
}

// --- Logika Halaman Index ---
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
                    <p>${game.description}</p>
                </div>
            </a>
        `;
        gameListContainer.appendChild(gameCard);
    });
}

function initializeCarousel() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselDots = document.querySelector('.carousel-dots');
    
    if (!carouselSlide || !carouselDots) return;

    carouselImages.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Slide ${index + 1}`;
        carouselSlide.appendChild(img);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        carouselDots.appendChild(dot);
    });

    const goToSlide = (index) => {
        currentSlide = index;
        carouselSlide.style.transform = `translateX(${-currentSlide * 100}%)`;
        document.querySelectorAll('.carousel-dots .dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % carouselImages.length;
        goToSlide(currentSlide);
    };

    slideInterval = setInterval(nextSlide, 5000);
}

// --- Logika Halaman Game ---
function setupGamePage() {
    const gameKey = getUrlParameter('key');
    const game = GAMES.find(g => g.key === gameKey);
    const productListContainer = document.getElementById("product-list");
    const paymentListContainer = document.getElementById("payment-list");
    const gameKeyInput = document.getElementById("game-key-input");
    const gameInfoHeader = document.getElementById("game-info-header");

    if (!game || !productListContainer || !paymentListContainer) return;

    gameKeyInput.value = gameKey;

    gameInfoHeader.innerHTML = `
        <img src="${game.img}" alt="${game.name}" class="game-img">
        <h2>${game.name}</h2>
    `;

    if (game.key === 'genshin-impact' || game.key === 'pubg') {
        document.getElementById('server-id-group').style.display = 'block';
    }

    const products = PRODUCTS[gameKey];
    if (products) {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("option-card");
            if (product.label.toLowerCase().includes("diamond") || product.label.toLowerCase().includes("gems") || product.label.toLowerCase().includes("uc") || product.label.toLowerCase().includes("crystals") || product.label.toLowerCase().includes("coins")) {
                productDiv.classList.add("diamond");
            }

            productDiv.setAttribute('data-id', product.id);

            let badgesHtml = '';
            if (product.badges) {
                badgesHtml = `<div class="badges-container">${product.badges.map(badge => `<span class="badge ${badge}">${badge}</span>`).join('')}</div>`;
            }
            
            productDiv.innerHTML = `
                <input type="radio" name="product_id" value="${product.id}" style="display:none;" required>
                <i class="fas fa-gem icon"></i>
                <div class="label">${product.label}</div>
                <div class="price">${formatRupiah(product.price)}</div>
                ${badgesHtml}
            `;
            
            productDiv.onclick = () => {
                selectOption(productDiv);
                productDiv.querySelector('input').checked = true;
            };
            productListContainer.appendChild(productDiv);
        });
    }

    for (const category in PAYMENTS) {
        PAYMENTS[category].forEach(payment => {
            const paymentDiv = document.createElement("div");
            paymentDiv.classList.add("option-card", "payment");
            paymentDiv.setAttribute('data-id', payment.id);
            paymentDiv.innerHTML = `
                <input type="radio" name="payment_id" value="${payment.id}" style="display:none;" required>
                <div class="option-details">
                    <img src="${payment.img}" alt="${payment.name}">
                    <div class="text-group">
                        <div class="label">${payment.name}</div>
                        <div class="sub-label">${payment.subLabel || ''}</div>
                    </div>
                </div>
                <div class="price">${formatRupiah(payment.price)}</div>
            `;
            paymentDiv.onclick = () => {
                selectOption(paymentDiv);
                paymentDiv.querySelector('input').checked = true;
            };
            paymentListContainer.appendChild(paymentDiv);
        });
    }

    const userIdInput = document.getElementById('user-id');
    const serverIdInput = document.getElementById('server-id');
    const confirmButton = document.getElementById('confirm-button');
    const modal = document.getElementById('confirmation-modal');
    const modalSummary = document.getElementById('modal-summary-details');

    if (userIdInput) userIdInput.addEventListener('input', updateSummary);
    if (serverIdInput) serverIdInput.addEventListener('input', updateSummary);

    const inputs = document.querySelectorAll('#user-id, #server-id');
    inputs.forEach(input => {
        input.addEventListener('input', updateSummary);
    });

    document.querySelectorAll('.options-grid .option-card').forEach(card => {
        card.addEventListener('click', updateSummary);
    });
    
    document.getElementById('use-voucher-btn').addEventListener('click', applyVoucher);

    confirmButton.addEventListener('click', () => {
        const selectedProductCard = document.querySelector('#product-list .option-card.selected');
        const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
        const userId = userIdInput.value;
        const serverId = serverIdInput ? serverIdInput.value : '';

        if (!userId || !selectedProductCard || !selectedPaymentCard) {
            alert("Harap lengkapi semua data: ID pengguna, produk, dan pembayaran.");
            return;
        }

        const productId = selectedProductCard.dataset.id;
        const paymentId = selectedPaymentCard.dataset.id;
        const product = PRODUCTS[gameKey].find(p => p.id === productId);
        let payment = null;
        for (const category in PAYMENTS) {
            const foundPayment = PAYMENTS[category].find(p => p.id === paymentId);
            if (foundPayment) {
                payment = foundPayment;
                break;
            }
        }
        
        let finalPrice = product.price;
        if (appliedVoucher) {
            finalPrice = finalPrice - (finalPrice * appliedVoucher);
        }

        modalSummary.innerHTML = `
            <p><strong>Game:</strong> ${game.name}</p>
            <p><strong>User ID:</strong> ${userId}</p>
            ${serverId ? `<p><strong>Server ID:</strong> ${serverId}</p>` : ''}
            <p><strong>Produk:</strong> ${product.label}</p>
            <p><strong>Pembayaran:</strong> ${payment.name}</p>
            <p><strong>Total Harga:</strong> <span class="price-text" style="background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${formatRupiah(finalPrice)}</span></p>
            ${appliedVoucher ? `<p><strong>Diskon Voucher:</strong> ${(appliedVoucher * 100)}%</p>` : ''}
        `;

        modal.style.display = 'flex';
        
        document.getElementById('confirm-modal-btn').onclick = () => {
             window.location.href = `cart.html?key=${gameKey}&user_id=${userId}&server_id=${serverId}&product_id=${productId}&payment_id=${paymentId}`;
        };

        document.getElementById('cancel-modal-btn').onclick = () => {
            modal.style.display = 'none';
        };
    });
}


// --- Logika Halaman Cart ---
function setupCartPage() {
    const gameKeyCart = getUrlParameter('key');
    const productId = getUrlParameter('product_id');
    const paymentId = getUrlParameter('payment_id');
    const userId = getUrlParameter('user_id');
    const serverId = getUrlParameter('server_id');

    const cartSummaryCard = document.getElementById('cart-summary-card');
    if (!cartSummaryCard) return;

    const game = GAMES.find(g => g.key === gameKeyCart);
    const product = PRODUCTS[gameKeyCart] ? PRODUCTS[gameKeyCart].find(p => p.id === productId) : null;
    let payment = null;
    for (const category in PAYMENTS) {
        const foundPayment = PAYMENTS[category].find(p => p.id === paymentId);
        if (foundPayment) {
            payment = foundPayment;
            break;
        }
    }
    
    if (game && product && payment) {
        document.getElementById('cart-game-img').src = game.img;
        document.getElementById('cart-game-name').innerText = game.name;
        document.getElementById('cart-user-id').innerText = `User ID: ${userId}`;
        if (serverId && serverId.length > 0) {
            document.getElementById('cart-server-id').innerText = `Server ID: ${serverId}`;
            document.getElementById('cart-server-id').style.display = 'block';
        }
        document.getElementById('cart-product-label').innerText = product.label;
        document.getElementById('cart-payment-img').src = payment.img;
        document.getElementById('cart-payment-name').innerText = payment.name;

        const paymentInfoContainer = document.getElementById('cart-payment-info');
        paymentInfoContainer.innerHTML = '';

        const paymentInfoData = {
            "bank-krom": { number: "8009123456", name: "TI** SUT***" },
            "qris-all": { qrisImg: "https://files.catbox.moe/5688406c-3c9f-4990-b77a-4f1eaba082ad.png" },
            "qris-dana": { qrisImg: "https://files.catbox.moe/5688406c-3c9f-4990-b77a-4f1eaba082ad.png" },
            "gopay": { number: "08123456789", name: "TI** SUT***" }
        };

        const selectedPaymentInfo = paymentInfoData[paymentId];
        if (selectedPaymentInfo) {
            if (selectedPaymentInfo.number) {
                paymentInfoContainer.innerHTML = `
                    <div class="payment-details-info">
                        <p>Nomor Rekening: <span id="account-number">${selectedPaymentInfo.number}</span></p>
                        <p>A.n: ${selectedPaymentInfo.name}</p>
                        <button class="copy-button" onclick="copyToClipboard('account-number')">Salin Nomor</button>
                    </div>
                `;
            } else if (selectedPaymentInfo.qrisImg) {
                paymentInfoContainer.innerHTML = `
                    <img src="${selectedPaymentInfo.qrisImg}" alt="QRIS Code" class="qris-image">
                    <p style="margin-top:10px;">Silakan scan kode QR di atas</p>
                `;
            }
        }
        document.getElementById('cart-total-price').innerText = `${formatRupiah(product.price)}`;
    } else {
        // Handle case where URL parameters are missing or invalid
        cartSummaryCard.innerHTML = `<p style="text-align: center; color: red;">Maaf, data pesanan tidak ditemukan. Silakan kembali ke halaman utama.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.game-grid-custom')) {
        renderGameCards();
        initializeCarousel();
    } else if (document.getElementById('topup-form')) {
        setupGamePage();
    } else if (document.getElementById('cart-summary-card')) {
        setupCartPage();
    }
});

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const textToCopy = element.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Nomor rekening berhasil disalin!");
    }).catch(err => {
        console.error('Gagal menyalin:', err);
    });
}
