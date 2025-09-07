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
    { key: "magic-ches-gogo", name: "Magic Ches Gogo", publisher: "Vizta Games", img: "https://files.catbox.moe/bbxhbo.jpg", needsServerId: true }
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", qr: "https://files.catbox.moe/pa0iwo.png" },
    { id: "krom", name: "Bank Krom", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", number: "770072009565", holder: "Walzshop ID" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", number: "083139243389", holder: "Anom" },
    { id: "gopay", name: "Gopay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", number: "082298902274", holder: "Anom" }
];

const PRODUCTS = {
    "free-fire": [
        { id: "ff-140", label: "140 Diamond", price: 19000 },
        { id: "ff-210", label: "210 Diamond", price: 28000 },
        { id: "ff-355", label: "355 Diamond", price: 47000 },
        { id: "ff-720", label: "720 Diamond", price: 95000 },
        { id: "ff-1450", label: "1450 Diamond", price: 189000 },
        { id: "ff-2180", label: "2180 Diamond", price: 283000 }
    ],
    "mobile-legends": [
        { id: "ml-50", label: "50 Diamond", price: 15000 },
        { id: "ml-100", label: "100 Diamond", price: 30000, badges: ['promo'] },
        { id: "ml-150", label: "150 Diamond", price: 45000 },
        { id: "ml-200", label: "200 Diamond", price: 60000 },
        { id: "ml-250", label: "250 Diamond", price: 75000 },
        { id: "ml-300", label: "300 Diamond", price: 90000, badges: ['populer'] }
    ],
    "honor-of-kings": [
        { id: "hok-50", label: "50 Token", price: 15000 },
        { id: "hok-100", label: "100 Token", price: 30000 },
        { id: "hok-250", label: "250 Token", price: 75000 }
    ],
    "genshin-impact": [
        { id: "gi-60", label: "60 Genesis Crystal", price: 16000 },
        { id: "gi-300", label: "300 Genesis Crystal", price: 79000 },
        { id: "gi-980", label: "980 Genesis Crystal", price: 265000 },
        { id: "gi-blessing", label: "Blessing of the Welkin Moon", price: 79000, badges: ['hot'] }
    ],
    "roblox": [
        { id: "roblox-40", label: "40 Robux", price: 10000 },
        { id: "roblox-80", label: "80 Robux", price: 20000 },
        { id: "roblox-200", label: "200 Robux", price: 50000 },
        { id: "roblox-400", label: "400 Robux", price: 100000 }
    ],
    "super-sus": [
        { id: "ss-100", label: "100 Bintang", price: 15000 },
        { id: "ss-200", label: "200 Bintang", price: 30000 }
    ],
    "coc": [
        { id: "coc-80", label: "80 Gem", price: 15000 },
        { id: "coc-250", label: "250 Gem", price: 45000 }
    ],
    "blood-strike": [
        { id: "bs-60", label: "60 Gold", price: 15000 },
        { id: "bs-100", label: "100 Gold", price: 25000 }
    ],
    "pubg": [
        { id: "pubg-60", label: "60 UC", price: 15000 },
        { id: "pubg-325", label: "325 UC", price: 75000 }
    ],
    "garena-delta": [
        { id: "gd-60", label: "60 Diamond", price: 15000 },
        { id: "gd-120", label: "120 Diamond", price: 30000 }
    ],
    "garena-undawn": [
        { id: "gu-60", label: "60 Token", price: 15000 },
        { id: "gu-120", label: "120 Token", price: 30000 }
    ],
    "valorant": [
        { id: "val-125", label: "125 VP", price: 15000 },
        { id: "val-250", label: "250 VP", price: 30000 }
    ],
    "call-of-duty": [
        { id: "cod-80", label: "80 CP", price: 15000 },
        { id: "cod-200", label: "200 CP", price: 40000 }
    ],
    "eggy-party": [
        { id: "ep-100", label: "100 Egg Coin", price: 15000 },
        { id: "ep-200", label: "200 Egg Coin", price: 30000 }
    ],
    "magic-ches-gogo": [
        { id: "mcg-100", label: "100 Diamond", price: 15000 },
        { id: "mcg-200", label: "200 Diamond", price: 30000 }
    ]
};

const BANNERS = [
    'https://files.catbox.moe/8g41jj.jpg',
    'https://files.catbox.moe/e87yj3.png',
    'https://files.catbox.moe/hrtpys.jpg'
];

// --- State Management (untuk halaman game.html)
let selectedGame = null;
let selectedProduct = null;
let selectedPayment = null;
let isVoucherApplied = false;
const VOUCHER_CODE = "WALZPROMO";
const VOUCHER_DISCOUNT = 1000;

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
}

