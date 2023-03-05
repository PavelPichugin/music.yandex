let menu = document.querySelector(`.navbar_str`);
let navbar = document.querySelector(`.navbar_po`);
let header_two = document.querySelector(`.header_two`);
let otmena = document.querySelector(`.otmena`);
let pashalka = document.querySelector(`.one`);
let pashalka_one = document.querySelector(`.pashalka_one`);
let pashalka_two = document.querySelector(`.pashalka_two`);


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
let counter = 0 ;
pashalka.addEventListener(`click`, function(e){
    pashalka_one.classList.toggle(`pashalka_one_before`);
    pashalka_two.classList.toggle(`pashalka_two_before`);

});
pashalka_two.addEventListener(`click`, function(e){
    pashalka_two.classList.toggle(`pashalka_two_before`);
    pashalka_one.classList.toggle(`pashalka_one_before`);

});
pashalka_one.addEventListener(`click`, function(e){
    pashalka_one.classList.toggle(`pashalka_one_before`);
    pashalka_two.classList.toggle(`pashalka_two_before`);

});
