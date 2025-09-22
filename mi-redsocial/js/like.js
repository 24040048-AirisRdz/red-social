function darLike(boton) {
      if (boton.innerText.includes("Me gusta")) {
        boton.innerText = "❤️ Te gusta";
      } else {
        boton.innerText = "👍 Me gusta";
      }
    }