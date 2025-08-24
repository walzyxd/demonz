const ADMIN_WA = "6282298902274";
const VOUCHERS = [{ code: "WALZSHOP", percent: 5 }, { code: "WALZPROMO", percent: 5 }];

const GAMES = [
  { key: "free fire", name: "Free Fire", img: "https://files.catbox.moe/x5rvpg.jpg", server: false },
  { key: "mobile legends", name: "Mobile Legends", img: "https://files.catbox.moe/wcxi20.jpg", server: true },
  { key: "honor of kings", name: "Honor of Kings", img: "https://files.catbox.moe/rh78kj.jpg", server: false },
  { key: "genshin impact", name: "Genshin Impact", img: "https://files.catbox.moe/b91rfb.jpg", server: false },
  { key: "roblox", name: "Roblox", img: "https://files.catbox.moe/uvixa8.jpg", server: false },
  { key: "super sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", server: false },
  { key: "clash of clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", server: false },
  { key: "blood strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", server: false },
  { key: "pubg mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", server: false },
];

const PAYMENTS = [
  { id: "qris", name: "QRIS", img: "https://files.catbox.moe/crlcvj.jpg" },
  { id: "shopeepay", name: "ShopeePay", img: "https://files.catbox.moe/gub7ik.jpg" },
  { id: "dana", name: "Dana", img: "https://files.catbox.moe/f5ey4y.jpg" },
  { id: "gopay", name: "GoPay", img: "https://files.catbox.moe/je0irt.jpg" },
  { id: "ovo", name: "OVO", img: "https://files.catbox.moe/57f44a.jpg" },
];

// Produk per game (angka contoh realistis + sesuai arahan)
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
    // Membership & Level Up
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
/* ---------- Utilities ---------- */
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));
const fmtIDR = (n) => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);

