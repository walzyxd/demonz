import { GAMES, PRODUCTS, PAYMENTS, PROMOS } from './produk.js';

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.getAttribute('data-page');

    if (page === 'index') {
        renderIndexPage();
    } else if (page === 'game') {
        renderGamePage();
    } else if (page === 'cart') {
        renderCartPage();
    }

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

// =======================
// Fungsi untuk Halaman Beranda (index.html)
// =======================

function renderIndexPage() {
    renderGamesGrid();
    renderPromoSlider();
}

function renderGamesGrid() {
    const gamesGrid = document.getElementById('games-grid');
    if (!gamesGrid) return;

    gamesGrid.innerHTML = GAMES.map(game => `
        <a href="${game.url}" class="game-card">
            <img src="${game.img}" alt="${game.name}">
            <p>${game.name}</p>
        </a>
    `).join('');
}

function renderPromoSlider() {
    const promoSlider = document.getElementById('promo-slider');
    const sliderDots = document.getElementById('slider-dots');
    if (!promoSlider || !sliderDots) return;

    promoSlider.innerHTML = PROMOS.map(promo => `
        <div class="slider__item">
            <img src="${promo.src}" alt="${promo.alt}">
        </div>
    `).join('');

    sliderDots.innerHTML = PROMOS.map((_, index) => `<span class="slider__dot" data-index="${index}"></span>`).join('');

    let currentSlide = 0;
    const items = document.querySelectorAll('.slider__item');
    const dots = document.querySelectorAll('.slider__dot');

    const updateSlider = () => {
        promoSlider.style.transform = `translateX(${-currentSlide * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots.length > 0) {
            dots[currentSlide].classList.add('active');
        }
    };

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentSlide = parseInt(e.target.dataset.index);
            updateSlider();
        });
    });

    setInterval(() => {
        if (items.length > 0) {
            currentSlide = (currentSlide + 1) % items.length;
            updateSlider();
        }
    }, 5000);

    if (items.length > 0) {
        updateSlider();
    }
}


// =======================
// Fungsi untuk Halaman Game (game.html)
// =======================

function renderGamePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameKey = urlParams.get('key');
    const game = GAMES.find(g => g.key === gameKey);

    if (!game) {
        document.querySelector('main').innerHTML = '<h1 style="text-align: center; margin-top: 5rem; color: #4a235a;">Game tidak ditemukan.</h1>';
        return;
    }

    document.getElementById('game-title-page').textContent = `Top Up ${game.name}`;
    document.getElementById('game-title').textContent = game.name;
    document.getElementById('game-banner').src = game.bannerImg;
    document.getElementById('user-guide').textContent = game.guide;

    const serverIdGroup = document.getElementById('server-id-group');
    if (game.hasServerId) {
        serverIdGroup.style.display = 'block';
    } else {
        serverIdGroup.style.display = 'none';
    }

    renderProducts(gameKey);
    renderPayments();

    setupCheckoutLogic(gameKey);
}

function renderProducts(gameKey) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    const products = PRODUCTS[gameKey] || [];

    productGrid.innerHTML = products.map(product => `
        <div class="grid-item product-item" data-id="${product.id}" data-label="${product.label}" data-price="${product.price}">
            <span class="label"><i class="fas fa-gem diamond-icon"></i>${product.label}</span>
            <span class="price">Rp${product.price.toLocaleString('id-ID')}</span>
            ${product.badges ? product.badges.map(badge => `<span class="badge badge-${badge}">${badge}</span>`).join('') : ''}
        </div>
    `).join('');

    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.product-item').forEach(p => p.classList.remove('selected'));
            item.classList.add('selected');
            updateSummary();
        });
    });
}

function renderPayments() {
    const paymentGrid = document.getElementById('payment-grid');
    if (!paymentGrid) return;

    paymentGrid.innerHTML = PAYMENTS.map(payment => `
        <div class="grid-item payment-item" data-name="${payment.name}">
            <img src="${payment.icon}" alt="${payment.name}" style="height: 30px; margin-bottom: 0.5rem;">
            <span class="label">${payment.name}</span>
        </div>
    `).join('');

    document.querySelectorAll('.payment-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.payment-item').forEach(p => p.classList.remove('selected'));
            item.classList.add('selected');
            updateSummary();
        });
    });
}

function updateSummary() {
    const selectedProduct = document.querySelector('.product-item.selected');
    const selectedPayment = document.querySelector('.payment-item.selected');
    const checkoutBtn = document.getElementById('checkout-btn');

    const summaryProduct = document.getElementById('summary-product');
    const summaryPayment = document.getElementById('summary-payment');
    const summaryPrice = document.getElementById('summary-price');

    if (selectedProduct) {
        summaryProduct.textContent = selectedProduct.dataset.label;
        summaryPrice.textContent = `Rp${parseInt(selectedProduct.dataset.price).toLocaleString('id-ID')}`;
    } else {
        summaryProduct.textContent = '-';
        summaryPrice.textContent = '-';
    }

    if (selectedPayment) {
        summaryPayment.textContent = selectedPayment.dataset.name;
    } else {
        summaryPayment.textContent = '-';
    }

    if (selectedProduct && selectedPayment) {
        checkoutBtn.disabled = false;
    } else {
        checkoutBtn.disabled = true;
    }
}

function setupCheckoutLogic(gameKey) {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (!checkoutBtn) return;

    checkoutBtn.addEventListener('click', () => {
        const userId = document.getElementById('user-id').value;
        const serverId = document.getElementById('server-id').value;
        const voucherCode = document.getElementById('voucher-code').value;
        const selectedProduct = document.querySelector('.product-item.selected');
        const selectedPayment = document.querySelector('.payment-item.selected');

        if (!userId || !selectedProduct || !selectedPayment) {
            alert('Mohon lengkapi semua data sebelum melanjutkan.');
            return;
        }

        const orderData = {
            game: gameKey,
            userId: userId,
            serverId: serverId || null,
            productLabel: selectedProduct.dataset.label,
            productPrice: parseInt(selectedProduct.dataset.price),
            paymentName: selectedPayment.dataset.name,
            voucherCode: voucherCode || null
        };
        
        localStorage.setItem('currentOrder', JSON.stringify(orderData));
        window.location.href = 'cart.html';
    });
}


// =======================
// Fungsi untuk Halaman Pembayaran (cart.html)
// =======================

function renderCartPage() {
    const orderData = JSON.parse(localStorage.getItem('currentOrder'));
    if (!orderData) {
        document.querySelector('.summary-box').innerHTML = '<h2>Pesanan tidak ditemukan.</h2><a href="index.html" class="btn btn-primary">Kembali ke Beranda</a>';
        return;
    }

    document.getElementById('summary-product').textContent = orderData.productLabel;
    document.getElementById('summary-payment').textContent = orderData.paymentName;
    document.getElementById('summary-total').textContent = `Rp${orderData.productPrice.toLocaleString('id-ID')}`;

    let waText = `Halo admin, saya ingin konfirmasi pesanan.\n\n` +
                   `Game: ${GAMES.find(g => g.key === orderData.game)?.name || orderData.game}\n` +
                   `User ID: ${orderData.userId}\n` +
                   (orderData.serverId ? `Server ID: ${orderData.serverId}\n` : '') +
                   `Produk: ${orderData.productLabel}\n` +
                   `Total: Rp${orderData.productPrice.toLocaleString('id-ID')}\n` +
                   `Metode Pembayaran: ${orderData.paymentName}\n\n`;

    if (orderData.voucherCode) {
        waText += `Kode Voucher: ${orderData.voucherCode}\n\n`;
    }

    waText += `Terima kasih.`;

    const waBtn = document.getElementById('wa-btn');
    waBtn.href = `https://wa.me/6282298902274?text=${encodeURIComponent(waText)}`;
}
