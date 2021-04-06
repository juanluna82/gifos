                                        //////UTILITIES///////////////

const myApiKey = "wBmQSDXkME1hKn80LC75kd2OSaeifuM4";

/** funcion de fetch para cualquier URL */
async function myFetch(url) {
    let res= await fetch(url);
    let json = await res.json();
    return json;
}



/////////// INPUT SEARCH y SUGERENCIAS////////

let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('lupaSug');
let suggestion = document.getElementsByClassName('jsSug');
let results = document.getElementById("results");
let gifView = [];
let searchString = "";
////// KEYPRESS SUGERENCIAS Y BUSQUEDA DE GIFOS////////


searchInput.addEventListener("keyup", (e) => {
    searchString = e.target.value;
    // IF PRESS ENTER
    gifoResult();
    // me vacia el input ( y si busco previamente lo borre y busque la palabra nueva)
    /*filteredGifView = gifView.filter(view => {
        return gifoRes.includes(searchString) /*|| view.house.includes(searchString)
       
        })
        console.log(filteredGifView);*/
     
        /// ELSE LLAMA A SUGGESTIONS
        searchSugg(); 
});


/////////// INPUT SEARCH////////
 function searchValue() {
    let newSearch = myFetch(`https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=Mascotas&limit=50`);
    
    newSearch.then(json => {
        console.log(json);
        for (let i = 0; i < 1; i++) {
        console.log(json.data);
        results.innerHTML = gifoResult();
        }
        
    })

        // HAY QUE VER A PAGINA DE ERROR///
        .catch(err => console.error(err));
};



//****************************************************//////////////// RESULTADOS DE BUSQUEDA ///////////////////////////////////************************* */
  
function gifoResult() {
    let limit = 50;
    
    let info = myFetch(`https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=${searchString}&limit=${limit}`);
    info.then(json => {
        ///crear div titulo busqueda////
        let titleSearch = document.createElement("div");
        titleSearch.id = "titleSearch";
        results.appendChild(titleSearch);

        let lineTitle = document.createElement("div");
        lineTitle.id = "lineTitle";
        let resultsTitle = document.createElement("h2");

        titleSearch.appendChild(lineTitle);
        titleSearch.appendChild(resultsTitle);
        resultsTitle.innerHTML = "Mascotas";
        ///crear div grid con resultados////
        let gifosGrid = document.createElement("div");
        results.appendChild(gifosGrid);
        gifosGrid.setAttribute("class", "gifosGrid");

        ///buscar resultados y agregar al div grid////
        for (let i = 0; i < 12; i++) {

            console.log(json.data[i].images.fixed_width.url);

            // crear div con el overlay con iconos en cada gifos////
            //div general
            let divGifos = document.createElement("div");
            gifosGrid.appendChild(divGifos);
            divGifos.setAttribute("class", "gifos");
            //div contenedor de iconos
            let iconsGifos = document.createElement("div");
            divGifos.appendChild(iconsGifos);
            iconsGifos.setAttribute("class", "icons_gifos");

            //icono favoritos//
            let aFavourites = document.createElement("a");
            iconsGifos.appendChild(aFavourites);
            let favourites = document.createElement("img");
            aFavourites.appendChild(favourites);
            favourites.setAttribute("class", "fav");
            favourites.setAttribute("id", "favouritesS");
            favourites.setAttribute("src", "assets/icon-fav.svg");
            //icono download//
            let aDownload = document.createElement("a");
            iconsGifos.appendChild(aDownload);
            let download = document.createElement("img");
            aDownload.appendChild(download);
            download.setAttribute("class", "down");
            download.setAttribute("id", "downS");
            download.setAttribute("src", "assets/icon-download.svg");
            //icono maximize//
            let aMax = document.createElement("a");
            iconsGifos.appendChild(aMax);
            let max = document.createElement("img");
            aMax.appendChild(max);
            max.setAttribute("class", "max");
            max.setAttribute("id", "maxS");
            max.setAttribute("src", "assets/icon-max-normal.svg");


            // TRAE GIFOS DE LA API////
            let gifo = document.createElement("img");
            gifo.setAttribute("src", json.data[i].images.fixed_width.url);
            gifo.setAttribute("class", "gif");

            divGifos.appendChild(gifo);


            /// User  y Titulo del GIFOS traido de la API/////

            // div contenedor user///
            let divUser = document.createElement("div");
            divGifos.appendChild(divUser)
            divUser.setAttribute("class", "user");
            // h2 user///
            let user = document.createElement("h2");
            user.innerHTML = json.data[i].username;
            divUser.appendChild(user);
            // p user///
            let pUser = document.createElement("p");
            pUser.innerHTML = json.data[i].title;
            divUser.appendChild(pUser);

        }

        // boton VER MAS////
        let verMas = document.createElement("input");
        results.appendChild(verMas);
        verMas.setAttribute("type", "button");
        verMas.setAttribute("value", "VER MÁS");

    })
        // HAY QUE VER A PAGINA DE ERROR///
        .catch(err => console.error(err));
};

