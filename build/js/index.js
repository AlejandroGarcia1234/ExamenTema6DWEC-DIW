document.addEventListener("DOMContentLoaded", function () {
    prepararPagina();
  });
  
  function prepararPagina() {
    crearGaleria();
  
    fixedNav();
  
    scrollNav();
  
    // Obtenemos el span por su ID
    let yearSpan = document.getElementById("year");
    // Obtenemos el año actual
    let currentYear = new Date().getFullYear();
    // Le añadimos al span el año actual
    yearSpan.textContent = currentYear;
  }

  function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");
  
    for (let i = 1; i <= 6; i++) {
       // Crea un nuevo elemento de imagen
      const imagen = document.createElement("picture");
  
      imagen.innerHTML = `
      <source srcset="build/img/thumb/${i}.webp" type="image/webp">
      <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen thumb">`;
  
      imagen.onclick = function () {
        mostrarImagen(i);
      };
       // Agrega la imagen a la galería
      galeria.appendChild(imagen);
    }
  }

  function mostrarImagen(id) {
    const imagen = document.createElement("picture");
  
    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen grande">`;
  
    // Crear Overlay con la imagen
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    overlay.onclick = function () {
      const body = document.querySelector("body");
      body.classList.remove("fijar-body");
      overlay.remove();
    };
  
    // Botón para cerrar el Modal
    const cerrarModal = document.createElement("P");
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");
    cerrarModal.onclick = function () {
      const body = document.querySelector("body");
      body.classList.remove("fijar-body");
      overlay.remove();
    };
    overlay.appendChild(cerrarModal);
  
    // Añadirlo al HTML
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
  }