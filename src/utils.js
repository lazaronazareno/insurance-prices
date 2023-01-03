export function getYearDifference (year) {
  return new Date().getFullYear() - year
}

export function calculateBrand (brand) {
  let plus
  switch (brand) {
    case 'european':
      plus = 1.30
      break
    case 'american':
      plus = 1.15
      break
    case 'asian':
      plus = 1.05
      break

    default:
      break
  }

  return plus
}

export function getPlan (plan) {
  return (plan === 'basic') ? 1.20 : 1.50
}
