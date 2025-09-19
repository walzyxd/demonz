<?php
// Atur header agar browser tahu ini adalah response JSON dan izinkan akses (CORS)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Izinkan akses dari domain manapun
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request (OPTIONS) dari browser
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// --- PENGATURAN KUNCI API ANDA (AMAN DI SINI) ---
$merchantId = "M250907JZZY9386TE";
$secretKey  = "2cbefb6a1e0a229d12c318747c59e36d0c6a38827e5984c077ec143a26471986";
// ---------------------------------------------------

// 1. Ambil data yang dikirim dari JavaScript
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

// Pastikan data yang dibutuhkan ada
if (!isset($input['game_code']) || !isset($input['user_id'])) {
    echo json_encode(['status' => 'error', 'error_msg' => 'Data tidak lengkap.']);
    exit();
}

// 2. Siapkan data untuk dikirim ke API games.id
$gameCode = $input['game_code'];
$userId   = $input['user_id'];
$refId    = 'walzshop-check-' . time(); // Buat ref_id unik di server

// 3. Buat signature di server (ini bagian yang aman)
$signature = md5($merchantId . $secretKey . $refId);

// 4. Susun payload yang akan dikirim
$payload = [
    'merchant_id' => $merchantId,
    'game_code'   => $gameCode,
    'user_id'     => $userId,
    'ref_id'      => $refId,
    'signature'   => $signature
];

// 5. Gunakan cURL untuk menghubungi API games.id dari server Anda
$apiUrl = 'https://api.games.id/v1/check-account';
$ch = curl_init($apiUrl);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

// Eksekusi cURL dan dapatkan hasilnya
$response = curl_exec($ch);
curl_close($ch);

// 6. Cek jika cURL berhasil dan kirimkan hasilnya kembali ke JavaScript
if ($response === false) {
    echo json_encode(['status' => 'error', 'error_msg' => 'Gagal menghubungi server API.']);
} else {
    // Langsung teruskan response dari API ke JavaScript
    echo $response;
}
