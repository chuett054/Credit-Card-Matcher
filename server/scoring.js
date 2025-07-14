// Placeholder: Graham to Replace Weight
function computeScore(card, spend) {
    // example weights—finance to refine:
    const wTravel = 3;
    const wDining = 2;
    const penaltyAPR = card.apr > 20 ? -1 : 0;
  
    const travelEarn = spend.travel * (card.travelRate || 0) * wTravel;
    const diningEarn = spend.dining * (card.diningRate || 0) * wDining;
    const otherEarn = spend.other * (card.otherRate || 0);
  
    return travelEarn + diningEarn + otherEarn + penaltyAPR;
  }
  
  module.exports = { computeScore };