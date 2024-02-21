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