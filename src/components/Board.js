import { useEffect, useState } from "react";
import Square from "./Square";
import BuildPath from "./BuildPath";
import upIcon from '../assets/up.png';
import downIcon from '../assets/down.png';
import leftIcon from '../assets/left.png';
import rightIcon from '../assets/right.png';

function Board() {
  const [start, setStart] = useState(27);
  const [end, setEnd] = useState(37);
  const [path, setPath] = useState([
    {
      point: 28,
      dir: rightIcon
    },
    {
      point: 29,
      dir: rightIcon
    },
    {
      point: 37,
      dir: upIcon
    }
  ]);
  const [milestones, setMilestones] = useState([]);
  const arr = [];
  
  //builds board aray
  for (let i = 0; i < 64; i++) {
    if ([1,3,5,7,8,10,12,14,17,19,21,23,24,26,28,30,33,35,37,39,40,42,44,46,49,51,53,55,56,58,60,62].includes(i)) {
      arr.push('black square');
    } else {
      arr.push('white square');
    }
  };

  //enables left and right click for start and end positions
  const handleClick = ((e) => {
    e.preventDefault();
    
    if (e.type === 'click') {
      setStart(parseInt(e.currentTarget.id))
    }
    
    if (e.type === 'contextmenu') {
      setEnd(parseInt(e.currentTarget.id));
    }
  });


  //updates states to build path
  useEffect(() => {
    const pathData = BuildPath(start,end);
    let milestones = [];
    let pathing = [];
    
    //milestones and pathing through recursion
    function dataExtraction(obj) {
      milestones.push(obj.data);
      
      if (obj.distance === 0) {
        return
      }

      //build pathing data
      pathing.push({
        point:findPoint(obj.data, obj.pathToPredecessor[0]),
        dir: obj.pathToPredecessor[0],
      })
      pathing.push({
        point:findPoint(pathing[pathing.length - 1].point, obj.pathToPredecessor[1]),
        dir: obj.pathToPredecessor[1],
      })
      pathing.push({
        point:findPoint(pathing[pathing.length - 1].point, obj.pathToPredecessor[2]),
        dir: obj.pathToPredecessor[2],
      })
      

      dataExtraction(obj.predecessor);
    }

    dataExtraction(pathData);
    //changes directionals to make more sense
    pathing.forEach((path, i) => {
      if (![2,5,8,11,14,17].includes(i)) {
        if (path.dir !== pathing[i+1].dir) {
          path.dir = pathing[i+1].dir;
        }
      }
    })
    //adds icon to directional
    pathing.map((path) => {
      if (path.dir === 'u') return path.dir = upIcon;
      if (path.dir === 'r') return path.dir = rightIcon;
      if (path.dir === 'l') return path.dir = leftIcon;
      if (path.dir === 'd') return path.dir = downIcon; 
    })

    setPath(pathing);
    setMilestones(milestones);
  },[start, end])

  //helper function to findPoints for path
  function findPoint(start, direction) {
    if (direction === 'u') return start + 8;
    if (direction === 'r') return start + 1;
    if (direction === 'l') return start - 1;
    if (direction === 'd') return start - 8;
  }



  return (
    <div className="chessBoard">
      {arr.map((square, i) => {
        return (
        <Square start={start} end={end} click={handleClick}
        milestones={milestones} path={path}
        key={i + (72 + ((Math.floor(i / 8) + 1) * -16))}
        id={i + (72 + ((Math.floor(i / 8) + 1) * -16))}
        square = {square}/>
        )
      })}      
    </div>
  )
  
}

export default Board