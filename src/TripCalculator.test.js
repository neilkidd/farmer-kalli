import calculateCost from './TripCalculator'

test.each`
    input | expectedResult
    ${0}  | ${0.00}
    ${1}  | ${0.25}
    ${2}  | ${0.75}
    ${3}  | ${1.25}
    ${10} | ${2.75}
  `('$input Bags of corn(s) costs $expectedResult', ({ input, expectedResult }) => {
    expect(calculateCost(input)).toBe(expectedResult)
  })
