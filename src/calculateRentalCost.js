'use_strict';

const RENT_COST = 40;
const DISCOUNT_3_DAYS = 20;
const DISCOUNT_7_DAYS = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = RENT_COST * days;

  if (days >= 7) {
    return totalCost - DISCOUNT_7_DAYS;
  }

  if (days >= 3) {
    return totalCost - DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
