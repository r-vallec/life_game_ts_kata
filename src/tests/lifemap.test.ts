import { test, expect } from '@jest/globals';
import { create_map } from '../core/lifemap';

test('should create a life map', () => {
  let map: null[][] = create_map(10, 10);

  expect(map).toBeDefined();
  expect(map.length).toBe(10);
  expect(map[0].length).toBe(10);
});
