function buscar() {
    document.getElementById("contenido").innerHTML = '';
    const valor = document.getElementById("rick and morty").value;
    const url = "https://rickandmortyapi.com/api/character/"+valor
  
    fetch(url)
      .then(response => response.json())
      .then(data => visualizar(data))
      .catch(error => console.log(error));
  }
  
  const visualizar = personaje => {
    const contenido = document.getElementById("contenido");
    contenido.innerHTML = '';
  
    if (!personaje) {
      contenido.innerHTML = '<p>No se encontró ningún personaje</p>';
    } else {
      const personajeHTML = `
        <div>
          <h2>${personaje.name}</h2>
          <img src="${personaje.image}" width="200" height="200">
          <p><strong>Especie:</strong> ${personaje.species}</p>
          <p><strong>GÉNERO:</strong> ${personaje.gender}</p>
          <p><strong>ESTADO:</strong> ${personaje.status}</p>
          <p><strong>TIPO:</strong> ${personaje.type}</p>
          
          
          <p><strong>Ubicación:</strong> ${personaje.location.name}</p>
        </div>
      `;
      contenido.innerHTML = personajeHTML;
    }
  };