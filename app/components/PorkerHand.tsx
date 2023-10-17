export default function PokerHand(cards) {
    if (isOnePair(cards)) {
      return 'One Pair';
    }
    if (isTwoPair(cards)) {
      return 'Two Pair';
    }
    // 他の役もここで判定...
    return 'High Card';
  }
  
  function isOnePair(cards) {
    const values = cards.map(card => card[0]); // カードの数字だけを取り出す
    const uniqueValues = new Set(values);
    return values.length - uniqueValues.size === 1;
  }
  
  function isTwoPair(cards) {
    const values = cards.map(card => card[0]); // カードの数字だけを取り出す
    const valueCounts = {};
    for (const value of values) {
      valueCounts[value] = (valueCounts[value] || 0) + 1;
    }
    return Object.values(valueCounts).filter(count => count === 2).length === 2;
  }
  