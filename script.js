document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname.split("/").pop();
    if (path === 'index.html' || path === '') initIndexPage();
    else if (path === 'pulsa.html') initPulsaPage();
    else if (path === 'panel.html') initPanelPage();
    else if (path === 'game.html') initGamePage();
    else if (path === 'cart.html') initCartPage();
});

const GAMES = [
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", url: "game.html?key=free-fire", needsServerId: false },
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", url: "game.html?key=mobile-legends", needsServerId: true },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", url: "game.html?key=honor-of-kings", needsServerId: true },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact", needsServerId: true },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corporation", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", url: "game.html?key=roblox", needsServerId: false },
    { key: "super-sus", name: "Super Sus", publisher: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", url: "game.html?key=super-sus", needsServerId: true },
    { key: "coc", name: "Clash of Clans", publisher: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", url: "game.html?key=coc", needsServerId: false },
    { key: "blood-strike", name: "Blood Strike", publisher: "NetEase", img: "https://files.catbox.moe/3y066i.jpg", url: "game.html?key=blood-strike", needsServerId: false },
    { key: "pubg", name: "PUBG Mobile", publisher: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg", needsServerId: false },
    { key: "garena-delta", name: "Garena Delta Force", publisher: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", url: "game.html?key=garena-delta", needsServerId: false },
    { key: "garena-undawn", name: "Garena Undawn", publisher: "Garena", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", url: "game.html?key=garena-undawn", needsServerId: false },
    { key: "valorant", name: "Valorant", publisher: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", url: "game.html?key=valorant", needsServerId: false },
    { key: "call-of-duty", name: "Call Of Duty", publisher: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=call-of-duty", needsServerId: false },
    { key: "eggy-party", name: "Eggy Party", publisher: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", url: "game.html?key=eggy-party", needsServerId: false },
    { key: "magic-ches-gogo", name: "Magic Ches Gogo", publisher: "Vizta Games", img: "https://files.catbox.moe/bbxhbo.jpg", url: "game.html?key=magic-ches-gogo", needsServerId:true },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", qr: "https://files.catbox.moe/pa0iwo.png" },
    { id: "krom", name: "Bank Krom", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", number: "770072009565", holder: "Walzshop ID" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", number: "083139243389", holder: "Anom" },
    { id: "gopay", name: "Gopay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", number: "082298902274", holder: "Anom" }
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
    "pubg": [
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
    "coc": [
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
    "garena-delta": [
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
        { id: "undawn-prep", label: "Quick Battle Prep", price: 94379, badges: ["sale"] }
    ],
    "magic-ches-gogo": [
        { id: "weekly-card", label: "Weekly Card", price: 31699, badges: ["weekly"] },
        { id: "first-100", label: "First Recharge 100 Diamonds", price: 12999, badges: ["first"] },
        { id: "first-300", label: "First Recharge 300 Diamonds", price: 38999, badges: ["first"] },
        { id: "first-500", label: "First Recharge 500 Diamonds", price: 64899, badges: ["first"] },
        { id: "first-1000", label: "First Recharge 1000 Diamonds", price: 129799, badges: ["first"] },
        { id: "d-12", label: "12 Diamonds", price: 3801, badges: ["hot"] },
        { id: "d-19", label: "19 Diamonds", price: 5667, badges: ["hot"] },
        { id: "d-28", label: "28 Diamonds", price: 8270, badges: ["hot"] },
        { id: "d-44", label: "44 Diamonds", price: 12172 },
        { id: "d-59", label: "59 Diamonds", price: 16107 },
        { id: "d-85", label: "85 Diamonds", price: 23305, badges: ["popular"] },
        { id: "d-170", label: "170 Diamonds", price: 45810, badges: ["popular"] },
        { id: "d-240", label: "240 Diamonds", price: 64998 },
        { id: "d-296", label: "296 Diamonds", price: 79691 },
        { id: "d-408", label: "408 Diamonds", price: 108816 },
        { id: "d-568", label: "568 Diamonds", price: 149099, badges: ["popular"] },
        { id: "d-875", label: "875 Diamonds", price: 226024 },
        { id: "d-2010", label: "2010 Diamonds", price: 496838 },
        { id: "d-4830", label: "4830 Diamonds", price: 1187450, badges: ["sale"] },
        { id: "d-86", label: "86 Diamonds", price: 20299 },
        { id: "d-172", label: "172 Diamonds", price: 40599 },
        { id: "d-257", label: "257 Diamonds", price: 60699 },
        { id: "d-344", label: "344 Diamonds", price: 81099 },
        { id: "d-516", label: "516 Diamonds", price: 121699, badges: ["popular"] },
        { id: "d-706", label: "706 Diamonds", price: 162199 },
        { id: "d-1346", label: "1346 Diamonds", price: 304199 },
        { id: "d-1825", label: "1825 Diamonds", price: 405499 },
        { id: "d-2195", label: "2195 Diamonds", price: 486599 },
        { id: "d-3688", label: "3688 Diamonds", price: 810999, badges: ["sale"] },
        { id: "d-5532", label: "5532 Diamonds", price: 1216499, badges: ["sale"] },
        { id: "d-9288", label: "9288 Diamonds", price: 2027499, badges: ["sale"] }
    ]
};

/* ================ */

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

let isVoucherApplied = false;

// ===================================================
// FUNGSI GLOBAL & HELPERS
// ===================================================
function formatRupiah(number) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number); }
function getUrlParameter(name) { return new URLSearchParams(window.location.search).get(name); }
function showNotification(message) {
    const container = document.querySelector('.notification-container') || document.body.appendChild(Object.assign(document.createElement('div'), { className: 'notification-container' }));
    const popup = document.createElement('div');
    popup.className = 'notification-popup';
    popup.innerHTML = `<i class="fas fa-check-circle" style="color: var(--cyan-accent);"></i><span>${message}</span>`;
    container.appendChild(popup);
    setTimeout(() => { popup.remove(); }, 3000);
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
            gameCard.innerHTML = `<a href="${game.url}"><img src="${game.img}" alt="${game.name}" loading="lazy"><div class="game-card-content"><h3>${game.name}</h3><p>${game.publisher}</p></div></a>`;
            gameListContainer.appendChild(gameCard);
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filteredGames = GAMES.filter(game => game.name.toLowerCase().includes(query) || game.publisher.toLowerCase().includes(query));
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
            card.innerHTML = `<div class="product-name">${product.name}</div><div class="product-desc">Harga Ekonomis</div><div class="product-price">${formatRupiah(product.price)}</div>`;
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
                if (PULSA_DATA.prefixes[providerKey].includes(prefix)) { detectedProvider = providerKey; break; }
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
        if (currentProvider) renderProducts(currentProvider, productSearchInput.value);
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
    if (!game.needsServerId) serverIdContainer.style.display = 'none';
    
    const productListContainer = document.getElementById("product-list");
    function renderProducts() {
        productListContainer.innerHTML = '';
        const products = PRODUCTS[gameKey] || [];
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "option-card";
            card.dataset.id = product.id;
            const price = isVoucherApplied ? Math.max(0, product.price - 100) : product.price;
            const originalPriceHtml = isVoucherApplied ? `<div class="original-price">${formatRupiah(product.price)}</div>` : '';
            card.innerHTML = `<div class="label">${product.label}</div><div class="price-group">${originalPriceHtml}<div class="price">${formatRupiah(price)}</div></div>`;
            card.onclick = () => selectOption(card);
            productListContainer.appendChild(card);
        });
    }
    renderProducts();

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

    document.getElementById('use-voucher-btn').addEventListener('click', () => {
        const promoCode = document.getElementById('promo-code').value.toUpperCase();
        if (promoCode === "WALZPROMO") {
            isVoucherApplied = true; showNotification(`Voucher Berhasil digunakan!`);
        } else {
            isVoucherApplied = false; alert('Voucher Tidak valid');
        }
        renderProducts(); updateState();
    });

    confirmButton.addEventListener('click', () => {
        const productId = document.querySelector('#product-list .option-card.selected')?.dataset.id;
        const paymentId = document.querySelector('#payment-list .option-card.selected')?.dataset.id;
        const userId = document.getElementById('user-id').value;
        const serverId = game.needsServerId ? document.getElementById('server-id').value : '';
        const whatsappNumber = document.getElementById('whatsapp-number').value;
        const url = `cart.html?game_key=${gameKey}&product_id=${productId}&payment_id=${paymentId}&user_id=${userId}&server_id=${serverId}&whatsapp_number=${whatsappNumber}&voucher_applied=${isVoucherApplied}`;
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
    const voucherApplied = getUrlParameter('voucher_applied') === 'true';
    
    const game = GAMES.find(g => g.key === gameKey);
    const product = PRODUCTS[gameKey]?.find(p => p.id === productId);
    const payment = PAYMENTS.find(p => p.id === paymentId);

    const cartSummaryCard = document.getElementById('cart-summary-card');
    const paymentInfoSection = document.getElementById('payment-info-section');
    const payButton = document.getElementById('pay-button');

    if (game && product && payment) {
        const finalPrice = voucherApplied ? Math.max(0, product.price - 100) : product.price;
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
thname.split("/").pop();
    if (path === 'index.html' || path === '') initIndexPage();
    else if (path === 'pulsa.html') initPulsaPage();
    else if (path === 'panel.html') initPanelPage();
    else if (path === 'game.html') initGamePage();
    else if (path === 'cart.html') initCartPage();
});

// ===================================================
// DATA APLIKASI (LENGKAP)
// ===================================================
const GAMES = [
    { key: "free-fire", name: "Free Fire", publisher: "Garena", img: "https://i.supaimg.com/023005b8-5541-4175-8563-072978e05973.jpg", url: "game.html?key=free-fire", needsServerId: false },
    { key: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", img: "https://i.supaimg.com/3272ce04-c4a0-4025-8d8a-b2723a2f2267.jpg", url: "game.html?key=mobile-legends", needsServerId: true },
    { key: "honor-of-kings", name: "Honor of Kings", publisher: "Level Infinite", img: "https://i.supaimg.com/98bfce2d-9b90-40be-8f2e-b42ab896dc3d.jpg", url: "game.html?key=honor-of-kings", needsServerId: true },
    { key: "genshin-impact", name: "Genshin Impact", publisher: "Hoyoverse", img: "https://i.supaimg.com/872628e9-c5f6-46f5-b5cc-8c8f3e8766c7.jpg", url: "game.html?key=genshin-impact", needsServerId: true },
    { key: "roblox", name: "Roblox", publisher: "Roblox Corporation", img: "https://i.supaimg.com/c8d8f1c7-b02c-4643-a6e5-63a6487d622c.jpg", url: "game.html?key=roblox", needsServerId: false },
    { key: "super-sus", name: "Super Sus", publisher: "Super Sus", img: "https://files.catbox.moe/j61uny.jpg", url: "game.html?key=super-sus", needsServerId: true },
    { key: "coc", name: "Clash of Clans", publisher: "Supercell", img: "https://files.catbox.moe/6aia0n.jpg", url: "game.html?key=coc", needsServerId: false },
    { key: "blood-strike", name: "Blood Strike", publisher: "NetEase", img: "https://files.catbox.moe/3y066i.jpg", url: "game.html?key=blood-strike", needsServerId: false },
    { key: "pubg", name: "PUBG Mobile", publisher: "Semua Region", img: "https://files.catbox.moe/tatuo9.jpg", url: "game.html?key=pubg", needsServerId: false },
    { key: "garena-delta", name: "Garena Delta Force", publisher: "Garena Delta...", img: "https://i.supaimg.com/51600c75-7f50-440c-b363-7b739a5bd976.png", url: "game.html?key=garena-delta", needsServerId: false },
    { key: "garena-undawn", name: "Garena Undawn", publisher: "Garena", img: "https://i.supaimg.com/41450b00-c089-49c9-a6f2-a1d37b08f1cd.png", url: "game.html?key=garena-undawn", needsServerId: false },
    { key: "valorant", name: "Valorant", publisher: "Riot Games", img: "https://i.supaimg.com/6f1b6502-92e1-4c94-8246-2ff54e08b93d.png", url: "game.html?key=valorant", needsServerId: false },
    { key: "call-of-duty", name: "Call Of Duty", publisher: "Activision", img: "https://i.supaimg.com/f7665c44-d005-475b-adbb-3b685aaf1415.webp", url: "game.html?key=call-of-duty", needsServerId: false },
    { key: "eggy-party", name: "Eggy Party", publisher: "NetEase Games", img: "https://i.supaimg.com/7e8f84ad-9663-4028-9fff-6bbdd6b72f0b.jpg", url: "game.html?key=eggy-party", needsServerId: false },
    { key: "magic-ches-gogo", name: "Magic Ches Gogo", publisher: "Vizta Games", img: "https://files.catbox.moe/bbxhbo.jpg", url: "game.html?key=magic-ches-gogo", needsServerId:true },
];

const PAYMENTS = [
    { id: "qris", name: "QRIS", img: "https://i.supaimg.com/7b5fe49a-a708-4a05-8b00-9865481e0e13.jpg", qr: "https://files.catbox.moe/pa0iwo.png" },
    { id: "krom", name: "Bank Krom", img: "https://i.supaimg.com/20eaef7a-3a63-4be3-a507-175348ab41de.jpg", number: "770072009565", holder: "Walzshop ID" },
    { id: "dana", name: "Dana", img: "https://i.supaimg.com/e4a887fd-41fd-4075-9802-8b65bb52d1cb.jpg", number: "083139243389", holder: "Anom" },
    { id: "gopay", name: "Gopay", img: "https://i.supaimg.com/104ae434-3bb9-4071-a946-73b301a5ba29.jpg", number: "082298902274", holder: "Anom" }
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
    "pubg": [
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
    "coc": [
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
    "garena-delta": [
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
        { id: "undawn-prep", label: "Quick Battle Prep", price: 94379, badges: ["sale"] }
    ],
    "magic-ches-gogo": [
        { id: "weekly-card", label: "Weekly Card", price: 31699, badges: ["weekly"] },
        { id: "first-100", label: "First Recharge 100 Diamonds", price: 12999, badges: ["first"] },
        { id: "first-300", label: "First Recharge 300 Diamonds", price: 38999, badges: ["first"] },
        { id: "first-500", label: "First Recharge 500 Diamonds", price: 64899, badges: ["first"] },
        { id: "first-1000", label: "First Recharge 1000 Diamonds", price: 129799, badges: ["first"] },
        { id: "d-12", label: "12 Diamonds", price: 3801, badges: ["hot"] },
        { id: "d-19", label: "19 Diamonds", price: 5667, badges: ["hot"] },
        { id: "d-28", label: "28 Diamonds", price: 8270, badges: ["hot"] },
        { id: "d-44", label: "44 Diamonds", price: 12172 },
        { id: "d-59", label: "59 Diamonds", price: 16107 },
        { id: "d-85", label: "85 Diamonds", price: 23305, badges: ["popular"] },
        { id: "d-170", label: "170 Diamonds", price: 45810, badges: ["popular"] },
        { id: "d-240", label: "240 Diamonds", price: 64998 },
        { id: "d-296", label: "296 Diamonds", price: 79691 },
        { id: "d-408", label: "408 Diamonds", price: 108816 },
        { id: "d-568", label: "568 Diamonds", price: 149099, badges: ["popular"] },
        { id: "d-875", label: "875 Diamonds", price: 226024 },
        { id: "d-2010", label: "2010 Diamonds", price: 496838 },
        { id: "d-4830", label: "4830 Diamonds", price: 1187450, badges: ["sale"] },
        { id: "d-86", label: "86 Diamonds", price: 20299 },
        { id: "d-172", label: "172 Diamonds", price: 40599 },
        { id: "d-257", label: "257 Diamonds", price: 60699 },
        { id: "d-344", label: "344 Diamonds", price: 81099 },
        { id: "d-516", label: "516 Diamonds", price: 121699, badges: ["popular"] },
        { id: "d-706", label: "706 Diamonds", price: 162199 },
        { id: "d-1346", label: "1346 Diamonds", price: 304199 },
        { id: "d-1825", label: "1825 Diamonds", price: 405499 },
        { id: "d-2195", label: "2195 Diamonds", price: 486599 },
        { id: "d-3688", label: "3688 Diamonds", price: 810999, badges: ["sale"] },
        { id: "d-5532", label: "5532 Diamonds", price: 1216499, badges: ["sale"] },
        { id: "d-9288", label: "9288 Diamonds", price: 2027499, badges: ["sale"] }
    ]
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

let isVoucherApplied = false;

// ===================================================
// FUNGSI GLOBAL & HELPERS
// ===================================================
function formatRupiah(number) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number); }
function getUrlParameter(name) { return new URLSearchParams(window.location.search).get(name); }
function showNotification(message) {
    const container = document.querySelector('.notification-container') || document.body.appendChild(Object.assign(document.createElement('div'), { className: 'notification-container' }));
    const popup = document.createElement('div');
    popup.className = 'notification-popup';
    popup.innerHTML = `<i class="fas fa-check-circle" style="color: var(--cyan-accent);"></i><span>${message}</span>`;
    container.appendChild(popup);
    setTimeout(() => { popup.remove(); }, 3000);
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
            gameCard.innerHTML = `<a href="${game.url}"><img src="${game.img}" alt="${game.name}" loading="lazy"><div class="game-card-content"><h3>${game.name}</h3><p>${game.publisher}</p></div></a>`;
            gameListContainer.appendChild(gameCard);
        });
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filteredGames = GAMES.filter(game => game.name.toLowerCase().includes(query) || game.publisher.toLowerCase().includes(query));
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
            card.innerHTML = `<div class="product-name">${product.name}</div><div class="product-desc">Harga Ekonomis</div><div class="product-price">${formatRupiah(product.price)}</div>`;
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
                if (PULSA_DATA.prefixes[providerKey].includes(prefix)) { detectedProvider = providerKey; break; }
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
        if (currentProvider) renderProducts(currentProvider, productSearchInput.value);
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
    if (!game.needsServerId) serverIdContainer.style.display = 'none';
    
    const productListContainer = document.getElementById("product-list");
    function renderProducts() {
        productListContainer.innerHTML = '';
        const products = PRODUCTS[gameKey] || [];
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "option-card";
            card.dataset.id = product.id;
            const price = isVoucherApplied ? Math.max(0, product.price - 100) : product.price;
            const originalPriceHtml = isVoucherApplied ? `<div class="original-price">${formatRupiah(product.price)}</div>` : '';
            card.innerHTML = `<div class="label">${product.label}</div><div class="price-group">${originalPriceHtml}<div class="price">${formatRupiah(price)}</div></div>`;
            card.onclick = () => selectOption(card);
            productListContainer.appendChild(card);
        });
    }
    renderProducts();

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

    document.getElementById('use-voucher-btn').addEventListener('click', () => {
        const promoCode = document.getElementById('promo-code').value.toUpperCase();
        if (promoCode === "WALZPROMO") {
            isVoucherApplied = true; showNotification(`Voucher Berhasil digunakan!`);
        } else {
            isVoucherApplied = false; alert('Voucher Tidak valid');
        }
        renderProducts(); updateState();
    });

    confirmButton.addEventListener('click', () => {
        const productId = document.querySelector('#product-list .option-card.selected')?.dataset.id;
        const paymentId = document.querySelector('#payment-list .option-card.selected')?.dataset.id;
        const userId = document.getElementById('user-id').value;
        const serverId = game.needsServerId ? document.getElementById('server-id').value : '';
        const whatsappNumber = document.getElementById('whatsapp-number').value;
        const url = `cart.html?game_key=${gameKey}&product_id=${productId}&payment_id=${paymentId}&user_id=${userId}&server_id=${serverId}&whatsapp_number=${whatsappNumber}&voucher_applied=${isVoucherApplied}`;
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
    const voucherApplied = getUrlParameter('voucher_applied') === 'true';
    
    const game = GAMES.find(g => g.key === gameKey);
    const product = PRODUCTS[gameKey]?.find(p => p.id === productId);
    const payment = PAYMENTS.find(p => p.id === paymentId);

    const cartSummaryCard = document.getElementById('cart-summary-card');
    const paymentInfoSection = document.getElementById('payment-info-section');
    const payButton = document.getElementById('pay-button');

    if (game && product && payment) {
        const finalPrice = voucherApplied ? Math.max(0, product.price - 100) : product.price;
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
