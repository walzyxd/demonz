// --- Data Website Anda ---
const GAMES = [
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", url: "game.html?key=free-fire" },
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", url: "game.html?key=mobile-legends" },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", url: "game.html?key=honor-of-kings" },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact" },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corporation", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", url: "game.html?key=roblox" },
    { key: "super-sus", name: "Super Sus", publisher: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", url: "game.html?key=super-sus" },
    { key: "coc", name: "Clash of Clans", publisher: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", url: "game.html?key=coc" },
    { key: "blood-strike", name: "Blood Strike", publisher: "NetEase", img: "https://files.catbox.moe/3y066i.jpg", url: "game.html?key=blood-strike" },
    { key: "pubg", name: "PUBG Mobile", publisher: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg" },
    { key: "garena-delta", name: "Garena Delta Force", publisher: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", url: "game.html?key=garena-delta" },
    { key: "garena-undawn", name: "Garena Undawn", publisher: "Garena", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", url: "game.html?key=garena-undawn" },
    { key: "valorant", name: "Valorant", publisher: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", url: "game.html?key=valorant" },
    { key: "call-of-duty", name: "Call Of Duty", publisher: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=call-of-duty" },
    { key: "eggy-party", name: "Eggy Party", publisher: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", url: "game.html?key=eggy-party" },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg" },
    { id: "krom", name: "Bank Krom", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg" },
    { id: "gopay", name: "Gopay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg" }
];

const PRODUCTS = {
    "free-fire": [
        { id: "ff-70", label: "70 Diamonds", price: 10000 },
        { id: "ff-140", label: "140 Diamonds", price: 20000 },
        { id: "ff-210", label: "210 Diamonds", price: 30000 },
        { id: "ff-355", label: "355 Diamonds", price: 50000 },
        { id: "ff-720", label: "720 Diamonds", price: 100000 },
    ],
    "mobile-legends": [
        { id: "ml-14", label: "14 Diamonds", price: 3829 },
        { id: "ml-28", label: "28 Diamonds", price: 7659 },
        { id: "ml-42", label: "42 Diamonds", price: 11487, badge: "Populer" },
        { id: "ml-56", label: "56 Diamonds", price: 15317 },
        { id: "ml-70", label: "70 Diamonds", price: 19146 },
        { id: "ml-84", label: "84 Diamonds", price: 22975 },
    ],
    "honor-of-kings": [
        { id: "hok-60", label: "60 Tokens", price: 15000 },
        { id: "hok-180", label: "180 Tokens", price: 45000 },
    ],
    "genshin-impact": [
        { id: "gi-blessing", label: "Blessing of the Welkin Moon", price: 79000, type: "pass", badge: "Diskon" },
        { id: "gi-genesis-60", label: "60 Genesis Crystals", price: 16000 },
    ],
    "roblox": [
        { id: "roblox-400", label: "400 Robux", price: 80000 },
    ],
    "super-sus": [
        { id: "sus-120", label: "120 Stars", price: 20000 },
    ],
    "coc": [
        { id: "coc-80", label: "80 Gems", price: 15000 },
    ],
    "blood-strike": [
        { id: "bs-60", label: "60 CP", price: 10000 },
    ],
    "pubg": [
        { id: "pubg-60", label: "60 UC", price: 15000 },
    ],
    "garena-delta": [
        { id: "gd-60", label: "60 Shells", price: 10000 },
    ],
    "garena-undawn": [
        { id: "gu-120", label: "120 Credits", price: 20000 },
    ],
    "valorant": [
        { id: "valorant-125", label: "125 Valorant Points", price: 15000 },
    ],
    "call-of-duty": [
        { id: "cod-80", label: "80 CP", price: 15000 },
    ],
    "eggy-party": [
        { id: "ep-60", label: "60 Egg Coins", price: 10000 },
    ],
};

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

function updateSummary() {
    const selectedProductCard = document.querySelector('#product-list .option-card.selected');
    const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
    const summaryCard = document.getElementById('summary-card');
    const confirmButton = document.getElementById('confirm-button');
    const userIdInput = document.getElementById('user-id');
    const whatsappInput = document.getElementById('whatsapp-number');
    
    const isProductSelected = !!selectedProductCard;
    const isPaymentSelected = !!selectedPaymentCard;
    const isIdValid = userIdInput && userIdInput.value.length > 0;
    const isWhatsappValid = whatsappInput && whatsappInput.value.length > 0;
    
    if (isProductSelected && isPaymentSelected && isIdValid && isWhatsappValid) {
        summaryCard.style.display = 'flex';
        confirmButton.disabled = false;
        
        const productId = selectedProductCard.dataset.id;
        const gameKey = getUrlParameter('key');
        const product = PRODUCTS[gameKey].find(p => p.id === productId);

        document.getElementById('summary-product-details').innerHTML = `
            <i class="fas fa-gem" style="color:var(--accent-color);"></i>
            <span class="product-text">${product.label}</span>
        `;
        document.getElementById('summary-price').innerText = formatRupiah(product.price);
    } else {
        summaryCard.style.display = 'none';
        confirmButton.disabled = true;
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
                    <p>${game.publisher}</p>
                </div>
            </a>
        `;
        gameListContainer.appendChild(gameCard);
    });
}

// --- Logika Halaman Game ---
function setupGamePage() {
    const gameKey = getUrlParameter('key');
    const game = GAMES.find(g => g.key === gameKey);
    const productListContainer = document.getElementById("product-list");
    const paymentListContainer = document.getElementById("payment-list");
    const gameKeyInput = document.getElementById("game-key-input");
    const gameInfoHeader = document.getElementById("game-info-header");

    if (!game || !productListContainer || !paymentListContainer) {
        window.location.href = 'index.html';
        return;
    }

    gameKeyInput.value = gameKey;

    // Render game info header
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

    // Render products
    const products = PRODUCTS[gameKey];
    if (products) {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("option-card");
            productDiv.setAttribute('data-id', product.id);
            
            let badgeHtml = '';
            if (product.badge) {
                badgeHtml = `<span class="special-badge">${product.badge}</span>`;
            }

            productDiv.innerHTML = `
                ${badgeHtml}
                <i class="fas fa-gem icon"></i>
                <div class="label">${product.label}</div>
                <div class="price">${formatRupiah(product.price)}</div>
            `;
            
            productDiv.onclick = () => {
                selectOption(productDiv);
            };
            productListContainer.appendChild(productDiv);
        });
    }

    // Render payments
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

    // Event listeners for inputs to update summary
    document.getElementById('user-id').addEventListener('input', updateSummary);
    document.getElementById('server-id').addEventListener('input', updateSummary);
    document.getElementById('whatsapp-number').addEventListener('input', updateSummary);
    
    // Voucher button logic
    document.getElementById('use-voucher-btn').addEventListener('click', () => {
        const promoCode = document.getElementById('promo-code').value;
        if (promoCode) {
            alert(`Voucher "${promoCode}" berhasil digunakan!`);
        } else {
            alert('Masukkan kode voucher terlebih dahulu.');
        }
    });

    document.getElementById('confirm-button').addEventListener('click', () => {
        const selectedProductCard = document.querySelector('#product-list .option-card.selected');
        const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
        
        const productId = selectedProductCard ? selectedProductCard.dataset.id : '';
        const paymentId = selectedPaymentCard ? selectedPaymentCard.dataset.id : '';
        const userId = document.getElementById('user-id').value;
        const serverId = document.getElementById('server-id').value;
        const whatsappNumber = document.getElementById('whatsapp-number').value;

        // Ensure all required fields are filled before navigating
        if (productId && paymentId && userId && whatsappNumber) {
            const url = `cart.html?game_key=${gameKey}&product_id=${productId}&payment_id=${paymentId}&user_id=${userId}&server_id=${serverId}&whatsapp_number=${whatsappNumber}`;
            window.location.href = url;
        } else {
            alert('Mohon lengkapi semua data pesanan terlebih dahulu.');
        }
    });
}

// --- Logika Halaman Cart ---
function setupCartPage() {
    const params = new URLSearchParams(window.location.search);
    const gameKey = params.get('game_key');
    const productId = params.get('product_id');
    const paymentId = params.get('payment_id');
    const userId = params.get('user_id');
    const serverId = params.get('server_id');
    const whatsappNumber = params.get('whatsapp_number');
    
    const game = GAMES.find(g => g.key === gameKey);
    const product = PRODUCTS[gameKey] ? PRODUCTS[gameKey].find(p => p.id === productId) : null;
    const payment = PAYMENTS.find(p => p.id === paymentId);
    
    const cartSummaryCard = document.getElementById('cart-summary-card');
    
    if (game && product && payment && cartSummaryCard) {
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
                <span class="value">${formatRupiah(product.price)}</span>
            </div>
        `;
        
        document.getElementById('pay-button').addEventListener('click', () => {
            alert('Pesanan Anda akan diproses! Silakan lakukan pembayaran.');
            window.location.href = 'index.html';
        });
    } else {
        cartSummaryCard.innerHTML = `
            <h3>Terjadi Kesalahan</h3>
            <p style="text-align: center; color: var(--text-light);">Data pesanan tidak ditemukan. Silakan kembali ke halaman utama.</p>
        `;
        document.getElementById('pay-button').style.display = 'none';
    }
}


// --- DOMContentLoaded Event Listener ---
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('.game-grid-custom')) {
        renderGameCards();
    } else if (document.getElementById('topup-form')) {
        setupGamePage();
    } else if (document.getElementById('cart-summary-card')) {
        setupCartPage();
    }
});