//gifoResult();




/////////// INPUT SUGERENCIAS////////

function searchSugg() {
    let searchS = myFetch(`https://api.giphy.com/v1/tags/related/${searchString}?api_key=${myApiKey}&term=`);
    searchS.then(json => {
        console.log(json);
        for (let i = 0; i < 4; i++) {
            console.log(json.data[i].name);
            suggestion[i].textContent = `${json.data[i].name}`;
        }

    })

        .catch(err => console.error(err));
}





//****************************************************//////////////// TRENDING CARROUSEL ///////////////////////////////////************************* */


let arrayOfGifs = []
let arrayOfGifsUser = []
let arrayOfGifsTitle = [];
let firstIF = -1;
let infiniteIF = 1;
const numberOfImg = 4;

function gifosTrendingLoad() {
    let limit = 6;
    let trend = myFetch(`https://api.giphy.com/v1/gifs/trending?api_key=wBmQSDXkME1hKn80LC75kd2OSaeifuM4&limit=${limit}`);
    trend.then(json => {
        
        //CARGA DE GIF EN ARRAYS///
        for (let index = 1; index < json.data.length; index++) {
            arrayOfGifs.push(json.data[index].images.original.url)//url del gif .
            arrayOfGifsUser.push(json.data[index].username)//username del gif .
            arrayOfGifsTitle.push(json.data[index].title)//Title del gif .
        }
        // FIRST LOAD DE GIFOS ///
        for (let index = 1; index < numberOfImg; index++) {
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF]);
            document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF];
            console.log(index);
            console.log(firstIF);
            console.log(arrayOfGifsTitle[index + firstIF]);
        }

    })
        .catch(err => console.error(err));
};

gifosTrendingLoad();


////// BOTON RIGHT //////////////////

