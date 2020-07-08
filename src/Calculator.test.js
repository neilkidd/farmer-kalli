test.each`
    input | expectedResult
    ${0}  | ${0.00}
    ${1}  | ${0.25}
    ${2}  | ${0.75}
    ${3}  | ${1.25}
    ${10} | ${2.75}
  `('$input Bags of corns costs $expectedResult', ({ input, expectedResult }) => {
    expect(calculateCost(input)).toBe(expectedResult)
  })

function calculateCost(bags){
    if(bags === 1){
        return 0.25;
    } else if( bags > 0){
        const extraTripsToEndAtMarket = bags % 2 === 0 ? 1 : 2;
        return (bags + extraTripsToEndAtMarket) * 0.25;
    }

    return 0; 
}
