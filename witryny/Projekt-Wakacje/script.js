// ===========================================
// === KOD DLA GALERII LIGHTBOX ===
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    // Znajdź wszystkie elementy, które mają otwierać lightbox (miniaturki)
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Znajdź elementy samego okna lightboxa
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxTitle = document.querySelector('.lightbox-title');
    const lightboxText = document.querySelector('.lightbox-text');
    const closeBtn = document.querySelector('.close-btn');

    // Sprawdź, czy wszystkie niezbędne elementy lightboxa i miniaturki istnieją
    if (lightbox && lightboxImg && lightboxTitle && lightboxText && closeBtn && thumbnails.length > 0) {

        // Dodaj obsługę kliknięcia do każdej miniaturki
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function(event) {
                // Zapobiegnij domyślnej akcji linku (np. przejściu do obrazka)
                event.preventDefault();

                // Znajdź element <img> wewnątrz klikniętego linku <a>
                const imgElement = this.querySelector('img');

                // Znajdź najbliższy kontener (np. article, section), aby poszukać tytułu/opisu
                // Dostosuj selektory '.closest', jeśli Twoja struktura HTML jest inna
                const container = this.closest('article') || this.closest('.gallery-container') || this.closest('section');

                // Sprawdź, czy znaleziono obrazek i kontener
                if (imgElement && container) {
                    // Pobierz ścieżkę do pełnego obrazka z atrybutu data-fullsize
                    const fullSizeImg = imgElement.getAttribute('data-fullsize');

                    // Spróbuj znaleźć tytuł (h2, h3, figcaption) w kontenerze,
                    // lub użyj tekstu alternatywnego (alt) obrazka, lub domyślnego tekstu
                    const title = container.querySelector('h2, h3, figcaption')?.textContent || imgElement.alt || 'Wybrany Obraz';

                    // Spróbuj znaleźć opis (paragraf <p> bez klasy .short-desc) w kontenerze
                    const description = container.querySelector('p:not(.short-desc)')?.textContent || '';

                    // Sprawdź, czy udało się pobrać ścieżkę do pełnego obrazka
                    if (fullSizeImg) {
                        // Ustaw źródło, tekst alternatywny, tytuł i opis w oknie lightboxa
                        lightboxImg.src = fullSizeImg;
                        lightboxImg.alt = title; // Użyj title jako alt
                        lightboxTitle.textContent = title;
                        lightboxText.textContent = description;

                        // Pokaż okno lightboxa i zablokuj przewijanie strony
                        lightbox.hidden = false; // Używamy atrybutu hidden
                        document.body.style.overflow = 'hidden';
                    } else {
                        // Informacja w konsoli, jeśli brakuje atrybutu data-fullsize
                        console.error("Nie znaleziono atrybutu 'data-fullsize' na obrazku:", imgElement);
                    }
                } else {
                     // Informacja w konsoli, jeśli nie znaleziono obrazka lub kontenera
                    console.error("Nie znaleziono obrazka lub kontenera dla thumbnaila:", this);
                }
            });
        }); // Koniec pętli forEach dla miniaturek

        // Dodaj obsługę kliknięcia dla przycisku zamykania (X)
        closeBtn.addEventListener('click', function() {
            lightbox.hidden = true; // Ukryj lightbox
            document.body.style.overflow = ''; // Odblokuj przewijanie strony
        });

        // Dodaj obsługę kliknięcia na tło lightboxa (poza treścią)
        lightbox.addEventListener('click', function(e) {
            // Sprawdź, czy kliknięto bezpośrednio na tło (element #lightbox)
            if (e.target === lightbox) {
                lightbox.hidden = true; // Ukryj lightbox
                document.body.style.overflow = ''; // Odblokuj przewijanie strony
            }
        });

    } else {
        // Wyświetl ostrzeżenia w konsoli, jeśli brakuje kluczowych elementów
        if (!lightbox || !lightboxImg || !lightboxTitle || !lightboxText || !closeBtn) {
             console.warn("Elementy struktury Lightboxa (#lightbox, .lightbox-img, etc.) nie zostały znalezione w HTML.");
        }
        if (thumbnails.length === 0) {
             console.warn("Nie znaleziono miniaturek z klasą '.thumbnail'. Lightbox nie będzie działał.");
        }
    }
}); // Koniec DOMContentLoaded dla Lightboxa
// ===========================================
// === KONIEC KODU DLA GALERII LIGHTBOX ===
// ===========================================

