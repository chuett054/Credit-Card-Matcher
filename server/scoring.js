// server/scoring.js

/**
 * computeScore(card, spend):
 *  - spend: { travel: $, dining: $, other: $ }
 *  - returns { rewards, cost, netBenefit }
 */
function computeScore(card, spend) {
    const { travelRate, diningRate, otherRate, aprLow, aprHigh, annualFee = 0, introBonus = 0, introSpendReq = Infinity } = card;
  
    // 1) Rewards: simple annualized points/cash
    const rewards =
      spend.travel * travelRate +
      spend.dining * diningRate +
      spend.other * otherRate;
  
    // 2) APR cost: assume they revolve balance equal to monthly spend (avg over year)
    //    Use average of aprLow and aprHigh if both exist, else single value
    let apr = aprLow;
    if (aprHigh != null && aprLow != null) apr = (aprLow + aprHigh) / 2;
    // monthly rate
    const monthlyRate = apr ? apr / 100 / 12 : 0;
    const avgBalance = (spend.travel + spend.dining + spend.other) / 2; // rough avg
    const interestCost = avgBalance * monthlyRate * 12;
  
    // 3) Intro bonus amortization: if they hit the spend req within 3mo, count bonus
    //    Convert bonus into annualized amount: assume they spend exactly requirement
    const bonusValue = introBonus > 0 && spend.travel + spend.dining + spend.other >= introSpendReq
      ? introBonus
      : 0;
  
    // 4) Net benefit = rewards + bonusYear1 − cost − annual fee
    const cost = interestCost + annualFee;
    const netBenefit = rewards + bonusValue - cost;
  
    return { rewards, cost, netBenefit };
  }
  
  module.exports = { computeScore };