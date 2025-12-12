document.addEventListener('DOMContentLoaded', () => {
    const dateOutput = document.getElementById('dateOutput');
    const resultCard = document.getElementById('resultCard');
    function showFormattedDate() {
        const today = new Date(); 
        const options = {
            weekday: 'long',    
            year: 'numeric',    
            month: 'long',      
            day: 'numeric'      
        };
        let formattedDate = today.toLocaleDateString('es-ES', options);
        formattedDate = formattedDate.replace(' de ', ' del ').replace(/, \d{4}$/, ', del $&');
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const dayName = days[today.getDay()];
        const dayOfMonth = today.getDate();
        const monthName = months[today.getMonth()];
        const year = today.getFullYear();
        const finalOutput = `${dayName}, ${dayOfMonth} de ${monthName} del ${year}`;
        dateOutput.textContent = finalOutput;
        resultCard.classList.remove('hidden');
    }
    showFormattedDate();
});