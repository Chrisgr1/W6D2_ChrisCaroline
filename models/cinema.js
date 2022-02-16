const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function (films) {
  const titles = films.map((film)=>{
    return film.title
  })
return titles
}

Cinema.prototype.FindFilm = function (films, title) {
  const foundFilm = films.find( (film) => {
    return film.title === title
  })
  return foundFilm
}

Cinema.prototype.filterByGenre= function (films, genre) {
  const filmsOfGenre = films.filter((film) => {
    return film.genre === genre
  });
  return filmsOfGenre
};

module.exports = Cinema;
