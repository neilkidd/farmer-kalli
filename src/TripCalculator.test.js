import {calculateCost, calculateTrips} from './TripCalculator'

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

test.each`
  geese | corn | expectedResult
  ${0}  | ${0} | ${[]}
  ${1}  | ${0} | ${['Goose']}
  ${1}  | ${1} | ${['Goose', 'Return', 'Corn']}
  ${1}  | ${2} | ${['Goose', 'Return', 'Corn', 'Return', 'Corn']}
  ${3}  | ${0} | ${['Goose', 'Return', 'Goose', 'Return', 'Goose']}
  `('$geese geese + $corn bags of corn has trips $expectedResult', ({ geese, corn, expectedResult }) => {
    expect(calculateTrips(geese, corn)).toEqual(expectedResult);
  })

//TODO: More than one goose with corn fails


