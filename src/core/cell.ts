export const Alive: string = 'Alive';
export const Dead: string = 'Dead';

export class Cell {
  x: number;
  y: number;
  state: string;

  constructor(x: number, y: number, state: string) {
    this.x = x;
    this.y = y;
    this.state = state;
  }
}
