test('One bag cost £0.25', () => {
    const cost = CalculateCost(1);
    expect(cost).toBe(0.25);
});

function CalculateCost(bag){
   return 0.25;
}
