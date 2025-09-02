// Data games dan voucher
const games = [
    {
        id: 'free-fire',
        name: 'Free Fire',
        banner: 'https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg',
        guide: 'Temukan User ID Anda di bawah nama panggilan pada menu profil game.',
        needsServerId: false,
        products: [
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
            { id: "ff-mw", label: "Membership Mingguan", price: 30500 },
            { id: "ff-mb", label: "Membership Bulanan", price: 90000 },
            { id: "ff-lvl6", label: "Level Up Pass Lv.6", price: 5500 },
            { id: "ff-lvl10", label: "Level Up Pass Lv.10", price: 8800 },
            { id: "ff-lvl15", label: "Level Up Pass Lv.15", price: 8800 },
            { id: "ff-lvl20", label: "Level Up Pass Lv.20", price: 8800 },
            { id: "ff-booyah", label: "BooYah Pass", price: 50000 },
        ],
        payments: []
    },
    {
        id: 'mobile-legends',
        name: 'Mobile Legends',
        banner: 'https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg',
        guide: 'Temukan User ID (8-11 digit) dan Zone ID (4-5 digit) Anda.',
        needsServerId: true,
        products: [
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
            { id: "ml-wdp", label: "Weekly Diamond Pass", price: 28000 },
            { id: "ml-twilight", label: "Twilight Pass", price: 150000 },
        ],
        payments: []
    },
    {
        id: 'honor-of-kings',
        name: 'Honor of Kings',
        banner: 'https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg',
        guide: 'User ID Anda ada di bagian bawah layar saat Anda membuka profil.',
        needsServerId: false,
        products: [
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
        payments: []
    },
    {
        id: 'genshin-impact',
        name: 'Genshin Impact',
        banner: 'https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg',
        guide: 'User ID (9 digit) terletak di sudut kanan bawah layar saat Anda berada di dalam game.',
        needsServerId: false,
        products: [
            { id: "gi-60", label: "60 Genesis Crystals", price: 14865 },
            { id: "gi-330", label: "330 Genesis Crystals", price: 72973 },
            { id: "gi-1090", label: "1090 Genesis Crystals", price: 229730 },
            { id: "gi-2240", label: "2240 Genesis Crystals", price: 440541 },
            { id: "gi-3880", label: "3880 Genesis Crystals", price: 734234 },
            { id: "gi-8080", label: "8080 Genesis Crystals", price: 1467568 },
            { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973 },
        ],
        payments: []
    },
    {
        id: 'roblox',
        name: 'Roblox',
        banner: 'https://i.supaimg.com/c8d8f1c7-b02c-46a3-a6e5-63a6487d622c.jpg',
        guide: 'Top up menggunakan Gift Card yang akan dikirim langsung ke akun Anda.',
        needsServerId: false,
        products: [
            { id: "rbx-50k", label: "Gift Card Rp50.000", price: 48440 },
            { id: "rbx-65k", label: "Gift Card Rp65.000", price: 62970 },
            { id: "rbx-100k", label: "Gift Card Rp100.000", price: 96500 },
            { id: "rbx-200k", label: "Gift Card Rp200.000", price: 193000 },
            { id: "rbx-500k", label: "Gift Card Rp500.000", price: 479000 },
        ],
        payments: []
    },
    {
        id: 'super-sus',
        name: 'Super Sus',
        banner: 'https://files.catbox.moe/j61uny.jpg',
        guide: 'User ID dapat ditemukan di menu profil dalam game.',
        needsServerId: false,
        products: [
            { id: "ss-100", label: "100 Goldstar", price: 11712 },
            { id: "ss-310", label: "310 Goldstar", price: 34234 },
            { id: "ss-520", label: "520 Goldstar", price: 57658 },
            { id: "ss-1060", label: "1060 Goldstar", price: 116216 },
            { id: "ss-2180", label: "2180 Goldstar", price: 239640 },
            { id: "ss-5600", label: "5600 Goldstar", price: 613514 },
            { id: "ss-weekly", label: "Weekly Card", price: 13514 },
            { id: "ss-monthly", label: "Monthly Card", price: 134234 },
            { id: "ss-vip", label: "Super VIP Card", price: 157658 },
        ],
        payments: []
    },
    {
        id: 'clash-of-clans',
        name: 'Clash of Clans',
        banner: 'https://files.catbox.moe/6aia0n.jpg',
        guide: 'User ID (Tag Pemain) adalah kombinasi huruf dan angka yang dimulai dengan tanda pagar (#).',
        needsServerId: false,
        products: [
            { id: "coc-500", label: "500 Gems", price: 75299 },
            { id: "coc-1200", label: "1200 Gems", price: 150499 },
            { id: "coc-2500", label: "2500 Gems", price: 300999 },
            { id: "coc-6500", label: "6500 Gems", price: 752399 },
            { id: "coc-14000", label: "14000 Gems", price: 1454599 },
        ],
        payments: []
    },
    {
        id: 'blood-strike',
        name: 'Blood Strike',
        banner: 'https://files.catbox.moe/3y066i.jpg',
        guide: 'ID Anda dapat ditemukan di profil dalam game.',
        needsServerId: false,
        products: [
            { id: "bs-100", label: "100 + 5 Gold", price: 11999 },
            { id: "bs-300", label: "300 + 20 Gold", price: 34999 },
            { id: "bs-500", label: "500 + 40 Gold", price: 54999 },
            { id: "bs-1000", label: "1000 + 100 Gold", price: 110000 },
            { id: "bs-2000", label: "2000 + 260 Gold", price: 219999 },
            { id: "bs-5000", label: "5000 + 800 Gold", price: 549999 },
        ],
        payments: []
    },
    {
        id: 'pubg-mobile',
        name: 'PUBG Mobile',
        banner: 'https://files.catbox.moe/tatuo9.jpg',
        guide: 'Temukan User ID Anda di sudut kanan atas lobi game saat mengklik profil.',
        needsServerId: false,
        products: [
            { id: "pubg-30", label: "30 UC", price: 7000 },
            { id: "pubg-60", label: "60 UC", price: 14000 },
            { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
            { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
            { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
            { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 },
            { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800 },
            { id: "pubg-booyah", label: "BooYah Pass", price: 50000 },
        ],
        payments: []
    },
    {
        id: 'garena-delta-force',
        name: 'Garena Delta Force',
        banner: 'https://files.catbox.moe/qul2qy.png',
        guide: 'Buka menu profil di game dan Anda dapat menemukan User ID Anda.',
        needsServerId: false,
        products: [
            { id: "delta-tide", label: "Tide Supplies", price: 8499 },
            { id: "delta-adv", label: "Tide Supplies Advanced", price: 24499 },
            { id: "delta-genesis", label: "Black Hawk Down Genesis", price: 41999 },
            { id: "delta-redefine", label: "Black Hawk Down Redefine", price: 84999 },
            { id: "delta-18", label: "18 + 1", price: 4999 },
            { id: "delta-30", label: "30 + 2", price: 7499 },
            { id: "delta-60", label: "60 + 3", price: 14999 },
            { id: "delta-300", label: "300 + 36", price: 74999 },
            { id: "delta-420", label: "420 + 62", price: 99999 },
            { id: "delta-680", label: "680 + 105", price: 139999 },
            { id: "delta-1280", label: "1280 + 264", price: 279999 },
            { id: "delta-1680", label: "1680 + 385", price: 349999 },
            { id: "delta-3280", label: "3280 + 834", price: 699999 },
            { id: "delta-6480", label: "6480 + 1944", price: 1399999 },
            { id: "delta-12960", label: "12960 + 3888", price: 2799999 },
            { id: "delta-19440", label: "19440 + 5832", price: 4199999 },
        ],
        payments: []
    },
    {
        id: 'call-of-duty',
        name: 'Call Of Duty',
        banner: 'https://files.catbox.moe/i1kcw5.webp',
        guide: 'User ID Anda dapat ditemukan di profil game.',
        needsServerId: false,
        products: [
            { id: "codm-31", label: "31 CP", price: 4899 },
            { id: "codm-63", label: "63 CP", price: 9699 },
            { id: "codm-128", label: "128 CP", price: 19399 },
            { id: "codm-321", label: "321 CP", price: 48499 },
            { id: "codm-645", label: "645 CP", price: 99999 },
            { id: "codm-800", label: "800 CP", price: 119999 },
            { id: "codm-1373", label: "1373 CP", price: 193999 },
            { id: "codm-2060", label: "2060 CP", price: 290999 },
            { id: "codm-2750", label: "2750 CP", price: 379999 },
            { id: "codm-3564", label: "3564 CP", price: 484999 },
            { id: "codm-5619", label: "5619 CP", price: 729999 },
            { id: "codm-7656", label: "7656 CP", price: 969999 },
            { id: "codm-15312", label: "15312 CP", price: 1999999 },
            { id: "codm-38280", label: "38280 CP", price: 4999999 },
            { id: "codm-76560", label: "76560 CP", price: 9999999 },
        ],
        payments: []
    },
    {
        id: 'valorant',
        name: 'Valorant',
        banner: 'https://files.catbox.moe/3h9932.png',
        guide: 'User ID (Riot ID) dapat ditemukan di bawah nama akun Anda di bagian atas layar.',
        needsServerId: false,
        products: [
            { id: "val-475", label: "475 Points", price: 54349 },
            { id: "val-1000", label: "1000 Points", price: 108799 },
            { id: "val-2050", label: "2050 Points", price: 217499 },
            { id: "val-3650", label: "3650 Points", price: 372199 },
            { id: "val-5350", label: "5350 Points", price: 544999 },
            { id: "val-11000", label: "11000 Points", price: 1089999 },
        ],
        payments: []
    },
    {
        id: 'eggy-party',
        name: 'Eggy Party',
        banner: 'https://files.catbox.moe/59mdks.webp',
        guide: 'User ID Anda dapat ditemukan di profil dalam game.',
        needsServerId: false,
        products: [
            { id: "eggy-weekly", label: "Weekly Egg Coin Pack", price: 14799 },
            { id: "eggy-yoyo", label: "Yoyo Membership", price: 27799 },
            { id: "eggy-shiny", label: "Shiny Coin Jar", price: 42699 },
            { id: "eggy-aquarius", label: "Energetic Aquarius", price: 14499 },
            { id: "eggy-capricorn", label: "Obsidian Capricorn", price: 14399 },
            { id: "eggy-libra", label: "Elegant Libra", price: 14499 },
            { id: "eggy-sagittarius", label: "Wandering Sagittarius", price: 14399 },
            { id: "eggy-scorpio", label: "Mysterious Scorpio", price: 14399 },
            { id: "eggy-spring-small", label: "Spring Egg Coin Pack Small", price: 14399 },
            { id: "eggy-spring-big", label: "Spring Egg Coin Pack Big", price: 163399 },
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
        payments: []
    },
    {
        id: 'garena-undawn',
        name: 'Garena Undawn',
        banner: 'https://files.catbox.moe/o5bto9.webp',
        guide: 'Buka menu profil dan User ID Anda akan terlihat.',
        needsServerId: false,
        products: [
            { id: "undawn-bulanan", label: "Kartu Bulanan", price: 47299 },
            { id: "undawn-growth", label: "Growth Fund", price: 94799 },
            { id: "undawn-glory", label: "Glory Pass Premium", price: 142299 },
            { id: "undawn-elite", label: "Elite Fund Rebate LV 80", price: 126999 },
            { id: "undawn-ace", label: "Ace Fund", price: 143999 },
            { id: "undawn-rc80", label: "RC 80", price: 14599 },
            { id: "undawn-rc250", label: "RC 250", price: 43699 },
            { id: "undawn-rc450", label: "RC 450", price: 72799 },
            { id: "undawn-rc920", label: "RC 920", price: 144599 },
            { id: "undawn-rc1850", label: "RC 1850", price: 290099 },
            { id: "undawn-rc2800", label: "RC 2800", price: 435599 },
            { id: "undawn-rc4750", label: "RC 4750", price: 726599 },
            { id: "undawn-rc9600", label: "RC 9600", price: 1454099 },
            { id: "undawn-rc33000", label: "RC 33.000", price: 4849999 },
            { id: "undawn-rc66500", label: "RC 66.500", price: 9699999 },
            { id: "undawn-mingguan", label: "Kartu Mingguan", price: 28599 },
            { id: "undawn-glory-s7", label: "Glory Pass Premium S7", price: 143999 },
            { id: "undawn-glory-s16", label: "Glory Pass Premium S16", price: 143999 },
            { id: "undawn-prep", label: "Quick Battle Prep", price: 94379 },
        ],
        payments: []
    }
];

const payments = [
    { id: 'dana', name: 'DANA', img: 'https://files.catbox.moe/c93s65.png' },
    { id: 'shopeepay', name: 'ShopeePay', img: 'https://files.catbox.moe/f0r79u.png' },
    { id: 'qris', name: 'QRIS', img: 'https://files.catbox.moe/679198.png' },
    { id: 'gopay', name: 'GoPay', img: 'https://files.catbox.moe/t5sps8.png' }
];

const vouchers = [
    { code: 'DISKON10', discount: 0.10, minPrice: 50000, name: 'DISKON 10% (Min. Rp50.000)' },
    { code: 'HEMAT20', discount: 0.20, minPrice: 100000, name: 'HEMAT 20% (Min. Rp100.000)' }
];

let selectedGame = null;
let selectedProduct = null;
let selectedPayment = null;
let appliedVoucher = null;

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
};

const handleHomePage = () => {
    const gamesGrid = document.getElementById('games-grid');
    if (gamesGrid) {
        gamesGrid.innerHTML = games.map(game => `
            <a href="game.html?id=${game.id}" class="game-card">
                <img src="${game.banner}" alt="${game.name}">
                <span>${game.name}</span>
            </a>
        `).join('');
    }

    const sliderTrack = document.getElementById('slider-track');
    const sliderDots = document.getElementById('slider-dots');
    if (sliderTrack && sliderDots) {
        let currentIndex = 0;
        const totalItems = sliderTrack.children.length;

        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            dot.addEventListener('click', () => goToSlide(i));
            sliderDots.appendChild(dot);
        }

        const updateDots = () => {
            Array.from(sliderDots.children).forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        const goToSlide = (index) => {
            currentIndex = index;
            const offset = -currentIndex * 100;
            sliderTrack.style.transform = `translateX(${offset}%)`;
            updateDots();
        };

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            goToSlide(currentIndex);
        }, 5000);

        updateDots();
    }
    
    // Mobile navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');

    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
};

const handleGamePage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    selectedGame = games.find(g => g.id === gameId);

    if (!selectedGame) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('page-title').textContent = `Walz Shop - ${selectedGame.name}`;
    document.getElementById('game-banner').src = selectedGame.banner;
    document.querySelector('.guide-text p').textContent = selectedGame.guide;

    if (!selectedGame.needsServerId) {
        document.getElementById('server-group').style.display = 'none';
    }

    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = selectedGame.products.map(product => `
        <div class="product-card" data-id="${product.id}" data-price="${product.price}">
            <div class="product-label">${product.label}</div>
            <div class="product-price">${formatPrice(product.price)}</div>
        </div>
    `).join('');

    const paymentGrid = document.getElementById('payment-grid');
    paymentGrid.innerHTML = payments.map(payment => `
        <div class="payment-card" data-id="${payment.id}">
            <img src="${payment.img}" alt="${payment.name}">
            <div class="payment-label">${payment.name}</div>
        </div>
    `).join('');

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.product-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedProduct = selectedGame.products.find(p => p.id === card.dataset.id);
            updateSummary();
        });
    });

    document.querySelectorAll('.payment-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedPayment = payments.find(p => p.id === card.dataset.id);
            updateSummary();
        });
    });

    document.getElementById('voucher-btn').addEventListener('click', applyVoucher);
    document.getElementById('voucher-list-btn').addEventListener('click', showVoucherList);
    document.getElementById('checkout-btn').addEventListener('click', showCheckoutModal);
    
    // Mobile navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');

    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
};

