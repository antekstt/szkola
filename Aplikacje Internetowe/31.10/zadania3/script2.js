 const calculator = document.getElementById('calculator');
    const result = document.getElementById('result');
    const history = document.getElementById('history');

    calculator.addEventListener('submit', function (e) {
        e.preventDefault();

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;

        let calculationResult;

        switch (operation) {
            case 'add':
                calculationResult = num1 + num2;
                break;
            case 'subtract':
                calculationResult = num1 - num2;
                break;
            case 'multiply':
                calculationResult = num1 * num2;
                break;
            case 'divide':
                calculationResult = num1 / num2;
                break;
            case 'power':
                calculationResult = Math.pow(num1, num2);
                break;
            case 'sqrt':
                calculationResult = Math.sqrt(num1);
                break;
        }

        // Wyświetlenie wyniku
        result.textContent = calculationResult;

        // Dodanie operacji do historii
        const historyItem = document.createElement('li');
        historyItem.textContent = `${num1} ${operation} ${num2} = ${calculationResult}`;
        history.appendChild(historyItem);
    });