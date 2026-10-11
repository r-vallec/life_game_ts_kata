import { test, expect } from '@jest/globals';
import { Cell, Alive } from '../core/cell';

test('should create an alive cell', () => {
  let cell: Cell = new Cell(5, 5, Alive);

  expect(cell.x).toBe(5);
  expect(cell.y).toBe(5);
  expect(cell.state).toBe(Alive);
});
