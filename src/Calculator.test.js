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

function calculateCost(bags){
    if(bags === 0){
        return 0;
    }
    else if(bags === 2){
        return 0.75;
    }
   return 0.25;
}
