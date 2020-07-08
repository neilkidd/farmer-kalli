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


  test('1 goose and 0 bags of corn', () => {
    const geese = 1;
    const bagsOfCorn = 0;
    const expectedResult = ['Goose'];

    expect(calculateTrips(geese, bagsOfCorn))
    .toEqual(expect.arrayContaining(expectedResult));
  });

  test('1 goose and 1 bag of corn', () => {
    const geese = 1;
    const bagsOfCorn = 1;
    const expectedResult = ['Goose', 'Return', 'Corn'];

    expect(calculateTrips(geese, bagsOfCorn))
    .toEqual(expect.arrayContaining(expectedResult));
  });

  test('1 goose and 2 bags of corn', () => {
    const geese = 1;
    const bagsOfCorn = 2;
    const expectedResult = ['Goose', 'Return', 'Corn', 'Return', 'Corn'];

    expect(calculateTrips(geese, bagsOfCorn))
    .toEqual(expect.arrayContaining(expectedResult));
  });
