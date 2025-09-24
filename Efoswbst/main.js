document.querySelectorAll('a.gallery-link, a.popup-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.getElementById('imageModal');
    const modalImg = modal.querySelector('.modal-img');
    modalImg.src = this.href;
    // Açıldığında tüm resmi ekrana sığdır
    modalImg.style.maxWidth = '95vw';
    modalImg.style.maxHeight = '95vh';
    modalImg.style.width = 'auto';
    modalImg.style.height = 'auto';
    modalImg.style.objectFit = 'contain';
    modal.style.display = 'block';
  });
});

// Kapatma: modalin herhangi bir yerine tıklayınca kapat
const modal = document.getElementById('imageModal');
if (modal) {
  modal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
}

// X butonu
const closeBtn = document.querySelector('.close');
if (closeBtn) {
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    modal.style.display = 'none';
  });
}

// ESC ile kapatma (opsiyonel ama faydalı)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
});

const modalImg = document.querySelector('#imageModal .modal-img');
if (modalImg) {
  modalImg.addEventListener('click', (e) => {
    e.stopPropagation(); // resme tıklayınca modal kapanmasın
  });
}

const _modal = document.getElementById('imageModal');
const _modalImg = _modal ? _modal.querySelector('.modal-img') : null;

if (_modalImg) {
  _modalImg.addEventListener('click', function (e) {
    e.stopPropagation(); // resme tıklayınca kapanmayı engelle
    // Tüm resmi ekrana sığdır (tamamını gör)
    this.style.maxWidth = '95vw';
    this.style.maxHeight = '95vh';
    this.style.width = 'auto';
    this.style.height = 'auto';
    this.style.objectFit = 'contain';
  });
}