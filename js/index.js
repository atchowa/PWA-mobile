/* on recupere les elements contenu dans les "id" de "index.php" */
const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = ""; /* variable qui stocke les informations passé dans la barre de recherche */
let movies = []; /* variable qui stocke les fimls rechercher */

const fetchMovies = async () => { /* va chercher les films et les affichers atravers le lien de l'API */
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}`
  ).then((res) => res.json()); /* si tu as le resultats "res", tu convertir le "json" pour le metr dans le bon format visibl dans le navigateur*/
  console.log(movies); /* et tu affiches les films */
};

const moviesDisplay = async () => { //affichage des films
  await fetchMovies();

  movies.results.length = 12; //on veut afficher que 12 films

  result.innerHTML = movies.results
    .map(
      (movie) =>  //apparence d'un seul film
        `
      <li> 
        <h2>${movie.original_title}</h2>
        <div class="card-content">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
          <div class="infos">
            <p>${movie.overview}</p>
            <p>Popularité : ${movie.popularity} ⭐</p>
          </div>
        </div>
      </li>
    `
    )
    .join(""); // .join("") permet d'enlever la virgule par defaut entre chaque films qui s'affiche
};

form.addEventListener("submit", (e) => { // quand le formulaire est soumis
  e.preventDefault(); // on se premunir du comportement par defaut lors de la soumission d'un formulaire
  search = searchInput.value; // on recupere la value contenu dans "searchInput" et on la passe a "search"
  moviesDisplay();
});
