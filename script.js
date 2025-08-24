/* ================== CONFIG & DATA ================== */
const ADMIN_WA = "6282298902274";
const ADMIN_EMAIL = "walzlonely@gmail.com";

const VOUCHERS = [
    { code: "WALZSHOP", percent: 5, description: "Diskon 5% untuk semua produk" },
    { code: "WALZPROMO", percent: 5, description: "Promo khusus 5% semua produk" }
];

const GAMES = [
    { key: "free fire", name: "Free Fire", img: "https://files.catbox.moe/x5rvpg.jpg", server: false, guide: "Temukan User ID Anda di bawah nama panggilan pada menu profil game." },
    { key: "mobile legends", name: "Mobile Legends", img: "https://files.catbox.moe/wcxi20.jpg", server: true, guide: "Temukan User ID dan Server ID di bawah nama panggilan saat Anda mengklik avatar profil." },
    { key: "honor of kings", name: "Honor of Kings", img: "https://files.catbox.moe/rh78kj.jpg", server: false, guide: "User ID Anda ada di bagian bawah layar saat Anda membuka profil." },
    { key: "genshin impact", name: "Genshin Impact", img: "https://files.catbox.moe/b91rfb.jpg", server: false, guide: "User ID (9 digit) terletak di sudut kanan bawah layar saat Anda berada di dalam game." },
    { key: "roblox", name: "Roblox", img: "https://files.catbox.moe/uvixa8.jpg", server: false, guide: "Top up menggunakan Gift Card yang akan dikirim langsung ke akun Anda." },
    { key: "super sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", server: false, guide: "User ID dapat ditemukan di menu profil dalam game." },
    { key: "clash of clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", server: false, guide: "User ID (Tag Pemain) adalah kombinasi huruf dan angka yang dimulai dengan tanda pagar (#)." },
    { key: "blood strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", server: false, guide: "ID Anda dapat ditemukan di profil dalam game." },
    { key: "pubg mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", server: false, guide: "Temukan User ID Anda di sudut kanan atas lobi game saat mengklik profil." },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://files.catbox.moe/crlcvj.jpg" },
    { id: "shopeepay", name: "ShopeePay", img: "https://files.catbox.moe/gub7ik.jpg" },
    { id: "dana", name: "Dana", img: "https://i.imghippo.com/files/qhn1355Ds.jpg" },
    { id: "gopay", name: "GoPay", img: "https://i.imghippo.com/files/lRYZ9422LGY.jpg" },
    { id: "ovo", name: "OVO", img: "https://i.imghippo.com/files/sIRs2824EY.jpg" },
];

