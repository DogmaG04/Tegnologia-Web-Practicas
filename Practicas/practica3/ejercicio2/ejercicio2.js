const headerInfo = document.querySelector('#header-info');
const section = document.querySelector('#tour-details');
const requestURL = 'https://dogmag04.github.io/Tegnologia-Web-Practicas/Practicas/practica3/JSON/turismo.json';


fetch(requestURL)
  .then(response => {
      if (!response.ok) {
          throw new Error(`Error respuesta${response.status}`);
      }
      return response.json();
  }) 
  .then(data => {
    displayHeader(data);
    displayDetails(data.lugares); 
  })
  .catch(error => {
    console.error('Error: Revisa la consola y la ruta del archivo JSON', error);
  });


function displayHeader(jsonObj) {
  const title = document.createElement('h1');
  title.textContent = jsonObj.titulo; 
  title.classList.add('squad-title'); 
  headerInfo.appendChild(title);
}


function displayDetails(lugaresArray) {
    if (!lugaresArray || lugaresArray.length === 0) {
        section.textContent = 'No hay datos de lugares turisticos disponibles.';
        return;
    }

    for (const lugar of lugaresArray) {
        const card = document.createElement('article');
        card.classList.add('hero-card'); 
        
        const horarioLV = lugar.horarios['Lunes-viernes'];
        const horarioSD = lugar.horarios['Sabado-domingo'];
        
        const actividadesList = lugar.actividades.map(act => `<li>${act}</li>`).join('');

        card.innerHTML = `
            <h2>${lugar.nombre}</h2>
            <p style="color:var(--accent); font-size:1.1rem; margin-bottom: 10px;">${lugar.ubicacion}</p>
            <p style="color:var(--text-secondary); line-height:1.4;">${lugar.descripcion}</p>
            
            <hr class="separator" style="margin: 15px 0;">
            
            <h3>Actividades:</h3>
            <ul>
                ${actividadesList}
            </ul>
            
            <h3 style="margin-top: 15px;">Horarios:</h3>
            <div style="margin-bottom: 10px;">
                <p style="font-size:0.95rem; color:var(--text-secondary); margin-left:10px;">• Lunes-viernes: ${horarioLV}</p>
                <p style="font-size:0.95rem; color:var(--text-secondary); margin-left:10px;">• Sabado-domingo: ${horarioSD}</p>
            </div>
            
            <hr class="separator" style="margin: 15px 0;">
            <p style="margin-top: 10px; font-weight: bold; color: var(--accent);">Precio de Ingreso: ${lugar.precio} Bs.</p>
        `;
        section.appendChild(card);
    }
}