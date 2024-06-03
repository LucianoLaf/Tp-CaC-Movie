const API_ESTRENOS = 'https://api.themoviedb.org/3/movie/upcoming'

const optionsEstrenos = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODg4ZWY5YTdkNTQ1OTZkMDdiZWNmZjJmMDI0NWE1NiIsInN1YiI6IjY2NTkzOTM3MTM1MDVkY2VjYzUwODUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SMN692af8L7y5DsxDHZuPL21gI3OhgR-Ye__ThE4fkI'
    }
  };
  

const obtenerEstrenos = async () => {

    const resultado = await fetch(API_ESTRENOS, optionsEstrenos)
    const data = await resultado.json()

    const pelis = data.results.slice(0, 10)
    console.log(pelis)
    // Seleccionar el contenedor donde se mostrarán las películas
    let divEstrenos = document.querySelector('#estrenos-lista')

    // Iterar sobre cada película y crear su elemento HTML
    for (let i = 0; i < pelis.length; i++) {
        // Crear el HTML para la película actual
        const PeliAInsertar =`
        <div class="movie-item-estrenos">
                    <a href="./templates/detail-movie.html" target="_blank">
                        <img src="https://image.tmdb.org/t/p/w500${pelis[i].poster_path}" width="250" alt="" class="movie-item-img-estrenos">
                        <div class="movie-item-detail-estrenos">
                            <p class="movie-item-detail-title-estrenos">${pelis[i].title}</p>
                            <p class="movie-item-detail-overview-estrenos">${pelis[i].overview}</p>
                            <p class="movie-item-detail-subtitle-estrenos">${pelis[i].vote_average}</p>
                            <p class="movie-item-detail-release_date-estrenos">${pelis[i].release_date}</p>
                        </div>
                    </a>
                </div>
        
        `

        // Insertar el HTML de la película en el contenedor
        divEstrenos.insertAdjacentHTML('beforeend', PeliAInsertar);
    }

}


obtenerEstrenos()
