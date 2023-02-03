import { FilmStructure } from '../../models/film';
import { Card } from '../card/card';
import { Component } from '../component/component';

export class Films extends Component {
  constructor(public selector: string, public films: FilmStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  deleteFilm(id: FilmStructure['id']) {
    this.films = this.films.filter((item) => item.id !== id);
    this.render('afterbegin');
    console.log(this.films);
  }

  updateFilm(film: FilmStructure) {
    this.films = this.films.map((item) => (item.id === film.id ? film : item));
    this.render('afterbegin');
    console.log(this.films);
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('main') as HTMLElement).innerHTML = '';
    super.render(place);
    this.films.forEach((item) => {
      new Card(
        '.series-list',
        item,
        this.deleteFilm.bind(this),
        this.updateFilm.bind(this)
      );
    });
  }

  createTemplate() {
    return `<ul class="series-list"></ul></section>`;
  }
}
