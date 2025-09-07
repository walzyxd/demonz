// --- Data Website Anda ---
const GAMES = [
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", url: "game.html?key=free-fire", needsServerId: false, apiCode: "ff" },
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", url: "game.html?key=mobile-legends", needsServerId: true, apiCode: "ml" },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", url: "game.html?key=honor-of-kings", needsServerId: true, apiCode: "hok" },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact", needsServerId: true, apiCode: "gi" },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corporation", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", url: "game.html?key=roblox", needsServerId: false, apiCode: "roblox" },
    { key: "super-sus", name: "Super Sus", publisher: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", url: "game.html?key=super-sus", needsServerId: true, apiCode: "supersus" },
    { key: "coc", name: "Clash of Clans", publisher: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", url: "game.html?key=coc", needsServerId: false, apiCode: "coc" },
    { key: "blood-strike", name: "Blood Strike", publisher: "NetEase", img: "https://files.catbox.moe/3y066i.jpg", url: "game.html?key=blood-strike", needsServerId: false, apiCode: "bloodstrike" },
    { key: "pubg", name: "PUBG Mobile", publisher: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg", needsServerId: false, apiCode: "pubgm" },
    { key: "garena-delta", name: "Garena Delta Force", publisher: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", url: "game.html?key=garena-delta", needsServerId: false, apiCode: "deltaforce" },
    { key: "garena-undawn", name: "Garena Undawn", publisher: "Garena", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", url: "game.html?key=garena-undawn", needsServerId: false, apiCode: "undawn" },
    { key: "valorant", name: "Valorant", publisher: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", url: "game.html?key=valorant", needsServerId: false, apiCode: "valorant" },
    { key: "call-of-duty", name: "Call Of Duty", publisher: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=call-of-duty", needsServerId: false, apiCode: "codm" },
    { key: "eggy-party", name: "Eggy Party", publisher: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", url: "game.html?key=eggy-party", needsServerId: false, apiCode: "eggyparty" },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", qr: "https://i.ibb.co/680pD67/walzshop-logo.png" },
    { id: "krom", name: "Bank Krom", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", number: "770072009565", holder: "Walzshop ID" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", number: "083139243389", holder: "Anom" },
    { id: "gopay", name: "Gopay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", number: "082298902274", holder: "Anom" }
];

const PRODUCTS = {
    "free-fire": [
        { id: "ff-5", label: "5 Diamonds", price: 901, apiCode: "FF01" },
        { id: "ff-12", label: "12 Diamonds", price: 1802, apiCode: "FF02" },
        { id: "ff-50", label: "50 Diamonds", price: 7207, apiCode: "FF05" },
        { id: "ff-70", label: "70 Diamonds", price: 9009, apiCode: "FF07" },
        { id: "ff-140", label: "140 Diamonds", price: 18018, apiCode: "FF10" },
        { id: "ff-355", label: "355 Diamonds", price: 45045, apiCode: "FF25" },
        { id: "ff-720", label: "720 Diamonds", price: 90090, apiCode: "FF50" },
        { id: "ff-1450", label: "1450 Diamonds", price: 180180, apiCode: "FF100" },
        { id: "ff-2180", label: "2180 Diamonds", price: 270270, apiCode: "FF150" },
        { id: "ff-3640", label: "3640 Diamonds", price: 450450, apiCode: "FF250" },
        { id: "ff-mw", label: "Membership Mingguan", price: 30500, badges: ["member"], apiCode: "FFMW" },
        { id: "ff-mb", label: "Membership Bulanan", price: 90000, badges: ["member"], apiCode: "FFMB" },
        { id: "ff-lvl6", label: "Level Up Pass Lv.6", price: 5500, badges: ["levelup"], apiCode: "FFLUPLV6" },
        { id: "ff-lvl10", label: "Level Up Pass Lv.10", price: 8800, badges: ["levelup"], apiCode: "FFLUPLV10" },
        { id: "ff-lvl15", label: "Level Up Pass Lv.15", price: 8800, badges: ["levelup"], apiCode: "FFLUPLV15" },
        { id: "ff-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["levelup"], apiCode: "FFLUPLV20" },
        { id: "ff-booyah", label: "BooYah Pass", price: 50000, badges: ["pass"], apiCode: "FFBP" },
    ],
    "mobile-legends": [
        { id: "ml-3", label: "3 Diamonds", price: 1171, apiCode: "ML3" },
        { id: "ml-5", label: "5 Diamonds", price: 1423, apiCode: "ML5" },
        { id: "ml-12", label: "12 Diamonds", price: 3323, apiCode: "ML12" },
        { id: "ml-19", label: "19 Diamonds", price: 5223, apiCode: "ML19" },
        { id: "ml-28", label: "28 Diamonds", price: 7600, apiCode: "ML28" },
        { id: "ml-44", label: "44 Diamonds", price: 11400, apiCode: "ML44" },
        { id: "ml-59", label: "59 Diamonds", price: 15200, apiCode: "ML59" },
        { id: "ml-85", label: "85 Diamonds", price: 21850, apiCode: "ML85" },
        { id: "ml-170", label: "170 Diamonds", price: 43700, apiCode: "ML170" },
        { id: "ml-240", label: "240 Diamonds", price: 61750, apiCode: "ML240" },
        { id: "ml-296", label: "296 Diamonds", price: 76000, apiCode: "ML296" },
        { id: "ml-408", label: "408 Diamonds", price: 104500, apiCode: "ML408" },
        { id: "ml-568", label: "568 Diamonds", price: 142500, apiCode: "ML568" },
        { id: "ml-875", label: "875 Diamonds", price: 218500, apiCode: "ML875" },
        { id: "ml-2010", label: "2010 Diamonds", price: 475000, apiCode: "ML2010" },
        { id: "ml-4830", label: "4830 Diamonds", price: 1140000, apiCode: "ML4830" },
        { id: "ml-wdp", label: "Weekly Diamond Pass", price: 28000, badges: ["weekly"], apiCode: "MLWDP" },
        { id: "ml-twilight", label: "Twilight Pass", price: 150000, badges: ["pass"], apiCode: "MLTP" },
    ],
    "pubg": [
        { id: "pubg-30", label: "30 UC", price: 7000, apiCode: "PUBG30" },
        { id: "pubg-60", label: "60 UC", price: 14000, apiCode: "PUBG60" },
        { id: "pubg-300", label: "300 + 25 UC", price: 70000, apiCode: "PUBG300" },
        { id: "pubg-600", label: "600 + 60 UC", price: 140000, apiCode: "PUBG600" },
        { id: "pubg-1500", label: "1500 + 300 UC", price: 350000, apiCode: "PUBG1500" },
        { id: "pubg-3000", label: "3000 + 850 UC", price: 700000, apiCode: "PUBG3000" },
        { id: "pubg-lvl20", label: "Level Up Pass Lv.20", price: 8800, badges: ["levelup"], apiCode: "PUBGRL" },
        { id: "pubg-booyah", label: "BooYah Pass", price: 50000, badges: ["pass"], apiCode: "PUBGBP" },
    ],
    "genshin-impact": [
        { id: "gi-60", label: "60 Genesis Crystals", price: 14865, apiCode: "GI60" },
        { id: "gi-330", label: "330 Genesis Crystals", price: 72973, apiCode: "GI330" },
        { id: "gi-1090", label: "1090 Genesis Crystals", price: 229730, apiCode: "GI1090" },
        { id: "gi-2240", label: "2240 Genesis Crystals", price: 440541, apiCode: "GI2240" },
        { id: "gi-3880", label: "3880 Genesis Crystals", price: 734234, apiCode: "GI3880" },
        { id: "gi-8080", label: "8080 Genesis Crystals", price: 1467568, apiCode: "GI8080" },
        { id: "gi-welkin", label: "Blessing of the Welkin Moon", price: 72973, badges: ["welkin"], apiCode: "GIWLK" },
    ],
    "honor-of-kings": [
        { id: "hok-16", label: "16 Tokens", price: 3300, apiCode: "HOK16" },
        { id: "hok-80", label: "80 Tokens", price: 16500, apiCode: "HOK80" },
        { id: "hok-240", label: "240 Tokens", price: 51000, apiCode: "HOK240" },
        { id: "hok-400", label: "400 Tokens", price: 84000, apiCode: "HOK400" },
        { id: "hok-560", label: "560 Tokens", price: 118000, apiCode: "HOK560" },
        { id: "hok-830", label: "830 Tokens", price: 168000, apiCode: "HOK830" },
        { id: "hok-1245", label: "1245 Tokens", price: 250000, apiCode: "HOK1245" },
        { id: "hok-2508", label: "2508 Tokens", price: 495000, apiCode: "HOK2508" },
        { id: "hok-4180", label: "4180 Tokens", price: 824000, apiCode: "HOK4180" },
        { id: "hok-8360", label: "8360 Tokens", price: 1648000, apiCode: "HOK8360" },
    ],
    "roblox": [
        { id: "rbx-50k", label: "Gift Card Rp50.000", price: 48440, apiCode: "ROBLOXGC50K" },
        { id: "rbx-65k", label: "Gift Card Rp65.000", price: 62970, apiCode: "ROBLOXGC65K" },
        { id: "rbx-100k", label: "Gift Card Rp100.000", price: 96500, apiCode: "ROBLOXGC100K" },
        { id: "rbx-200k", label: "Gift Card Rp200.000", price: 193000, apiCode: "ROBLOXGC200K" },
        { id: "rbx-500k", label: "Gift Card Rp500.000", price: 479000, apiCode: "ROBLOXGC500K" },
    ],
    "super-sus": [
        { id: "ss-100", label: "100 Goldstar", price: 11712, apiCode: "SS100" },
        { id: "ss-310", label: "310 Goldstar", price: 34234, apiCode: "SS310" },
        { id: "ss-520", label: "520 Goldstar", price: 57658, apiCode: "SS520" },
        { id: "ss-1060", label: "1060 Goldstar", price: 116216, apiCode: "SS1060" },
        { id: "ss-2180", label: "2180 Goldstar", price: 239640, apiCode: "SS2180" },
        { id: "ss-5600", label: "5600 Goldstar", price: 613514, apiCode: "SS5600" },
        { id: "ss-weekly", label: "Weekly Card", price: 13514, badges: ["weekly"], apiCode: "SSWC" },
        { id: "ss-monthly", label: "Monthly Card", price: 134234, badges: ["monthly"], apiCode: "SSMC" },
        { id: "ss-vip", label: "Super VIP Card", price: 157658, badges: ["vip"], apiCode: "SSVIP" },
    ],
    "coc": [
        { id: "coc-500", label: "500 Gems", price: 75299, apiCode: "COC500" },
        { id: "coc-1200", label: "1200 Gems", price: 150499, apiCode: "COC1200" },
        { id: "coc-2500", label: "2500 Gems", price: 300999, apiCode: "COC2500" },
        { id: "coc-6500", label: "6500 Gems", price: 752399, apiCode: "COC6500" },
        { id: "coc-14000", label: "14000 Gems", price: 1454599, apiCode: "COC14000" },
    ],
    "blood-strike": [
        { id: "bs-100", label: "100 + 5 Gold", price: 11999, apiCode: "BS100" },
        { id: "bs-300", label: "300 + 20 Gold", price: 34999, apiCode: "BS300" },
        { id: "bs-500", label: "500 + 40 Gold", price: 54999, apiCode: "BS500" },
        { id: "bs-1000", label: "1000 + 100 Gold", price: 110000, apiCode: "BS1000" },
        { id: "bs-2000", label: "2000 + 260 Gold", price: 219999, apiCode: "BS2000" },
        { id: "bs-5000", label: "5000 + 800 Gold", price: 549999, apiCode: "BS5000" },
    ],
    "eggy-party": [
        { id: "eggy-weekly", label: "Weekly Egg Coin Pack", price: 14799, badges: ["weekly"], apiCode: "EPWCP" },
        { id: "eggy-yoyo", label: "Yoyo Membership", price: 27799, badges: ["member"], apiCode: "EPYM" },
        { id: "eggy-shiny", label: "Shiny Coin Jar", price: 42699, badges: ["hot"], apiCode: "EPSCJ" },
        { id: "eggy-aquarius", label: "Energetic Aquarius", price: 14499, badges: ["new"], apiCode: "EPEA" },
        { id: "eggy-capricorn", label: "Obsidian Capricorn", price: 14399, badges: ["new"], apiCode: "EPOC" },
        { id: "eggy-libra", label: "Elegant Libra", price: 14499, badges: ["new"], apiCode: "EPEL" },
        { id: "eggy-sagittarius", label: "Wandering Sagittarius", price: 14399, badges: ["new"], apiCode: "EPWS" },
        { id: "eggy-scorpio", label: "Mysterious Scorpio", price: 14399, badges: ["new"], apiCode: "EPMS" },
        { id: "eggy-spring-small", label: "Spring Egg Coin Pack Small", price: 14399, badges: ["sale"], apiCode: "EPSES" },
        { id: "eggy-spring-big", label: "Spring Egg Coin Pack Big", price: 163399, badges: ["sale"], apiCode: "EPSEB" },
        { id: "eggy-10", label: "10 Eggy Coins", price: 2199, apiCode: "EP10" },
        { id: "eggy-60", label: "60 + 3 Bonus", price: 13999, apiCode: "EP60" },
        { id: "eggy-120", label: "120 + 6 Bonus", price: 26999, apiCode: "EP120" },
        { id: "eggy-300", label: "300 + 24 Bonus", price: 68499, apiCode: "EP300" },
        { id: "eggy-600", label: "600 + 57 Bonus", price: 138599, apiCode: "EP600" },
        { id: "eggy-1250", label: "1250 + 144 Bonus", price: 251099, apiCode: "EP1250" },
        { id: "eggy-1880", label: "1880 + 216 Bonus", price: 378099, apiCode: "EP1880" },
        { id: "eggy-3180", label: "3180 + 423 Bonus", price: 630199, apiCode: "EP3180" },
        { id: "eggy-6480", label: "6480 + 903 Bonus", price: 1244999, apiCode: "EP6480" },
    ],
    "call-of-duty": [
        { id: "codm-31", label: "31 CP", price: 4899, apiCode: "CODM31" },
        { id: "codm-63", label: "63 CP", price: 9699, apiCode: "CODM63" },
        { id: "codm-128", label: "128 CP", price: 19399, apiCode: "CODM128" },
        { id: "codm-321", label: "321 CP", price: 48499, apiCode: "CODM321" },
        { id: "codm-645", label: "645 CP", price: 99999, apiCode: "CODM645" },
        { id: "codm-800", label: "800 CP", price: 119999, apiCode: "CODM800" },
        { id: "codm-1373", label: "1373 CP", price: 193999, badges: ["hot"], apiCode: "CODM1373" },
        { id: "codm-2060", label: "2060 CP", price: 290999, apiCode: "CODM2060" },
        { id: "codm-2750", label: "2750 CP", price: 379999, apiCode: "CODM2750" },
        { id: "codm-3564", label: "3564 CP", price: 484999, apiCode: "CODM3564" },
        { id: "codm-5619", label: "5619 CP", price: 729999, badges: ["sale"], apiCode: "CODM5619" },
        { id: "codm-7656", label: "7656 CP", price: 969999, apiCode: "CODM7656" },
        { id: "codm-15312", label: "15312 CP", price: 1999999, apiCode: "CODM15312" },
        { id: "codm-38280", label: "38280 CP", price: 4999999, apiCode: "CODM38280" },
        { id: "codm-76560", label: "76560 CP", price: 9999999, apiCode: "CODM76560" },
    ],
    "valorant": [
        { id: "val-475", label: "475 Points", price: 54349, apiCode: "VAL475" },
        { id: "val-1000", label: "1000 Points", price: 108799, apiCode: "VAL1000" },
        { id: "val-2050", label: "2050 Points", price: 217499, badges: ["hot"], apiCode: "VAL2050" },
        { id: "val-3650", label: "3650 Points", price: 372199, apiCode: "VAL3650" },
        { id: "val-5350", label: "5350 Points", price: 544999, apiCode: "VAL5350" },
        { id: "val-11000", label: "11000 Points", price: 1089999, badges: ["hot"], apiCode: "VAL11000" },
    ],
    "garena-delta": [
        { id: "delta-tide", label: "Tide Supplies", price: 8499, badges: ["new"], apiCode: "GDT" },
        { id: "delta-adv", label: "Tide Supplies Advanced", price: 24499, badges: ["new"], apiCode: "GDTA" },
        { id: "delta-genesis", label: "Black Hawk Down Genesis", price: 41999, badges: ["new"], apiCode: "GDBHG" },
        { id: "delta-redefine", label: "Black Hawk Down Redefine", price: 84999, badges: ["new"], apiCode: "GDBHR" },
        { id: "delta-18", label: "18 + 1", price: 4999, apiCode: "GD18" },
        { id: "delta-30", label: "30 + 2", price: 7499, apiCode: "GD30" },
        { id: "delta-60", label: "60 + 3", price: 14999, badges: ["hot"], apiCode: "GD60" },
        { id: "delta-300", label: "300 + 36", price: 74999, apiCode: "GD300" },
        { id: "delta-420", label: "420 + 62", price: 99999, apiCode: "GD420" },
        { id: "delta-680", label: "680 + 105", price: 139999, apiCode: "GD680" },
        { id: "delta-1280", label: "1280 + 264", price: 279999, apiCode: "GD1280" },
        { id: "delta-1680", label: "1680 + 385", price: 349999, apiCode: "GD1680" },
        { id: "delta-3280", label: "3280 + 834", price: 699999, apiCode: "GD3280" },
        { id: "delta-6480", label: "6480 + 1944", price: 1399999, badges: ["sale"], apiCode: "GD6480" },
        { id: "delta-12960", label: "12960 + 3888", price: 2799999, apiCode: "GD12960" },
        { id: "delta-19440", label: "19440 + 5832", price: 4199999, apiCode: "GD19440" },
    ],
    "garena-undawn": [
        { id: "undawn-bulanan", label: "Kartu Bulanan", price: 47299, badges: ["member"], apiCode: "GUKB" },
        { id: "undawn-growth", label: "Growth Fund", price: 94799, badges: ["hot"], apiCode: "GUGF" },
        { id: "undawn-glory", label: "Glory Pass Premium", price: 142299, badges: ["pass"], apiCode: "GUGP" },
        { id: "undawn-elite", label: "Elite Fund Rebate LV 80", price: 126999, badges: ["new"], apiCode: "GUEF" },
        { id: "undawn-ace", label: "Ace Fund", price: 143999, badges: ["hot"], apiCode: "GUAF" },
        { id: "undawn-rc80", label: "RC 80", price: 14599, apiCode: "GURC80" },
        { id: "undawn-rc250", label: "RC 250", price: 43699, apiCode: "GURC250" },
        { id: "undawn-rc450", label: "RC 450", price: 72799, apiCode: "GURC450" },
        { id: "undawn-rc920", label: "RC 920", price: 144599, apiCode: "GURC920" },
        { id: "undawn-rc1850", label: "RC 1850", price: 290099, apiCode: "GURC1850" },
        { id: "undawn-rc2800", label: "RC 2800", price: 435599, apiCode: "GURC2800" },
        { id: "undawn-rc4750", label: "RC 4750", price: 726599, apiCode: "GURC4750" },
        { id: "undawn-rc9600", label: "RC 9600", price: 1454099, badges: ["sale"], apiCode: "GURC9600" },
        { id: "undawn-rc33000", label: "RC 33.000", price: 4849999, apiCode: "GURC33000" },
        { id: "undawn-rc66500", label: "RC 66.500", price: 9699999, apiCode: "GURC66500" },
        { id: "undawn-mingguan", label: "Kartu Mingguan", price: 28599, badges: ["weekly"], apiCode: "GUKM" },
        { id: "undawn-glory-s7", label: "Glory Pass Premium S7", price: 143999, badges: ["pass"], apiCode: "GUGPS7" },
        { id: "undawn-glory-s16", label: "Glory Pass Premium S16", price: 143999, badges: ["pass"], apiCode: "GUGPS16" },
        { id: "undawn-prep", label: "Quick Battle Prep", price: 94379, badges: ["sale"], apiCode: "GUQBP" },
    ]
};

// --- Variable untuk menyimpan harga asli produk dan status voucher
let originalPrices = {};
let isVoucherApplied = false;

// --- API Keys ---
// Ganti dengan API Key yang Anda dapatkan dari APIGAMES.ID dan TOKOVOUCHER.NET
const API_CHECKID_MERCHANT_ID = "M250907JZZY9386TE";
const API_CHECKID_SECRET_KEY = "2cbefb6a1e0a229d12c318747c59e36d0c6a38827e5984c077ec143a26471986";
const API_TRANSACTION_MEMBER_CODE = "M250907QGUD5211YY";
const API_TRANSACTION_SECRET = "0930f861568bf8d3b029846b45f7fe0adf7e7e2dd61fa6f6a18e0557d3c580ba";


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

function renderProducts(gameKey) {
    const productListContainer = document.getElementById("product-list");
    if (!productListContainer) return;

    productListContainer.innerHTML = '';
    const products = PRODUCTS[gameKey];
    const voucherDiscount = 100;

    if (products) {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("option-card");
            productDiv.setAttribute('data-id', product.id);
            
            let badgeHtml = '';
            if (product.badges && product.badges.length > 0) {
                const badgeText = product.badges[0].charAt(0).toUpperCase() + product.badges[0].slice(1);
                badgeHtml = `<span class="special-badge">${badgeText}</span>`;
            }

            const currentPrice = isVoucherApplied ? Math.max(0, product.price - voucherDiscount) : product.price;

            productDiv.innerHTML = `
                ${badgeHtml}
                <i class="fas fa-gem icon"></i>
                <div class="label">${product.label}</div>
                <div class="price-group">
                    ${isVoucherApplied ? `<div class="original-price">${formatRupiah(product.price)}</div>` : ''}
                    <div class="price">${formatRupiah(currentPrice)}</div>
                </div>
            `;
            
            productDiv.onclick = () => {
                selectOption(productDiv);
            };
            productListContainer.appendChild(productDiv);
        });
    }
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
    const serverIdContainer = document.getElementById('server-id-container');
    const serverIdInput = document.getElementById('server-id');

    const gameKey = getUrlParameter('key');
    const game = GAMES.find(g => g.key === gameKey);
    
    const isProductSelected = !!selectedProductCard;
    const isPaymentSelected = !!selectedPaymentCard;
    const idCheckResult = document.getElementById('id-check-result');
    const isIdValid = userIdInput && userIdInput.value.length > 0 && idCheckResult && idCheckResult.textContent.includes('Username:');
    const isWhatsappValid = whatsappInput && window.iti && window.iti.isValidNumber();

    let isServerIdValid = true;
    if (game && game.needsServerId) {
        isServerIdValid = serverIdInput && serverIdInput.value.length > 0;
    }
    
    if (isProductSelected && isPaymentSelected && isIdValid && isWhatsappValid && isServerIdValid) {
        summaryCard.style.display = 'flex';
        confirmButton.disabled = false;
        
        const productId = selectedProductCard.dataset.id;
        const product = PRODUCTS[gameKey].find(p => p.id === productId);
        const voucherDiscount = 100;
        const finalPrice = isVoucherApplied ? Math.max(0, product.price - voucherDiscount) : product.price;

        document.getElementById('summary-product-details').innerHTML = `
            <i class="fas fa-gem" style="color:var(--accent-color);"></i>
            <span class="product-text">${product.label}</span>
        `;
        document.getElementById('summary-price').innerText = formatRupiah(finalPrice);
    } else {
        summaryCard.style.display = 'none';
        confirmButton.disabled = true;
    }
}

function showNotification(message, isSuccess = true) {
    const container = document.querySelector('.notification-container') || document.body.appendChild(document.createElement('div'));
    container.classList.add('notification-container');
    
    container.innerHTML = '';

    const popup = document.createElement('div');
    popup.classList.add('notification-popup');
    
    const iconClass = isSuccess ? 'fa-check-circle' : 'fa-times-circle';
    const iconColor = isSuccess ? 'var(--selected-border)' : 'var(--price-color)';
    
    popup.innerHTML = `
        <i class="fas ${iconClass} icon" style="color:${iconColor};"></i>
        <span class="message">${message}</span>
    `;

    container.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add('fade-out');
        popup.addEventListener('animationend', () => {
            popup.remove();
        });
    }, 3000);
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
    const gameInfoHeader = document.getElementById("game-info-header");
    const serverIdContainer = document.getElementById("server-id-container");
    const promoCodeInput = document.getElementById('promo-code');
    const whatsappInput = document.getElementById('whatsapp-number');
    const checkIdBtn = document.getElementById('check-id-btn');
    const userIdInput = document.getElementById('user-id');
    const idCheckResult = document.getElementById('id-check-result');

    if (!game || !productListContainer || !paymentListContainer) {
        window.location.href = 'index.html';
        return;
    }

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

    // Tampilkan input server ID jika diperlukan
    if (game.needsServerId) {
        serverIdContainer.innerHTML = `
            <i class="fas fa-server input-icon"></i>
            <input type="number" id="server-id" placeholder="Masukkan Server ID">
        `;
    } else {
        serverIdContainer.innerHTML = '';
    }

    // Simpan harga asli sebelum render
    if (PRODUCTS[gameKey]) {
        PRODUCTS[gameKey].forEach(p => {
            originalPrices[p.id] = p.price;
        });
    }

    // Render products
    renderProducts(gameKey);

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
    userIdInput.addEventListener('input', () => {
        idCheckResult.textContent = ''; // Reset status
        updateSummary();
    });
    if (game.needsServerId) {
        document.getElementById('server-id').addEventListener('input', () => {
            idCheckResult.textContent = ''; // Reset status
            updateSummary();
        });
    }
    whatsappInput.addEventListener('input', updateSummary);
    
    // Voucher button logic
    document.getElementById('use-voucher-btn').addEventListener('click', () => {
        const promoCode = promoCodeInput.value.toUpperCase(); // Ubah ke huruf besar untuk validasi
        const voucherDiscount = 100;
        if (promoCode === "WALZPROMO") {
            isVoucherApplied = true;
            renderProducts(gameKey); // Render ulang produk dengan harga diskon
            updateSummary(); // Update ringkasan
            showNotification(`Voucher Berhasil digunakan! Potongan: ${formatRupiah(voucherDiscount)}`, true);
        } else {
            isVoucherApplied = false;
            renderProducts(gameKey); // Render ulang produk dengan harga normal
            updateSummary(); // Update ringkasan
            showNotification('Voucher Tidak valid', false);
        }
    });

    // Perbarui fungsi checkIdBtn
    checkIdBtn.addEventListener('click', () => {
        checkGameId(game.apiCode, userIdInput.value, game.needsServerId ? document.getElementById('server-id').value : null);
    });

    document.getElementById('confirm-button').addEventListener('click', () => {
        const selectedProductCard = document.querySelector('#product-list .option-card.selected');
        const selectedPaymentCard = document.querySelector('#payment-list .option-card.selected');
        
        const productId = selectedProductCard ? selectedProductCard.dataset.id : '';
        const paymentId = selectedPaymentCard ? selectedPaymentCard.dataset.id : '';
        const userId = document.getElementById('user-id').value;
        const serverId = game.needsServerId ? document.getElementById('server-id').value : '';
        const whatsappNumber = window.iti.getNumber(); // Dapatkan nomor lengkap dari intl-tel-input

        // Ensure all required fields are filled before navigating
        if (productId && paymentId && userId && window.iti.isValidNumber() && (game.needsServerId ? serverId : true)) {
            const url = `cart.html?game_key=${gameKey}&product_id=${productId}&payment_id=${paymentId}&user_id=${userId}&server_id=${serverId}&whatsapp_number=${whatsappNumber}&voucher_applied=${isVoucherApplied}`;
            window.location.href = url;
        } else {
            alert('Mohon lengkapi semua data pesanan terlebih dahulu.');
        }
    });
}

// FUNGSI UNTUK CEK ID GAME (MENGGUNAKAN API APIGAMES.ID)
async function checkGameId(gameCode, userId, serverId = null) {
    const idCheckResult = document.getElementById('id-check-result');
    const checkIdBtn = document.getElementById('check-id-btn');
    
    if (!userId || userId.length < 3) {
        idCheckResult.textContent = "ID tidak valid.";
        idCheckResult.style.color = "var(--price-color)";
        return;
    }

    const signature = API_CHECKID_MERCHANT_ID + API_CHECKID_SECRET_KEY;
    
    const apiURL = `https://v1.apigames.id/v1/legit/check-username?user_id=${userId}&game_code=${gameCode}&merchant_id=${API_CHECKID_MERCHANT_ID}&signature=${signature}`;
    
    idCheckResult.textContent = "Memeriksa...";
    idCheckResult.style.color = "var(--text-color-dark)";
    checkIdBtn.disabled = true;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        
        if (data.status === 1) {
            idCheckResult.textContent = `Username: ${data.data.username}`;
            idCheckResult.style.color = "lightgreen";
        } else {
            idCheckResult.textContent = `ID tidak ditemukan. Pesan: ${data.data.desc}`;
            idCheckResult.style.color = "var(--price-color)";
        }
    } catch (error) {
        console.error("Error fetching API:", error);
        idCheckResult.textContent = "Gagal terhubung ke server.";
        idCheckResult.style.color = "var(--price-color)";
    } finally {
        checkIdBtn.disabled = false;
        updateSummary();
    }
}

// --- Logika Halaman Cart ---
let userRating = 0;
let reviewText = "";

function setupCartPage() {
    const params = new URLSearchParams(window.location.search);
    const gameKey = params.get('game_key');
    const productId = params.get('product_id');
    const paymentId = params.get('payment_id');
    const userId = params.get('user_id');
    const serverId = params.get('server_id');
    const whatsappNumber = params.get('whatsapp_number');
    const voucherApplied = params.get('voucher_applied') === 'true';
    
    const game = GAMES.find(g => g.key === gameKey);
    const product = PRODUCTS[gameKey] ? PRODUCTS[gameKey].find(p => p.id === productId) : null;
    const payment = PAYMENTS.find(p => p.id === paymentId);
    
    const cartSummaryCard = document.getElementById('cart-summary-card');
    const paymentInfoSection = document.getElementById('payment-info-section');
    const payButton = document.getElementById('pay-button');
    const ratingModal = document.getElementById('rating-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const closeAndPayBtn = document.getElementById('close-and-pay-btn');
    const reviewTextarea = document.getElementById('review-text');
    
    if (game && product && payment && cartSummaryCard) {
        const voucherDiscount = 100;
        const finalPrice = voucherApplied ? Math.max(0, product.price - voucherDiscount) : product.price;

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
                <span class="label"><i class="fab fa-whatsapp"></i> Nomor WhatsApp</span>
                <span class="value">${whatsappNumber}</span>
            </div>
            <div class="summary-total">
                <span class="label">Total Pembayaran</span>
                <span class="value">${formatRupiah(finalPrice)}</span>
            </div>
        `;

        let paymentContent = `<h4>Pembayaran Via ${payment.name}</h4>`;
        if (payment.qr) {
            paymentContent += `
                <div class="payment-info-item">
                    <img src="${payment.img}" alt="${payment.name}" class="payment-image">
                    <div class="payment-number-container">
                        <span class="payment-info-text">Silakan scan kode QR di bawah ini</span>
                        <img src="${payment.qr}" alt="QR Code" class="qr-code-image">
                    </div>
                </div>
            `;
        } else if (payment.number) {
            paymentContent += `
                <div class="payment-info-item">
                    <img src="${payment.img}" alt="${payment.name}" class="payment-image">
                    <div class="payment-number-container">
                        <span class="payment-info-text">Nomor Rekening/Akun</span>
                        <div class="payment-number">${payment.number}</div>
                        <span class="payment-info-text">A.N. ${payment.holder}</span>
                    </div>
                    <button class="copy-button" onclick="copyToClipboard('${payment.number}')">Salin Nomor</button>
                </div>
            `;
        }
        
        paymentInfoSection.innerHTML = paymentContent;
        
        // Logika pop-up rating
        payButton.addEventListener('click', () => {
            ratingModal.style.display = 'flex';
        });

        // Event listener untuk tombol 'Kirim Ulasan' di modal
        closeAndPayBtn.addEventListener('click', () => {
            // Dapatkan data rating dan ulasan
            userRating = document.querySelectorAll('.rating-stars .fa-star.rated').length;
            reviewText = reviewTextarea.value;
            
            // Panggil fungsi untuk mengirim transaksi ke Tokovoucher
            sendTransactionToAPI(product.apiCode, userId, serverId, whatsappNumber);
        });

        // Event listener untuk tombol tutup modal
        closeModalBtn.addEventListener('click', () => {
            ratingModal.style.display = 'none';
        });

        // Event listener untuk rating bintang
        const starContainer = document.querySelector('.rating-stars');
        starContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'I') {
                userRating = parseInt(e.target.dataset.rating);
                document.querySelectorAll('.rating-stars .fa-star').forEach(star => {
                    const rating = parseInt(star.dataset.rating);
                    if (rating <= userRating) {
                        star.classList.add('rated');
                    } else {
                        star.classList.remove('rated');
                    }
                });
            }
        });
        
    } else {
        cartSummaryCard.innerHTML = `
            <h3>Terjadi Kesalahan</h3>
            <p style="text-align: center; color: var(--text-light);">Data pesanan tidak ditemukan. Silakan kembali ke halaman utama.</p>
        `;
        if(payButton) payButton.style.display = 'none';
        if(paymentInfoSection) paymentInfoSection.style.display = 'none';
    }
}

// FUNGSI UNTUK MENGIRIM TRANSAKSI (MENGGUNAKAN API TOKO VOUCHER)
async function sendTransactionToAPI(productApiCode, userId, serverId, whatsappNumber) {
    const apiURL = "https://api.tokovoucher.net/v1/transaksi";

    // Buat ref_id unik untuk setiap transaksi
    const refId = `WALZ-${Date.now()}`;

    // Sesuaikan parameter sesuai dengan dokumentasi Tokovoucher
    const params = {
        ref_id: refId,
        produk: productApiCode,
        tujuan: userId,
        secret: API_TRANSACTION_SECRET,
        member_code: API_TRANSACTION_MEMBER_CODE,
        // server_id hanya dikirim jika ada
        ...(serverId && { server_id: serverId }) 
    };
    
    const queryString = new URLSearchParams(params).toString();
    const finalApiUrl = `${apiURL}?${queryString}`;

    try {
        const response = await fetch(finalApiUrl);
        const data = await response.json();

        // Cek respons dari Tokovoucher
        if (data.status === true) {
            showNotification('Transaksi berhasil diproses!', true);
            redirectToWhatsApp(data.transaksi.transaksi_id, whatsappNumber);
        } else {
            showNotification(`Gagal: ${data.transaksi.keterangan || 'Transaksi gagal diproses.'}`, false);
        }

    } catch (error) {
        console.error("Error fetching API:", error);
        showNotification("Gagal terhubung ke server.", false);
    }
}

// FUNGSI UNTUK MENGARAHKAN PENGGUNA KE WHATSAPP
function redirectToWhatsApp(transaksiId, whatsappNumber) {
    const params = new URLSearchParams(window.location.search);
    const gameKey = params.get('game_key');
    const productId = params.get('product_id');
    const paymentId = params.get('payment_id');
    const userId = params.get('user_id');
    const serverId = params.get('server_id');
    const voucherApplied = params.get('voucher_applied') === 'true';
    
    const game = GAMES.find(g => g.key === gameKey);
    const product = PRODUCTS[gameKey] ? PRODUCTS[gameKey].find(p => p.id === productId) : null;
    const payment = PAYMENTS.find(p => p.id === paymentId);
    
    const voucherDiscount = 100;
    const finalPrice = voucherApplied ? Math.max(0, product.price - voucherDiscount) : product.price;

    const adminWhatsapp = '6282298902274'; // GANTI dengan nomor WhatsApp Anda
    const message = `Halo Admin, saya ingin konfirmasi pesanan saya.\n\n*Detail Pesanan:*\nNo. Transaksi: ${transaksiId}\nGame: ${game.name}\nProduk: ${product.label}\nPlayer ID: ${userId}${serverId ? ` (${serverId})` : ''}\nMetode Pembayaran: ${payment.name}\nTotal: ${formatRupiah(finalPrice)}\n\nNomor WA saya: ${whatsappNumber}\n\nMohon bantuannya untuk diproses, terima kasih.`;
    const encodedMessage = encodeURIComponent(message);
    
    window.location.href = `https://wa.me/${adminWhatsapp}?text=${encodedMessage}`;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Nomor berhasil disalin!', true);
    }).catch(err => {
        console.error('Gagal menyalin:', err);
        showNotification('Gagal menyalin nomor. Coba lagi.', false);
    });
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
