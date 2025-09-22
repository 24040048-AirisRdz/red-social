function darLike(boton) {
      if (boton.innerText.includes("Me gusta")) {
        boton.innerText = "❤️ Te gusta";
      } else {
        boton.innerText = "👍 Me gusta";
      }
    }

    function agregarPublicacion() {
      const texto = document.getElementById('postText').value.trim();
      if (texto === '') return;
      const nuevaPost = document.createElement('div');
      nuevaPost.classList.add('post');
      nuevaPost.innerHTML = `
        <h3>Victoria Rzz</h3>
        <p>${texto}</p>
        <button class="like-btn" onclick="darLike(this)">👍 Me gusta</button>
      `;
      const contenedorPosts = document.getElementById('posts');
      contenedorPosts.prepend(nuevaPost);
      document.getElementById('postText').value = '';
    }