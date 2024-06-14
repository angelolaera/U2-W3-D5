window.addEventListener("DOMContentLoaded", function () {
  const fetchShop = () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmY0MDdjMjM5YzAwMTUyZjRiNzAiLCJpYXQiOjE3MTgzNTM3MjgsImV4cCI6MTcxOTU2MzMyOH0.gmVzc-x46HiQC5ufQfZcQpva4Qtz8ni8flz8NmcC1To",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then((onlineProducts) => {
        console.log();
        const row = document.getElementById("card-container");

        onlineProducts.forEach((product) => {
          const col = document.createElement("div");
          col.classList.add("col");

          const card = document.createElement("div");
          card.classList.add("card");
          card.classList.add("w-150");

          const img = document.createElement("img");
          img.style.objectFit = "contain";
          img.src = product.imageUrl;

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const button = document.createElement("button");
          button.classList.add("btn", "btn-primary", "mt-3");
          button.innerText = "Scarta";
          button.addEventListener("click", (event) => {
            event.target.closest(".col").remove();
          });

          const title = document.createElement("h3");
          title.classList.add("card-title");
          title.textContent = product.name;

          const price = document.createElement("p");
          price.textContent = "€" + product.price + ",00";

          const details = document.createElement("a");
          details.setAttribute("href", "./details.html");
          details.textContent = "Dettaglio Prodotto";

          cardBody.appendChild(title);
          cardBody.appendChild(price);
          cardBody.appendChild(details);
          cardBody.appendChild(button);
          card.appendChild(img);
          card.appendChild(cardBody);
          col.appendChild(card);
          row.appendChild(col);
        });
      })
      .catch((error) => {
        console.error("Si è verificato un errore durante la richiesta:", error);
      });
  };

  fetchShop();
});
