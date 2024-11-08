import React, { useState } from 'react';
import { storeBattleResult } from '../utils/arweaveService';

function Battle({ player1, player2 }) {
    const [result, setResult] = useState(null);

    const startBattle = async () => {
        const winner = Math.random() > 0.5 ? player1 : player2; // Randomly selects a winner
        setResult(`${winner.name} wins!`);

        // Store result on Arweave
        await storeBattleResult(winner);
    };

    return (
        <div>
            <h2>Battle</h2>
            <button onClick={startBattle}>Start Battle</button>
            {result && <p>{result}</p>}
        </div>
    );
}

export default Battle;
