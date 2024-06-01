const verScroll = function() {
    const navbar = document.querySelector('header') //obtengo el header en la constante navBAr
    if (window.scrollY > 0) {//evalua la condicion si la propiedad scrollY del objeto windows (osea la ventana de toda la pagina web)es mayor a scroll en el eje y
      navbar.classList.add('scrolled') //el classList es un objeto array, que se le puede agregar o quitar cosas, en este caso inserta 
      // una clase llamada scrolled que esta en el css, si es mayor a 20 le agrega la clase, cuando baja la quita
    } else {
      navbar.classList.remove('scrolled') //aca remueve la clase scrolled del css
    }
}

window.addEventListener('scroll', verScroll ) //agrego el evento a toda la ventana donde se ejecuta la pagina web, que es scroll, y que ejecute la funcion

// Función para obtener el nombre del localStorage
const obtenerNombreLocalStorage = () => {
  const formDataString = localStorage.getItem('formData');
  if (formDataString) { //Si formDataString no obtuvo nada del localStorage va a ser falso, sino verdadero
      const hola = JSON.parse(formDataString); //parseo el texto plano a objeto json para poder trabajarlo en js
      return hola.firstname;
  } else {
      return null; // Si no hay información en localStorage
  }
}


const nombreGuardado = obtenerNombreLocalStorage();
if (nombreGuardado) {
  console.log(`¡Hola, ${nombreGuardado}!`); //muestra lo que se obtuvo en la funcion (en este caso el firstName)
  const enlaceUsuario = document.querySelector('#usuario') //este id selecciona todo el li de iniciar sesion, y lo resetea ya que el
  enlaceUsuario.innerHTML=""   //usuario ya esta logueado. Obtengo el li en enlaceUsusario, lo reseteo y luego le inserto el nombre
  //para que lo muestre en vez de iniciar sesion
  enlaceUsuario.insertAdjacentText('afterbegin',nombreGuardado) //Aca reesmplazo le iniciar sesion por el nombre loqueado
} else {
  console.log("No se encontró información en el localStorage.");
}

