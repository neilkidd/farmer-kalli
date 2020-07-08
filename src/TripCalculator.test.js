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


  test('1 goose and 2 bags of corn', () => {
    const geese = 2;
    const bagsOfCorn = 1;
    const expectedResult = ['Goose'];

    expect(calculateTrips(geese, bagsOfCorn))
    .toEqual(expect.arrayContaining(expectedResult));
  });
