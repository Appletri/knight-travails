import knight from '../assets/knight-simple-chess-piece-cut-out-by_vexels.png';

function Knight(props) {
  return(
    <img className={props.classname} src={knight} alt='a knight chess piece'></img>
  )
}

export default Knight