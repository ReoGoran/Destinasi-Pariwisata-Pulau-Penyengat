// Data destinasi (bisa dipindahkan ke file JSON terpisah)
const destinationData = {
    'masjid-sultan': {
        title: 'Masjid Sultan Riau',
        description: `
            Masjid Sultan Riau, atau dikenal juga sebagai Masjid Raya Sultan Riau, merupakan masjid bersejarah yang menjadi salah satu warisan budaya paling penting di Pulau Penyengat, Kota Tanjungpinang, Provinsi Kepulauan Riau, Indonesia.
            Dibangun pada tahun 1832 hingga 1844 M, masjid ini memiliki keunikan konstruksi karena dibangun tanpa menggunakan paku, melainkan memanfaatkan putih telur sebagai perekat antara bahan bangunan.
            Keunikan ini menjadikannya sebagai karya arsitektur tradisional yang luar biasa.
            Selain sebagai tempat ibadah, Masjid Sultan Riau juga menjadi simbol kejayaan Kesultanan Riau-Lingga serta mencerminkan kemegahan budaya, kekuatan agama, dan kemajuan peradaban Melayu pada masa lampau.
            Hingga kini, masjid ini tetap berdiri kokoh dan menjadi kebanggaan masyarakat setempat maupun simbol sejarah nasional.
        `,
        history: `
            Pembangunan Masjid Sultan Riau dimulai pada tahun 1832 M dan selesai pada tahun 1844 M, sehingga memakan waktu 12 tahun untuk diselesaikan secara keseluruhan.
            Masjid ini dibangun atas prakarsa Yang Dipertuan Muda Riau ke-VIII, yaitu Raja Abdurrahman, bersama dengan saudaranya Raja Ja'far.
            Mereka adalah tokoh penting dalam Kesultanan Riau-Lingga yang sangat memperhatikan perkembangan Islam dan kebudayaan Melayu.
            Menariknya, pembangunan masjid ini melibatkan arsitek dan tukang dari berbagai bangsa, termasuk dari Tiongkok, yang saat itu dikenal unggul dalam konstruksi dan arsitektur tradisional.
            Keterlibatan berbagai etnis mencerminkan keragaman dan keterbukaan budaya di masa Kesultanan Riau.
        `,
        gallery: [
            'img/Destinasi masjid sultan riau1.jpeg',
            'img/Destinasi masjid sultan riau2.jpg',
            'img/Destinasi masjid sultan riau3.jpg'
        ],
        location: {
            lat: 0.929689,
            lng: 104.444376
        },
        tips: [
            'Gunakan pakaian sopan dan menutup aurat',
            'Datang di luar waktu sholat untuk mengambil foto',
            'Tersedia pemandu lokal untuk penjelasan sejarah',
            'Buka setiap hari dari pukul 08.00 - 17.00'
        ]
    },
    'benteng-kursi': {
        title: 'Benteng Bukit Kursi',
        description: `
            Benteng Bukit Kursi adalah benteng pertahanan peninggalan Kerajaan Riau-Lingga yang terletak di Pulau Penyengat, Kota Tanjungpinang, Kepulauan Riau.
            Dibangun pada abad ke-18 sebagai bagian dari sistem pertahanan maritim Kesultanan Riau-Lingga,
            benteng ini menjadi simbol ketangguhan kerajaan dalam menghadapi berbagai ancaman dari bangsa asing maupun perompak yang melintasi perairan strategis Selat Malaka.
            Terletak di puncak bukit, benteng ini tidak hanya menyimpan kisah kejayaan militer dan strategi pertahanan kerajaan, tetapi juga menawarkan pemandangan spektakuler.
            Dari atas benteng, pengunjung dapat menikmati panorama indah Kota Tanjungpinang dan perairan sekitarnya, menjadikannya destinasi wisata sejarah yang sarat nilai budaya dan visual yang memukau.
        `,
        history: `
            Benteng Bukit Kursi dibangun pada abad ke-18, tepatnya pada masa pemerintahan Yang Dipertuan Muda Riau Raja Haji Fisabilillah, seorang pemimpin yang dikenal cakap dalam strategi perang laut dan diplomasi.
            Raja Haji Fisabilillah merupakan tokoh penting dalam perjuangan melawan penjajahan Belanda, dan peran benteng ini sangat signifikan dalam memperkuat posisi pertahanan kerajaan.
            Benteng ini berfungsi sebagai pos pengawasan dan pertahanan utama, terutama untuk memantau aktivitas kapal dagang maupun kapal asing yang melintas di sekitar Selat Riau,
            salah satu jalur pelayaran tersibuk dan terpenting di Asia Tenggara pada masa itu.
        `,
        gallery: [
            'img/Destinasi Benteng Bukit Kursi1.jpg',
            'img/Destinasi Benteng Bukit Kursi2.jpg',
            'img/Destinasi Benteng Bukit Kursi3.jpg'
        ],
        location: {
            lat: 0.928750,
            lng: 104.444167
        },
        tips: [
            'Kunjungi pada pagi atau sore hari untuk menghindari terik matahari',
            'Gunakan sepatu yang nyaman karena harus mendaki bukit',
            'Bawa air minum yang cukup',
            'Waktu terbaik untuk foto adalah saat matahari terbenam',
            'Tersedia pemandu lokal untuk penjelasan sejarah benteng',
            'Buka setiap hari dari pukul 08.00 - 17.00'
        ]
    },
    'makam-raja': {
        title: 'Makam Raja Ali Haji',
        description: `
            Lokasi peristirahatan terakhir pujangga besar Melayu, penulis Gurindam Dua Belas. 
            Kompleks makam ini menjadi saksi bisu kejayaan sastra Melayu dan peradaban Islam di Kepulauan Riau.
        `,
        history: `
            Raja Ali Haji adalah seorang ulama, pujangga dan sejarawan yang hidup pada abad ke-19.
            Beliau dikenal sebagai penulis Gurindam Dua Belas dan berbagai karya sastra Melayu lainnya.
        `,
        gallery: [
            'img/Destinasi makam raja ali haji1.jpeg',
            'img/Destinasi makam raja ali haji2.jpg',
            'img/Destinasi makam raja ali haji3.jpg'
        ],
        location: {
            lat: 0.930689,
            lng: 104.445376
        },
        tips: [
            'Gunakan pakaian sopan dan menutup aurat',
            'Jaga ketenangan di area makam',
            'Tersedia pemandu untuk penjelasan sejarah',
            'Buka setiap hari dari pukul 08.00 - 17.00'
        ]
    },
};

