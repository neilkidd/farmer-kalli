import {calculateCost, calculateTrips, validateRequest} from './TripCalculator'

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

  test('Passes validation',() => {
    const geese = 1;
    const corn = 1;

    expect(validateRequest(geese,corn).valid).toBe(true);
  });

  test('Fails validation',() => {
    const geese = 2;
    const corn = 2;
    
    expect(validateRequest(geese,corn).valid).toBe(false);
  });

  test('Fails validation 2',() => {
    const geese = 2;
    const corn = 3;
    
    expect(validateRequest(geese,corn).valid).toBe(false);
  });
