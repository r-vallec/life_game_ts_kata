export const enum State {
  Alive = 'ALIVE',
  Dead = 'DEAD',
}

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
