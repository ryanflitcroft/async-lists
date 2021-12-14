export function renderRestaurants(restaurant) {
    const restaurantsEl = document.createElement('div');
    const nameTypeEl = document.createElement('p');
    const locationsRatingEl = document.createElement('p');

    nameTypeEl.textContent = `${restaurant.name} is a ${restaurant.type} located in Portland, Oregon.`;
    locationsRatingEl.textContent = `${restaurant.name} has ${restaurant.locations} locations, with a rating of ${restaurant.rating} / 5.`;

    restaurantsEl.append(nameTypeEl, locationsRatingEl);
    return restaurantsEl;
}