/* ---------- INDEX: Slider + Game Cards ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const slider = qs("#heroSlider .slides");
  if (slider) initSlider(slider);

  const grid = qs("#gamesGrid");
  if (grid) renderGameGrid(grid);
});

function initSlider(slidesEl){
  const imgs = qsa("img", slidesEl);
  let i = 0;
  imgs.forEach(img=>img.draggable=false);
  const go = (n)=>{ i=(n+imgs.length)%imgs.length; slidesEl.style.transform=`translateX(-${i*100}%)`; };
  setInterval(()=>go(i+1), 3500);
  go(0);
}

function renderGameGrid(container){
  container.innerHTML = "";
  GAMES.forEach(g=>{
    const card = document.createElement("div");
    card.className = "game-card";
    card.addEventListener("click", ()=>selectGame(g));
    const img = document.createElement("img");
    img.src = g.img; img.alt = g.name; img.className = "game-thumb";
    const meta = document.createElement("div");
    meta.className = "game-meta";
    const name = document.createElement("p");
    name.className = "game-name"; name.textContent = g.name;
    meta.appendChild(name);
    card.appendChild(img); card.appendChild(meta);
    container.appendChild(card);
  });
}

function selectGame(game){
  localStorage.setItem("walz_game_key", game.key);
  localStorage.setItem("walz_game_name", game.name);
  localStorage.setItem("walz_game_img", game.img);
  localStorage.setItem("walz_game_server", game.server ? "1" : "0");
  location.href = "game.html";
}

/* ---------- GAME PAGE ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const gameTitle = qs("#gameTitle");
  const banner = qs("#gameBanner");
  const productGrid = qs("#productGrid");
  const paymentGrid = qs("#paymentGrid");
  if (!gameTitle || !banner || !productGrid || !paymentGrid) return; // bukan game.html

  // Header
  const gName = localStorage.getItem("walz_game_name") || "Free Fire";
  const gImg  = localStorage.getItem("walz_game_img") || "https://files.catbox.moe/x5rvpg.jpg";
  const gKey  = (localStorage.getItem("walz_game_key") || "free fire");
  const needServer = localStorage.getItem("walz_game_server") === "1";

  gameTitle.textContent = gName;
  banner.src = gImg;
  banner.alt = gName;

  // Server ID hanya MLBB
  const serverWrap = qs("#serverWrap");
  if (serverWrap) serverWrap.style.display = needServer ? "block" : "none";

  // Render Produk & Payment
  let selectedProduct = null;
  let selectedPayment = null;
  let appliedVoucher = null;

  renderProducts();
  renderPayments(); // harga kosong sampai pilih produk

  // Voucher UI
  const voucherInput = qs("#voucherInput");
  const applyVoucherBtn = qs("#applyVoucherBtn");
  const listVoucherBtn = qs("#listVoucherBtn");
  const voucherList = qs("#voucherList");
  const errVoucher = qs("#errVoucher");

  listVoucherBtn.addEventListener("click", ()=>{
    voucherList.classList.toggle("hidden");
    if (!voucherList.classList.contains("hidden")) {
      voucherList.innerHTML = "";
      VOUCHERS.forEach(v=>{
        const it = document.createElement("div");
        it.className = "voucher-item";
        it.textContent = `${v.code} — Diskon ${v.percent}%`;
        it.addEventListener("click", ()=>{
          voucherInput.value = v.code; // isi otomatis
          // Tidak langsung apply—harus klik "Gunakan" (sesuai permintaan)
          voucherList.classList.add("hidden");
        });
        voucherList.appendChild(it);
      });
    }
  });

  applyVoucherBtn.addEventListener("click", ()=>{
    const code = (voucherInput.value || "").trim().toUpperCase();
    const found = VOUCHERS.find(v=>v.code===code);
    if (!found) {
      appliedVoucher = null;
      errVoucher.textContent = "Kode voucher tidak valid.";
      renderPayments();
      return;
    }
    appliedVoucher = found;
    errVoucher.textContent = "";
    renderPayments();
    // Popup ceklis hijau
    successPopup("Voucher Berhasil Digunakan", `Kode <b>${found.code}</b> aktif. Diskon ${found.percent}% diterapkan.`);
  });

  // Checkout
  qs("#checkoutBtn").addEventListener("click", ()=>{
    // Validasi
    const idVal = (qs("#userId").value || "").trim();
    const serverVal = needServer ? (qs("#serverId").value || "").trim() : "";
    const emailVal = (qs("#email").value || "").trim();

    clearErrors();
    if (!idVal){ showErr("#errUserId","User ID wajib diisi."); qs("#userId").focus(); return; }
    if (needServer && !serverVal){ showErr("#errServerId","Server ID wajib diisi."); qs("#serverId").focus(); return; }
    if (!/^\S+@\S+\.\S+$/.test(emailVal)){ showErr("#errEmail","Format email tidak valid."); qs("#email").focus(); return; }
    if (!selectedProduct){ showErr("#errProduct","Silakan pilih produk terlebih dahulu."); productGrid.scrollIntoView({behavior:"smooth"}); return; }
    if (!selectedPayment){ showErr("#errPayment","Silakan pilih metode pembayaran terlebih dahulu."); paymentGrid.scrollIntoView({behavior:"smooth"}); return; }

    // Hitung total
    let total = selectedProduct.price;
    if (appliedVoucher) total = Math.round(total * (100 - appliedVoucher.percent)/100);

    // Ringkasan
    const lines = [
      `🛒 *Detail Transaksi WalzShop*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `🎮 Game: ${gName}`,
      `🆔 ID: ${idVal}`,
      needServer ? `🌐 Server ID: ${serverVal}` : null,
      `💎 Produk: ${selectedProduct.label}`,
      `💳 Pembayaran: ${selectedPayment.name}`,
      appliedVoucher ? `🏷 Voucher: ${appliedVoucher.code} (${appliedVoucher.percent}% off)` : null,
      `💰 Total: ${fmtIDR(total)}`,
      `📧 Email: ${emailVal}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `✅ Mohon konfirmasi ke admin.`
    ].filter(Boolean).join("\n");

    const wa = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(lines)}`;
    const mailto = `mailto:${encodeURIComponent(emailVal)}?subject=${encodeURIComponent("Bukti Transaksi WalzShop")}&body=${encodeURIComponent(lines)}`;

    showPopup(
      "Detail Transaksi",
      lines.replaceAll("\n", "<br>") +
      `<br><br><a class="btn primary" href="${wa}" target="_blank" rel="noopener">Kirim via WhatsApp</a>
       <a class="btn soft" style="margin-left:8px" href="${mailto}">Kirim ke Email Saya</a>`
    );
  });

  qs("#popupClose").addEventListener("click", ()=>qs("#popup").classList.add("hidden"));

  /* ----- Renders ----- */
  function renderProducts(){
    productGrid.innerHTML = "";
    const items = PRODUCTS[gKey] || [];
    items.forEach(p=>{
      const card = document.createElement("div");
      card.className = "product-card";
      // Title: jumlah + diamond (atau label khusus)
      const title = document.createElement("p");
      title.className = "p-title";
      title.innerHTML = p.label; // sudah berisi "xx 💎" / label khusus

      const price = document.createElement("p");
      price.className = "p-price";
      price.textContent = fmtIDR(p.price);

      card.appendChild(title);
      card.appendChild(price);

      if (p.badges && p.badges.length){
        const wrap = document.createElement("div"); wrap.className="badges";
        p.badges.forEach(b=>{
          const tag = document.createElement("span"); tag.className="badge"; tag.textContent = b;
          wrap.appendChild(tag);
        });
        card.appendChild(wrap);
      }

      card.addEventListener("click", ()=>{
        qsa(".product-card", productGrid).forEach(c=>c.classList.remove("active"));
        card.classList.add("active");
        selectedProduct = p;
        renderPayments(); // update harga muncul
        updateSummary();
      });
      productGrid.appendChild(card);
    });
  }

  function renderPayments(){
    paymentGrid.innerHTML = "";
    PAYMENTS.forEach(pay=>{
      const card = document.createElement("div");
      card.className = "payment-card";

      const img = document.createElement("img");
      img.src = pay.img; img.alt = pay.name; img.className = "payment-logo";

      const name = document.createElement("p");
      name.className = "payment-name"; name.textContent = pay.name;

      const price = document.createElement("div");
      price.className = "pay-price";
      // harga kosong jika belum ada produk
      if (selectedProduct){
        let nominal = selectedProduct.price;
        if (appliedVoucher) nominal = Math.round(nominal * (100 - appliedVoucher.percent)/100);
        price.textContent = fmtIDR(nominal);
      }else{
        price.textContent = "";
      }

      card.appendChild(img); card.appendChild(name); card.appendChild(price);
      card.addEventListener("click", ()=>{
        qsa(".payment-card", paymentGrid).forEach(c=>c.classList.remove("active"));
        card.classList.add("active");
        selectedPayment = pay;
        updateSummary();
      });

      paymentGrid.appendChild(card);
    });
  }

  function updateSummary(){
    const box = qs("#summary");
    if (!selectedProduct) { box.innerHTML = `<p>Pilih produk terlebih dahulu.</p>`; return; }
    let nominal = selectedProduct.price;
    if (appliedVoucher) nominal = Math.round(nominal * (100 - appliedVoucher.percent)/100);
    const method = selectedPayment ? selectedPayment.name : "—";
    box.innerHTML = `
      <p>Produk: <b>${selectedProduct.label}</b></p>
      <p>Metode Pembayaran: <b>${method}</b></p>
      <p>Total: <b>${fmtIDR(nominal)}</b></p>
    `;
  }

  /* ----- Popup helpers ----- */
  function showPopup(title, html){
    qs("#popupTitle").textContent = title || "WalzShop";
    qs("#popupMessage").innerHTML = html || "";
    qs("#popup").classList.remove("hidden");
  }
  function successPopup(title, sub){
    const icon = `
      <div style="
        width:72px;height:72px;margin:0 auto 10px auto;border-radius:50%;
        background:#1f8f1f;display:flex;align-items:center;justify-content:center;
        box-shadow:0 0 15px rgba(31,143,31,.6);animation:pop .25s ease;">
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <style>@keyframes pop{from{transform:scale(.85);opacity:.6}to{transform:scale(1);opacity:1}}</style>
    `;
    showPopup(title || "Berhasil", `${icon}<div>${sub || ""}</div>`);
  }

  function clearErrors(){
    ["#errUserId","#errServerId","#errEmail","#errProduct","#errPayment","#errVoucher"].forEach(id=>{
      const el = qs(id); if (el) el.textContent = "";
    });
  }
  function showErr(sel, msg){ const el = qs(sel); if (el) el.textContent = msg; }
});