import { FilmStructure } from '../../models/film';
import { Component } from '../component/component';

export class Card extends Component {
  constructor(
    public selector: string,
    public film: FilmStructure,
    public deleteFilm: (id: FilmStructure['']) => void,
    public updateFilm: (film: FilmStructure) => void
  ) {
    super();
    this.film = { ...film };
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    document
      .querySelector(`#b${this.film.id}`)
      ?.addEventListener('click', () => {
        this.deleteFilm(this.film.id);
      });
    document
      .querySelector(`#c${this.film.id}`)
      ?.addEventListener('change', () => {
        this.film.watched = !this.film.watched;
        this.updateFilm(this.film);
      });
  }

  createTemplate() {
    return `
    <li class="serie">
      <img class="serie__poster"src="${this.film.poster}"
      alt="The Sopranos poster">
      <h4 class="serie__title">${this.film.name}</h4>
        <p class="serie__info">${this.film.creator} (${this.film.year})</p>
      <i class="✖️"></i>
    </li>`;
  }
}