// Filter destinasi
document.getElementById('category-filter').addEventListener('change', function(e) {
    const category = e.target.value;
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Modal handling
const modal = document.getElementById('destinationModal');
const closeBtn = document.getElementsByClassName('close')[0];

let currentMap = null; // Variabel untuk menyimpan instance peta

// Tampilkan detail destinasi
function showDestinationDetail(destinationId) {
    const data = destinationData[destinationId];
    if (!data) return;

    const detailContent = document.querySelector('.detail-content');
    const galleryGrid = document.querySelector('.detail-gallery .gallery-grid');
    const tipsList = document.querySelector('.detail-tips ul');

    // Isi konten
    detailContent.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <h3>Sejarah</h3>
        <p>${data.history}</p>
    `;

    // Isi gallery
    galleryGrid.innerHTML = data.gallery.map(img => `
        <img src="${img}" alt="${data.title}" onclick="openFullImage(this.src)">
    `).join('');

    // Isi tips
    tipsList.innerHTML = data.tips.map(tip => `
        <li>${tip}</li>
    `).join('');

    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }

    // Inisialisasi peta baru
    currentMap = L.map('map').setView([data.location.lat, data.location.lng], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(currentMap);
    L.marker([data.location.lat, data.location.lng]).addTo(currentMap);

    modal.style.display = 'block';
}

// Tutup modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
    // Bersihkan peta saat modal ditutup
    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        // Bersihkan peta saat modal ditutup
        if (currentMap) {
            currentMap.remove();
            currentMap = null;
        }
    }
}

// Fungsi untuk membuka gambar dalam ukuran penuh
function openFullImage(src) {
    window.open(src, '_blank');
}

// Search functionality
document.querySelector('.search-box input').addEventListener('keyup', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.destination-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});