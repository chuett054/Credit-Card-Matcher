// server/scoring.js
function computeScore(card, spend) {
    // use final finance weights here
    const wTravel = 3, wDining = 2, wOther = 1;
    const penalty = card.apr > 20 ? spend.travel * 0.01 : 0; // example
  
    const rewards =
      spend.travel * card.travelRate * wTravel +
      spend.dining * card.diningRate * wDining +
      spend.other * card.otherRate * wOther;
  
    const cost = spend.travel * (card.apr / 100 / 12) + penalty;
    const netBenefit = rewards - cost;
  
    return { rewards, cost, netBenefit };
  }
  module.exports = { computeScore };