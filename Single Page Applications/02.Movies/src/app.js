


import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register";
// create plasceholder modules for every view
// configure and test navigation 
// implement modules
// - create async functions for requests
// - implement DOM logic

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
};
const nav = document.querySelector('nav').addEventListener('click', (event) => {
    const view = views[event.target.id];
    if (typeof view == 'function') {
        event.preventDefault();
        view();
    }

});

// Order of views:
// - catalog (home view)
// - login/register
// - create
// - details
// - likes
// - edit
// - delete

// start application in home view (catalog)
showHome();

export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        nav.querySelector('#welcomeMsg').textContent = `welcome, ${userData.email}`
        [...nav.querySelector('.user')].forEach(e => e.style.display = 'block');
        [...nav.querySelector('.guest')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelector('.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelector('.guest')].forEach(e => e.style.display = 'block');
    }
}
