export function renderRestaurants(restaurant) {
    const restaurantsEl = document.createElement('div');
    const nameTypeEl = document.createElement('p');
    const locationsRatingEl = document.createElement('p');

    nameTypeEl.textContent = `${restaurant.name} is a ${restaurant.type} located in Portland, Oregon.`;
    locationsRatingEl.textContent = `${restaurant.name} has ${restaurant.locations} locations, with a rating of ${restaurant.rating}/5.`;

    restaurantsEl.classList.add('list');

    restaurantsEl.append(nameTypeEl, locationsRatingEl);
    return restaurantsEl;
}

export function renderParks(park) {
    const parksEl = document.createElement('div');
    const nameQuadrantEl = document.createElement('p');
    const neighborhoodAcquiredEl = document.createElement('p');

    nameQuadrantEl.textContent = `${park.name} is a city park located in ${park.quadrant} Portland, in the ${park.neighborhood} neighborhood.`;
    neighborhoodAcquiredEl.textContent = `${park.name} was acquired by the city of Portland in ${park.acquired}.`;

    parksEl.classList.add('list');

    parksEl.append(nameQuadrantEl, neighborhoodAcquiredEl);
    return parksEl;
}

export function renderBridges(bridge) {
    const bridgesEl = document.createElement('div');
    const nameTypeEl = document.createElement('p');
    const builtLengthEl = document.createElement('p');

    nameTypeEl.textContent = `The ${bridge.name} is a ${bridge.type} bridge in Portland, Oregon.`;
    builtLengthEl.textContent = `The ${bridge.name} is ${bridge.length}', long and was built in ${bridge.built}.`;

    bridgesEl.classList.add('list');

    bridgesEl.append(nameTypeEl, builtLengthEl);
    return bridgesEl;
}

export function renderSports(sport) {
    const sportsEl = document.createElement('div');
    const nameTypeEl = document.createElement('p');
    const venueMascotEl = document.createElement('p');

    nameTypeEl.textContent = `The ${sport.name} are a ${sport.type} team, based in Portland, Oregon.`;
    venueMascotEl.textContent = `The ${sport.name} play at ${sport.venue}, and their mascot is ${sport.mascot}.`;

    sportsEl.classList.add('list');

    sportsEl.append(nameTypeEl, venueMascotEl);
    return sportsEl;
}