import { Component } from '../component';
import './header.css';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'My Series') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <header class="main-header">
      <h1 class="main-title">${this.title}</h1>
    </header>
    `;
  }

  render(place: 'afterbegin') {
    super.render(place);
  }
}