const updateSummary = () => {
    const summaryBox = document.getElementById('summary-box');
    const totalPriceBox = document.getElementById('total-price-box');
    const checkoutBtn = document.getElementById('checkout-btn');

    summaryBox.innerHTML = '';
    totalPriceBox.style.display = 'none';
    checkoutBtn.disabled = true;

    if (selectedProduct && selectedPayment) {
        let finalPrice = selectedProduct.price;
        let discountInfo = '';

        if (appliedVoucher) {
            const discountAmount = selectedProduct.price * appliedVoucher.discount;
            finalPrice -= discountAmount;
            discountInfo = `<p><span>Diskon (${(appliedVoucher.discount * 100)}%)</span><span>- ${formatPrice(discountAmount)}</span></p>`;
        }

        summaryBox.innerHTML = `
            <p><span>Game</span><span>${selectedGame.name}</span></p>
            <p><span>User ID</span><span>${document.getElementById('user-id').value || '-'}</span></p>
            ${selectedGame.needsServerId ? `<p><span>Server ID</span><span>${document.getElementById('server-id').value || '-'}</span></p>` : ''}
            <p><span>Nominal</span><span>${selectedProduct.label}</span></p>
            <p><span>Metode Bayar</span><span>${selectedPayment.name}</span></p>
            ${discountInfo}
        `;
        
        totalPriceBox.style.display = 'flex';
        document.getElementById('total-price').textContent = formatPrice(finalPrice);
        checkoutBtn.disabled = false;
    } else {
        summaryBox.innerHTML = `<p class="muted">Pilih nominal & metode bayar untuk melihat total.</p>`;
    }
};

