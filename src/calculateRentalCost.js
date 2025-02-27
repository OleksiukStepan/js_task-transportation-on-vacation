'use_strict';

const RENT_COST = 40;
const SHORT_TERM = 3;
const DISCOUNT_3_DAYS = 20;
const LONG_TERM = 7;
const DISCOUNT_7_DAYS = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = RENT_COST * days;

  if (days >= LONG_TERM) {
    return totalCost - DISCOUNT_7_DAYS;
  }

  if (days >= SHORT_TERM) {
    return totalCost - DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
