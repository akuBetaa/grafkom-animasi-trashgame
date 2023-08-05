let bgImg; // Menyimpan foto background
let trashBinImg; // Menyimpan gambar tong sampah
let trashImg; // Menyimpan gambar sampah

let trashBinPosition; // Menyimpan posisi tong sampah
let trashPosition; // Menyimpan posisi sampah

let score = 0; // Skor permainan

function preload() {
  bgImg = loadImage('assets/bg-image.png'); //backgorund
  trashBinImg = loadImage('assets/trashBin-image.png'); //tong sampah
  trashImg = loadImage('assets/trash.png'); //sampah
}

function setup() {
  // Membuat layout
  createCanvas(324, 576);

  // Menginisialisasi posisi tong sampah di tengah bawah
  trashBinPosition = createVector(width / 2, height - 50);

  // Inisialisasi posisi sampah di tengah layar
  trashPosition = createVector(width / 2, height / 2);
}

function draw() {
  // Menggambar latar belakang
  image(bgImg, 0, 0, width, height);

  // gambar tong sampah
  drawTrashBin(trashBinPosition);

  // Menggambar dan memperbarui posisi sampah
  drawTrash(trashPosition);
  updateTrash(trashPosition);

  // Deteksi tabrakan
  if (checkCollision(trashPosition, trashBinPosition)) {
    trashPosition.y = height + 100; // Menghilangkan sampah dari layar
    score++; // Menambahkan skor
    console.log("Sampah terbuang!");
  }

  // Menampilkan skor di layar
  fill(255);
  textSize(20);
  text(score, 83, 95);
}

// Menggambar gambar tong sampah dan posisi
function drawTrashBin(position) {
  image(trashBinImg, position.x - 30, position.y - 80, 70, 90);
}

// Menggerakkan tong sampah
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    trashBinPosition.x -= 15; // Menggerakkan tong sampah ke kiri
  } else if (keyCode === RIGHT_ARROW) {
    trashBinPosition.x += 15; // Menggerakkan tong sampah ke kanan
  }
}

// Menggambar gambar sampah
function drawTrash(position) {
  image(trashImg, position.x - 15, position.y - 20, 40, 50);
}

// Memperbarui posisi sampah
function updateTrash(position) {
  position.y += 3; // kecepatan sampah ke bawah 3 pixel per frame

  // Membuat sampah kembali ke atas setelah mencapai batas bawah
  if (position.y > height) {
    position.y = 0;
    position.x = random(width);
  }
}

function checkCollision(trashPosition, trashBinPosition) {
  let distance = trashPosition.dist(trashBinPosition);
  return distance < 50; // Menggunakan jarak sekitar 50 pixel untuk mendeteksi tabrakan
}

// Beta Nurul Awwalin | TI 4B | 21104410091