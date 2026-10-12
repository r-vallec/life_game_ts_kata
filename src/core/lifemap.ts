export function create_map(rows: number, columns: number): null[][] {
  let map: null[][] = [];

  for (let row = 0; row < rows; row++) {
    map[row] = [];
    for (let column = 0; column < columns; column++) {
      map[row][column] = null;
    }
  }

  return map;
}
