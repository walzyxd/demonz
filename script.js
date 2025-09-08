document.addEventListener("DOMContentLoaded", () => {
    // Router sederhana untuk menjalankan fungsi yang sesuai dengan halaman
    const path = window.location.pathname.split("/").pop();

    if (path === 'index.html' || path === '') {
        initIndexPage();
    } else if (path === 'pulsa.html') {
        initPulsaPage();
    } else if (path === 'panel.html') {
        initPanelPage();
    } else if (path === 'game.html') {
        initGamePage();
    } else if (path === 'cart.html') {
        initCartPage();
    }
});

// ===================================================
// DATA APLIKASI
// ===================================================
const GAMES = [
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", url: "game.html?key=free-fire", needsServerId: false },
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", url: "game.html?key=mobile-legends", needsServerId: true },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", url: "game.html?key=honor-of-kings", needsServerId: true },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact", needsServerId: true },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corp", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", url: "game.html?key=roblox", needsServerId: false },
    { key: "pubg", name: "PUBG Mobile", publisher: "Tencent", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg", needsServerId: false },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", qr: "https://files.catbox.moe/pa0iwo.png" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", number: "083139243389", holder: "Anom" }
];

const PRODUCTS = {
    "free-fire": [ { id: "ff-140", label: "140 Diamonds", price: 18018 }, { id: "ff-355", label: "355 Diamonds", price: 45045 }, { id: "ff-720", label: "720 Diamonds", price: 90090 } ],
    "mobile-legends": [ { id: "ml-85", label: "85 Diamonds", price: 21850 }, { id: "ml-170", label: "170 Diamonds", price: 43700 }, { id: "ml-296", label: "296 Diamonds", price: 76000 } ],
    "honor-of-kings": [ { id: "hok-240", label: "240 Tokens", price: 51000 }, { id: "hok-400", label: "400 Tokens", price: 84000 }, { id: "hok-830", label: "830 Tokens", price: 168000 } ],
    "genshin-impact": [ { id: "gi-60", label: "60 Genesis Crystals", price: 14865 }, { id: "gi-330", label: "330 Genesis Crystals", price: 72973 }, { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973, badges: ["welkin"] } ],
    "roblox": [ { id: "rbx-100k", label: "Gift Card Rp100.000", price: 96500 }, { id: "rbx-200k", label: "Gift Card Rp200.000", price: 193000 } ],
    "pubg": [ { id: "pubg-60", label: "60 UC", price: 14000 }, { id: "pubg-300", label: "300 + 25 UC", price: 70000 }, { id: "pubg-600", label: "600 + 60 UC", price: 140000 } ],
};

