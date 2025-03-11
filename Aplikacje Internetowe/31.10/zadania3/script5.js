const addDivBtn = document.getElementById('addDivBtn');
    const divContainer = document.getElementById('divContainer');

    addDivBtn.addEventListener('click', function () {
        const content = document.getElementById('divContent').value;
        const color = document.getElementById('divColor').value;
        const width = document.getElementById('divWidth').value;
        const height = document.getElementById('divHeight').value;

        if (content && width && height) {
            // Tworzenie nowego div
            const newDiv = document.createElement('div');
            newDiv.className = 'dynamicDiv';
            newDiv.style.backgroundColor = color;
            newDiv.style.width = width + 'px';
            newDiv.style.height = height + 'px';
            newDiv.textContent = content;

            // Tworzenie przycisku usuwania
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Usuń';
            removeBtn.addEventListener('click', function () {
                divContainer.removeChild(newDiv);
            });

            // Dodanie przycisku do nowego div
            newDiv.appendChild(removeBtn);

            // Dodanie nowego div do kontenera
            divContainer.appendChild(newDiv);

            // Resetowanie pól formularza
            document.getElementById('divContent').value = '';
            document.getElementById('divWidth').value = '';
            document.getElementById('divHeight').value = '';
        } else {
            alert('Proszę uzupełnić wszystkie pola.');
        }
    });