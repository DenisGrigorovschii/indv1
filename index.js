document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const transactions = JSON.parse(event.target.result);
            // Здесь можно вызывать методы для анализа транзакций и выводить результат на страницу
            displayResult('Транзакции успешно загружены.');
        };

        reader.onerror = function() {
            displayResult('Произошла ошибка при чтении файла.');
        };

        reader.readAsText(file);
    });

    function displayResult(message) {
        resultDiv.textContent = message;
    }
});