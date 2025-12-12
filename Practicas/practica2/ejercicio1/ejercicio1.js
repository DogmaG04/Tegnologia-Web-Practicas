/*
  Determina el clima basado en la temperatura.
  Segun la tabla:
  -10 a 15: Frio
  16 a 25: Templado
  26 a 40: Calor
*/
const determinarClima = (temp) => {
    if (temp >= -10 && temp <= 15) {
        return "Frio";
    } 
    if (temp >= 16 && temp <= 25) {
        return "Templado";
    } 
    if (temp >= 26 && temp <= 40) {
        return "Calor";
    }
    return "Fuera de rango especificado";
};

/* Dom */
const initApp = () => {
    const form = document.getElementById('weatherForm');
    const input = document.getElementById('tempInput');
    const resultBox = document.getElementById('resultCard');
    const resultText = document.getElementById('resultText');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const valorInput = input.value;
        if (valorInput === '') {
            mostrarResultado("Por favor, ingresa una temperatura.", true);
            return;
        }
        const temperatura = parseFloat(valorInput);
        const clima = determinarClima(temperatura);
        mostrarResultado(`Resultado: ${clima}`);
    });
    const mostrarResultado = (mensaje, esError = false) => {
        resultText.textContent = mensaje;
        resultBox.classList.remove('hidden');
        if (esError) {
            resultBox.style.borderLeftColor = 'var(--danger)';
        } else {
            resultBox.style.borderLeftColor = 'var(--accent)';
        }
    };
};

document.addEventListener('DOMContentLoaded', initApp);