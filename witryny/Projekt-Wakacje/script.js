document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > header.offsetHeight) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
});

// Lightbox
const galleryImages = document.querySelectorAll('.flex-gallery img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt;
        
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        
        lightbox.appendChild(newImg);
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxText = document.querySelector('.lightbox-text');
    const closeBtn = document.querySelector('.close-btn');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const article = this.closest('article');
            const fullSizeImg = this.querySelector('img').getAttribute('data-fullsize');
            const title = article.querySelector('h2').textContent;
            const description = article.querySelector('p:not(.short-desc)')?.textContent || '';

            lightboxImg.src = fullSizeImg;
            lightboxImg.alt = title;
            lightboxTitle.textContent = title;
            lightboxText.textContent = description;
            lightbox.hidden = false;
            document.body.style.overflow = 'hidden'; // Zablokuj scroll
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.hidden = true;
        document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.hidden = true;
            document.body.style.overflow = '';
        }
    });
});