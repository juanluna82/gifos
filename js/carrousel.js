

////////////////////////////////////////////////////////////////////// TRENDING SLIDER //////////////////////////////////////////////////////////// //

let arrayOfGifs = []
let arrayOfGifsUser = []
let arrayOfGifsTitle = [];
let firstIF = 0;
const numberOfImg = 4;
let urlIdCarrousel = [];
let fav;
let offseTrend = 0;


function gifosTrendingLoad() {
    
    let limiTrend = 3;
    let trend = myFetch(`https://api.giphy.com/v1/gifs/trending?api_key=wBmQSDXkME1hKn80LC75kd2OSaeifuM4&limit=${limiTrend}&offset=${offseTrend}`);
    trend.then(json => {

        //CARGA DE GIF EN ARRAYS/////////////////////////////////////////////////////////////////////////////////
        for (let index = 0; index < json.data.length; index++) {
            
            let download = document.getElementsByClassName("downS")[index];

            arrayOfGifs.push(json.data[index].images.original.url)//url del gif .
            arrayOfGifsUser.push(json.data[index].username)//username del gif .
            arrayOfGifsTitle.push(json.data[index].title)//Title del gif
            urlIdCarrousel.push(json.data[index].id);
            console.log(arrayOfGifs);
            document.getElementById("gif" + (index + 1)).setAttribute("src", arrayOfGifs[index]);
            document.getElementById("h2" + (index + 1)).textContent = arrayOfGifsUser[index];
            document.getElementById("p" + (index + 1)).textContent = arrayOfGifsTitle[index];

            let fav = document.getElementsByClassName("fav")[index];
            hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");

//// VER KEY Y FOUNDSS DE FAVORITOS

            let key = localStorage.key(index);
            //let encontrado = sessionStorage.getItem(`${urlIdCarrousel[index]}`);
            //let comparacion = urlIdCarrousel[index];
            console.log("para COMPRARAR EN LOCALSTORAGE KEY(INDEX)" + key);
            //console.log("para comprar " + comparacion);
            let found = urlIdCarrousel.find(e => e = key);
            console.log("urlIdCarrousel " + urlIdCarrousel)
            console.log("FIND INDEXXX", urlIdCarrousel.findIndex(element => element = key))
            console.log("FOUND " + found)
            // if (key == null || key != comparacion)
            key;
            if (found == true) {
                console.log("FOUNDDDDDDDDDDDDDDDDDDDDDDDD")
                
                fav.setAttribute("src", "assets/icon-fav-active.svg");
                hoverSearch(fav, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
            } else {
 
                fav.setAttribute("src", "assets/icon-fav.svg");
                console.log("encontrado REALLL icon active")

            }


            

            //CLICK EN ICONO FAVORITO////
            

            fav.addEventListener("click", function (e) {
                e.preventDefault();

                encontrado = localStorage.getItem(`${urlIdCarrousel[index]}`);
                console.log("buscamos = " + encontrado);
                if (encontrado === null) {
                    console.error(` agrega ${urlIdCarrousel[index]}`);
                    localStorage.setItem(`${urlIdCarrousel[index]}`, `{"url": "${arrayOfGifs[index]}", "user": "${arrayOfGifsUser[index]}", "title": "${arrayOfGifsTitle[index]}"}`);
                    fav.setAttribute("src", "assets/icon-fav-active.svg")
                    hoverSearch(fav, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
                } else {
                    console.error("ESTA EN SESSION Y borro " + urlIdCarrousel[index]);
                    localStorage.removeItem(`${urlIdCarrousel[index]}`);
                    fav.setAttribute("src", "assets/icon-fav.svg")
                    hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");

                }
            });

        }
            ////// FUERA DEL FOR ////
        console.log("urlIdCarrousel " + urlIdCarrousel)

    })
        .catch(err => console.error(err));
        
};


gifosTrendingLoad();


console.log("urlIdCarrousel " + urlIdCarrousel)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///// BOTON RIGHT //////////////////

let buttonNN = document.getElementById("right");

buttonNN.addEventListener('click', () => {
    if (offseTrend >= 9) {
        offseTrend = 9;
    } else {
        
        offseTrend += 3;
        arrayOfGifs = []
        arrayOfGifsUser = []
        arrayOfGifsTitle = []
        urlIdCarrousel = [];
        found = [];
        gifosTrendingLoad();
    }
});

////// BOTON LEFT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let buttonNL = document.getElementById("left");
buttonNL.addEventListener('click', () => {

    if (offseTrend <= 0) {
        offseTrend = 0;

    } else {
        offseTrend = (offseTrend - 3);
        arrayOfGifs = []
        arrayOfGifsUser = []
        arrayOfGifsTitle = [];
        urlIdCarrousel = [];
        console.log("offseTrend = " + offseTrend);
        gifosTrendingLoad();
    }

});



/*
function gifosTrendingLoad() {
    let limit = 13;
    let trend = myFetch(`https://api.giphy.com/v1/gifs/trending?api_key=wBmQSDXkME1hKn80LC75kd2OSaeifuM4&limit=${limit}`);
    trend.then(json => {


        //CARGA DE GIF EN ARRAYS/////////////////////////////////////////////////////////////////////////////////
        for (let index = 1; index < json.data.length; index++) {
            arrayOfGifs.push(json.data[index].images.original.url)//url del gif .
            arrayOfGifsUser.push(json.data[index].username)//username del gif .
            arrayOfGifsTitle.push(json.data[index].title)//Title del gif
            urlIdCarrousel.push(json.data[index].id);

        }

        // FIRST LOAD DE GIFOS ///////////////////////////////////////////////////////////////////////////////////
        for (let index = 1; index < numberOfImg; index++) {
            console.log("First if antes de click = " + firstIF);
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF - 1]);
            document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - 1];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - 1];
            fav = document.getElementsByClassName("fav")[index - 1];
            let max = document.getElementsByClassName("max")[index - 1];
            let down = document.getElementsByClassName("down")[index - 1];
            console.log(fav);
            hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
            hoverSearch(max, "assets/icon-max-hover.svg", "assets/icon-max-normal.svg");
            hoverSearch(down, "assets/icon-download-hover.svg", "assets/icon-download.svg");



            let encontrado = sessionStorage.getItem(`${urlIdCarrousel[index + firstIF - 1]}`);
            if (encontrado === null) {
                console.log("encontrado NULL icon normal")
                fav.setAttribute("src", "assets/icon-fav.svg");
            } else {
                console.log("encontrado REALLL icon active")
                fav.setAttribute("src", "assets/icon-fav-active.svg");
                hoverSearch(fav, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
            }
            ///// CLICK en ICONO FAVORITO
            fav.addEventListener("click", () => {

                    //console.log("First if en click = " + firstIF);
                    //console.log("arrayOfGifs[index - 1 + firstIF] = " + arrayOfGifs[index - 1 + firstIF]);
                    //console.log("urlIdCarrousel[index - 1 + firstIF] = " + urlIdCarrousel[index - 1 + firstIF]);
                    //console.log(fav);

                fav = document.getElementsByClassName("fav")[index - 1];
                encontrado = sessionStorage.getItem(`${urlIdCarrousel[index + firstIF - 1]}`);
                console.log("buscamos = " + urlIdCarrousel[index + firstIF - 1]);
                console.log(sessionStorage.getItem(`${urlIdCarrousel[index + firstIF - 1]}`));
                if (encontrado === null) {
                    console.log(` agrega ${urlIdCarrousel[index + firstIF - 1]}`);
                    sessionStorage.setItem(`${urlIdCarrousel[index + firstIF - 1]}`, arrayOfGifs[index + firstIF - 1]);
                    fav.setAttribute("src", "assets/icon-fav-active.svg")
                    hoverSearch(fav, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
                } else {
                    console.log("borro de favoritos");
                    sessionStorage.removeItem(`${urlIdCarrousel[index + firstIF - 1]}`);
                    fav.setAttribute("src", "assets/icon-fav.svg")
                    hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
                }

            })

        }

    })
        .catch(err => console.error(err));
};

gifosTrendingLoad();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//BUCLE CARROUSEL////
let gifCicle = [];

for (let index = 1; index < 12; index++) {

    gifCicle.push(index % 12);

}
console.log(gifCicle);


////// BOTON RIGHT //////////////////

function updateGifosTrending() {

    for (let index = 1; index < 4; index++) {

        if (firstIF < 0) {
            firstIF = 0;
            gifosTrendingLoad();

        } else if (firstIF > 8) {
            firstIF = 8;
        } else {
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF - 1])
            document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - 1];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - 1];
            // console.error(" ver ---- " + gifCicle[(index + firstIF - 1)])
            console.log("firstIF = " + firstIF);
            console.log(arrayOfGifs);
            console.log(arrayOfGifs[index + firstIF - 1]);



            if (encontrado === null) {
                console.log("encontrado NULL icon normal")
                fav.setAttribute("src", "assets/icon-fav.svg");
            } else {
                console.log("encontrado REALLL icon active")
                fav.setAttribute("src", "assets/icon-fav-active.svg");
                hoverSearch(fav, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
            }
        }
    }
    firstIF++;


}

let buttonNN = document.getElementById("right");
buttonNN.addEventListener('click', () => {
    updateGifosTrending();
});

////// BOTON LEFT //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateGifosLeft() {
    firstIF--;
    for (let index = 1; index < 4; index++) {

        if (firstIF < 0 || (index + firstIF - 2) < 0) {

            gifosTrendingLoad();
            firstIF = 0;
            console.log("firstIF = " + firstIF);

        }
        else {
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF - 1])
            document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - 1];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - 1];
            //console.error(" ver ---- " + (gifCicle[(index + firstIF - 3)]));
            console.log("firstIF = " + firstIF);
        }

    }

}

let buttonNL = document.getElementById("left");
buttonNL.addEventListener('click', () => {
    updateGifosLeft();

});




                // FIRST LOAD DE GIFOS ///////////////////////////////////////////////////////////////////////////////////
                for (let index = 1; index < numberOfImg; index++) {
                    console.log("First if antes de click = " + firstIF);

                    console.log(fav);
                    hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
                    hoverSearch(max, "assets/icon-max-hover.svg", "assets/icon-max-normal.svg");
                    hoverSearch(down, "assets/icon-download-hover.svg", "assets/icon-download.svg");
                    ///// CLICK en ICONO FAVORITO
                    fav.addEventListener("click", () => {

                            //console.log("First if en click = " + firstIF);
                            //console.log("arrayOfGifs[index - 1 + firstIF] = " + arrayOfGifs[index - 1 + firstIF]);
                            //console.log("urlIdCarrousel[index - 1 + firstIF] = " + urlIdCarrousel[index - 1 + firstIF]);
                            //console.log(fav);


                        let encontrado = sessionStorage.getItem(`${urlIdCarrousel[index - 1 + firstIF]}`);
                        console.log("buscamos = " + encontrado);
                        console.log(sessionStorage.getItem(`${urlIdCarrousel[index - 1 + firstIF]}`));
                        if (encontrado === null) {
                            console.log(` agrega ${urlIdCarrousel[index - 1 + firstIF]}`);
                            sessionStorage.setItem(`${urlIdCarrousel[index - 1 + firstIF]}`, arrayOfGifs[index - 1 + firstIF]);
                            fav.setAttribute("src", "assets/icon-fav-active.svg")
                            hoverSearch(fav, "assets/icon-fav-active.svg", "assets/icon-fav-active.svg");
                        } else {
                            console.log("borro de favoritos");
                            sessionStorage.removeItem(`${urlIdCarrousel[index - 1 + firstIF]}`);
                            fav.setAttribute("src", "assets/icon-fav.svg")
                            hoverSearch(fav, "assets/icon-fav-hover.svg", "assets/icon-fav.svg");
                        }

                    })

                }
*/
