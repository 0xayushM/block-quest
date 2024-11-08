import React from 'react';

function Card({ card }) {
    if (!card) {
        return <p>Loading card data...</p>; // Display a loading message if card is null
    }

    return (
        <div className="card">
            <h3>{card.name}</h3>
            <p>Attack: {card.attack}</p>
            <p>Defense: {card.defense}</p>
        </div>
    );
}

export default Card;
