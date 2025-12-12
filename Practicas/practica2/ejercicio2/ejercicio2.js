document.addEventListener('DOMContentLoaded', () => {
    let resultList = document.getElementById('resultList');
    let resultCard = document.getElementById('resultCard');
    let htmlContent = '';
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0 && i % 5 === 0) {
            output = 'FizzBuzz';
        } else if (i % 3 === 0) {
            output = 'Fizz';
        } else if (i % 5 === 0) {
            output = 'Buzz';
        } 
        if (output !== '') {
            htmlContent += `<li>${i}: ${output}</li>`;
        }
    }
    resultList.innerHTML = htmlContent;
    resultCard.classList.remove('hidden');
});