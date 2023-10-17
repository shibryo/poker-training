'use client';
import React, { useState } from 'react';
import PokerHand from './components/PorkerHand';

export default function Home() {
  const [hand, setHand] = useState(['2H', '3H', '4H', '5H', '6H']); // 例としてハートのストレート

  const evaluateHand = () => {
    // ここで役判定のロジックを呼び出す（PokerHandコンポーネントで実装）
    alert(PokerHand(hand));
  };

  return (
    <div>
      <h1>Poker Hand Evaluator</h1>
      <button onClick={evaluateHand}>Evaluate</button>
    </div>
  );
}
