import React from 'react';
import { GameProvider } from './context/GameContext';
import GameScreen from './components/GameScreen';
import './index.css';

function App() {
  return (
    <GameProvider>
      <div className="App font-inter">
        <GameScreen />
      </div>
    </GameProvider>
  );
}

export default App;