const applyVoucher = () => {
    const voucherInput = document.getElementById('voucher-input').value.toUpperCase();
    const voucherStatus = document.getElementById('voucher-status');

    if (!selectedProduct) {
        voucherStatus.textContent = 'Pilih nominal terlebih dahulu!';
        voucherStatus.classList.add('error');
        voucherStatus.classList.remove('success');
        return;
    }

    const voucher = vouchers.find(v => v.code === voucherInput);
    
    if (voucher) {
        if (selectedProduct.price >= voucher.minPrice) {
            appliedVoucher = voucher;
            voucherStatus.textContent = 'Voucher berhasil diterapkan!';
            voucherStatus.classList.remove('error');
            voucherStatus.classList.add('success');
        } else {
            appliedVoucher = null;
            voucherStatus.textContent = `Voucher ini berlaku untuk transaksi min. ${formatPrice(voucher.minPrice)}.`;
            voucherStatus.classList.add('error');
            voucherStatus.classList.remove('success');
        }
    } else {
        appliedVoucher = null;
        voucherStatus.textContent = 'Kode voucher tidak valid.';
        voucherStatus.classList.add('error');
        voucherStatus.classList.remove('success');
    }
    updateSummary();
};

const showVoucherList = () => {
    const modal = document.getElementById('voucher-list-modal');
    const overlay = document.getElementById('modal-overlay');

    modal.innerHTML = `
        <div class="modal-header">
            <h3>Daftar Kode Voucher</h3>
            <button class="modal-close-btn">&times;</button>
        </div>
        <div class="modal-content-list">
            ${vouchers.map(v => `
                <div class="voucher-item">
                    <h4>${v.code}</h4>
                    <p>Diskon: ${v.discount * 100}%</p>
                    <p>Minimal Pembelian: ${formatPrice(v.minPrice)}</p>
                </div>
            `).join('')}
        </div>
    `;

    overlay.classList.add('active');
    modal.classList.add('active');
    document.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') closeModal();
    });
};

