// Funzione per caricare le informazioni del prodotto
function loadProductDetails() {
  // Effettua una richiesta GET per recuperare le informazioni del prodotto
  fetch(`https://api.example.com/product/${productId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nel caricamento delle informazioni del prodotto");
      }
      return response.json();
    })
    .then((product) => {
      // Una volta ottenuto il prodotto, creiamo gli elementi HTML e li aggiungiamo alla pagina
      const container = document.getElementById("productDetails");

      // Creiamo gli elementi HTML utilizzando createElement e inseriamo le classi di Bootstrap
      const row = document.createElement("div");
      row.classList.add("row");

      const col = document.createElement("div");
      col.classList.add("col");

      const title = document.createElement("h1");
      title.classList.add("display-4", "mb-3");
      title.textContent = product.name;

      const description = document.createElement("p");
      description.classList.add("lead");
      description.textContent = product.description;

      const brand = document.createElement("p");
      brand.textContent = `Brand: ${product.brand}`;

      const price = document.createElement("p");
      price.textContent = `Price: ${product.price} €`;

      // Aggiungiamo gli elementi al DOM
      col.appendChild(title);
      col.appendChild(description);
      col.appendChild(brand);
      col.appendChild(price);

      row.appendChild(col);
      container.appendChild(row);
    })
    .catch((error) => {
      console.error("Errore:", error);
      // Gestione degli errori, ad esempio mostrare un messaggio di errore all'utente
    });
}

// Eseguiamo la funzione per caricare le informazioni del prodotto quando la pagina è pronta
window.addEventListener("DOMContentLoaded", loadProductDetails);
