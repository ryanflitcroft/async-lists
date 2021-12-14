// import functions and grab DOM elements
import { getRestaurants } from './fetch-utils.js';

const restaurantSection = document.querySelector('#restaurant-section');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


window.addEventListener('load', async() => {
    const restaurants = await getRestaurants();
    // console.log(restaurants);

    for (let restaurant of restaurants) {
        const restaurantsEl = document.createElement('div');
        const nameTypeEl = document.createElement('p');
        const locationsRatingEl = document.createElement('p');

        nameTypeEl.textContent = `${restaurant.name} is a ${restaurant.type} located in Portland, Oregon.`;
        locationsRatingEl.textContent = `${restaurant.name} has ${restaurant.locations} locations, with a rating of ${restaurant.rating} / 5.`;

        restaurantsEl.append(nameTypeEl, locationsRatingEl);
        restaurantSection.append(restaurantsEl);
    }

});