function startBannerSlider() {
    setInterval(() => {
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
            document.getElementById('server-id').addEventListener('input', updateMainButton);
        } else {
            serverIdContainer.innerHTML = '';
        }
    }

    // Attach event listeners
    const userIdInput = document.getElementById('user-id');
    const whatsappInput = document.getElementById('whatsapp-number');
    const useVoucherBtn = document.getElementById('use-voucher-btn');
    const mainButton = document.getElementById('main-button');

    if (userIdInput) userIdInput.addEventListener('input', updateMainButton);
    if (whatsappInput) whatsappInput.addEventListener('input', updateMainButton);
    if (useVoucherBtn) useVoucherBtn.addEventListener('click', applyVoucher);
    if (mainButton) {
        mainButton.addEventListener('click', () => {
            const orderData = {
                gameKey: selectedGame.key,
                productId: selectedProduct.id,
                paymentId: selectedPayment.id,
                userId: document.getElementById('user-id').value,
                serverId: selectedGame.needsServerId ? document.getElementById('server-id').value : '',
                whatsappNumber: document.getElementById('whatsapp-number').value,
                isVoucherApplied: isVoucherApplied
            };
            localStorage.setItem('orderData', JSON.stringify(orderData));
            window.location.href = 'cart.html';
        });
    }

    renderOptions('product-list', products, 'product');
    renderOptions('payment-list', PAYMENTS, 'payment');
    updateMainButton();
}

function renderOptions(containerId, options, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
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
    if (!container) return;
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

function updateMainButton() {
    const mainButton = document.getElementById('main-button');
    if (!mainButton) return;
    
    let isDisabled = !selectedProduct || !selectedPayment;
    const userId = document.getElementById('user-id')?.value;
    const whatsappNumber = document.getElementById('whatsapp-number')?.value;
    const serverId = document.getElementById('server-id')?.value;
    
    isDisabled = isDisabled || !userId || !whatsappNumber || (selectedGame.needsServerId && !serverId);
    
    mainButton.disabled = isDisabled;
}

// --- Cart Page Functions
function renderCartPage() {
    const orderData = JSON.parse(localStorage.getItem('orderData'));
    if (!orderData) {
        window.location.href = 'index.html';
        return;
    }

    const game = GAMES.find(g => g.key === orderData.gameKey);
    const product = PRODUCTS[game.key].find(p => p.id === orderData.productId);
    const payment = PAYMENTS.find(p => p.id === orderData.paymentId);
    const finalPrice = orderData.isVoucherApplied ? Math.max(0, product.price - VOUCHER_DISCOUNT) : product.price;

    // Render summary
    const summaryDetails = document.getElementById('summary-details');
    if (summaryDetails) {
        summaryDetails.innerHTML = `
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
                <span class="value">${orderData.userId}${orderData.serverId ? ` (${orderData.serverId})` : ''}</span>
            </div>
            <div class="summary-detail-item">
                <span class="label"><i class="fab fa-whatsapp"></i> Nomor WhatsApp</span>
                <span class="value">${orderData.whatsappNumber}</span>
            </div>
            <div class="summary-detail-item">
                <span class="label"><i class="fas fa-wallet"></i> Metode Pembayaran</span>
                <span class="value">
                    <img src="${payment.img}" alt="${payment.name}" class="payment-image">
                    ${payment.name}
                </span>
            </div>
            ${orderData.isVoucherApplied ? `
            <div class="summary-detail-item voucher-applied">
                <span class="label"><i class="fas fa-ticket-alt"></i> Potongan Voucher</span>
                <span class="value">- ${formatRupiah(VOUCHER_DISCOUNT)}</span>
            </div>
            ` : ''}
            <div class="summary-total">
                <span class="label">Total Pembayaran</span>
                <span class="value">${formatRupiah(finalPrice)}</span>
            </div>
        `;
    }
    
    // Render payment info
    const paymentInfoSection = document.getElementById('payment-info-section');
    if (paymentInfoSection) {
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

    // Pay Button
    const payButton = document.getElementById('pay-button');
    if (payButton) {
        payButton.addEventListener('click', () => {
            const message = `Halo Admin, saya ingin konfirmasi pesanan saya.\n\n*Detail Pesanan:*\nGame: ${game.name}\nProduk: ${product.label}\nPlayer ID: ${orderData.userId}${orderData.serverId ? ` (${orderData.serverId})` : ''}\nMetode Pembayaran: ${payment.name}\nTotal: ${formatRupiah(finalPrice)}\n\nNomor WA saya: ${orderData.whatsappNumber}\n\nMohon bantuannya untuk diproses, terima kasih.`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/6282298902274?text=${encodedMessage}`, '_blank');
        });
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Nomor berhasil disalin!');
    }).catch(err => {
        showNotification('Gagal menyalin nomor.', false);
    });
}

// --- Search Page Functions
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
