import React from 'react';
import Card from './Card';
import { useGameContext } from '../context/GameContext';

export default function ExecutePassButton() {
  const { 
    setFrom,
    from,
    to,
    selectedCard,
    setSelectedCard,
    passCard
  } = useGameContext();
  
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
