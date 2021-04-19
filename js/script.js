
/////////////////////////////////
// HOVERS DE MODO DIURNO//////////////////////////////////////////////////////////////////

// HOVER de iconos GIFOS/////////////////////////////////
// FAVOURITES
let fav = document.getElementsByClassName("fav");
for (let index = 0; index < fav.length; index++) {

        fav[index].addEventListener('mouseover', () => {
                fav[index].setAttribute("src", "assets/icon-fav-hover.svg");
                
        });
        fav[index].addEventListener('mouseout', () => {
                fav[index].setAttribute("src", "assets/icon-fav.svg");
                
        });
        
        console.log(fav);
        //ACTIVE FAV REVISAR /&/&/&!/&"/!&"/!&/&!/&!"&!"????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     /*   fav[index].addEventListener('click', () => {
                fav[index].setAttribute("src", "assets/icon-fav-active.svg");
                console.log(fav);
        })*/

};

// DOWNLOAD
let items = document.getElementsByClassName("down");
for (let index = 0; index < items.length; index++) {
        items[index].addEventListener('mouseover', () => {
                items[index].setAttribute("src", "assets/icon-download-hover.svg");
        });
        items[index].addEventListener('mouseout', () => {
                items[index].setAttribute("src", "assets/icon-download.svg");
        });
};

// MAXIMIZE
let max = document.getElementsByClassName("max");
for (let index = 0; index < max.length; index++) {
        max[index].addEventListener('mouseover', () => {
                max[index].setAttribute("src", "assets/icon-max-hover.svg");
        });
        max[index].addEventListener('mouseout', () => {
                max[index].setAttribute("src", "assets/icon-max-normal.svg");
        });
};




// HOVER de iconos sociales/////////////////////////////////
// FACEBOOK
let face = document.getElementById("facebook");
console.log(face);
face.addEventListener('mouseover', () => {
        facebook_hover = document.getElementById("facebook_hover");
        face.setAttribute("src", "assets/icon_facebook_hover.svg");
})

face.addEventListener('mouseout', () => {
        facebook_hover = document.getElementById("facebook_hover");
        face.setAttribute("src", "assets/icon_facebook.svg");
})
// TWITTER

let twit = document.getElementById("twitter");
console.log(twit);
twit.addEventListener('mouseover', () => {
        twit_hover = document.getElementById("twit_hover");
        twit.setAttribute("src", "assets/icon-twitter-hover.svg");
})

twit.addEventListener('mouseout', () => {
        twit_hover = document.getElementById("twit_hover");
        twit.setAttribute("src", "assets/icon-twitter.svg");
})

// INSTAGRAM

let inst = document.getElementById("instagram");
console.log(inst);
inst.addEventListener('mouseover', () => {
        inst_hover = document.getElementById("inst_hover");
        inst.setAttribute("src", "assets/icon_instagram-hover.svg");
})

inst.addEventListener('mouseout', () => {
        inst_hover = document.getElementById("inst_hover");
        inst.setAttribute("src", "assets/icon_instagram.svg");
})


// HOVER de NAV/////////////////////////////////
// CREATE
let create = document.getElementById("create");
console.log(create);
create.addEventListener('mouseover', () => {
        create_hover = document.getElementById("create_hover");
        create.setAttribute("src", "assets/CTA-crear-gifo-hover.svg");
})

create.addEventListener('mouseout', () => {
        create_hover = document.getElementById("create_hover");
        create.setAttribute("src", "assets/button-crear-gifo.svg");
});



// ACTIVE de NAV/////////////////////////////////
// CREATE
let createActive = document.getElementById("create");
console.log(createActive);
createActive.addEventListener('click', () => {
        create_active = document.getElementById("create_active");
        createActive.setAttribute("src", "assets/CTA-crear-gifo-active.svg");
})


// HOVER de ARROW/////////////////////////////////
// LEFT
let left = document.getElementById("left");
console.log(left);
left.addEventListener('mouseover', () => {
        left_hover = document.getElementById("left_hover");
        left.setAttribute("src", "assets/button-slider-left-hover.svg");
})

left.addEventListener('mouseout', () => {
        left_hover = document.getElementById("left_hover");
        left.setAttribute("src", "assets/button-slider-left.svg");
})

// RIGHT
let right = document.getElementById("right");
console.log(right);
right.addEventListener('mouseover', () => {
        right_hover = document.getElementById("right_hover");
        right.setAttribute("src", "assets/button-slider-right-hover.svg");
})

