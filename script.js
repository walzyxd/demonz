/* ================== KONFIGURASI & DATA APLIKASI ================== */
const ADMIN_WA = "6282298902274";
const ADMIN_EMAIL = "walzlonely@gmail.com";

const VOUCHERS = [
    { code: "WALZSHOP", percent: 5, description: "Diskon 5% untuk semua produk" },
    { code: "WALZPROMO", percent: 5, description: "Promo khusus 5% semua produk" },
    { code: "HEMAT5000", percent: 0, fixed: 5000, minPurchase: 50000, description: "Diskon Rp5.000 (min. belanja Rp50.000)" },
    { code: "TOPUPSPECIAL", percent: 15, description: "Diskon 15% untuk top up pertama" },
    { code: "FREEDIAMOND", percent: 0, fixed: 20000, maxDiscount: 20000, description: "Diskon Rp20.000 (maks. Rp20.000)" }
];

const GAMES = [
    { key: "free-fire", name: "Free Fire", img: "https://files.catbox.moe/ldccdf.jpg", hasServerId: false, guide: "Temukan User ID Anda di bawah nama panggilan pada menu profil game." },
    { key: "mobile-legends", name: "Mobile Legends", img: "https://files.catbox.moe/6ns43w.jpg", hasServerId: true, guide: "Temukan User ID dan Server ID di bawah nama panggilan saat Anda mengklik avatar profil." },
    { key: "honor-of-kings", name: "Honor of Kings", img: "https://files.catbox.moe/i7ge1c.jpg", hasServerId: false, guide: "User ID Anda ada di bagian bawah layar saat Anda membuka profil." },
    { key: "genshin-impact", name: "Genshin Impact", img: "https://files.catbox.moe/he48wt.jpg", hasServerId: false, guide: "User ID (9 digit) terletak di sudut kanan bawah layar saat Anda berada di dalam game." },
    { key: "roblox", name: "Roblox", img: "https://files.catbox.moe/k28lxp.jpg", hasServerId: false, guide: "Top up menggunakan Gift Card yang akan dikirim langsung ke akun Anda." },
    { key: "super-sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", hasServerId: false, guide: "User ID dapat ditemukan di menu profil dalam game." },
    { key: "clash-of-clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", hasServerId: false, guide: "User ID (Tag Pemain) adalah kombinasi huruf dan angka yang dimulai dengan tanda pagar (#)." },
    { key: "blood-strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", hasServerId: false, guide: "ID Anda dapat ditemukan di profil dalam game." },
    { key: "pubg-mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", hasServerId: false, guide: "Temukan User ID Anda di sudut kanan atas lobi game saat mengklik profil." },
    { key: "garena-delta-force", name: "Garena Delta Force", img: "https://files.catbox.moe/qul2qy.png", hasServerId: false, guide: "Buka menu profil di game dan Anda dapat menemukan User ID Anda." },
    { key: "call-of-duty", name: "Call Of Duty", img: "https://files.catbox.moe/i1kcw5.webp", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil game." },
    { key: "valorant", name: "Valorant", img: "https://files.catbox.moe/3h9932.png", hasServerId: false, guide: "User ID Anda (Riot ID) dapat ditemukan di bawah nama akun Anda di bagian atas layar." },
    { key: "eggy-party", name: "Eggy Party", img: "https://files.catbox.moe/59mdks.webp", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil dalam game." },
    { key: "garena-undawn", name: "Garena Undawn", img: "https://files.catbox.moe/o5bto9.webp", hasServerId: false, guide: "Buka menu profil dan User ID Anda akan terlihat." },
];

const PROMOS = [
    { title: "Top Up Diamond FF Termurah", img: "https://files.catbox.moe/ijvqjo.png", gameKey: "free-fire" },
    { title: "Top Up Starlight MLBB Harga Cuan", img: "https://files.catbox.moe/dpr6d2.jpg", gameKey: "mobile-legends" },
    { title: "Promo UC PUBG Mobile Khusus Member", img: "https://files.catbox.moe/w43dgb.jpg", gameKey: "pubg-mobile" },
    { title: "Blessing of the Welkin Moon Genshin", img: "https://files.catbox.moe/uusd4l.jpg", gameKey: "genshin-impact" },
];

const PAYMENTS = [
    { id: "dana", name: "Dana", img: "https://files.catbox.moe/0j5opw.png", type: "ewallet", info: { number: "083139243389", name: "TI** SUT***" } },
    { id: "gopay", name: "Gopay", img: "https://files.catbox.moe/37vcbe.jpg", type: "ewallet", info: { number: "082116690164", name: "TI** SUT***" } },
    { id: "qris", name: "QRIS", img: "https://files.catbox.moe/pa0iwo.png", type: "qris", info: { qrisImg: "https://files.catbox.moe/pa0iwo.png" } },
    { id: "krom", name: "Krom Bank", img: "https://files.catbox.moe/mae938.jpg", type: "bank_transfer", info: { number: "770072009565", name: "TI** SUT***" } },
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

/* ================== FUNGSI UTILITY GLOBAL ================== */
const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
const fmtIDR = (n) => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
}).format(n);

function showModal(modalId) {
    const overlay = qs("#modal-overlay");
    const modal = qs(`#${modalId}`);
    if (overlay && modal) {
        modal.style.display = 'block';
        overlay.classList.add("active");
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modalId) {
    const modal = qs(`#${modalId}`);
    if (modal) {
        modal.style.display = 'none';
    }
    const overlay = qs("#modal-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = '';
    }
}

function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = buttonElement.textContent;
        const originalBg = buttonElement.style.backgroundColor;
        const originalColor = buttonElement.style.color;

        buttonElement.textContent = "Nomor Tersalin!";
        buttonElement.style.backgroundColor = "#22c55e"; // Hijau saat tersalin
        buttonElement.style.color = "white"; // Teks putih

        setTimeout(() => {
            buttonElement.textContent = originalText;
            buttonElement.style.backgroundColor = originalBg;
            buttonElement.style.color = originalColor;
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (page === "index") {
        initIndexPage();
    } else if (page === "game") {
        initGamePage();
    }

    const overlay = qs("#modal-overlay");
    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target.id === "modal-overlay") {
                const activeModal = qs(".modal-content[style*='display: block']");
                if (activeModal) {
                    hideModal(activeModal.id);
                }
            }
        });
    }

    // Mobile Navigation Toggle
    const navToggle = qs('.nav-toggle');
    const nav = qs('.nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

/* ================== FUNGSI UNTUK HALAMAN INDEX ================== */
function initIndexPage() {
    const gamesGrid = qs("#games-grid");
    const promoSlider = qs("#promo-slider");
    const sliderDots = qs("#slider-dots");

    let currentSlide = 0;
    let slideInterval;

    function renderGamesGrid() {
        if (!gamesGrid) return;
        gamesGrid.innerHTML = "";
        GAMES.forEach(game => {
            const card = document.createElement("a");
            card.className = "game-card";
            card.href = `game.html?key=${game.key}`;
            
            card.innerHTML = `
                <div class="game-thumbnail-container">
                    <img src="${game.img}" alt="${game.name}" class="game-thumbnail">
                </div>
                <h3 class="game-name">${game.name}</h3>
            `;
            gamesGrid.appendChild(card);
        });
    }

    function initPromoSlider() {
        if (!promoSlider || !sliderDots) return;

        promoSlider.innerHTML = "";
        sliderDots.innerHTML = "";

        PROMOS.forEach((promo, index) => {
            const slide = document.createElement("a");
            slide.className = "slider-item";
            slide.href = `game.html?key=${promo.gameKey}`;
            slide.style.backgroundImage = `url(${promo.img})`;
            promoSlider.appendChild(slide);

            const dot = document.createElement("span");
            dot.className = "slider-dot";
            dot.addEventListener("click", () => goToSlide(index));
            sliderDots.appendChild(dot);
        });

        const slides = qsa('.slider-item');
        const dots = qsa('.slider-dot');

        function updateSlider() {
            promoSlider.style.transform = `translateX(${-currentSlide * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3000);
        }

        if (slides.length > 0) {
            updateSlider();
            slideInterval = setInterval(nextSlide, 3000);
        }
    }

    renderGamesGrid();
    initPromoSlider();
}

/* ================== FUNGSI UNTUK HALAMAN GAME ================== */
function initGamePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get('key');
    if (!gameKey) {
        window.location.href = "index.html";
        return;
    }
    
    const gameData = GAMES.find(g => g.key === gameKey);
    if (!gameData) {
        document.body.innerHTML = '<p style="text-align: center; margin-top: 50px; font-size: 1.2rem;">Game tidak ditemukan.</p>';
        return;
    }
    const productsData = PRODUCTS[gameData.key];

    const gameTitleEl = qs("#game-title");
    const bannerEl = qs("#game-banner");
    const guideTextEl = qs("#game-guide");
    const serverGroupEl = qs("#server-group");
    const userIdInput = qs("#user-id");
    const serverIdInput = qs("#server-id");
    const productGrid = qs("#product-grid");
    const paymentGrid = qs("#payment-grid");
    const checkoutBtn = qs("#checkout-btn");
    const summaryBox = qs("#summary-box");
    const summarySection = qs("#summary-section");
    const voucherInput = qs("#voucher-input");
    const voucherBtn = qs("#voucher-btn");
    const voucherStatus = qs("#voucher-status");
    const voucherListBtn = qs("#voucher-list-btn");
    const backBtn = qs(".btn-back");

    let selectedProduct = null;
    let selectedPayment = null;
    let appliedVoucher = null;

    if (gameTitleEl) gameTitleEl.textContent = gameData.name;
    if (bannerEl) {
        bannerEl.src = gameData.img;
        bannerEl.alt = gameData.name;
    }
    if (guideTextEl) guideTextEl.textContent = `${gameData.guide}`;
    if (serverGroupEl) serverGroupEl.style.display = gameData.hasServerId ? "block" : "none";

    function calculateFinalPrice() {
        if (!selectedProduct) return 0;
        let finalPrice = selectedProduct.price;
        if (appliedVoucher) {
            let discountAmount = 0;
            if (appliedVoucher.percent) {
                discountAmount = selectedProduct.price * (appliedVoucher.percent / 100);
            } else if (appliedVoucher.fixed) {
                discountAmount = appliedVoucher.fixed;
            }
            finalPrice -= discountAmount;
        }
        return Math.max(0, finalPrice);
    }

    function updateUI() {
        qsa('.product-card').forEach(c => c.classList.remove('active'));
        qsa('.payment-card').forEach(c => c.classList.remove('active'));

        if (selectedProduct) {
            const productCard = qs(`.product-card[data-id="${selectedProduct.id}"]`);
            if (productCard) productCard.classList.add('active');
        }
        if (selectedPayment) {
            const paymentCard = qs(`.payment-card[data-id="${selectedPayment.id}"]`);
            if (paymentCard) paymentCard.classList.add('active');
        }

        updateSummaryVisibility();
        updateSummary();
    }

    function updateSummaryVisibility() {
        const isReady = selectedProduct && selectedPayment;
        if (summarySection) {
            summarySection.classList.toggle('active', isReady);
        }
    }

    function renderProducts() {
        if (!productGrid) return;
        productGrid.innerHTML = "";
        const items = productsData || [];

        items.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.dataset.id = product.id;

            let badgeHtml = '';
            if (product.badges && product.badges.length > 0) {
                const badgeText = product.badges[0];
                const badgeClass = `badge-${badgeText.toLowerCase().replace(/\s/g, '').replace(/\./g, '')}`;
                badgeHtml = `<div class="product-badge ${badgeClass}">${badgeText}</div>`;
            }

            card.innerHTML = `
                ${badgeHtml}
                <p class="product-label">${product.label}</p>
                <p class="product-price">${fmtIDR(product.price)}</p>
            `;

            card.addEventListener("click", () => {
                selectedProduct = product;
                appliedVoucher = null;
                if(voucherInput) voucherInput.value = '';
                if(voucherStatus) voucherStatus.textContent = '';
                updateUI();
            });
            productGrid.appendChild(card);
        });
    }

    function renderPayments() {
        if (!paymentGrid) return;
        paymentGrid.innerHTML = "";
        PAYMENTS.forEach(payment => {
            const card = document.createElement("div");
            card.className = "payment-card";
            card.dataset.id = payment.id;

            card.innerHTML = `
                <img src="${payment.img}" alt="${payment.name}" class="payment-logo">
                <p class="payment-name">${payment.name}</p>
            `;
            card.addEventListener("click", () => {
                selectedPayment = payment;
                updateUI();
            });
            paymentGrid.appendChild(card);
        });
    }

    function updateSummary() {
        if (!summaryBox) return;

        if (!selectedProduct || !selectedPayment) {
            summaryBox.innerHTML = `<p class="summary-placeholder">Pilih nominal & pembayaran untuk melihat ringkasan.</p>`;
            return;
        }

        let originalPrice = selectedProduct.price;
        let finalPrice = calculateFinalPrice();
        let discountAmount = originalPrice - finalPrice;

        const voucherInfo = appliedVoucher ? `
            <p>Diskon Voucher: <span><b>-${fmtIDR(discountAmount)}</b></span></p>
        ` : '';

        summaryBox.innerHTML = `
            <p>Produk: <span><b>${selectedProduct.label}</b></span></p>
            <p>Harga: <span><b>${fmtIDR(originalPrice)}</b></span></p>
            <p>Metode Pembayaran: <span><b>${selectedPayment.name}</b></span></p>
            ${voucherInfo}
            <hr class="summary-divider">
            <p class="summary-total-row">Total: <span><b>${fmtIDR(finalPrice)}</b></span></p>
        `;
    }

    if(voucherBtn) {
        voucherBtn.addEventListener("click", () => {
            if (!selectedProduct) {
                voucherStatus.textContent = "Silakan pilih nominal top-up terlebih dahulu.";
                voucherStatus.className = 'voucher-status error';
                return;
            }

            const code = voucherInput.value.trim().toUpperCase();
            const voucher = VOUCHERS.find(v => v.code === code);
            
            appliedVoucher = null; // Reset voucher
            
            if (voucher) {
                if (voucher.minPurchase && selectedProduct.price < voucher.minPurchase) {
                    voucherStatus.textContent = `Voucher ini berlaku untuk minimal belanja ${fmtIDR(voucher.minPurchase)}.`;
                    voucherStatus.className = 'voucher-status error';
                    return;
                }
                
                appliedVoucher = voucher;
                let finalPrice = calculateFinalPrice();
                let originalPrice = selectedProduct.price;
                let discountAmount = originalPrice - finalPrice;
                
                voucherStatus.textContent = `Voucher ${voucher.code} berhasil diterapkan! Diskon ${fmtIDR(discountAmount)}`;
                voucherStatus.className = 'voucher-status success';
            } else {
                voucherStatus.textContent = "Kode voucher tidak valid.";
                voucherStatus.className = 'voucher-status error';
            }
            updateUI();
        });
    }

    if(voucherListBtn) {
        voucherListBtn.addEventListener("click", () => {
            const modalContent = qs("#voucher-list-modal");
            modalContent.innerHTML = `
                <div class="modal-header">
                    <h4 class="modal-title">Daftar Kode Voucher</h4>
                    <button class="modal-close-btn" data-modal-id="voucher-list-modal">&times;</button>
                </div>
                <div class="modal-body voucher-list-modal-body">
                    <ul>
                        ${VOUCHERS.map(v => `
                            <li>
                                <div>
                                    <div class="voucher-code">${v.code}</div>
                                    <div class="voucher-desc">${v.description}</div>
                                </div>
                                <button class="btn-apply-voucher" data-voucher-code="${v.code}">Pilih</button>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;

            qsa('.btn-apply-voucher', modalContent).forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const code = e.target.dataset.voucherCode;
                    voucherInput.value = code;
                    hideModal('voucher-list-modal');
                    voucherBtn.click(); // Otomatis terapkan voucher
                });
            });

            const closeBtn = qs('.modal-close-btn', modalContent);
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    hideModal('voucher-list-modal');
                });
            }
            showModal('voucher-list-modal');
        });
    }

    if(checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            const userId = userIdInput.value.trim();
            const serverId = gameData.hasServerId ? serverIdInput.value.trim() : null;

            if (!userId) {
                alert("Masukkan User ID Anda.");
                if (userIdInput) userIdInput.focus();
                return;
            }

            if (gameData.hasServerId && !serverId) {
                alert("Masukkan Server ID Anda.");
                if (serverIdInput) serverIdInput.focus();
                return;
            }

            if (!selectedProduct) {
                alert("Pilih nominal top-up.");
                return;
            }

            if (!selectedPayment) {
                alert("Pilih metode pembayaran.");
                return;
            }

            const finalPrice = calculateFinalPrice();
            const encodedData = {
                game: gameData.name,
                userId: userId,
                ...(gameData.hasServerId && { serverId: serverId }),
                product: selectedProduct.label,
                totalPrice: finalPrice
            };

            const waMessage = `Halo Admin, saya ingin konfirmasi pesanan top-up saya:\n\n` +
                `*Game:* ${encodedData.game}\n` +
                `*User ID:* ${encodedData.userId}\n` +
                (gameData.hasServerId ? `*Server ID:* ${encodedData.serverId}\n` : '') +
                `*Produk:* ${encodedData.product}\n` +
                `*Metode Pembayaran:* ${selectedPayment.name}\n` +
                `*Total Pembayaran:* ${fmtIDR(encodedData.totalPrice)}\n\n` +
                `Mohon dibantu prosesnya. Terima kasih.`;

            const checkoutModalEl = qs("#checkout-modal");
            let paymentInfoHtml = '';

            if (selectedPayment.type === 'qris') {
                paymentInfoHtml = `
                    <p class="payment-instruction">Scan QRIS di bawah untuk pembayaran:</p>
                    <img src="${selectedPayment.info.qrisImg}" alt="QRIS" class="qris-image">
                `;
            } else {
                paymentInfoHtml = `
                    <p class="payment-instruction">Transfer ke rekening/e-wallet berikut:</p>
                    <div class="ewallet-info-container">
                        <img src="${selectedPayment.img}" alt="${selectedPayment.name} Logo">
                        <span id="account-number" class="ewallet-number">${selectedPayment.info.number}</span>
                        <p class="ewallet-name-text">A/N: ${selectedPayment.info.name}</p>
                        <button id="copy-account-btn" class="btn-copy">Salin Nomor ${selectedPayment.name}</button>
                    </div>
                `;
            }

            checkoutModalEl.innerHTML = `
                <div class="modal-header">
                    <h4 class="modal-title">Konfirmasi Pembelian</h4>
                    <button class="modal-close-btn" data-modal-id="checkout-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="summary-details">
                        <p><strong>Detail Pesanan Anda:</strong></p>
                        <p>Game: <span>${gameData.name}</span></p>
                        <p>User ID: <span>${userId}</span></p>
                        ${gameData.hasServerId ? `<p>Server ID: <span>${serverId}</span></p>` : ''}
                        <p>Produk: <span>${selectedProduct.label}</span></p>
                        <p>Metode Pembayaran: <span>${selectedPayment.name}</span></p>
                    </div>
                    <hr class="summary-divider">
                    <div class="checkout-total">Total Bayar: <span class="total-price-text">${fmtIDR(finalPrice)}</span></div>
                    
                    <div class="payment-section">
                        ${paymentInfoHtml}
                    </div>
                    
                    <div class="whatsapp-button-container">
                        <p class="whatsapp-guide">Setelah melakukan pembayaran, mohon kirim bukti transfer Anda melalui WhatsApp:</p>
                        <a href="https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(waMessage)}" target="_blank" class="whatsapp-button">
                            <i class="fab fa-whatsapp"></i> Kirim Bukti Transfer
                        </a>
                    </div>
                </div>
            `;

            const copyButton = qs('#copy-account-btn', checkoutModalEl);
            if (copyButton) {
                copyButton.addEventListener('click', () => {
                    copyToClipboard(selectedPayment.info.number, copyButton);
                });
            }

            const closeBtn = qs('.modal-close-btn', checkoutModalEl);
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    hideModal('checkout-modal');
                });
            }
            showModal('checkout-modal');
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.history.back(); // Kembali ke halaman sebelumnya
        });
    }

    renderProducts();
    renderPayments();
    updateUI();
}
