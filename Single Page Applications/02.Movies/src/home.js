// initialization
// - find relevant section

import { showCreate } from "./create.js";
import { showView } from "./dom.js";

// - detach section from DOM
const section = document.getElementById('home-page');
section.getElementById('createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});
section.remove();

// display logic

export function showHome() {
    showView(section);
}

async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies');

    const data = await res.json();

    return data;
}

function createMovieCard(movie) {
const element = e('div', {className: 'card mb-4'});
element.iinerHTML = ``
}

window.getMovies = getMovies; 