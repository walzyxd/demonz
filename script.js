// --- Data Website Anda ---
const GAMES = [
    { key: "mobile-legends", name: "Mobile Legends", description: "Moonton", img: "https://files.catbox.moe/97a2w3.jpg", url: "game.html?key=mobile-legends" },
    { key: "mobile-legends-global", name: "Mobile Legends", description: "Global", img: "https://i.supaimg.com/00e12727-4a11-4475-8120-d3acb70d4e9c.jpg", url: "game.html?key=mobile-legends-global" },
    { key: "magic-chess", name: "Magic Chess GG", description: "Vizta Games", img: "https://files.catbox.moe/k37o1s.jpg", url: "game.html?key=magic-chess" },
    { key: "pubg-mobile", name: "PUBG Mobile", description: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg-mobile" },
    { key: "garena-free-fire", name: "Garena Free Fire", description: "Garena", img: "https://files.catbox.moe/lq69d9.jpg", url: "game.html?key=garena-free-fire" },
    { key: "free-fire-max", name: "Free Fire MAX", description: "Garena", img: "https://files.catbox.moe/wz282d.png", url: "game.html?key=free-fire-max" },
    { key: "genshin-impact", name: "Genshin Crystal", description: "Termurah", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact" },
    { key: "honkai-star-rail", name: "Honkai: Star Rail", description: "Hoyoverse", img: "https://files.catbox.moe/o3d2x9.jpg", url: "game.html?key=honkai-star-rail" },
    { key: "zenless-zone-zero", name: "Zenless Zone Zero", description: "Termurah", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=zenless-zone-zero" },
    { key: "garena-delta", name: "Delta Force", description: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", url: "game.html?key=garena-delta" },
    { key: "call-of-duty", name: "Call of Duty", description: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=call-of-duty" },
];

const PAYMENTS = {
    "bank_transfer": [
        { id: "bca", name: "BCA", subLabel: "", img: "https://files.catbox.moe/u74p8c.png", price: 3829 },
        { id: "bank-lain", name: "Pembayaran tidak...", subLabel: "", img: "https://files.catbox.moe/0v4c4m.png", price: 3829 },
    ],
    "qris": [
        { id: "qris-all", name: "QRIS", subLabel: "(Semua Pembayaran)", img: "https://files.catbox.moe/113xkr.png", price: 3896 },
        { id: "qris-dana", name: "QRIS Dana", subLabel: "", img: "https://files.catbox.moe/h5t4r3.png", price: 3896 },
    ],
    "e-wallet": [
        { id: "lintas-negara", name: "Lintas Negara", subLabel: "(Asia Tenggara)", img: "https://files.catbox.moe/p4b6f1.png", price: 3925 },
    ]
};

const PRODUCTS = {
    "mobile-legends": [
        { id: "ml-14-bonus", label: "14 (13 + 1 Bonus) Diamonds", price: 3829, img: "https://files.catbox.moe/97a2w3.jpg" },
        { id: "ml-28-bonus", label: "28 (26 + 2 Bonus) Diamonds", price: 7659, img: "https://files.catbox.moe/97a2w3.jpg" },
        { id: "ml-42-bonus", label: "42 (38 + 4 Bonus) Diamonds", price: 11487, img: "https://files.catbox.moe/97a2w3.jpg" },
        { id: "ml-56-bonus", label: "56 (51 + 5 Bonus) Diamonds", price: 15317, img: "https://files.catbox.moe/97a2w3.jpg" },
        { id: "ml-70-bonus", label: "70 (64 + 6 Bonus) Diamonds", price: 19147, img: "https://files.catbox.moe/97a2w3.jpg" },
        { id: "ml-84-bonus", label: "84 (77 + 7 Bonus) Diamonds", price: 22977, img: "https://files.catbox.moe/97a2w3.jpg" },
        { id: "ml-weekly-pass", label: "Weekly Diamond Pass", price: 30000, img: "https://files.catbox.moe/97a2w3.jpg" },
        { id: "ml-twilight-pass", label: "Twilight Pass", price: 150000, img: "https://files.catbox.moe/97a2w3.jpg" },
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

function selectOption(element, type) {
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
    const summaryProductDetails = document.getElementById('summary-product-details');
    const summaryPrice = document.getElementById('summary-price');
    
    if (selectedProductCard) {
        summaryCard.style.display = 'block';
        
        const productId = selectedProductCard.dataset.id;
        const gameKey = getUrlParameter('key');
        const product = PRODUCTS[gameKey].find(p => p.id === productId);
        
        const totalHarga = product.price;

        summaryProductDetails.innerHTML = `
            <img src="${product.img}" alt="Product Icon">
            <span class="product-text">${product.label.split('(')[0].trim()}</span>
        `;
        summaryPrice.innerHTML = `<span class="price-text">${formatRupiah(totalHarga)}</span>`;
        
        if (selectedPaymentCard) {
            confirmButton.disabled = false;
        } else {
            confirmButton.disabled = true;
        }

    } else {
        summaryCard.style.display = 'none';
        confirmButton.disabled = true;
    }
}

function closeNotification() {
    document.getElementById('notification-popup').style.display = 'none';
}

// Logika untuk halaman game.html
document.addEventListener("DOMContentLoaded", () => {
    const gameKey = getUrlParameter('key');
    const game = GAMES.find(g => g.key === gameKey);
    const productListContainer = document.getElementById("product-list");
    const paymentListContainer = document.getElementById("payment-list");
    const gameKeyInput = document.getElementById("game-key-input");

    if (game && productListContainer && paymentListContainer) {
        gameKeyInput.value = gameKey;

        // Tampilkan Server ID jika game membutuhkannya
        if (game.hasServerId) {
            document.getElementById('server-id-group').style.display = 'block';
        }

        // Render Product Options
        const products = PRODUCTS[gameKey];
        if (products) {
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("option-card");
                productDiv.setAttribute('data-id', product.id);
                productDiv.innerHTML = `
                    <input type="radio" name="product_id" value="${product.id}" style="display:none;" required>
                    <img src="${product.img}" alt="${product.label}">
                    <div class="label">${product.label}</div>
                    <div class="price">${formatRupiah(product.price)}</div>
                `;
                productDiv.onclick = () => {
                    selectOption(productDiv, 'product');
                    productDiv.querySelector('input').checked = true;
                };
                productListContainer.appendChild(productDiv);
            });
        }

        // Render Payment Options
        for (const category in PAYMENTS) {
            const categoryTitle = document.createElement("h4");
            categoryTitle.innerText = category.replace(/_/g, ' ').toUpperCase();
            categoryTitle.classList.add('category-title');
            paymentListContainer.appendChild(categoryTitle);

            PAYMENTS[category].forEach(payment => {
                const paymentDiv = document.createElement("div");
                paymentDiv.classList.add("option-card");
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
                    selectOption(paymentDiv, 'payment');
                    paymentDiv.querySelector('input').checked = true;
                };
                paymentListContainer.appendChild(paymentDiv);
            });
        }
        
        // Atur event listener untuk input User ID
        const userIdInput = document.getElementById('user-id');
        const serverIdInput = document.getElementById('server-id');
        userIdInput.addEventListener('input', () => {
            updateSummary();
        });
        if (serverIdInput) {
            serverIdInput.addEventListener('input', () => {
                updateSummary();
            });
        }

        // Sembunyikan summary card secara default
        document.getElementById('summary-card').style.display = 'none';
        
        // Atur logika notifikasi
        document.getElementById('confirm-button').addEventListener('click', (e) => {
            if (!document.querySelector('#payment-list .option-card.selected')) {
                e.preventDefault();
                document.getElementById('notification-popup').style.display = 'block';
            }
        });
    }

    // Logika untuk halaman cart.html
    const gameKeyCart = getUrlParameter('key');
    const productId = getUrlParameter('product_id');
    const paymentId = getUrlParameter('payment_id');
    const userId = getUrlParameter('user_id');
    const serverId = getUrlParameter('server_id');

    if (document.getElementById('cart-summary') && gameKeyCart && productId && paymentId && userId) {
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

            let paymentInfoHtml = '';
            const paymentInfoData = {
                "bca": { number: "8009123456", name: "TI** SUT***" },
                "qris-all": { qrisImg: "https://files.catbox.moe/5688406c-3c9f-4990-b77a-4f1eaba082ad.png" },
                "qris-dana": { qrisImg: "https://files.catbox.moe/5688406c-3c9f-4990-b77a-4f1eaba082ad.png" },
                "lintas-negara": { number: "1234567890", name: "TI** SUT***" }
            };

            const selectedPaymentInfo = paymentInfoData[paymentId];
            if (selectedPaymentInfo) {
                if (selectedPaymentInfo.number) {
                    paymentInfoHtml = `<p>Nomor: ${selectedPaymentInfo.number}</p><p>A.n: ${selectedPaymentInfo.name}</p>`;
                } else if (selectedPaymentInfo.qrisImg) {
                    paymentInfoHtml = `<img src="${selectedPaymentInfo.qrisImg}" alt="QRIS Code" style="max-width: 150px; margin-top: 1rem;">`;
                }
            }

            document.getElementById('cart-payment-info').innerHTML = paymentInfoHtml;
            document.getElementById('cart-total-price').innerText = `Total: ${formatRupiah(product.price)}`;
        }
    }
});