function updateGifosTrending() {
    
    for (let index = 1; index < numberOfImg; index++) {

        // CUANDO COMPLETA LA PRIMERA VUELTA Y VUELVE DEL GIFOS 0 //
        if ((firstIF+index) >= (arrayOfGifs.length-1)) {
            if (firstIF > arrayOfGifs.length) {
                firstIF = infiniteIF;
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[arrayOfGifs.length-2])
                document.getElementById("h2" + index).textContent = arrayOfGifsUser[arrayOfGifs.length-2];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[arrayOfGifs.length-2];
                console.error("index =" + index);
                console.error("IF INFINITE RIGHT");
                console.error("arrayOfGifs.length-2 SUMATORIA =" + (arrayOfGifs.length-2));
            } 


            else {
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF - arrayOfGifs.length + 1]);
                document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - arrayOfGifs.length + 1];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - arrayOfGifs.length + 1];
                //console.error("first > array " + firstIF > arrayOfGifs.length);
                console.error("index =" + index);
                console.error("IF ELSE RIGHT  (firstIF+index) >= (arrayOfGifs.length-1) y firstIF <= arrayOfGifs.length ");
                console.log("FirstIF =" +firstIF);
                //console.log("array.lengt =" + arrayOfGifs.length);
                console.error("index + firstIF - arrayOfGifs.length + 1 SUMATORIA =" + (index + firstIF - arrayOfGifs.length + 1));
                //console.log(arrayOfGifsTitle[index + firstIF - arrayOfGifs.length + 1]);               
            }
        } 

        else if (firstIF < -1) {
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[arrayOfGifs.length + firstIF + index + 1]);
           /* document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - arrayOfGifs.length + 1];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - arrayOfGifs.length + 1];*/
            
            //console.error("first > array " + firstIF > arrayOfGifs.length);
            console.error("index =" + index);
            console.error("RIGHT MENOR < -1");
            console.error("arrayOfGifs.length + firstIF + index + 1 SUMATORIA =" + (arrayOfGifs.length + firstIF + index + 1));
            console.log("FirstIF =" +firstIF);
            //console.log("array.lengt =" + arrayOfGifs.length);
            //console.log(arrayOfGifsTitle[arrayOfGifs.length + firstIF + index - 1]);  
        }

        //PRIMERA VUELTA DE TRENDING GIFOS//
        else {
            
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF + 1]);
            document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF + 1];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF + 1];
            
            //console.log("firstIF+index =" + (firstIF+index));
           // console.log("arrayOfGifs.length-1 >=" + (arrayOfGifs.length - 1));
            console.error("index =" + index);
            console.error("RIGHT NORMAL PARA LA DERECHA");
            console.log("FirstIF =" + firstIF);
            console.error("index + firstIF + 1 SUMATORIA =" + (index + firstIF + 1));
            //console.log(arrayOfGifsTitle[index + firstIF + 1]);
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
    
    for (let index = 1; index < numberOfImg; index++) {

        // CUANDO COMPLETA LA PRIMERA VUELTA Y VUELVE DEL GIFOS 0 //
        if ((firstIF+index) <= 0) {
            if (firstIF > arrayOfGifs.length) {
                firstIF = infiniteIF;
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[arrayOfGifs.length-2])
                /*document.getElementById("h2" + index).textContent = arrayOfGifsUser[arrayOfGifs.length-2];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[arrayOfGifs.length-2];*/
                //console.error("<= 0 " + (firstIF+index) <= 0);
                //console.error("first > array " + firstIF > arrayOfGifs.length);
                console.error("index =" + index);
                console.error("LEFT IF INFINITE");
                console.error("arrayOfGifs.length-2 SUMATORIA =" + (arrayOfGifs.length-2));
                
            } else {
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[arrayOfGifs.length + firstIF + index - 1]);
               /* document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - arrayOfGifs.length + 1];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - arrayOfGifs.length + 1];*/
                
                //console.error("first > array " + firstIF > arrayOfGifs.length);
                console.error("index =" + index);
                console.error("LEFT firstIF+index MAYOR 0 y firstIF > arrayOfGifs.length");
                console.error("arrayOfGifs.length + firstIF + index - 1 SUMATORIA =" + (arrayOfGifs.length + firstIF + index - 1));
                console.log("FirstIF =" +firstIF);
               // console.log("array.lengt =" + arrayOfGifs.length);
                //console.log(arrayOfGifsTitle[arrayOfGifs.length + firstIF + index - 1]);               
            }
        } 
        //PRIMERA VUELTA DE TRENDING GIFOS//
        else {
           
            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF + 1]);
            /*document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - arrayOfGifs.length - 1];
            document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF + 1];*/
            
            //console.error("first > array " + firstIF > arrayOfGifs.length);
            //console.log("firstIF+index =" + (firstIF+index));
            //console.log("arrayOfGifs.length-1 >=" + (arrayOfGifs.length));
            console.error("index =" + index);
            console.error("LEFT NORMAL firstIF+index MAYOR 0");
            console.error("index + firstIF + 1 SUMATORIA =" + (index + firstIF + 1));
            console.log("FirstIF =" + firstIF);
            //console.log(arrayOfGifsTitle[index + firstIF - 1]);
        }
    }
    firstIF--;
}


let buttonNL = document.getElementById("left");
buttonNL.addEventListener('click', () => {
    updateGifosLeft();

});