document.addEventListener('DOMContentLoaded', () => {
class Hotel {
        constructor(nombre, ciudad, habitacionesDisponibles) {
            this.nombre = nombre;
            this.ciudad = ciudad;
            this.habitacionesDisponibles = habitacionesDisponibles;
        }
        reservar(cantidad) {
            if (cantidad <= 0 || isNaN(cantidad)) {
                return `Error: Ingrese una cantidad válida.`;
            }
            if (this.habitacionesDisponibles >= cantidad) {
                this.habitacionesDisponibles -= cantidad;
                return `Reserva exitosa de ${cantidad} habitaciones.`;
            } else {
                return `Error: Solo quedan ${this.habitacionesDisponibles} habitaciones disponibles.`;
            }
        }
        liberar(cantidad) {
            if (cantidad <= 0 || isNaN(cantidad)) {
                return `Error: Ingrese una cantidad válida.`;
            }

            this.habitacionesDisponibles += cantidad;
            return `Liberación exitosa de ${cantidad} habitaciones.`;
        }
        info() {
            return `Hotel ${this.nombre} en ${this.ciudad}. Disponibles: ${this.habitacionesDisponibles}.`;
        }
    }

    const miHotel = new Hotel("Hotel Cochabamba", "Cochabamba", 10); 
    
    const nombreTxt = document.getElementById('hotelNombre');
    const ciudadTxt = document.getElementById('hotelCiudad');
    const disponiblesTxt = document.getElementById('hotelDisponibles');
    const cantidadInput = document.getElementById('cantidadInput');
    const reservaForm = document.getElementById('reservaForm');
    const btnLiberar = document.getElementById('btnLiberar');
    const resultCard = document.getElementById('resultCard');
    const resultText = document.getElementById('resultText');

    function actualizarInterfaz() {
        nombreTxt.textContent = miHotel.nombre;
        ciudadTxt.textContent = miHotel.ciudad;
        disponiblesTxt.textContent = miHotel.habitacionesDisponibles;
    }
    
    function mostrarResultado(mensaje) {
        resultText.textContent = mensaje;
        resultCard.classList.remove('hidden');
    }

    actualizarInterfaz();

    reservaForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const cantidad = parseInt(cantidadInput.value);
        const mensaje = miHotel.reservar(cantidad);
        mostrarResultado(mensaje);
        actualizarInterfaz();
    });

    btnLiberar.addEventListener('click', () => {
        const cantidad = parseInt(cantidadInput.value);
        const mensaje = miHotel.liberar(cantidad);
        mostrarResultado(mensaje);
        actualizarInterfaz();
    });
});