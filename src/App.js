import './App.css'
import Board from './components/Board';

function App() {

  return (
    <div className="App">
      <h1 className='title'>Knight Travails</h1>
      <div className='instructions'>
        <p className='blackIns'>Start: Left Click</p>
        <p className='redIns'>End: Right Click</p>
      </div>
      <Board />
    </div>
  );
}

export default App;
