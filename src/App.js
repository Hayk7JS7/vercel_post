import React from 'react';
import './App.css';
import Board from './components/Board/Board';
import Register from './components/Register';
import { useSelector } from 'react-redux';

function App() {
  const { status } = useSelector((state) => state.wordleWords)

  return (
    <div className="App">
      {status === 'succeeded' && <Board />}
      {status === 'idle' && <Register />}
    </div>
  );
}

export default App;
