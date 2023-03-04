let menu = document.querySelector(`.navbar_str`);
let navbar = document.querySelector(`.navbar_po`);
let header_two = document.querySelector(`.header_two`);
let otmena = document.querySelector(`.otmena`);

navbar.addEventListener(`click`, function(e){
    menu.classList.toggle(`do`);
    header_two.classList.toggle(`header_two_before`);
    otmena.classList.toggle(`otmena_post`);
});
otmena.addEventListener(`click`, function(e){
    menu.classList.toggle(`do`);
    header_two.classList.toggle(`header_two_before`);
    otmena.classList.toggle(`otmena_post`);
});