const showCheckoutModal = () => {
    const modal = document.getElementById('checkout-modal');
    const overlay = document.getElementById('modal-overlay');

    const userId = document.getElementById('user-id').value;
    const serverId = document.getElementById('server-id')?.value || '';
    const selectedProd = selectedProduct;
    const selectedPay = selectedPayment;
    const finalPrice = document.getElementById('total-price').textContent;

    if (!userId || !selectedProd || !selectedPay) {
        alert('Harap lengkapi semua data transaksi.');
        return;
    }

    modal.innerHTML = `
        <div class="modal-header">
            <h3>Konfirmasi Pembelian</h3>
            <button class="modal-close-btn">&times;</button>
        </div>
        <div class="modal-content">
            <div class="summary-box">
                <p><span>Game</span><span>${selectedGame.name}</span></p>
                <p><span>User ID</span><span>${userId}</span></p>
                ${selectedGame.needsServerId ? `<p><span>Server ID</span><span>${serverId}</span></p>` : ''}
                <p><span>Nominal</span><span>${selectedProd.label}</span></p>
                <p><span>Metode Bayar</span><span>${selectedPay.name}</span></p>
                ${appliedVoucher ? `<p><span>Voucher</span><span>${appliedVoucher.code}</span></p>` : ''}
            </div>
            <div class="total-price-box">
                <span>Total Pembayaran</span>
                <span>${finalPrice}</span>
            </div>
            
            <div class="payment-info">
                <h4>Lakukan Pembayaran ke Rekening Berikut:</h4>
                <div class="copy-field">
                    <span id="account-number">1234567890 (a.n. Walz Shop)</span>
                    <button id="copy-account-btn" class="btn btn-primary">Salin</button>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <a href="https://wa.me/6282298902274?text=Halo admin, saya sudah melakukan pembayaran untuk transaksi berikut:%0A%0AGame: ${selectedGame.name}%0AUser ID: ${userId}%0A${selectedGame.needsServerId ? `Server ID: ${serverId}%0A` : ''}Nominal: ${selectedProd.label}%0AMetode Bayar: ${selectedPay.name}%0ATotal: ${finalPrice}%0A%0AHarap segera diproses. Terima kasih." target="_blank" class="btn btn-primary btn-block">Konfirmasi Pembayaran</a>
        </div>
    `;

    overlay.classList.add('active');
    modal.classList.add('active');
    document.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') closeModal();
    });

    document.getElementById('copy-account-btn').addEventListener('click', () => {
        const accountNumber = document.getElementById('account-number').textContent;
        navigator.clipboard.writeText(accountNumber).then(() => {
            alert('Nomor rekening berhasil disalin!');
        });
    });
};

const closeModal = () => {
    const overlay = document.getElementById('modal-overlay');
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => m.classList.remove('active'));
    overlay.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('home-page')) {
        handleHomePage();
    } else if (document.getElementById('game-page')) {
        handleGamePage();
    }
});
