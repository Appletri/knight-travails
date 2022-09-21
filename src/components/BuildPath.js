import BuildPossibleMoveList from "./BuildPossibleMoveList";
import Node from './Node';

function BuildPath(start, end) {
  const moveList = BuildPossibleMoveList();
  let visited = [end];
  let endNode = Node(end);
  let root;
  let queue = [endNode];

  while (queue.length !== 0) {
    let current = queue.shift();
    
    current.distance = current.predecessor === null ? 0 : current.predecessor.distance + 1;

    
    if (current.data === start) {
      root = current;
    }

    for (let i = 0; i < moveList[current.data].length; i++) {

      if(!visited.includes(moveList[current.data][i].value)) {
        let nextNode = Node(moveList[current.data][i].value);
        visited.push(moveList[current.data][i].value);
        nextNode.predecessor = current;
        nextNode.pathToPredecessor = moveList[current.data][i].path;
        queue.push(nextNode); 
      }
    }
  }
  return root;
  
}

export default BuildPath;