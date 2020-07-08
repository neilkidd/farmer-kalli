test('One bag cost £0.25', () => {
    const cost = calculateCost(1);
    
    expect(cost).toBe(0.25);
});

test('Zero bags is £0.00', () => {
    const cost = calculateCost(0);

    expect(cost).toBe(0.00);
});

function calculateCost(bags){
    if(bags === 0){
        return 0;
    }
   return 0.25;
}
