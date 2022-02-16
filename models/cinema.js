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
}

Cinema.prototype.filmsByYear = function(films, year) {
  const filmsOfYear = films.some((film) => {
    return film.year === year
  })
  return filmsOfYear
}

Cinema.prototype.allOverLength = function(films, length) {
  const allOver = films.every((film) => {
    return film.length > length
  })
  return allOver
}

Cinema.prototype.totalRunTime = function(films) {
  const totalTime = films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  } ,0)
  return totalTime
}

module.exports = Cinema;
