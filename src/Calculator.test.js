test('Zero bags is 0.00', () => {
    const cost = calculateCost(0);

    expect(cost).toBe(0.00);
});

test('One bag cost 0.25', () => {
    const cost = calculateCost(1);

    expect(cost).toBe(0.25);
});

test('Two bags cost 0.75', () => {
    const cost = calculateCost(2);

    expect(cost).toBe(0.75);
});

test('Three bags cost 1.25', () => {
    const cost = calculateCost(3);

    expect(cost).toBe(1.25);
});

function calculateCost(bags){
    if(bags === 1){
        return 0.25;
    } else if( bags > 0){
        const extraTripsToEndAtMarket = bags % 2 === 0 ? 1 : 2;
        return (bags + extraTripsToEndAtMarket) * 0.25;
    }
    
    return 0; 
}
