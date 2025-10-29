// ========================================
// ÜRÜN VERİTABANI
// ========================================

const WHATSAPP_NUMBER = '905321764432';

const products = {
    1: {
        id: 1,
        name: 'Kırmızı Gül Buketi',
        icon: '🌹',
        price: 350,
        description: '21 adet premium kırmızı gül ile hazırlanmış özel buket. Sevdiklerinize aşkınızı ve tutkularınızı anlatmanın en güzel yolu.',
        rating: 5,
        reviews: 128,
        features: [
            { icon: '🚚', text: 'Aynı Gün Teslimat' },
            { icon: '🌺', text: 'Taze ve Kaliteli' },
            { icon: '💳', text: 'Kapıda Ödeme' },
            { icon: '⭐', text: '%100 Memnuniyet' }
        ]
    },
    2: {
        id: 2,
        name: 'Pastel Karışık Buket',
        icon: '💐',
        price: 280,
        description: 'Pembe, beyaz ve krem tonlarında hazırlanmış romantik karışık çiçek buketi. Zarif ve şık görünümüyle her ortama uyum sağlar.',
        rating: 5,
        reviews: 95,
        features: [
            { icon: '🚚', text: 'Aynı Gün Teslimat' },
            { icon: '🌺', text: 'Taze ve Kaliteli' },
            { icon: '💳', text: 'Kapıda Ödeme' },
            { icon: '⭐', text: '%100 Memnuniyet' }
        ]
    },
    3: {
        id: 3,
        name: 'Beyaz Lilyum Aranjmanı',
        icon: '🌸',
        price: 420,
        description: 'Zarif beyaz lilyumlardan oluşan özel aranjman. Saflık ve zarafetin simgesi olan bu özel tasarım önemli günleriniz için ideal.',
        rating: 5,
        reviews: 87,
        features: [
            { icon: '🚚', text: 'Aynı Gün Teslimat' },
            { icon: '🌺', text: 'Taze ve Kaliteli' },
            { icon: '💳', text: 'Kapıda Ödeme' },
            { icon: '⭐', text: '%100 Memnuniyet' }
        ]
    },
    4: {
        id: 4,
        name: 'Orkide Saksı',
        icon: '🏵️',
        price: 380,
        description: 'Uzun ömürlü ve şık orkide saksısı. Ev ve ofis dekorasyonunuz için mükemmel bir hediye seçeneği.',
        rating: 5,
        reviews: 112,
        features: [
            { icon: '🚚', text: 'Aynı Gün Teslimat' },
            { icon: '🌺', text: 'Taze ve Kaliteli' },
            { icon: '💳', text: 'Kapıda Ödeme' },
            { icon: '⭐', text: '%100 Memnuniyet' }
        ]
    },
    5: {
        id: 5,
        name: 'Renkli Bahar Buketi',
        icon: '🌻',
        price: 320,
        description: 'Rengârenk bahar çiçekleriyle hazırlanmış neşeli buket. Sevdiklerinize mutluluk ve pozitif enerji taşır.',
        rating: 5,
        reviews: 143,
        features: [
            { icon: '🚚', text: 'Aynı Gün Teslimat' },
            { icon: '🌺', text: 'Taze ve Kaliteli' },
            { icon: '💳', text: 'Kapıda Ödeme' },
            { icon: '⭐', text: '%100 Memnuniyet' }
        ]
    },
    6: {
        id: 6,
        name: 'Premium Gül Sepeti',
        icon: '🎁',
        price: 550,
        description: 'Kırmızı ve beyaz güller ile hazırlanmış lüks sepet aranjman. Özel günleriniz için muhteşem bir sunum.',
        rating: 5,
        reviews: 76,
        features: [
            { icon: '🚚', text: 'Aynı Gün Teslimat' },
            { icon: '🌺', text: 'Taze ve Kaliteli' },
            { icon: '💳', text: 'Kapıda Ödeme' },
            { icon: '⭐', text: '%100 Memnuniyet' }
        ]
    }
};

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    
    // Ürün kartlarına tıklama eventi
    const productCards = document.querySelectorAll('.product-card');
    const modal = document.getElementById('product-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.dataset.productName;
            const productPrice = this.dataset.productPrice;
            const productDesc = this.dataset.productDesc;
            const productIcon = this.dataset.productIcon;
            
            openProductModal(productName, productPrice, productDesc, productIcon);
        });
    });
    
    // Modal kapat
    modalClose.addEventListener('click', closeProductModal);
    modalOverlay.addEventListener('click', closeProductModal);
    
    // ESC tuşu ile kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
    
    // WhatsApp sipariş butonu
    const whatsappOrderBtn = document.getElementById('btn-whatsapp-order');
    whatsappOrderBtn.addEventListener('click', function() {
        const productName = document.getElementById('modal-product-name').textContent;
        const productPrice = document.getElementById('modal-product-price').textContent;
        
        sendWhatsAppOrder(productName, productPrice);
    });
});

// Modal aç
function openProductModal(name, price, desc, icon) {
    const modal = document.getElementById('product-modal');
    
    document.getElementById('modal-product-name').textContent = name;
    document.getElementById('modal-product-price').textContent = price + ' TL';
    document.getElementById('modal-product-desc').textContent = desc;
    document.getElementById('modal-product-icon').textContent = icon;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Modal kapat
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// WhatsApp'a sipariş gönder
function sendWhatsAppOrder(productName, productPrice) {
    const message = `Merhaba! 🌹\n\n*${productName}* ürününü sipariş vermek istiyorum.\n\n💰 Fiyat: ${productPrice} (KDV Dahil)\n🚚 Aynı gün teslimat\n\nTeşekkürler!`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scroll için Link Tıklama
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobil Menü Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('active');
        });
    }

    // Header Scroll Efekti
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(74, 49, 38, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(74, 49, 38, 0.95)';
        }
        
        lastScroll = currentScroll;
    });

    // Ürün Kartı Animasyonları
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Tüm ürün ve servis kartlarını gözlemle
    document.querySelectorAll('.product-card, .service-card, .feature-box').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Sepete Ekle Butonları
    const cartButtons = document.querySelectorAll('.btn-cart');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Buton animasyonu
            this.textContent = '✓ Eklendi';
            this.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
            
            setTimeout(() => {
                this.textContent = 'Sepete Ekle';
                this.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)';
            }, 2000);
            
            // Basit bildirim
            showNotification(`${productName} sepete eklendi! (${productPrice})`);
        });
    });

    // İletişim Formu Gönderimi
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            // Form gönderme simülasyonu
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            
            // Formu temizle
            this.reset();
        });
    }

    // Bildirim Fonksiyonu
    function showNotification(message) {
        // Mevcut bildirimi kaldır
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Yeni bildirim oluştur
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // CSS stilleri
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 3s;
            font-weight: 500;
            max-width: 350px;
        `;
        
        document.body.appendChild(notification);
        
        // 3.5 saniye sonra kaldır
        setTimeout(() => {
            notification.remove();
        }, 3500);
    }

    // Animasyon keyframes ekleme
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .nav {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(74, 49, 38, 0.98);
                padding: 20px;
                display: none;
            }
            
            .nav ul {
                flex-direction: column;
                gap: 15px;
            }
            
            .notification {
                right: 10px !important;
                left: 10px !important;
                max-width: none !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Sayfa Yükleme Animasyonu
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll Progress Bar (İsteğe bağlı)
window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    // Progress bar yoksa oluştur
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            z-index: 10001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
});