right.addEventListener('mouseout', () => {
        right_hover = document.getElementById("right_hover");
        right.setAttribute("src", "assets/button-slider-right.svg");
})


//////////////////////////////////////////////////////////////////////////////////////////////
// HOVERS DE MODO NOCTURNO////////////////////////////////////////////////////////////////////////////////////

/*funcion para pasar camodo nocturno cuando aprieto el MODO NOCTURNO */
let night_mode = false;
let clickNoc = document.getElementById("click_mn");
console.log(clickNoc);
clickNoc.addEventListener('click', () => {
        //IF CAMBIO A NOCTURNO/// 
        if (night_mode === false) {
                //MODIFICACION GENERAL MODO NOCTURNO
                let noc_mode = document.getElementById("noc_mode");
                noc_mode.setAttribute("href", "style/nocturno/nocturno.css");
                clickNoc.textContent = "Modo Diurno";
                console.log(clickNoc);
                console.log(night_mode);
                night_mode = true;
                console.log(night_mode);
                //LOGO HEADER
                let logoNoc = document.getElementById("logo");
                console.log(logoNoc);
                logoNoc.setAttribute("src", "assets/Logo-modo-noc.svg");
                // HEADER +
                let createNight = document.getElementById("create");
                console.log(createNight);
                createNight.setAttribute("src", "assets/CTA-crar-gifo-modo-noc.svg");
                // HOVER de HEADER +/////////////////////////////////
                // CREATE
                createNight.addEventListener('mouseover', () => {
                        createNight.setAttribute("src", "assets/CTA-crear-gifo-modo-noc.svg");
                })
                createNight.addEventListener('mouseout', () => {
                        createNight.setAttribute("src", "assets/CTA-crear-gifo-hover-modo-noc.svg");
                })
                //INPUT  X
                let close = document.getElementById("close");
                console.log(close);
                close.setAttribute("src", "assets/close-modo-noct.svg");
                // INPUT LUPAS
                document.getElementById("lupaSug").setAttribute("src", "assets/icon-search-modo-noct.svg");
                let lupaSug = document.getElementsByClassName("lupaSug");
                for (let index = 0; index < lupaSug.length; index++) {
                        lupaSug[index].setAttribute("src", "assets/icon-search-modo-noct.svg");
                }

                //ARROWS CARROUSEL
                //LEFT////
                let arrowLeft = document.getElementById("left")
                arrowLeft.setAttribute("src", "assets/button-slider-left-md-noct.svg");
                console.log(arrowLeft);
                // HOVER de ARROW LEFT/////////////////////
                arrowLeft.addEventListener('mouseover', () => {
                        left_hover = document.getElementById("left_hover");
                        arrowLeft.setAttribute("src", "assets/button-slider-left-hover.svg");
                })

                arrowLeft.addEventListener('mouseout', () => {
                        left_hover = document.getElementById("left_hover");
                        arrowLeft.setAttribute("src", "assets/button-slider-left-md-noct.svg");
                })

                //RIGHT///////////////////
                let arrowRight = document.getElementById("right")
                arrowRight.setAttribute("src", "assets/button-slider-right-md-noct.svg");
                console.log(arrowRight);
                // HOVER de ARROW Right/////////////////////
                arrowRight.addEventListener('mouseover', () => {
                        right_hover = document.getElementById("right_hover");
                        arrowRight.setAttribute("src", "assets/button-slider-right-hover.svg");
                })

                arrowRight.addEventListener('mouseout', () => {
                        right_hover = document.getElementById("right_hover");
                        arrowRight.setAttribute("src", "assets/button-slider-right-md-noct.svg");
                })

                //ICONOS REDES SOCIALES/////

                // FACEBOOK
                let face = document.getElementById("facebook");
                console.log(face);
                face.addEventListener('mouseover', () => {
                        facebook_hover = document.getElementById("facebook_hover");
                        face.setAttribute("src", "assets/icon_facebook_noc.svg");
                })

                face.addEventListener('mouseout', () => {
                        facebook_hover = document.getElementById("facebook_hover");
                        face.setAttribute("src", "assets/icon_facebook.svg");
                })

                // TWITTER

                let twit = document.getElementById("twitter");
                console.log(twit);
                twit.addEventListener('mouseover', () => {
                        twit_hover = document.getElementById("twit_hover");
                        twit.setAttribute("src", "assets/icon_twitter_noc.svg");
                })

                twit.addEventListener('mouseout', () => {
                        twit_hover = document.getElementById("twit_hover");
                        twit.setAttribute("src", "assets/icon-twitter.svg");
                })

                // INSTAGRAM

                let inst = document.getElementById("instagram");
                console.log(inst);
                inst.addEventListener('mouseover', () => {
                        inst_hover = document.getElementById("inst_hover");
                        inst.setAttribute("src", "assets/icon_instagram_noc.svg");
                })

                inst.addEventListener('mouseout', () => {
                        inst_hover = document.getElementById("inst_hover");
                        inst.setAttribute("src", "assets/icon_instagram.svg");
                })



        }

        //ELSE VUELTA AL DIURNO///        
        else {
                //VUELTA GENERAL MODO DIURNO
                let noc_mode = document.getElementById("noc_mode");
                noc_mode.setAttribute("href", "style/style.css");
                clickNoc.textContent = "Modo Nocturno";
                console.log(clickNoc);
                console.log(night_mode);
                night_mode = false;
                console.log(night_mode);
                // HEADER LOGO VUELTA DIURNO
                let logoNoc = document.getElementById("logo");
                console.log(logoNoc);
                logoNoc.setAttribute("src", "assets/logo-mobile.svg");
                // HEADER + VUELTA DIURNO
                let create = document.getElementById("create");
                console.log(create);
                create.setAttribute("src", "assets/button-crear-gifo.svg");
                create.addEventListener('mouseover', () => {
                        create.setAttribute("src", "assets/CTA-crear-gifo-hover.svg");
                })
                create.addEventListener('mouseout', () => {
                        create.setAttribute("src", "assets/button-crear-gifo.svg");
                })

                //INPUT  X VUELTA DIURNO
                let close = document.getElementById("close");
                console.log(close);
                close.setAttribute("src", "assets/close.svg");
                // INPUT LUPAS VUELTA DIURNO
                let lupaSug = document.getElementsByClassName("lupaSug");
                for (let index = 0; index < lupaSug.length; index++) {
                        lupaSug[index].setAttribute("src", "assets/icon-search.svg");
                }

                //ARROWS CARROUSEL VUELTA DIURNO
                //LEFT VUELTA DIURNO
                let left = document.getElementById("left");
                left.setAttribute("src", "assets/button-slider-left.svg")
                console.log(left);
                left.addEventListener('mouseover', () => {
                        left_hover = document.getElementById("left_hover");
                        left.setAttribute("src", "assets/button-slider-left-hover.svg");
                })

                left.addEventListener('mouseout', () => {
                        left_hover = document.getElementById("left_hover");
                        left.setAttribute("src", "assets/button-slider-left.svg");
                })

                // RIGHT VUELTA DIURNO

                //LEFT VUELTA
                let right = document.getElementById("right");
                right.setAttribute("src", "assets/button-slider-right.svg")
                console.log(right);
                right.addEventListener('mouseover', () => {
                        right_hover = document.getElementById("right_hover");
                        right.setAttribute("src", "assets/button-slider-right-hover.svg");
                })

                right.addEventListener('mouseout', () => {
                        right_hover = document.getElementById("right_hover");
                        right.setAttribute("src", "assets/button-slider-right.svg");
                })
                let face = document.getElementById("facebook");
                console.log(face);
                face.addEventListener('mouseover', () => {
                        facebook_hover = document.getElementById("facebook_hover");
                        face.setAttribute("src", "assets/icon_facebook_hover.svg");
                })

                face.addEventListener('mouseout', () => {
                        facebook_hover = document.getElementById("facebook_hover");
                        face.setAttribute("src", "assets/icon_facebook.svg");
                })
                // TWITTER

                let twit = document.getElementById("twitter");
                console.log(twit);
                twit.addEventListener('mouseover', () => {
                        twit_hover = document.getElementById("twit_hover");
                        twit.setAttribute("src", "assets/icon-twitter-hover.svg");
                })

                twit.addEventListener('mouseout', () => {
                        twit_hover = document.getElementById("twit_hover");
                        twit.setAttribute("src", "assets/icon-twitter.svg");
                })

                // INSTAGRAM

                let inst = document.getElementById("instagram");
                console.log(inst);
                inst.addEventListener('mouseover', () => {
                        inst_hover = document.getElementById("inst_hover");
                        inst.setAttribute("src", "assets/icon_instagram-hover.svg");
                })

                inst.addEventListener('mouseout', () => {
                        inst_hover = document.getElementById("inst_hover");
                        inst.setAttribute("src", "assets/icon_instagram.svg");
                })


        }
});






/// let menu abierto on clik abri menu



