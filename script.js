/* ================= DATA ================= */
// Game yang butuh server ID
const NEED_SERVER_KEYS = new Set([
  "mobile legends", "honor of kings"
]);

const GAMES = [
  { key: "free fire", name: "Free Fire", img: "https://files.catbox.moe/x5rvpg.jpg", needServer: NEED_SERVER_KEYS.has("free fire") },
  { key: "mobile legends", name: "Mobile Legends", img: "https://files.catbox.moe/wcxi20.jpg", needServer: NEED_SERVER_KEYS.has("mobile legends") },
  { key: "honor of kings", name: "Honor of Kings", img: "https://files.catbox.moe/rh78kj.jpg", needServer: NEED_SERVER_KEYS.has("honor of kings") },
  { key: "genshin impact", name: "Genshin Impact", img: "https://files.catbox.moe/b91rfb.jpg", needServer: NEED_SERVER_KEYS.has("genshin impact") },
  { key: "roblox", name: "Roblox", img: "https://files.catbox.moe/uvixa8.jpg", needServer: NEED_SERVER_KEYS.has("roblox") },
  { key: "super sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", needServer: NEED_SERVER_KEYS.has("super sus") },
  { key: "clash of clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", needServer: NEED_SERVER_KEYS.has("clash of clans") },
  { key: "blood strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", needServer: NEED_SERVER_KEYS.has("blood strike") },
  { key: "pubg mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", needServer: NEED_SERVER_KEYS.has("pubg mobile") }
];

const payments = [
  { name: "QRIS", image: "https://files.catbox.moe/crlcvj.jpg" },
  { name: "Dana", image: "https://i.imghippo.com/files/GTZi5615xp.jpg" },
  { name: "Gopay", image: "https://i.imghippo.com/files/NF3980AI.jpg" },
  { name: "ShopeePay", image: "https://files.catbox.moe/gub7ik.jpg" },
  { name: "OVO", image: "https://i.imghippo.com/files/fSpV2194O.jpg" }
];

// Produk tiap game
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
    { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] }
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
    { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["Pass"] }
  ],
  "pubg mobile": [
    { id: "pubg-30", label: "30 UC", price: 7000 },
    { id: "pubg-60", label: "60 UC", price: 14000 },
    { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
    { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
    { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
    { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 },
    { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["Level Up"] },
    { id: "pubg-booyah", label: "BooYah Pass", price: 50000, badges: ["Pass"] }
  ],
  // Tambah semua game lain sesuai struktur sebelumnya
};

// Voucher
const VOUCHERS = [{ code: "WALZPROMO", type: "percent", value: 10, label: "Diskon 10%" }];

/* ================== UTILS ================== */
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];
const fmt = n => "Rp " + (n || 0).toLocaleString("id-ID");
const toKey = s => s.trim().toLowerCase();
function showVoucherToast(text = "Voucher telah digunakan!") {
  let t = document.createElement("div");
  t.className = "voucher-toast";
  t.textContent = text;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 320); }, 2200);
}

