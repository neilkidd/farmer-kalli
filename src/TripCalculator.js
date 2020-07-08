
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
    
    let result = [];

    if(geese === 1 && bagsOfCorn === 1){
        result.push('Goose');
        result.push('Return');
        result.push('Corn');
    } else if(geese === 1 && bagsOfCorn === 0){
        result.push('Goose');
    } else {
        result.push('Goose');

        for(let cornCount = 0; cornCount < bagsOfCorn; cornCount ++){
            result.push('Return');
            result.push('Corn');
        }
    }
    
    return result;
}