const PRODUCTS = {
    "free fire": [
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
        { id: "ff-mw", label: "Membership Mingguan", price: 30500, badges: ["Member"] },
        { id: "ff-mb", label: "Membership Bulanan", price: 90000, badges: ["Member"] },
        { id: "ff-lvl6", label: "Level Up Pass Lv.6", price: 5500, badges: ["Level Up"] },
        { id: "ff-lvl10", label: "Level Up Pass Lv.10", price: 8800, badges: ["Level Up"] },
        { id: "ff-lvl15", label: "Level Up Pass Lv.15", price: 8800, badges: ["Level Up"] },
        { id: "ff-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["Level Up"] },
        { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] },
    ],
    "mobile legends": [
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
        { id: "ml-wdp", label: "Weekly Diamond Pass", price: 28000, badges: ["WDP"] },
        { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["Pass"] },
    ],
    "pubg mobile": [
        { id: "pubg-30", label: "30 UC", price: 7000 },
        { id: "pubg-60", label: "60 UC", price: 14000 },
        { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
        { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
        { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
        { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 },
        { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["Level Up"] },
        { id: "pubg-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] },
    ],
    "genshin impact": [
        { id: "gi-60", label: "60 Genesis Crystals", price: 14865 },
        { id: "gi-330", label: "330 Genesis Crystals", price: 72973 },
        { id: "gi-1090", label: "1090 Genesis Crystals", price: 229730 },
        { id: "gi-2240", label: "2240 Genesis Crystals", price: 440541 },
        { id: "gi-3880", label: "3880 Genesis Crystals", price: 734234 },
        { id: "gi-8080", label: "8080 Genesis Crystals", price: 1467568 },
        { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973, badges: ["Welkin"] },
    ],
    "honor of kings": [
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
    "super sus": [
        { id: "ss-100", label: "100 Goldstar", price: 11712 },
        { id: "ss-310", label: "310 Goldstar", price: 34234 },
        { id: "ss-520", label: "520 Goldstar", price: 57658 },
        { id: "ss-1060", label: "1060 Goldstar", price: 116216 },
        { id: "ss-2180", label: "2180 Goldstar", price: 239640 },
        { id: "ss-5600", label: "5600 Goldstar", price: 613514 },
        { id: "ss-weekly", label: "Weekly Card", price: 13514, badges: ["Weekly"] },
        { id: "ss-monthly", label: "Monthly Card", price: 134234, badges: ["Monthly"] },
        { id: "ss-vip", label: "Super VIP Card", price: 157658, badges: ["VIP"] },
    ],
    "clash of clans": [
        { id: "coc-500", label: "500 Gems", price: 75299 },
        { id: "coc-1200", label: "1200 Gems", price: 150499 },
        { id: "coc-2500", label: "2500 Gems", price: 300999 },
        { id: "coc-6500", label: "6500 Gems", price: 752399 },
        { id: "coc-14000", label: "14000 Gems", price: 1454599 },
    ],
    "blood strike": [
        { id: "bs-100", label: "100 + 5 Gold", price: 11999 },
        { id: "bs-300", label: "300 + 20 Gold", price: 34999 },
        { id: "bs-500", label: "500 + 40 Gold", price: 54999 },
        { id: "bs-1000", label: "1000 + 100 Gold", price: 110000 },
        { id: "bs-2000", label: "2000 + 260 Gold", price: 219999 },
        { id: "bs-5000", label: "5000 + 800 Gold", price: 549999 },
    ],
};

const SLIDER_IMAGES = [
    "https://i.imghippo.com/files/IHhY6050Qlc.jpeg",
    "https://i.imghippo.com/files/uy5982ZtQ.jpeg",
    "https://i.imghippo.com/files/el4034qjU.jpeg",
    "https://i.imghippo.com/files/EZUu9660Hs.jpg"
];

/* ================== UTILITY FUNCTIONS ================== */
const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
const fmtIDR = (n) => new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
}).format(n);

function showModal(modalId) {
    const overlay = qs("#modal-overlay");
    overlay.classList.add("active");
    qsa(".modal-content").forEach(el => el.style.display = 'none');
    qs(`#${modalId}`).style.display = 'block';
}

function hideModal() {
    const overlay = qs("#modal-overlay");
    if (overlay) {
        overlay.classList.remove("active");
    }
}

/* ================== EVENT LISTENERS ================== */
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (page === "index") {
        initIndexPage();
    } else if (page === "game") {
        initGamePage();
    }

    qsa(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", hideModal);
    });

    const overlay = qs("#modal-overlay");
    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target.id === "modal-overlay") {
                hideModal();
            }
        });
    }
});

