const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const button = document.getElementById("button");
const div = document.getElementById("cocktail");

// Función asincrónica para obtener datos de la API, envia solicitud, espera respuesta y devuelve los datos
async function cocktailData() {
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    alert(error);
  }
  return data;
}

// Función asincrónica para mostrar los elementos de un trago
async function showElements() {
  try {
    const elements = await cocktailData(); // Obtiene los datos del trago llamando a la función cocktailData
    console.log(elements);
    div.innerHTML = "";

    // Crea un h2 para el nombre
    const cocktailName = document.createElement("h2");
    cocktailName.textContent = elements.drinks[0].strDrink; // accede al nombre dentro del objeto
    div.appendChild(cocktailName);

    // Crea un img para la imagen
    const cocktailImage = document.createElement("img");
    cocktailImage.src = elements.drinks[0].strDrinkThumb; // accede a la imagen dentro del objeto
    cocktailImage.alt = "Cocktail Image";
    cocktailImage.classList.add("img");
    div.appendChild(cocktailImage);

    // Párrafo para el disclaimer
    const pInfo = document.createElement("p");
    pInfo.innerHTML = ` Buscar los ingredientes para crear el trago queda bajo tu responsabilidad. <br>
    <b> La API utilizada fue <a href="https://www.thecocktaildb.com/" target="_blank"> TheCocktailDB </a> </b>`;
    div.appendChild(pInfo);
    
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", showElements);
