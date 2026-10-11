import { test, expect } from '@jest/globals';
import { Cell, State } from '../core/cell';

test('should create an alive cell', () => {
  let cell: Cell = new Cell(5, 5, State.Alive);

  expect(cell.x).toBe(5);
  expect(cell.y).toBe(5);
  expect(cell.state).toBe(State.Alive);
});

test('should create a dead cell', () => {
  let cell: Cell = new Cell(5, 5, State.Dead);

  expect(cell.x).toBe(5);
  expect(cell.y).toBe(5);
  expect(cell.state).toBe(State.Dead);
});
