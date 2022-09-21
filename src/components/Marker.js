function Marker(props) {
  return (
    <div className="marker-container">
      {props.milestones.indexOf(props.id) === 0 ? null : 
      <div className="marker">{props.milestones.indexOf(props.id)}</div>}

    </div>
  )
}

export default Marker