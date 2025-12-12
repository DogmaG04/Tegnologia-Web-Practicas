document.addEventListener('DOMContentLoaded', () => {
    const lugarTuristico = {
        nombre: "Parque Tunari",
        ciudad: "Cochabamba",
        precioEntrada: 20,
        horario: "08:00 AM - 05:30 PM",
        calificaciones: [5, 4, 5, 5, 3],
        promedioCalificaciones: function() {
            let suma = 0;
            for (let i = 0; i < this.calificaciones.length; i++) {
                suma += this.calificaciones[i];
            }
            return suma / this.calificaciones.length;
        },
        aplicarDescuento: function(porcentaje) {
            let descuento = this.precioEntrada * (porcentaje / 100);
            this.precioEntrada = this.precioEntrada - descuento;
            return this.precioEntrada;
        }
    };

    const nombreTxt = document.getElementById('lugarNombre');
    const ciudadTxt = document.getElementById('lugarCiudad');
    const precioTxt = document.getElementById('lugarPrecio');
    const horarioTxt = document.getElementById('lugarHorario');
    const promedioTxt = document.getElementById('lugarPromedio');
    const btnDescuento = document.getElementById('btnDescuento');
    const resultCard = document.getElementById('resultCard');

    function actualizarInterfaz() {
        nombreTxt.textContent = lugarTuristico.nombre;
        ciudadTxt.textContent = lugarTuristico.ciudad;
        horarioTxt.textContent = lugarTuristico.horario;
        precioTxt.textContent = lugarTuristico.precioEntrada.toFixed(2);
        promedioTxt.textContent = lugarTuristico.promedioCalificaciones().toFixed(1);
    }

    actualizarInterfaz();
    btnDescuento.addEventListener('click', () => {
        lugarTuristico.aplicarDescuento(20);
        actualizarInterfaz();
        resultCard.classList.remove('hidden');
        btnDescuento.disabled = true;
        btnDescuento.textContent = "Descuento Aplicado";
        btnDescuento.style.opacity = "0.5";
        btnDescuento.style.cursor = "not-allowed";
    });
});