import { test, expect } from '@jest/globals';
import { Cell } from '../core/cell';

test('should create a cell', () => {
  let cell: Cell = new Cell(5, 5);

  expect(cell.x).toBe(5);
  expect(cell.y).toBe(5);
});