/* ================== INDEX PAGE LOGIC ================== */
function initIndexPage() {
    const gamesGrid = qs("#games-grid");
    if (!gamesGrid) return;
    gamesGrid.innerHTML = "";

    GAMES.forEach(game => {
        const card = document.createElement("a");
        card.className = "game-card";
        card.href = "#";
        card.addEventListener("click", (e) => {
            e.preventDefault();
            selectGame(game);
        });

        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}" class="game-thumbnail">
            <h3 class="game-name">${game.name}</h3>
        `;
        gamesGrid.appendChild(card);
    });

    initHeroSlider();
}

function selectGame(game) {
    localStorage.setItem("walz_game_key", game.key);
    localStorage.setItem("walz_game_name", game.name);
    localStorage.setItem("walz_game_img", game.img);
    localStorage.setItem("walz_game_server", game.server ? "1" : "0");
    localStorage.setItem("walz_game_guide", game.guide);
    window.location.href = "game.html";
}

function initHeroSlider() {
    const slider = qs(".hero-slider-wrapper");
    if (!slider) return;
    slider.innerHTML = "";
    SLIDER_IMAGES.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Banner hero";
        slider.appendChild(img);
    });

    let currentSlide = 0;
    setInterval(() => {
        currentSlide = (currentSlide + 1) % SLIDER_IMAGES.length;
        const offset = -currentSlide * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }, 3000);
}

/* ================== GAME PAGE LOGIC ================== */
function initGamePage() {
    const gameTitle = qs("#game-title");
    const banner = qs("#game-banner");
    const guideText = qs("#game-guide");
    const serverGroup = qs("#server-group");
    const userIdInput = qs("#user-id");
    const serverIdInput = qs("#server-id");
    const productGrid = qs("#product-grid");
    const paymentGrid = qs("#payment-grid");
    const voucherInput = qs("#voucher-code");
    const useVoucherBtn = qs("#use-voucher-btn");
    const showVoucherListBtn = qs("#show-voucher-list-btn");
    const checkoutBtn = qs("#checkout-btn");
    const summaryBox = qs("#summary-box");

    const modalTitle = qs("#modal-title");
    const modalMessage = qs("#modal-message");
    const checkoutSummary = qs("#checkout-summary");
    const waBtn = qs("#wa-btn");
    const emailBtn = qs("#email-btn");
    const voucherListUl = qs("#voucher-list");

    if (!gameTitle || !banner) return;

    const gameKey = localStorage.getItem("walz_game_key");
    const gameData = GAMES.find(g => g.key === gameKey) || GAMES[0];

    gameTitle.textContent = gameData.name;
    banner.src = gameData.img;
    banner.alt = gameData.name;
    guideText.textContent = gameData.guide;
    serverGroup.style.display = gameData.server ? "block" : "none";

    let selectedProduct = null;
    let selectedPayment = null;
    let appliedVoucher = null;

    function calculateFinalPrice() {
        let finalPrice = selectedProduct ? selectedProduct.price : 0;
        if (appliedVoucher) {
            finalPrice = Math.round(finalPrice * (1 - appliedVoucher.percent / 100));
        }
        return finalPrice;
    }

    function updateSummary() {
        if (!summaryBox) return;

        if (!selectedProduct) {
            summaryBox.innerHTML = `<p>Pilih nominal & pembayaran untuk melihat ringkasan.</p>`;
            return;
        }

        let originalPrice = selectedProduct.price;
        let finalPriceAfterVoucher = calculateFinalPrice();
        let discountAmount = originalPrice - finalPriceAfterVoucher;

        const voucherInfo = appliedVoucher ? `<p>Diskon Voucher: <b>-${fmtIDR(discountAmount)}</b></p>` : '';
        const paymentFeeInfo = selectedPayment ? `<p>Total yang harus dibayar: <b>${fmtIDR(finalPriceAfterVoucher)}</b></p>` : '';

        summaryBox.innerHTML = `
            <p>Produk: <b>${selectedProduct.label}</b></p>
            <p>Harga: <b>${fmtIDR(originalPrice)}</b></p>
            ${voucherInfo}
            <p>Metode Pembayaran: <b>${selectedPayment ? selectedPayment.name : "—"}</b></p>
            <hr style="border-top: 1px dashed var(--border-color); margin: 15px 0;">
            ${paymentFeeInfo}
        `;
    }

    function renderProducts() {
        productGrid.innerHTML = "";
        const items = PRODUCTS[gameData.key] || [];

        items.forEach(product => {
            const card = document.createElement("div");
            card.className = `product-card`;
            card.dataset.id = product.id;
            
            let labelWithEmoji = product.label;
            if (product.label.toLowerCase().includes("diamond") || product.label.toLowerCase().includes("gems") || product.label.toLowerCase().includes("uc") || product.label.toLowerCase().includes("crystal") || product.label.toLowerCase().includes("tokens") || product.label.toLowerCase().includes("goldstar") || product.label.toLowerCase().includes("gold")) {
                const parts = product.label.split(' ');
                parts[parts.length - 1] += ' 💎';
                labelWithEmoji = parts.join(' ');
            }

            card.innerHTML = `
                <p class="product-label">${labelWithEmoji}</p>
                <p class="product-price">${fmtIDR(product.price)}</p>
            `;
            if (product.badges && product.badges.length > 0) {
                card.innerHTML += `<div class="product-badge">${product.badges[0]}</div>`;
            }
            card.addEventListener("click", () => {
                selectedProduct = product;
                updateUI();
            });
            productGrid.appendChild(card);
        });
    }

    function renderPayments() {
        paymentGrid.innerHTML = "";
        PAYMENTS.forEach(payment => {
            const card = document.createElement("div");
            card.className = `payment-card`;
            card.dataset.id = payment.id;
            
            const finalPrice = calculateFinalPrice();
            const priceText = finalPrice > 0 ? `${fmtIDR(finalPrice)}` : 'Gratis';

            card.innerHTML = `
                <img src="${payment.img}" alt="${payment.name}" class="payment-logo">
                <p class="payment-name">${payment.name}</p>
                <p class="payment-price">${priceText}</p>
            `;
            card.addEventListener("click", () => {
                selectedPayment = payment;
                updateUI();
            });
            paymentGrid.appendChild(card);
        });
    }

    function updateUI() {
        qsa('.product-card').forEach(c => c.classList.remove('active'));
        if (selectedProduct) {
            qs(`.product-card[data-id="${selectedProduct.id}"]`).classList.add('active');
        }

        qsa('.payment-card').forEach(c => c.classList.remove('active'));
        if (selectedPayment) {
            qs(`.payment-card[data-id="${selectedPayment.id}"]`).classList.add('active');
        }

        // Update payment card prices
        const finalPrice = calculateFinalPrice();
        qsa('.payment-card').forEach(card => {
            const priceEl = qs('.payment-price', card);
            const priceText = finalPrice > 0 ? `${fmtIDR(finalPrice)}` : 'Gratis';
            priceEl.textContent = priceText;
        });

        updateSummary();
    }

    function renderVoucherListModal() {
        voucherListUl.innerHTML = "";
        VOUCHERS.forEach(v => {
            const item = document.createElement("li");
            item.innerHTML = `<b>${v.code}</b> — ${v.description}`;
            item.dataset.code = v.code;
            item.addEventListener("click", () => {
                voucherInput.value = v.code;
                hideModal();
                voucherInput.focus();
            });
            voucherListUl.appendChild(item);
        });
    }

    // Initial renders
    renderProducts();
    renderPayments();
    renderVoucherListModal();
    updateSummary();

    // Event listeners
    useVoucherBtn.addEventListener("click", () => {
        const code = voucherInput.value.trim().toUpperCase();
        const foundVoucher = VOUCHERS.find(v => v.code === code);

        if (!foundVoucher) {
            appliedVoucher = null;
            modalTitle.textContent = "Voucher Tidak Valid";
            modalMessage.textContent = "Kode voucher yang Anda masukkan tidak dikenali. Silakan coba lagi.";
            qs("#voucher-modal .modal-header").style.borderBottom = "1px solid #e2e8f0";
        } else {
            appliedVoucher = foundVoucher;
            modalTitle.textContent = "Voucher Berhasil Digunakan!";
            modalMessage.textContent = `Voucher "${foundVoucher.code}" berhasil diterapkan. Anda mendapatkan diskon ${foundVoucher.percent}%!`;
            qs("#voucher-modal .modal-header").style.borderBottom = "1px solid var(--primary-color)";
        }
        showModal('voucher-modal');
        updateUI();
    });

    showVoucherListBtn.addEventListener("click", () => {
        showModal('voucher-list-modal');
    });

    checkoutBtn.addEventListener("click", () => {
        const userId = userIdInput.value.trim();
        const serverId = gameData.server ? serverIdInput.value.trim() : null;

        if (!userId) {
            modalTitle.textContent = "ID Pengguna Belum Terisi";
            modalMessage.textContent = "Mohon masukkan ID pengguna Anda untuk melanjutkan.";
            showModal('info-modal');
            return;
        }

        if (gameData.server && !serverId) {
            modalTitle.textContent = "Server ID Belum Terisi";
            modalMessage.textContent = "Mohon masukkan Server ID Anda untuk melanjutkan.";
            showModal('info-modal');
            return;
        }

        if (!selectedProduct) {
            modalTitle.textContent = "Produk Belum Dipilih";
            modalMessage.textContent = "Mohon pilih nominal produk yang ingin Anda beli.";
            showModal('info-modal');
            return;
        }

        if (!selectedPayment) {
            modalTitle.textContent = "Metode Pembayaran Belum Dipilih";
            modalMessage.textContent = "Mohon pilih metode pembayaran yang ingin Anda gunakan.";
            showModal('info-modal');
            return;
        }

        const finalPrice = calculateFinalPrice();

        // Update modal summary
        checkoutSummary.innerHTML = `
            <p>Game: <b>${gameData.name}</b></p>
            <p>ID Pengguna: <b>${userId}</b></p>
            ${gameData.server ? `<p>Server ID: <b>${serverId}</b></p>` : ''}
            <p>Produk: <b>${selectedProduct.label}</b></p>
            <p>Metode Pembayaran: <b>${selectedPayment.name}</b></p>
            <hr style="border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <p>Total Harga: <span>${fmtIDR(finalPrice)}</span></p>
        `;

        showModal('checkout-modal');
    });

    waBtn.addEventListener("click", () => {
        const userId = userIdInput.value.trim();
        const serverId = gameData.server ? serverIdInput.value.trim() : '';
        const finalPrice = calculateFinalPrice();

        const message = `
Halo admin, saya ingin order.

*Detail Pesanan:*
Game: ${gameData.name}
ID Pengguna: ${userId}
${gameData.server ? `Server ID: ${serverId}\n` : ''}Produk: ${selectedProduct.label}
Harga: ${fmtIDR(selectedProduct.price)}
Pembayaran: ${selectedPayment.name}
Total: ${fmtIDR(finalPrice)}
        `.trim();
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${ADMIN_WA}?text=${encodedMessage}`, "_blank");
    });

    emailBtn.addEventListener("click", () => {
        const userId = userIdInput.value.trim();
        const serverId = gameData.server ? serverIdInput.value.trim() : '';
        const finalPrice = calculateFinalPrice();
        const subject = encodeURIComponent(`Pemesanan Top Up ${gameData.name}`);
        const body = encodeURIComponent(`
Halo admin, saya ingin melakukan pemesanan top up dengan detail sebagai berikut:

Game: ${gameData.name}
ID Pengguna: ${userId}
${gameData.server ? `Server ID: ${serverId}\n` : ''}Produk: ${selectedProduct.label}
Harga: ${fmtIDR(selectedProduct.price)}
Metode Pembayaran: ${selectedPayment.name}
Total Harga: ${fmtIDR(finalPrice)}

Mohon diproses, terima kasih.
        `.trim());
        window.open(`mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`);
    });
}
