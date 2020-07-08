
export function calculateCost(bags){
    if(bags === 1){
        return 0.25;
    } else if( bags > 0){
        const extraTripsToEndAtMarket = bags % 2 === 0 ? 1 : 2;
        return (bags + extraTripsToEndAtMarket) * 0.25;
    }

    return 0; 
}

export function calculateTrips(geese, bagsOfCorn){
    return ['Goose'];
}