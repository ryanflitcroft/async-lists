// import functions and grab DOM elements
import { getRestaurants, getParks, getBridges, getSports } from './fetch-utils.js';
import { renderRestaurants, renderParks, renderBridges, renderSports } from './render-utils.js';

const restaurantSection = document.querySelector('#restaurant-section');
const parksSection = document.querySelector('#parks-section');
const bridgesSection = document.querySelector('#bridges-section');
const sportsSection = document.querySelector('#sports-section');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


window.addEventListener('load', async() => {
    const restaurants = await getRestaurants();
    const parks = await getParks();
    const bridges = await getBridges();
    const sports = await getSports();

    for (let restaurant of restaurants) {
        const restaurantsEl = renderRestaurants(restaurant);
        restaurantSection.append(restaurantsEl);
    }

    for (let park of parks) {
        const parksEl = renderParks(park);
        parksSection.append(parksEl);
    }

    for (let bridge of bridges) {
        const bridgesEl = renderBridges(bridge);
        bridgesSection.append(bridgesEl);
    }

    for (let sport of sports) {
        const sportsEl = renderSports(sport);
        sportsSection.append(sportsEl);
    }

});