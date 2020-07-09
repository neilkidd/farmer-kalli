
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

    for(let gooseCount = 0; gooseCount < geese; gooseCount ++){
        result.push('Goose');
        if(bagsOfCorn === 0 && gooseCount + 1 < geese){
            result.push('Return');
        }
    }

    for(let cornCount = 0; cornCount < bagsOfCorn; cornCount ++){
        if(result.length > 0){
            result.push('Return');
        }
        result.push('Corn');
    }
    
    return result;
}

export function validateRequest(geese, bagsOfCorn){

    return {valid : true};
}