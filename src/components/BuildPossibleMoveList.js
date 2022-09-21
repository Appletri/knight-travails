function BuildPossibleMoveList() {
  let graph = [];

  for (let i = 0; i < 64; i++) {
    graph.push(MovePossible(i));
  }
  return graph;
}

function MovePossible(value) {
  let x = 0;
  let y = 0;
  
  function convertToCoor(value) {
    if (value < 8) {
      return x = value;
      
    } else {
      y = Math.floor(value / 8);
      x = value % 8;
    }
  }
  convertToCoor(value);

  
  let arr = [];

  testMovement(x + 1,y + 2, 'ldd');
  testMovement(x + 2,y + 1, 'lld');
  testMovement(x + 2,y - 1, 'llu');
  testMovement(x + 1,y - 2, 'luu');
  testMovement(x - 1,y - 2, 'ruu');
  testMovement(x - 2,y - 1, 'rru');
  testMovement(x - 2,y + 1, 'rrd');
  testMovement(x - 1,y + 2, 'rdd');

  function testMovement(x, y, instructions) {
    //base case
    if (x > 7 || x < 0 || y > 7 || y < 0) {
      return 
    } 
      
    arr.push({
      value: (8 * y) + x, 
      path: instructions
    });
    
  }

  return arr;
}


export default BuildPossibleMoveList;