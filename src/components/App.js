import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Game from './Game';


const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

// Color Theme



// *** The React 18 way:
// root.render(<StarMatch />);


export function App() {
  return (
    <StarMatch />
  );
}
