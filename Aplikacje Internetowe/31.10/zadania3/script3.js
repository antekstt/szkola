  const thumbnails = document.querySelectorAll('.thumbnail');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImg = document.getElementById('fullscreenImg');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentImageIndex = 0;

    // Funkcja wyświetlania obrazu w trybie pełnoekranowym
    function showImage(index) {
        fullscreenImg.src = thumbnails[index].src;
        fullscreen.style.display = 'block';
        currentImageIndex = index;
    }

    // Dodaj event listener dla każdej miniatury
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            showImage(index);
        });
    });

    // Zamknięcie pełnoekranowego trybu
    closeBtn.addEventListener('click', function () {
        fullscreen.style.display = 'none';
    });

    // Przewijanie do poprzedniego obrazu
    prevBtn.addEventListener('click', function () {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = thumbnails.length - 1;  // Wraca na ostatni obraz, jeśli jest pierwszy
        }
        showImage(currentImageIndex);
    });

    // Przewijanie do następnego obrazu
    nextBtn.addEventListener('click', function () {
        if (currentImageIndex < thumbnails.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;  // Wraca na pierwszy obraz, jeśli jest ostatni
        }
        showImage(currentImageIndex);
    });