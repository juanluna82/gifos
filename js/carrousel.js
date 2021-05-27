////////////////////////////////////////////////////////////////////// TRENDING SLIDER //////////////////////////////////////////////////////////// //

let arrayOfGifs = []
let arrayOfGifsUser = []
let arrayOfGifsTitle = [];
let firstIF = 0;
let firstFav = 0;
const numberOfImg = 4;


function gifosTrendingLoad() {
    let limit = 13;
    let trend = myFetch(`https://api.giphy.com/v1/gifs/trending?api_key=wBmQSDXkME1hKn80LC75kd2OSaeifuM4&limit=${limit}`);
    trend.then(json => {

        //CARGA DE GIF EN ARRAYS/////////////////////////////////////////////////////////////////////////////////
        for (let index = 1; index < json.data.length; index++) {
            arrayOfGifs.push(json.data[index].images.original.url)//url del gif .
            arrayOfGifsUser.push(json.data[index].username)//username del gif .
            arrayOfGifsTitle.push(json.data[index].title)//Title del gif      
        }

        // FIRST LOAD DE GIFOS ///////////////////////////////////////////////////////////////////////////////////
        for (let index = 1; index < numberOfImg; index++) {
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF - 1]);
            document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - 1];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - 1];


        }

    })
        .catch(err => console.error(err));
};

gifosTrendingLoad();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// VER TEMA DE QUE QUEDEN SELECCIONADOS LOS CORAZONES CUANDO SELECCIONO UN GIF////

/// HOVER, ACTIVE Y STORAGE DE GIF TRENDINGS

// HOVER
function hoverFav() {
    for (let index = 0; index < array.length; index++) {
        /// HOVER FAV de TRENDING
        let fav = document.getElementsByClassName("fav");
        console.log(fav)
        function mouseOverFav() {
            fav[index - 1].setAttribute("src", "assets/icon-fav-hover.svg");
        }
        console.log(fav[index - 1])
        fav[index - 1].addEventListener('mouseover', mouseOverFav);

        function mouseOut() {
            fav[index - 1].setAttribute("src", "assets/icon-fav.svg");
        }

        fav[index - 1].addEventListener('mouseout', mouseOut);


        //ACTIVE FAV 
        function storageFav() {
            let press = 1;
            fav[index - 1].addEventListener('click', () => {
                if (press == 1) {
                    fav[index - 1].setAttribute("src", "assets/icon-fav-active.svg");
                    fav[index - 1].removeEventListener("mouseout", mouseOut);
                    fav[index - 1].removeEventListener("mouseover", mouseOverFav);
                    press++

                } else {
                    fav[index - 1].setAttribute("src", "assets/icon-fav.svg");
                    fav[index - 1].addEventListener("mouseout", mouseOut);
                    fav[index - 1].addEventListener("mouseover", mouseOverFav);
                    press = 1;
                }

                let encontrado = sessionStorage.getItem(`fav${gifCicle[(index + firstIF - 1)] + 1000}`);
                console.log("buscamos = " + encontrado);
                if (encontrado === null) {
                    console.log("FIRST IF ------------------" + firstIF);
                    console.log(` agrega fav${gifCicle[(index + firstIF - 1)] + 1000}`)
                    sessionStorage.setItem(`fav${gifCicle[(index + firstIF - 1)] + 1000}`, arrayOfGifs[gifCicle[(index + firstIF - 1)]]);
                } else {
                    console.log(`saca fav${gifCicle[(index + firstIF - 1)] + 1000}`)
                    sessionStorage.removeItem(`fav${gifCicle[(index + firstIF - 1)] + 1000}`);
                }
            });
        }
        storageFav();


        // DOWNLOAD
        let items = document.getElementsByClassName("down");

        items[index - 1].addEventListener('mouseover', () => {
            items[index - 1].setAttribute("src", "assets/icon-download-hover.svg");
        });
        items[index - 1].addEventListener('mouseout', () => {
            items[index - 1].setAttribute("src", "assets/icon-download.svg");
        });


        // MAXIMIZE
        let max = document.getElementsByClassName("max");
        max[index - 1].addEventListener('mouseover', () => {
            max[index - 1].setAttribute("src", "assets/icon-max-hover.svg");
        });
        max[index - 1].addEventListener('mouseout', () => {
            max[index - 1].setAttribute("src", "assets/icon-max-normal.svg");
        });

    }
}
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    //BUCLE CARROUSEL////
    let gifCicle = [];

    for (let index = 1; index < 40; index++) {

        gifCicle.push(index % 12);

    }
    console.log(gifCicle);

    ////// BOTON RIGHT //////////////////

    function updateGifosTrending() {

        for (let index = 1; index < 4; index++) {

            if (firstIF < 0) {
                firstIF = 0;
                gifosTrendingLoad();

            }
            else {
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[gifCicle[(index + firstIF - 1)]])
                document.getElementById("h2" + index).textContent = arrayOfGifsUser[gifCicle[(index + firstIF - 1)]];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[gifCicle[(index + firstIF - 1)]];
                console.error(" ver ---- " + gifCicle[(index + firstIF - 1)])
                console.log("firstIF = " + firstIF);
            }
        }
        firstIF++

    }

    let buttonNN = document.getElementById("right");
    buttonNN.addEventListener('click', () => {
        updateGifosTrending();
    });

    ////// BOTON LEFT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function updateGifosLeft() {
        for (let index = 1; index < 4; index++) {

            if (firstIF < 0 || (index + firstIF - 3) < 0) {

                gifosTrendingLoad();
                firstIF = 1;
                console.log("firstIF = " + firstIF);

            }
            else {
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[(gifCicle[(index + firstIF - 3)])])
                document.getElementById("h2" + index).textContent = arrayOfGifsUser[(gifCicle[(index + firstIF - 3)])];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[(gifCicle[(index + firstIF - 3)])];
                console.error(" ver ---- " + (gifCicle[(index + firstIF - 3)]));
                console.log("firstIF = " + firstIF);
            }

        }
        firstIF--;

    }

    let buttonNL = document.getElementById("left");
    buttonNL.addEventListener('click', () => {
        updateGifosLeft();

    });
