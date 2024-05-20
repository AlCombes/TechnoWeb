export default class Film {
  constructor(filmJSON) {
    // en paramètre un film au format JSON
    this._id = filmJSON.id;
    this._title = filmJSON.title;
    this._original_title = filmJSON.original_title;
    this._poster_path = filmJSON.poster_path ?? "";
    this._overview = filmJSON.overview ?? "";
    this._genres = filmJSON.genres
      ? filmJSON.genres.map((g) => g.name).join(" / ")
      : "";
  }
  get titre() {
    return this._title;
  }
  get titreOriginal() {
    return this._original_title;
  }
  get id() {
    return this._id;
  }
  get affiche() {
    return this._poster_path;
  }
  get resume() {
    return this._overview;
  }
  get genres() {
    return this._genres;
  }
  toString() {
    return `--> ${this._title} (${this._overview})`;
  }
}