/* ============ INDEX PAGE ============ */
(() => {
  const slidesWrap = qs(".slides");
  if (slidesWrap) {
    let idx = 0;
    setInterval(() => {
      if (!slidesWrap.children.length) return;
      idx = (idx + 1) % slidesWrap.children.length;
      slidesWrap.style.transform = `translateX(-${idx * 100}%)`;
    }, 3500);
  }

  const grid = qs("#gamesGrid");
  if (grid) {
    GAMES.forEach(g => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `<img class="thumb" src="${g.img}" alt="${g.name}"><h3>${g.name}</h3>`;
      card.addEventListener("click", () => {
        localStorage.setItem("selectedGame", JSON.stringify(g));
        window.location.href = "game.html";
      });
      grid.appendChild(card);
    });
  }
/* ============ GAME PAGE LOGIC ============ */
(() => {
  const page = qs("#gamePage");
  if (!page) return;

  // Back button
  qs("#backBtn")?.addEventListener("click", () => history.back());

  // Load selected game
  let currentGame = JSON.parse(localStorage.getItem("selectedGame") || "{}");
  if (!currentGame.key) currentGame = GAMES[0];
  currentGame.needServer = NEED_SERVER_KEYS.has(currentGame.key);

  // Header info
  qs("#gameTitle").textContent = currentGame.name;
  qs("#gameBanner").src = currentGame.img;

  // Server input
  const serverWrap = qs("#serverWrap");
  if (serverWrap) {
    serverWrap.style.display = currentGame.needServer ? "block" : "none";
    const hintEl = serverWrap.querySelector(".hint");
    if (currentGame.needServer && hintEl) {
      hintEl.innerHTML = `Khusus Mobile Legends: format biasanya <b>ID (Server)</b>.
      <button class="link how-link" type="button" id="howServerBtn">Cara cek?</button>`;
    }
  }

  // State
  let selectedProduct = null;
  let selectedPayment = null;
  let discountValue = 0;
  let voucherUsed = null;

  // Render products
  const productGrid = qs("#productGrid");
  (PRODUCTS[currentGame.key] || []).forEach(p => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "product-item";

    const badges = (p.badges || []).map(b => `<span class="badge badge--${b.toLowerCase().replace(/\s+/g,"-")}">${b}</span>`).join("");

    item.innerHTML = `<div class="product-top"><span class="product-label">${p.label}</span><div class="badges">${badges}</div></div><div class="product-price">${fmt(p.price)}</div>`;

    item.addEventListener("click", () => {
      qsa(".product-item.selected").forEach(el => el.classList.remove("selected"));
      item.classList.add("selected");

      selectedProduct = {...p};
      discountValue = 0;
      voucherUsed = null;

      qs("#applyVoucherBtn").classList.remove("used");
      qs("#applyVoucherBtn").textContent = "Gunakan";
      qs("#voucherInput").value = "";
      qs("#errVoucher").textContent = "";

      updatePaymentPrices();
      renderSummary();
    });
    productGrid.appendChild(item);
  });

  // Render payments
  const payGrid = qs("#paymentGrid");
  payments.forEach(pm => {
    const card = document.createElement("div");
    card.className = "pay-card";
    card.innerHTML = `<img class="pay-logo" src="${pm.image}" alt="${pm.name}"><div class="pay-info"><span class="pay-name">${pm.name}</span><span class="pay-price"></span></div>`;
    card.addEventListener("click", () => {
      qsa(".pay-card.selected").forEach(el => el.classList.remove("selected"));
      card.classList.add("selected");
      selectedPayment = pm;
      qs("#errPayment").textContent = "";
      renderSummary();
    });
    payGrid.appendChild(card);
  });

  function updatePaymentPrices() {
    qsa(".pay-price").forEach(el => {
      el.textContent = selectedProduct ? fmt(Math.max(selectedProduct.price - discountValue,0)) : "";
    });
  }

  // Voucher apply
  qs("#listVoucherBtn")?.addEventListener("click", () => {
    const voucherList = qs("#voucherList");
    voucherList.classList.toggle("hidden");
    if (!voucherList.dataset.rendered) {
      VOUCHERS.forEach(v => {
        const chip = document.createElement("div");
        chip.className = "voucher-chip";
        chip.innerHTML = `<strong>${v.code}</strong> <span>${v.label}</span>`;
        chip.addEventListener("click", () => { qs("#voucherInput").value = v.code; });
        voucherList.appendChild(chip);
      });
      voucherList.dataset.rendered = "1";
    }
  });

  qs("#applyVoucherBtn")?.addEventListener("click", () => {
    const code = toKey(qs("#voucherInput").value || "");
    qs("#errVoucher").textContent = "";
    if (!selectedProduct) { qs("#errVoucher").textContent = "Pilih produk dulu sebelum gunakan voucher."; return; }
    const v = VOUCHERS.find(x=>toKey(x.code)===code);
    if(!v){ qs("#errVoucher").textContent="Kode voucher tidak valid."; return; }
    if(voucherUsed){ qs("#errVoucher").textContent="Voucher sudah digunakan."; return; }

    discountValue = v.type==="percent"?Math.floor(selectedProduct.price*v.value/100):v.value;
    voucherUsed = v.code;
    updatePaymentPrices();
    renderSummary();

    qs("#applyVoucherBtn").classList.add("used");
    qs("#applyVoucherBtn").textContent="✓ Voucher dipakai";
    showVoucherToast("Voucher telah digunakan!");
    qs("#voucherList")?.classList.add("hidden");
  });

  // Summary
  const summaryBox = qs("#summary");
  function renderSummary() {
    const uid = qs("#userId")?.value.trim()||"";
    const sid = qs("#serverId")?.value?.trim?.()||"";
    const email = qs("#email")?.value.trim()||"";

    const rows = [];
    const rowHTML = (l,r)=>`<div class="row"><span>${l}</span><span>${r}</span></div>`;
    rows.push(rowHTML("Game",currentGame.name));
    rows.push(rowHTML("Produk",selectedProduct?selectedProduct.label:"-"));
    rows.push(rowHTML("Metode",selectedPayment?selectedPayment.name:"-"));
    rows.push(rowHTML("User ID",uid||"-"));
    if(currentGame.needServer) rows.push(rowHTML("Server ID",sid||"-"));
    rows.push(rowHTML("Email",email||"-"));

    const subtotal = selectedProduct?selectedProduct.price:0;
    const total = Math.max(subtotal-discountValue,0);

    rows.push(rowHTML("Subtotal",selectedProduct?fmt(subtotal):"-"));
    rows.push(rowHTML("Diskon",discountValue?`-${fmt(discountValue)} ${voucherUsed?`(${voucherUsed})`:""}`:"-"));

    summaryBox.innerHTML = `${rows.join("")}<div class="row total"><span>Total</span><span>${selectedProduct?fmt(total):"-"}</span></div>`;
  }

  ["userId","serverId","email"].forEach(id=>{
    const el = qs("#"+id);
    if(el) el.addEventListener("input",renderSummary);
  });

  // Cara cek server popup
  document.addEventListener("click",(e)=>{
    if(e.target && e.target.id==="howServerBtn"){
      const steps=`<ol style="padding-left:18px;margin:0">
        <li>Buka Mobile Legends ➜ ketuk avatar/profil di kiri atas.</li>
        <li>Lihat bagian <b>User ID</b>. Format: <b>123456789 (1234)</b>.</li>
        <li>Masukkan ke form sebagai:<br>• <b>User ID</b>: 123456789<br>• <b>Server ID</b>: 1234</li>
        <li>Pastikan angka benar sebelum checkout.</li>
      </ol>`;
      qs("#popupTitle").textContent="Cara Cek ID & Server (Mobile Legends)";
      qs("#popupMessage").innerHTML=steps;
      qs("#popup").classList.remove("hidden");
    }
  });

  // Checkout
  qs("#checkoutBtn")?.addEventListener("click",()=>{
    const uid = qs("#userId").value.trim();
    const sid = qs("#serverId")?.value.trim();
    const email = qs("#email").value.trim();

    let ok=true;
    if(!uid){qs("#errUserId").textContent="User ID wajib diisi";ok=false;}else qs("#errUserId").textContent="";
    if(currentGame.needServer && !sid){qs("#errServerId").textContent="Server ID wajib diisi";ok=false;}else qs("#errServerId").textContent="";
    if(!email || !/^\S+@\S+\.\S+$/.test(email)){qs("#errEmail").textContent="Email valid wajib diisi";ok=false;}else qs("#errEmail").textContent="";
    if(!selectedProduct){qs("#errProduct").textContent="Pilih salah satu produk";ok=false;}else qs("#errProduct").textContent="";
    if(!selectedPayment){qs("#errPayment").textContent="Pilih metode pembayaran";ok=false;}else qs("#errPayment").textContent="";
    if(!ok) return;

    const subtotal = selectedProduct.price;
    const total = Math.max(subtotal-discountValue,0);

    const detail = [
      `WalzShop — Detail Transaksi`,
      `===========================`,
      `Game        : ${currentGame.name}`,
      `Produk      : ${selectedProduct.label}`,
      `Metode Bayar: ${selectedPayment.name}`,
      `User ID     : ${uid}${currentGame.needServer?` (${sid})`:""}`,
      `Email       : ${email}`,
      `Subtotal    : ${fmt(subtotal)}`,
      `Diskon      : ${discountValue?fmt(discountValue):"-"} ${voucherUsed?`(${voucherUsed})`:""}`,
      `Total       : ${fmt(total)}`
    ].join("\n");

    qs("#popupTitle").textContent="Detail Transaksi";
    qs("#popupMessage").innerHTML=`<pre style="white-space:pre-wrap;word-wrap:break-word">${detail}</pre>`;

    qs("#waBtn").href=`https://wa.me/6282298902274?text=${encodeURIComponent(detail)}`;
    qs("#emailBtn").href=`mailto:walzlonely@gmail.com?subject=${encodeURIComponent("WalzShop — Order Baru")}&body=${encodeURIComponent(detail)}`;

    qs("#popup").classList.remove("hidden");
  });

  qs("#popupClose")?.addEventListener("click",()=>qs("#popup").classList.add("hidden"));

  renderSummary();
})();