// import functions and grab DOM elements
import { getRestaurants } from './fetch-utils.js';
import { renderRestaurants } from './render-utils.js';

const restaurantSection = document.querySelector('#restaurant-section');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


window.addEventListener('load', async() => {
    const restaurants = await getRestaurants();
    
    for (let restaurant of restaurants) {
        const restaurantsEl = renderRestaurants(restaurant);
        restaurantSection.append(restaurantsEl);
    }

});