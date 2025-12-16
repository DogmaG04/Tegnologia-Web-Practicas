const header = document.querySelector('.json-header');
const section = document.querySelector('.json-content');
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new Request(requestURL);

fetch(request)
  .then(response => response.json()) 
  .then(superSquad => {
    populateHeader(superSquad);
    showHeroes(superSquad);
    //Stringify()
    demonstrarStringify(superSquad);
  })
  .catch(error => {
    console.error('error al cargar el JSON', error);
    header.textContent = 'error al cargar los datos';
  });


//Mostrar el Contenido 
function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = jsonObj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${jsonObj.homeTown} // Formed: ${jsonObj.formed}`;
  header.appendChild(myPara);
}

//Mostrar los detalles de los heroes
function showHeroes(jsonObj) {
  const heroes = jsonObj.members; 

  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    myArticle.classList.add('hero-card');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret Identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    for (const power of hero.powers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);


    section.appendChild(myArticle);
  }
}

//JSON.stringify()
function demonstrarStringify(jsonObj) {
  console.log('Objeto JavaScript:');
  console.log(jsonObj);

  const jsonString = JSON.stringify(jsonObj);
  console.log('Cadena JSON (JSON.stringify()):');
  console.log(jsonString);

  const prettyJsonString = JSON.stringify(jsonObj, null, 2);
  console.log('Cadena JSON Formateada:\n', prettyJsonString);
}

//Objeto JSON
const testObject = {
  id: 0,
  producto: "Tegnologias Web I",
  precio: 99999.99
};
console.log('Objeto JavaScript Original:', testObject);
const jsonString = JSON.stringify(testObject);
console.log('Cadena JSON Resultante (para enviar o guardar):', jsonString);
const prettyJsonString = JSON.stringify(testObject, null, 2);
console.log('Cadena JSON Formateada:\n', prettyJsonString);