const PULSA_DATA = {
    providers: {
        telkomsel: { name: "Telkomsel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Telkomsel_new_logo_2021.svg/1200px-Telkomsel_new_logo_2021.svg.png" },
        indosat: { name: "Indosat Ooredoo", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Indosat_Ooredoo_Hutchison_logo.svg" },
        xl: { name: "XL Axiata", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/XL_logo_2016.svg/1200px-XL_logo_2016.svg.png" },
        axis: { name: "AXIS", logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/AXIS_logo_2015.svg" },
        tri: { name: "Tri (3)", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tri_Indonesia_logo.svg/1200px-Tri_Indonesia_logo.svg.png" },
        smartfren: { name: "Smartfren", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Smartfren_logo.svg/2560px-Smartfren_logo.svg.png" },
        byu: { name: "by.U", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Logo_byU_2021.svg/2560px-Logo_byU_2021.svg.png" },
    },
    prefixes: {
        telkomsel: ["0811", "0812", "0813", "0821", "0822", "0852", "0853"],
        indosat: ["0814", "0815", "0816", "0855", "0856", "0857", "0858"],
        xl: ["0817", "0818", "0819", "0859", "0877", "0878"],
        axis: ["0831", "0832", "0833", "0838"],
        tri: ["0895", "0896", "0897", "0898", "0899"],
        smartfren: ["0881", "0882", "0883", "0884", "0885", "0886", "0887", "0888", "0889"],
        byu: ["0851"]
    },
    products: {
        telkomsel: [ { name: 'Telkomsel 5.000', price: 5850 }, { name: 'Telkomsel 10.000', price: 10800 }, { name: 'Telkomsel 25.000', price: 25500 }, { name: 'Telkomsel 50.000', price: 49900 }, { name: 'Telkomsel 100.000', price: 99500 } ],
        indosat: [ { name: 'Indosat 5.000', price: 5850 }, { name: 'Indosat 10.000', price: 10800 }, { name: 'Indosat 25.000', price: 25500 }, { name: 'Indosat 50.000', price: 49900 } ],
        xl: [ { name: 'XL 5.000', price: 5900 }, { name: 'XL 10.000', price: 10900 }, { name: 'XL 25.000', price: 25200 }, { name: 'XL 50.000', price: 49800 } ],
        axis: [ { name: 'Axis 5.000', price: 5788 }, { name: 'Axis 10.000', price: 10615 }, { name: 'Axis 20.000', price: 20135 }, { name: 'Axis 25.000', price: 25332 } ],
        tri: [ { name: 'Tri 5.000', price: 5500 }, { name: 'Tri 10.000', price: 10500 }, { name: 'Tri 25.000', price: 24900 }, { name: 'Tri 50.000', price: 49500 } ],
        smartfren: [ { name: 'Smartfren 10.000', price: 10100 }, { name: 'Smartfren 20.000', price: 19900 }, { name: 'Smartfren 50.000', price: 49500 }, { name: 'Smartfren 100.000', price: 98900 } ],
        byu: [ { name: 'by.U Top Up 10.000', price: 10500 }, { name: 'by.U Top Up 25.000', price: 25000 }, { name: 'by.U Top Up 50.000', price: 50000 } ]
    }
};

// ===================================================
// FUNGSI GLOBAL & HELPERS
// ===================================================
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// ===================================================
// INISIALISASI HALAMAN
// ===================================================
function initIndexPage() {
    const gameListContainer = document.getElementById('game-list');
    const searchInput = document.getElementById('game-search-input');
    const noResultsMessage = document.getElementById('no-results-message');

    function renderGameCards(gamesToRender) {
        gameListContainer.innerHTML = '';
        noResultsMessage.style.display = gamesToRender.length === 0 ? 'block' : 'none';
        
        gamesToRender.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = "game-card";
            gameCard.innerHTML = `
                <a href="${game.url}">
                    <img src="${game.img}" alt="${game.name}" loading="lazy">
                    <div class="game-card-content">
                        <h3>${game.name}</h3>
                        <p>${game.publisher}</p>
                    </div>
                </a>`;
            gameListContainer.appendChild(gameCard);
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filteredGames = GAMES.filter(game => 
            game.name.toLowerCase().includes(query) || 
            game.publisher.toLowerCase().includes(query)
        );
        renderGameCards(filteredGames);
    });

    renderGameCards(GAMES);
}

function initPulsaPage() {
    const phoneInput = document.getElementById('phone-number');
    const productSection = document.getElementById('product-display-section');
    const providerButton = document.getElementById('provider-display-button');
    const productSearchInput = document.getElementById('pulsa-search-input');
    const productListContainer = document.getElementById('pulsa-product-list');
    let currentProvider = null;

    function renderProducts(providerKey, searchQuery = '') {
        const products = PULSA_DATA.products[providerKey] || [];
        const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        
        productListContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'pulsa-card';
            card.innerHTML = `
                <div class="product-name">${product.name}</div>
                <div class="product-desc">Harga Ekonomis</div>
                <div class="product-price">${formatRupiah(product.price)}</div>`;
            card.addEventListener('click', () => {
                document.querySelectorAll('.pulsa-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
            productListContainer.appendChild(card);
        });
    }

    phoneInput.addEventListener('input', () => {
        const number = phoneInput.value;
        let detectedProvider = null;

        if (number.length >= 4) {
            const prefix = number.substring(0, 4);
            for (const providerKey in PULSA_DATA.prefixes) {
                if (PULSA_DATA.prefixes[providerKey].includes(prefix)) {
                    detectedProvider = providerKey;
                    break;
                }
            }
        }

        if (detectedProvider) {
            currentProvider = detectedProvider;
            const providerInfo = PULSA_DATA.providers[currentProvider];
            providerButton.innerHTML = `<img src="${providerInfo.logo}" alt="${providerInfo.name}"> ${providerInfo.name}`;
            productSection.style.display = 'block';
            renderProducts(currentProvider, productSearchInput.value);
        } else {
            productSection.style.display = 'none';
            currentProvider = null;
        }
    });

    productSearchInput.addEventListener('input', () => {
        if (currentProvider) {
            renderProducts(currentProvider, productSearchInput.value);
        }
    });
}

function initPanelPage() {
    const orderButton = document.getElementById('panel-order-button');
    const productList = document.getElementById('panel-product-list');

    productList.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', () => {
            productList.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });

    orderButton.addEventListener('click', () => {
        const name = document.getElementById('user-name').value;
        const whatsapp = document.getElementById('user-whatsapp').value;
        const selectedPackage = productList.querySelector('.option-card.selected');

        if (!name || !whatsapp || !selectedPackage) {
            alert('Mohon lengkapi semua data dan pilih satu paket terlebih dahulu.');
            return;
        }

        const packageName = selectedPackage.dataset.name;
        const packagePrice = formatRupiah(selectedPackage.dataset.price);
        const adminWhatsapp = '6282298902274'; // Ganti dengan nomor Admin
        const message = `Halo Admin, saya ingin memesan Panel Pterodactyl.\n\n*Nama:* ${name}\n*No. WhatsApp:* ${whatsapp}\n*Paket:* ${packageName}\n*Harga:* ${packagePrice}\n\nMohon bantuannya untuk diproses, terima kasih.`;
        
        window.open(`https://wa.me/${adminWhatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    });
}

function initGamePage() {
    const gameKey = getUrlParameter('key');
    const game = GAMES.find(g => g.key === gameKey);
    if (!game) { window.location.href = 'index.html'; return; }

    document.title = `${game.name} - WALZSHOP`;
    document.getElementById("game-info-header").innerHTML = `<img src="${game.img}" alt="${game.name}"><h2>${game.name}</h2>`;
    
    const serverIdContainer = document.getElementById("server-id-container");
    if (game.needsServerId) {
        serverIdContainer.innerHTML = `<i class="fas fa-server input-icon"></i><input type="number" id="server-id" placeholder="Masukkan Server ID" required>`;
    } else {
        serverIdContainer.style.display = 'none';
    }
    
    const productListContainer = document.getElementById("product-list");
    const products = PRODUCTS[gameKey] || [];
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "option-card";
        card.dataset.id = product.id;
        card.innerHTML = `<div class="label">${product.label}</div><div class="price">${formatRupiah(product.price)}</div>`;
        card.onclick = () => selectOption(card);
        productListContainer.appendChild(card);
    });

    const paymentListContainer = document.getElementById("payment-list");
    PAYMENTS.forEach(payment => {
        const card = document.createElement("div");
        card.className = "option-card payment";
        card.dataset.id = payment.id;
        card.innerHTML = `<img src="${payment.img}" alt="${payment.name}"><div class="label">${payment.name}</div>`;
        card.onclick = () => selectOption(card);
        paymentListContainer.appendChild(card);
    });

    function selectOption(element) {
        element.parentElement.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        updateState();
    }

    const confirmButton = document.getElementById('confirm-button');
    function updateState() {
        const isProductSelected = !!document.querySelector('#product-list .option-card.selected');
        const isPaymentSelected = !!document.querySelector('#payment-list .option-card.selected');
        const isIdValid = document.getElementById('user-id').value.length > 0;
        const isWhatsappValid = document.getElementById('whatsapp-number').value.length > 0;
        let isServerIdValid = !game.needsServerId || (document.getElementById('server-id') && document.getElementById('server-id').value.length > 0);
        confirmButton.disabled = !(isProductSelected && isPaymentSelected && isIdValid && isWhatsappValid && isServerIdValid);
    }
    ['user-id', 'server-id', 'whatsapp-number'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', updateState);
    });

    confirmButton.addEventListener('click', () => {
        const productId = document.querySelector('#product-list .option-card.selected')?.dataset.id;
        const paymentId = document.querySelector('#payment-list .option-card.selected')?.dataset.id;
        const userId = document.getElementById('user-id').value;
        const serverId = game.needsServerId ? document.getElementById('server-id').value : '';
        const whatsappNumber = document.getElementById('whatsapp-number').value;
        const url = `cart.html?game_key=${gameKey}&product_id=${productId}&payment_id=${paymentId}&user_id=${userId}&server_id=${serverId}&whatsapp_number=${whatsappNumber}`;
        window.location.href = url;
    });
}

function initCartPage() {
    const gameKey = getUrlParameter('game_key');
    const productId = getUrlParameter('product_id');
    const paymentId = getUrlParameter('payment_id');
    const userId = getUrlParameter('user_id');
    const serverId = getUrlParameter('server_id');
    const whatsappNumber = getUrlParameter('whatsapp_number');
    
    const game = GAMES.find(g => g.key === gameKey);
    const product = PRODUCTS[gameKey]?.find(p => p.id === productId);
    const payment = PAYMENTS.find(p => p.id === paymentId);

    const cartSummaryCard = document.getElementById('cart-summary-card');
    const paymentInfoSection = document.getElementById('payment-info-section');
    const payButton = document.getElementById('pay-button');

    if (game && product && payment) {
        const finalPrice = product.price;
        cartSummaryCard.innerHTML = `
            <h3>Rincian Pesanan</h3>
            <div class="summary-item"><span class="label">Game</span><span class="value">${game.name}</span></div>
            <div class="summary-item"><span class="label">Produk</span><span class="value">${product.label}</span></div>
            <div class="summary-item"><span class="label">Player ID</span><span class="value">${userId}${serverId ? ` (${serverId})` : ''}</span></div>
            <div class="summary-item"><span class="label">Metode Pembayaran</span><span class="value"><img src="${payment.img}" alt="${payment.name}" class="payment-logo">${payment.name}</span></div>
            <div class="summary-total"><span class="label">Total Pembayaran</span><span class="value">${formatRupiah(finalPrice)}</span></div>`;

        if (payment.qr) {
            paymentInfoSection.innerHTML = `<h4>Scan untuk Bayar</h4><img src="${payment.qr}" alt="QR Code" class="qr-code">`;
        } else if (payment.number) {
            paymentInfoSection.innerHTML = `<h4>Transfer ke ${payment.name}</h4><div style="margin: 5px 0;">A.N. ${payment.holder}</div><div class="payment-number">${payment.number}</div><button class="copy-btn" onclick="navigator.clipboard.writeText('${payment.number}')">Salin Nomor</button>`;
        }

        payButton.addEventListener('click', () => {
            const adminWhatsapp = '6282298902274';
            const message = `Halo Admin, konfirmasi pesanan:\n\n*Game:* ${game.name}\n*Produk:* ${product.label}\n*Player ID:* ${userId}${serverId ? ` (${serverId})` : ''}\n*Pembayaran:* ${payment.name}\n*Total:* ${formatRupiah(finalPrice)}\n\n*No. WA Pembeli:* ${whatsappNumber}\n\nMohon diproses, terima kasih.`;
            window.open(`https://wa.me/${adminWhatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        });
    } else {
        cartSummaryCard.innerHTML = `<h3>Terjadi Kesalahan</h3><p>Data pesanan tidak ditemukan.</p>`;
        payButton.style.display = 'none';
        paymentInfoSection.style.display = 'none';
    }
}
