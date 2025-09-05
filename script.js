/* =========================
   CONFIG & DATA
   ========================= */
const ADMIN_WA = "6282298902274";

const VOUCHERS = [
  { code: "WALZSHOP", percent: 5 },
  { code: "WALZPROMO", percent: 5 },
  { code: "DEAL50", percent: 10 }
];

const GAMES = [
    { key: "free-fire", name: "Free Fire", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", bannerImg: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", hasServerId: false, guide: "Temukan User ID Anda di bawah nama panggilan pada menu profil game.", url: "game.html?key=free-fire" },
    { key: "mobile-legends", name: "Mobile Legends", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", bannerImg: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", hasServerId: true, guide: "Temukan User ID dan Server ID di bawah nama panggilan saat Anda mengklik avatar profil.", url: "game.html?key=mobile-legends" },
    { key: "honor-of-kings", name: "Honor of Kings", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", bannerImg: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", hasServerId: false, guide: "User ID Anda ada di bagian bawah layar saat Anda membuka profil.", url: "game.html?key=honor-of-kings" },
    { key: "genshin-impact", name: "Genshin Impact", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", bannerImg: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", hasServerId: false, guide: "User ID (9 digit) terletak di sudut kanan bawah layar saat Anda berada di dalam game.", url: "game.html?key=genshin-impact" },
    { key: "roblox", name: "Roblox", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", bannerImg: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", hasServerId: false, guide: "Top up menggunakan Gift Card yang akan dikirim langsung ke akun Anda.", url: "game.html?key=roblox" },
    { key: "super-sus", name: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", bannerImg: "https://files.catbox.moe/j61uny.jpg", hasServerId: false, guide: "User ID dapat ditemukan di menu profil dalam game.", url: "game.html?key=super-sus" },
    { key: "clash-of-clans", name: "Clash of Clans", img: "https://files.catbox.moe/6aia0n.jpg", bannerImg: "https://files.catbox.moe/6aia0n.jpg", hasServerId: false, guide: "User ID (Tag Pemain) adalah kombinasi huruf dan angka yang dimulai dengan tanda pagar (#).", url: "game.html?key=clash-of-clans" },
    { key: "blood-strike", name: "Blood Strike", img: "https://files.catbox.moe/3y066i.jpg", bannerImg: "https://files.catbox.moe/3y066i.jpg", hasServerId: false, guide: "ID Anda dapat ditemukan di profil dalam game.", url: "game.html?key=blood-strike" },
    { key: "pubg-mobile", name: "PUBG Mobile", img: "https://files.catbox.moe/tatuo9.jpg", bannerImg: "https://files.catbox.moe/tatuo9.jpg", hasServerId: false, guide: "Temukan User ID Anda di sudut kanan atas lobi game saat mengklik profil.", url: "game.html?key=pubg-mobile" },
    { key: "garena-delta-force", name: "Garena Delta Force", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", bannerImg: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", hasServerId: false, guide: "Buka menu profil di game dan Anda dapat menemukan User ID Anda.", url: "game.html?key=garena-delta-force" },
    { key: "call-of-duty", name: "Call Of Duty", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", bannerImg: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil game.", url: "game.html?key=call-of-duty" },
    { key: "valorant", name: "Valorant", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", bannerImg: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", hasServerId: false, guide: "User ID (Riot ID) dapat ditemukan di bawah nama akun Anda di bagian atas layar.", url: "game.html?key=valorant" },
    { key: "eggy-party", name: "Eggy Party", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", bannerImg: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", hasServerId: false, guide: "User ID Anda dapat ditemukan di profil dalam game.", url: "game.html?key=eggy-party" },
    { key: "garena-undawn", name: "Garena Undawn", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", bannerImg: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", hasServerId: false, guide: "Buka menu profil dan User ID Anda akan terlihat.", url: "game.html?key=garena-undawn" },
];

const PRODUCTS = {
    "free-fire": [
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
        { id: "ff-mw", label: "Membership Mingguan", price: 30500, badges: ["member"] },
        { id: "ff-mb", label: "Membership Bulanan", price: 90000, badges: ["member"] },
        { id: "ff-lvl6", label: "Level Up Pass Lv.6", price: 5500, badges: ["levelup"] },
        { id: "ff-lvl10", label: "Level Up Pass Lv.10", price: 8800, badges: ["levelup"] },
        { id: "ff-lvl15", label: "Level Up Pass Lv.15", price: 8800, badges: ["levelup"] },
        { id: "ff-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["levelup"] },
        { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["pass"] },
    ],
    "mobile-legends": [
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
        { id: "ml-wdp", label: "Weekly Diamond Pass", price: 28000, badges: ["weekly"] },
        { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["pass"] },
    ],
    "pubg-mobile": [
        { id: "pubg-30", label: "30 UC", price: 7000 },
        { id: "pubg-60", label: "60 UC", price: 14000 },
        { id: "pubg-300", label: "300 + 25 UC", price: 70000 },
        { id: "pubg-600", label: "600 + 60 UC", price: 140000 },
        { id: "pubg-1500", label: "1500 + 300 UC", price: 350000 },
        { id: "pubg-3000", label: "3000 + 850 UC", price: 700000 },
        { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["levelup"] },
        { id: "pubg-booyah", label: "BooYah Pass", price: 50000, badges: ["pass"] },
    ],
    "genshin-impact": [
        { id: "gi-60", label: "60 Genesis Crystals", price: 14865 },
        { id: "gi-330", label: "330 Genesis Crystals", price: 72973 },
        { id: "gi-1090", label: "1090 Genesis Crystals", price: 229730 },
        { id: "gi-2240", label: "2240 Genesis Crystals", price: 440541 },
        { id: "gi-3880", label: "3880 Genesis Crystals", price: 734234 },
        { id: "gi-8080", label: "8080 Genesis Crystals", price: 1467568 },
        { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973, badges: ["welkin"] },
    ],
    "honor-of-kings": [
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
    "super-sus": [
        { id: "ss-100", label: "100 Goldstar", price: 11712 },
        { id: "ss-310", label: "310 Goldstar", price: 34234 },
        { id: "ss-520", label: "520 Goldstar", price: 57658 },
        { id: "ss-1060", label: "1060 Goldstar", price: 116216 },
        { id: "ss-2180", label: "2180 Goldstar", price: 239640 },
        { id: "ss-5600", label: "5600 Goldstar", price: 613514 },
        { id: "ss-weekly", label: "Weekly Card", price: 13514, badges: ["weekly"] },
        { id: "ss-monthly", label: "Monthly Card", price: 134234, badges: ["monthly"] },
        { id: "ss-vip", label: "Super VIP Card", price: 157658, badges: ["vip"] },
    ],
    "clash-of-clans": [
        { id: "coc-500", label: "500 Gems", price: 75299 },
        { id: "coc-1200", label: "1200 Gems", price: 150499 },
        { id: "coc-2500", label: "2500 Gems", price: 300999 },
        { id: "coc-6500", label: "6500 Gems", price: 752399 },
        { id: "coc-14000", label: "14000 Gems", price: 1454599 },
    ],
    "blood-strike": [
        { id: "bs-100", label: "100 + 5 Gold", price: 11999 },
        { id: "bs-300", label: "300 + 20 Gold", price: 34999 },
        { id: "bs-500", label: "500 + 40 Gold", price: 54999 },
        { id: "bs-1000", label: "1000 + 100 Gold", price: 110000 },
        { id: "bs-2000", label: "2000 + 260 Gold", price: 219999 },
        { id: "bs-5000", label: "5000 + 800 Gold", price: 549999 },
    ],
    "eggy-party": [
        { id: "eggy-weekly", label: "Weekly Egg Coin Pack", price: 14799, badges: ["weekly"] },
        { id: "eggy-yoyo", label: "Yoyo Membership", price: 27799, badges: ["member"] },
        { id: "eggy-shiny", label: "Shiny Coin Jar", price: 42699, badges: ["hot"] },
        { id: "eggy-aquarius", label: "Energetic Aquarius", price: 14499, badges: ["new"] },
        { id: "eggy-capricorn", label: "Obsidian Capricorn", price: 14399, badges: ["new"] },
        { id: "eggy-libra", label: "Elegant Libra", price: 14499, badges: ["new"] },
        { id: "eggy-sagittarius", label: "Wandering Sagittarius", price: 14399, badges: ["new"] },
        { id: "eggy-scorpio", label: "Mysterious Scorpio", price: 14399, badges: ["new"] },
        { id: "eggy-spring-small", label: "Spring Egg Coin Pack Small", price: 14399, badges: ["sale"] },
        { id: "eggy-spring-big", label: "Spring Egg Coin Pack Big", price: 163399, badges: ["sale"] },
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
    "call-of-duty": [
        { id: "codm-31", label: "31 CP", price: 4899 },
        { id: "codm-63", label: "63 CP", price: 9699 },
        { id: "codm-128", label: "128 CP", price: 19399 },
        { id: "codm-321", label: "321 CP", price: 48499 },
        { id: "codm-645", label: "645 CP", price: 99999 },
        { id: "codm-800", label: "800 CP", price: 119999 },
        { id: "codm-1373", label: "1373 CP", price: 193999, badges: ["hot"] },
        { id: "codm-2060", label: "2060 CP", price: 290999 },
        { id: "codm-2750", label: "2750 CP", price: 379999 },
        { id: "codm-3564", label: "3564 CP", price: 484999 },
        { id: "codm-5619", label: "5619 CP", price: 729999, badges: ["sale"] },
        { id: "codm-7656", label: "7656 CP", price: 969999 },
        { id: "codm-15312", label: "15312 CP", price: 1999999 },
        { id: "codm-38280", label: "38280 CP", price: 4999999 },
        { id: "codm-76560", label: "76560 CP", price: 9999999 },
    ],
    "valorant": [
        { id: "val-475", label: "475 Points", price: 54349 },
        { id: "val-1000", label: "1000 Points", price: 108799 },
        { id: "val-2050", label: "2050 Points", price: 217499, badges: ["hot"] },
        { id: "val-3650", label: "3650 Points", price: 372199 },
        { id: "val-5350", label: "5350 Points", price: 544999 },
        { id: "val-11000", label: "11000 Points", price: 1089999, badges: ["hot"] },
    ],
    "garena-delta-force": [
        { id: "delta-tide", label: "Tide Supplies", price: 8499, badges: ["new"] },
        { id: "delta-adv", label: "Tide Supplies Advanced", price: 24499, badges: ["new"] },
        { id: "delta-genesis", label: "Black Hawk Down Genesis", price: 41999, badges: ["new"] },
        { id: "delta-redefine", label: "Black Hawk Down Redefine", price: 84999, badges: ["new"] },
        { id: "delta-18", label: "18 + 1", price: 4999 },
        { id: "delta-30", label: "30 + 2", price: 7499 },
        { id: "delta-60", label: "60 + 3", price: 14999, badges: ["hot"] },
        { id: "delta-300", label: "300 + 36", price: 74999 },
        { id: "delta-420", label: "420 + 62", price: 99999 },
        { id: "delta-680", label: "680 + 105", price: 139999 },
        { id: "delta-1280", label: "1280 + 264", price: 279999 },
        { id: "delta-1680", label: "1680 + 385", price: 349999 },
        { id: "delta-3280", label: "3280 + 834", price: 699999 },
        { id: "delta-6480", label: "6480 + 1944", price: 1399999, badges: ["sale"] },
        { id: "delta-12960", label: "12960 + 3888", price: 2799999 },
        { id: "delta-19440", label: "19440 + 5832", price: 4199999 },
    ],
    "garena-undawn": [
        { id: "undawn-bulanan", label: "Kartu Bulanan", price: 47299, badges: ["member"] },
        { id: "undawn-growth", label: "Growth Fund", price: 94799, badges: ["hot"] },
        { id: "undawn-glory", label: "Glory Pass Premium", price: 142299, badges: ["pass"] },
        { id: "undawn-elite", label: "Elite Fund Rebate LV 80", price: 126999, badges: ["new"] },
        { id: "undawn-ace", label: "Ace Fund", price: 143999, badges: ["hot"] },
        { id: "undawn-rc80", label: "RC 80", price: 14599 },
        { id: "undawn-rc250", label: "RC 250", price: 43699 },
        { id: "undawn-rc450", label: "RC 450", price: 72799 },
        { id: "undawn-rc920", label: "RC 920", price: 144599 },
        { id: "undawn-rc1850", label: "RC 1850", price: 290099 },
        { id: "undawn-rc2800", label: "RC 2800", price: 435599 },
        { id: "undawn-rc4750", label: "RC 4750", price: 726599 },
        { id: "undawn-rc9600", label: "RC 9600", price: 1454099, badges: ["sale"] },
        { id: "undawn-rc33000", label: "RC 33.000", price: 4849999 },
        { id: "undawn-rc66500", label: "RC 66.500", price: 9699999 },
        { id: "undawn-mingguan", label: "Kartu Mingguan", price: 28599, badges: ["weekly"] },
        { id: "undawn-glory-s7", label: "Glory Pass Premium S7", price: 143999, badges: ["pass"] },
        { id: "undawn-glory-s16", label: "Glory Pass Premium S16", price: 143999, badges: ["pass"] },
        { id: "undawn-prep", label: "Quick Battle Prep", price: 94379, badges: ["sale"] },
    ]
};


const PAYMENTS = [
  { id: "qris", label: "QRIS" },
  { id: "gopay", label: "Gopay" },
  { id: "shopeepay", label: "ShopeePay" },
  { id: "dana", label: "DANA" }
];

/* =========================
   HELPER FUNCTIONS
   ========================= */
function formatIDR(value) {
  return "Rp " + value.toLocaleString("id-ID");
}

/* =========================
   PROMO SLIDER
   ========================= */
const sliderContainer = document.getElementById("promo-slider");
const sliderDotsContainer = document.getElementById("slider-dots");

const PROMOS = [
  "https://files.catbox.moe/crlcvj.jpg",
  "https://i.imghippo.com/files/qhn1355Ds.jpg",
  "https://files.catbox.moe/gub7ik.jpg",
  "https://i.imghippo.com/files/lRYZ9422LG.jpg"
];

let currentSlide = 0;
function createSlider() {
  if(!sliderContainer) return;
  PROMOS.forEach((url, idx) => {
    const div = document.createElement("div");
    div.className = "slider__item";
    div.innerHTML = `<img src="${url}" alt="Promo ${idx+1}">`;
    sliderContainer.appendChild(div);

    const dot = document.createElement("button");
    dot.addEventListener("click", ()=>goToSlide(idx));
    sliderDotsContainer.appendChild(dot);
  });
  updateSlider();
}

function updateSlider() {
  if(!sliderContainer) return;
  const width = sliderContainer.clientWidth;
  sliderContainer.style.transform = `translateX(-${currentSlide*100}%)`;
  [...sliderDotsContainer.children].forEach((d,i)=>d.classList.toggle("active", i===currentSlide));
}

function nextSlide() { currentSlide = (currentSlide+1)%PROMOS.length; updateSlider(); }
function goToSlide(idx) { currentSlide=idx; updateSlider(); }

setInterval(nextSlide, 4000); // auto slide
createSlider();

/* =========================
   LOAD GAMES
   ========================= */
function renderGames() {
  const gamesGrid = document.getElementById("games-grid");
  if(!gamesGrid) return;
  GAMES.forEach(game=>{
    const div = document.createElement("div");
    div.className = "game-card fade-in";
    div.innerHTML = `
      <img src="${game.img}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>${game.description}</p>
    `;
    div.addEventListener("click", ()=>{ window.location.href=`game.html?game=${game.key}` });
    gamesGrid.appendChild(div);
  });
}
renderGames();

/* =========================
   GAME PAGE / CART PAGE LOGIC
   ========================= */
function getQueryParam(param){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderGameDetail() {
  const key = getQueryParam("game");
  if(!key) return;
  const game = GAMES.find(g=>g.key===key);
  if(!game) return;
  const banner = document.getElementById("game-banner");
  const nameH1 = document.querySelector(".game-name-h1");
  const descP = document.querySelector(".game-description");
  if(banner) banner.src = game.img;
  if(nameH1) nameH1.textContent = game.name;
  if(descP) descP.textContent = game.description;

  renderProducts(key);
  renderPayments();
}

function renderProducts(key) {
  const productGrid = document.getElementById("product-grid");
  if(!productGrid) return;
  productGrid.innerHTML = "";
  const items = PRODUCTS[key] || [];
  items.forEach(p=>{
    const card = document.createElement("div");
    card.className = "option-card";
    card.dataset.id = p.id;
    card.dataset.price = p.price;
    card.innerHTML = `<div class="label">${p.label}</div>
                      <div class="price">${formatIDR(p.price)}</div>
                      ${p.badge?`<span class="badge ${p.badge}">${p.badge}</span>`:""}`;
    card.addEventListener("click", ()=>{
      document.querySelectorAll(".option-card").forEach(c=>c.classList.remove("active"));
      card.classList.add("active");
      updateSummary();
    });
    productGrid.appendChild(card);
  });
}

function renderPayments() {
  const paymentGrid = document.getElementById("payment-grid");
  if(!paymentGrid) return;
  paymentGrid.innerHTML = "";
  PAYMENTS.forEach(p=>{
    const card = document.createElement("div");
    card.className = "option-card";
    card.dataset.id = p.id;
    card.innerHTML = `<div class="label">${p.label}</div>`;
    card.addEventListener("click", ()=>{
      document.querySelectorAll("#payment-grid .option-card").forEach(c=>c.classList.remove("active"));
      card.classList.add("active");
      updateSummary();
    });
    paymentGrid.appendChild(card);
  });
}

/* =========================
   SUMMARY + VOUCHER
   ========================= */
function updateSummary() {
  const selectedProduct = document.querySelector("#product-grid .option-card.active");
  const selectedPayment = document.querySelector("#payment-grid .option-card.active");
  const summaryProduct = document.getElementById("summary-product");
  const summaryPayment = document.getElementById("summary-payment");
  const summaryTotal = document.getElementById("summary-total");
  const discountRow = document.getElementById("summary-discount-row");
  const summaryDiscount = document.getElementById("summary-discount");

  let total = 0;
  let discount = 0;

  if(selectedProduct){
    summaryProduct.textContent = selectedProduct.querySelector(".label").textContent;
    total = parseInt(selectedProduct.dataset.price);
  } else {
    summaryProduct.textContent = "-";
  }

  if(selectedPayment){
    summaryPayment.textContent = selectedPayment.querySelector(".label").textContent;
  } else {
    summaryPayment.textContent = "-";
  }

  // voucher
  const voucherInput = document.getElementById("voucher-input");
  const code = voucherInput?.value.trim().toUpperCase();
  if(code){
    const v = VOUCHERS.find(v=>v.code.toUpperCase()===code);
    if(v){
      discount = Math.floor(total*v.percent/100);
      discountRow.style.display="table-row";
      summaryDiscount.textContent = `-${formatIDR(discount)} (${v.percent}%)`;
    } else {
      discountRow.style.display="none";
    }
  } else {
    discountRow.style.display="none";
  }

  summaryTotal.textContent = formatIDR(total-discount);

  // enable checkout if product + payment selected
  const checkoutBtn = document.getElementById("checkout-btn");
  if(selectedProduct && selectedPayment) checkoutBtn.disabled = false;
  else checkoutBtn.disabled = true;
}

/* =========================
   VOUCHER BUTTON
   ========================= */
document.getElementById("voucher-btn")?.addEventListener("click", ()=>{
  updateSummary();
  const code = document.getElementById("voucher-input").value.trim().toUpperCase();
  const status = document.getElementById("voucher-status");
  const v = VOUCHERS.find(v=>v.code.toUpperCase()===code);
  if(v) status.textContent = `Voucher ${code} berhasil diterapkan! Diskon ${v.percent}%`;
  else status.textContent = `Voucher ${code} tidak valid.`;
});

/* =========================
   PROMO LIST MODAL
   ========================= */
document.getElementById("voucher-list-btn")?.addEventListener("click", ()=>{
  const modal = document.getElementById("promo-list-modal");
  modal.innerHTML = `<h3>Daftar Promo</h3><ul>${VOUCHERS.map(v=>`<li>${v.code} - Diskon ${v.percent}%</li>`).join("")}</ul>
                     <button class="modal-close-btn" onclick="closeModal()">Tutup</button>`;
  showModal(modal);
});

/* =========================
   CHECKOUT MODAL
   ========================= */
document.getElementById("checkout-btn")?.addEventListener("click", ()=>{
  const selectedProduct = document.querySelector("#product-grid .option-card.active");
  const selectedPayment = document.querySelector("#payment-grid .option-card.active");
  const total = document.getElementById("summary-total").textContent;

  if(!selectedProduct || !selectedPayment) return;

  const modal = document.getElementById("checkout-modal");
  modal.innerHTML = `<h3>Checkout</h3>
                     <p>Produk: ${selectedProduct.querySelector(".label").textContent}</p>
                     <p>Metode Bayar: ${selectedPayment.querySelector(".label").textContent}</p>
                     <p>Total: ${total}</p>
                     <a href="https://wa.me/${ADMIN_WA}?text=Saya ingin membeli ${selectedProduct.querySelector(".label").textContent} dengan metode ${selectedPayment.querySelector(".label").textContent}" target="_blank" class="btn btn-primary btn-block">Bayar via WhatsApp</a>
                     <button class="modal-close-btn" onclick="closeModal()">Tutup</button>`;
  showModal(modal);
});

/* =========================
   MODAL UTILITIES
   ========================= */
function showModal(modal){
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("active");
  overlay.querySelectorAll(".modal").forEach(m=>m.style.display="none");
  modal.style.display="block";
}

function closeModal(){
  document.getElementById("modal-overlay").classList.remove("active");
}

/* =========================
   INIT
   ========================= */
document.addEventListener("DOMContentLoaded", ()=>{
  renderGameDetail();
  updateSummary();
});