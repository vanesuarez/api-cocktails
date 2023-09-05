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
    div.innerHTML = "";

    const specificElements = elements.drinks[0]; // Accede al array con las propiedades dentro del objeto drinks

      // Crea un h2 para el nombre
    const cocktailName = document.createElement("h2");
    cocktailName.textContent = specificElements.strDrink; // accede a los datos y llama al elemento .strDrink
    div.appendChild(cocktailName);

    // Crea un img para la imagen
    const cocktailImage = document.createElement("img");
    cocktailImage.src = specificElements.strDrinkThumb; // accede a los datos y llama al elemento .strDrinkThumb
    cocktailImage.alt = "Cocktail Image";
    cocktailImage.classList.add("img");
    div.appendChild(cocktailImage);

    // Párrafo para el disclaimer
    const pInfo = document.createElement("p");
    pInfo.innerHTML = ` Buscar los ingredientes para crear el trago queda bajo tu responsabilidad. <br>
    <b> La API utilizada fue <a href="https://www.thecocktaildb.com/">TheCocktailDB</a> </b>`;
    div.appendChild(pInfo);
    
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", showElements);
