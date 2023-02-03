import { Component } from '../component/component';
import './titles.css';

export class Title extends Component {
  constructor(
    public selector: string,
    public title1: string = 'Series list',
    public title2: string = 'Pending series'
  ) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
        <section class="series">
        <h2 class="section-title">${this.title1}</h2>
        <section class="series-pending">
          <h3 class="subsection-title">${this.title2}</h3>
    `;
  }

  render(place: 'afterbegin') {
    super.render(place);
  }
}
