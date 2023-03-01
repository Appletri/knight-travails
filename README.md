# Knight Travails
![](https://github.com/Appletri/Appletri/blob/main/assets/knight-travails-JPG)
## Links
- [Try Knight Travils here!](https://appletri.github.io/knight-travails/)

- [Link to the Assignment](https://www.theodinproject.com/lessons/javascript-knights-travails)

## About
### ReactJS
<hr>
The core of this assignment is to utilize graphs data structure to create the path for a moving knight piece.

### Design
<hr>
I wanted to display the data structure of a graph visually while also making it user friendly. I created an app that accepts a left click and a right click for each squares. Using states, I am able to make it so only one square has a start and the other has an end with the left click and right click. The user can now click around the board to see how the pathing for the knight chess piece can navigate to the end with the least amount of moves.

### Code
<hr>

#### BuildPossibleMovelist.js
I start by creating an adjacency list. For each vertex, I store an array of the vertices adjacent to it.
I initialize this process by creating an empty array. Each index of this array will be a spot on the board. I reiterate 64 times (the number of squares on a chess board) and insert an array of numbers where these numbers will be the spaces that the knight can travel to.

```
function BuildPossibleMoveList() {
  let graph = [];

  for (let i = 0; i < 64; i++) {
    graph.push(MovePossible(i));
  }
  return graph;
}
```
#### BuildPath.js
This function will now create a node for each square and connect them to eachother based off the BuildPossibleMoveList.
To do this, the function accepts a start and end value. It will start with the end and create a node for the end value.

```
function Node(value) {
  return {
    data: value,
    distance: null,
    predecessor: null,
    pathToPredecessor: null,
  }
}
```
From here an empty array called the 'queue' will be created where the end node will be pushed into. A while statement where if the queue has something in it, we will shift the first item in the queue and call it 'current'. From Current we will check with the movelist and insert all of the moves into the queue so we canreiterate through them to eventually reach the start. The start will be able to access the predecessor value where it can find the shortest path to the end. 

#### Board.js
Now that we have the core functionality we can create the visuals. 

I create the board with a for loop and insert 64 indexes with the value of 'black square' or 'white square'. Since the way the divs are added to the page and the move list numbers do not line up. I had to make a formula to make the numbers line up with the BuildPath numbers.


```
<Square
id={i + (72 + ((Math.floor(i / 8) + 1) * -16))}
/>
```

The script will have a start, end, path, and milestones state to be pushed into squares.

#### Square.js

The square uses a handleClick function from Board where it has a setState for both the left click and the right click to set the start and end. Once the start and end update, the Square has multiple if statements within the return body to display markers and icons to show the path of the nodes from BuildPath.js

