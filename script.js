// --- Data Website Anda ---
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
        { id: "ff-140-diamonds", label: "140 Diamonds", type: "diamond", price: 15317, icon: "💎" },
        { id: "ff-70-diamonds", label: "70 Diamonds", type: "diamond", price: 10000, icon: "💎" },
    ],
    "mobile-legends": [
        { id: "ml-14-bonus", label: "14 Diamonds", subLabel: "13 + 1 Bonus", type: "diamond", price: 3829, icon: "💎" },
        { id: "ml-28-bonus", label: "28 Diamonds", subLabel: "26 + 2 Bonus", type: "diamond", price: 7659, icon: "💎" },
        { id: "ml-42-bonus", label: "42 Diamonds", subLabel: "38 + 4 Bonus", type: "diamond", price: 11487, icon: "💎" },
        { id: "ml-weekly-pass", label: "Weekly Diamond Pass", type: "diamond", price: 30000, icon: "💎" },
        { id: "ml-twilight-pass", label: "Twilight Pass", type: "diamond", price: 150000, icon: "💎" },
    ],
    "honor-of-kings": [
        { id: "hok-6-voucher", label: "6 Voucher", type: "diamond", price: 2000, icon: "💎" },
    ],
    "genshin-impact": [
        { id: "gi-60-genesis", label: "60 Genesis Crystal", type: "diamond", price: 15000, icon: "💎" },
    ],
    "roblox": [
        { id: "rb-100-robux", label: "100 Robux", type: "diamond", price: 20000, icon: "💎" },
    ],
    "super-sus": [
        { id: "ss-60-stars", label: "60 Stars", type: "diamond", price: 10000, icon: "💎" },
    ],
    "clash-of-clans": [
        { id: "coc-80-gems", label: "80 Gems", type: "diamond", price: 15000, icon: "💎" },
    ],
    "blood-strike": [
        { id: "bs-60-gold", label: "60 Gold", type: "diamond", price: 10000, icon: "💎" },
    ],
    "pubg": [
        { id: "pubg-60-uc", label: "60 UC", type: "diamond", price: 15000, icon: "💎" },
    ],
    "garena-delta": [
        { id: "gd-125-diamonds", label: "125 Diamonds", type: "diamond", price: 10000, icon: "💎" },
    ],
    "garena-undawn": [
        { id: "gu-60-credits", label: "60 Credits", type: "diamond", price: 10000, icon: "💎" },
    ],
    "valorant": [
        { id: "val-125-points", label: "125 VP", type: "diamond", price: 15000, icon: "💎" },
    ],
    "call-of-duty": [
        { id: "cod-80-cp", label: "80 CP", type: "diamond", price: 15000, icon: "💎" },
    ],
    "eggy-party": [
        { id: "ep-100-gems", label: "100 Gems", type: "diamond", price: 10000, icon: "💎" },
    ],
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

function updateSummary() {
    const selectedProductCard = document.querySelector('#product-list .option-card.selected');
    const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
    const summaryCard = document.getElementById('summary-card');
    const summaryProductDetails = document.getElementById('summary-product-details');
    const summaryPrice = document.getElementById('summary-price');
    const gameKey = getUrlParameter('key');
    const userIdInput = document.getElementById('user-id');
    const serverIdInput = document.getElementById('server-id');
    
    const userId = userIdInput.value;
    const serverId = serverIdInput ? serverIdInput.value : '';
    const isIdValid = userId.length > 0 && (serverIdInput ? serverId.length > 0 : true);
    
    if (selectedProductCard && selectedPaymentCard && isIdValid) {
        summaryCard.style.display = 'block';
        
        const productId = selectedProductCard.dataset.id;
        const product = PRODUCTS[gameKey].find(p => p.id === productId);
        let finalPrice = product.price;

        if (appliedVoucher) {
            finalPrice = finalPrice - (finalPrice * appliedVoucher);
        }

        summaryProductDetails.innerHTML = `
            <i class="fas fa-gem"></i>
            <span class="product-text">${product.label}</span>
        `;
        summaryPrice.innerHTML = `<span class="price-text">${formatRupiah(finalPrice)}</span>`;

    } else {
        summaryCard.style.display = 'none';
    }
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function showVoucherModal(title, message) {
    document.getElementById('voucher-modal-title').innerText = title;
    document.getElementById('voucher-modal-message').innerText = message;
    document.getElementById('voucher-modal').style.display = 'flex';
}

// --- Fungsi Vouchers ---
function applyVoucher() {
    const voucherCode = document.getElementById('voucher-code').value.toUpperCase();
    if (VOUCHER[voucherCode]) {
        appliedVoucher = VOUCHER[voucherCode];
        updateSummary();
        showVoucherModal('Voucher Berhasil', 'Kode voucher berhasil diterapkan! Diskon ' + (appliedVoucher * 100) + '%');
    } else {
        appliedVoucher = null;
        updateSummary();
        showVoucherModal('Voucher Gagal', 'Kode voucher tidak valid atau tidak ditemukan.');
    }
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
            productDiv.classList.add("option-card", product.type);
            productDiv.setAttribute('data-id', product.id);

            productDiv.innerHTML = `
                <input type="radio" name="product_id" value="${product.id}" style="display:none;" required>
                <i class="fas fa-gem icon"></i>
                <div class="label">${product.label}</div>
                ${product.subLabel ? `<div class="sub-label">${product.subLabel}</div>` : ''}
                <div class="price">${formatRupiah(product.price)}</div>
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
    const form = document.getElementById('topup-form');
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

        const productId = selectedProductCard.dataset.id;
        const paymentId = selectedPaymentCard.dataset.id;
        const product = PRODUCTS[gameKey].find(p => p.id === productId);
        const payment = PAYMENTS.qris.find(p => p.id === paymentId);
        
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
            <p><strong>Total Harga:</strong> <span class="price-text">${formatRupiah(finalPrice)}</span></p>
            ${appliedVoucher ? `<p><strong>Diskon Voucher:</strong> ${appliedVoucher * 100}%</p>` : ''}
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
    const product = PRODUCTS[gameKeyCart].find(p => p.id === productId);
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
        if (serverId) {
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
        document.getElementById('cart-total-price').innerText = `Total: ${formatRupiah(product.price)}`;
    } else {
        // Handle case where URL parameters are missing or invalid
        cartSummaryCard.innerHTML = `<p style="text-align: center; color: red;">Maaf, data pesanan tidak ditemukan. Silakan kembali ke halaman utama.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('game-list')) {
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
