const API_PELIS = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

const option = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODg4ZWY5YTdkNTQ1OTZkMDdiZWNmZjJmMDI0NWE1NiIsInN1YiI6IjY2NTkzOTM3MTM1MDVkY2VjYzUwODUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SMN692af8L7y5DsxDHZuPL21gI3OhgR-Ye__ThE4fkI'
    }
  };

const obtenerAclamadas = async () => {

    const resultado = await fetch(API_PELIS, option)
    const data = await resultado.json()

    const pelis = data.results
    console.log(pelis)
    // Seleccionar el contenedor donde se mostrarán las películas
    let divAclamadas = document.querySelector('#aclamadas-lista')

    // Iterar sobre cada película y crear su elemento HTML
    for (let i = 0; i < pelis.length; i++) {
        // Crear el HTML para la película actual
        const PeliAInsertar =`
        <div class="movie-item">
                    <a href="./templates/detail-movie.html" target="_blank">
                        <img src="https://image.tmdb.org/t/p/w500${pelis[i].poster_path}" width="250" alt="" class="movie-item-img">
                        <div class="movie-item-detail">
                            <p class="movie-item-detail-title">${pelis[i].title}</p>
                            <p class="movie-item-detail-subtitle">${pelis[i].vote_average}</p>
                        </div>
                    </a>
                </div>
        
        `

        // Insertar el HTML de la película en el contenedor
        divAclamadas.insertAdjacentHTML('beforeend', PeliAInsertar);
    }

}


obtenerAclamadas()
