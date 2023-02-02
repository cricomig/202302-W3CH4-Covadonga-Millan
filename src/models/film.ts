/* eslint-disable max-params */
export type FilmStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Film implements FilmStructure {
  public watched: boolean;

  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public score: number,
    public emmies: number
  ) {
    this.watched = false;
  }
}
