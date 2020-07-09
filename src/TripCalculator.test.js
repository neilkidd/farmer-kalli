import {calculateCost, calculateTrips, validateRequest, calculatorBuilderFor} from './TripCalculator'

test('FIXME',() => {

  let callCount = 0;
  let recordedNumberOfGeese = 0;
  let recordedBagsOfCorn = 0;

  const validator = {
    verify : function(expectedGeese, expectedBagsOfCorn, expectedCallCount) {
      expect(expectedGeese).toBe(recordedNumberOfGeese);
      expect(expectedBagsOfCorn).toBe(recordedBagsOfCorn);
      expect(expectedCallCount).toBe(callCount);
    },
    instance : function (numberOfGeese, bagsOfCorn){
      callCount ++;
      recordedNumberOfGeese = numberOfGeese;
      recordedBagsOfCorn = bagsOfCorn;
    }
  };

  const tripCalculator = () => [];
  const numberOfGeese = 5;
  const bagsOfCorn = 10;

  const calculator = calculatorBuilderFor(validator.instance, tripCalculator);
  calculator(numberOfGeese, bagsOfCorn);

  validator.verify(numberOfGeese, bagsOfCorn, 1);
});

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

test.each`
  geese | corn
  ${1}  | ${1}
  `('$geese geese and $corn corn is valid', ({geese, corn}) => {
    expect(validateRequest(geese,corn).valid).toBe(true);
  })

test.each`
  geese | corn
  ${1}  | ${3}
  ${1}  | ${2}
  ${3}  | ${2}
  ${2}  | ${3}
  ${2}  | ${2}
  `('$geese geese and $corn corn is not valid', ({geese, corn}) => {
  expect(validateRequest(geese,corn).valid).toBe(false);
})
