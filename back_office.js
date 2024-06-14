const handleSubmit = (e) => {
  e.preventDefault();

  // Recupera i valori dai campi del form
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("url").value;
  const price = document.getElementById("price").value;

  // Crea un nuovo oggetto prodotto con i valori recuperati
  const newProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };

  // Stampa l'oggetto prodotto nella console (puoi sostituirlo con l'azione che desideri)
  console.log(newProduct);

  // Elemento per i messaggi
  const messageDiv = document.getElementById("message");

  // Esempio di invio dei dati tramite fetch a un server (sostituisci con l'endpoint del tuo server)
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmY0MDdjMjM5YzAwMTUyZjRiNzAiLCJpYXQiOjE3MTgzNTM3MjgsImV4cCI6MTcxOTU2MzMyOH0.gmVzc-x46HiQC5ufQfZcQpva4Qtz8ni8flz8NmcC1To",
    },
    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella   creazione  del prodotto");
      }
    })
    .then((product) => {
      console.log("Success:", product);
      // Messaggio di successo
      messageDiv.innerHTML = '<div class="alert alert-success" role="alert">Prodotto salvato con successo!</div>';
    })
    .catch((error) => {
      console.error("Error:", error);
      // Messaggio di errore
      messageDiv.innerHTML = '<div class="alert alert-danger" role="alert">Errore durante il salvataggio del prodotto.</div>';
    });
};

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  form.onsubmit = handleSubmit;
});
