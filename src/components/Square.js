import Knight from './Knight';
import Marker from './Marker';

function Square(props) {
  const direction = props.path.find(e => e.point === props.id);
  return (
      <div id={props.id} className={props.square} 
      onClick={props.click} onContextMenu={props.click}>

        {props.start === props.id ? <Knight classname="knight"/> : null}
        {props.end === props.id ? <Knight classname="knightEnd"/> : null}
        
        {props.path.some(e => e.point === props.id) ? 
        <img className='directional' src={direction.dir} alt="directional arrow"/> : null}
        {props.milestones.includes(props.id) ? <Marker milestones={props.milestones} id={props.id} 
        path={props.path}/> : null}
        
      </div>
  );
};

export default Square;