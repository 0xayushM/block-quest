import React, { useEffect, useState } from 'react';
import Card from './components/card';
import Battle from './components/battle';
import cardsData from './data/cards.json';

function App() {
    const [player1, setPlayer1] = useState({ name: "", attack: 0, defense: 0 });
    const [player2, setPlayer2] = useState({ name: "", attack: 0, defense: 0 });

    useEffect(() => {
        setPlayer1(cardsData[0]);
        setPlayer2(cardsData[1]);
    }, []);

    return (
        <div>
            <h1>Block-Quest</h1>
            <div className="players">
                <Card card={player1} />
                <Card card={player2} />
            </div>
            <Battle player1={player1} player2={player2} />
        </div>
    );
}

export default App;
