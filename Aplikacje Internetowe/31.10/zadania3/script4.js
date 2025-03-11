const timerForm = document.getElementById('timerForm');
    const countdown = document.getElementById('countdown');
    let interval;

    timerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        clearInterval(interval);

        let minutes = parseInt(document.getElementById('minutes').value);
        let seconds = parseInt(document.getElementById('seconds').value);

        const totalSeconds = minutes * 60 + seconds;

        interval = setInterval(function () {
            if (minutes === 0 && seconds === 0) {
                clearInterval(interval);
                alert('Koniec odliczania!');
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
            }
            countdown.textContent = `${minutes}m ${seconds}s`;
        }, 1000);
    });