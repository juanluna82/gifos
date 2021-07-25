
let favDiv = document.getElementById("favDiv");
let newRetrievedObject = [];
let blockFavClick = 0;
let gifId;

let urlMyGif = [];


let GifUp = JSON.parse(localStorage.getItem("myGifs"));

console.log("GifUp", GifUp);

function myGifos() {

    /// logo y titulo GENERAL MIS GIFOS

    let misGifDiv = document.createElement("div")
    searchDiv.before(misGifDiv);
    misGifDiv.setAttribute("class", "misGifDiv");
    misGifDiv.style.display = "flex";
    let favLogo = document.createElement("div")
    misGifDiv.appendChild(favLogo);
    favLogo.setAttribute("class", "favLogo");

    let FavImg = document.createElement("img")
    favLogo.appendChild(FavImg);
    FavImg.setAttribute("src", "assets/icon-mis-gifos.svg");
    FavImg.setAttribute("class", "FavImg");

    let FavTitle = document.createElement("h2")
    favLogo.appendChild(FavTitle);
    FavTitle.innerHTML = "Mis GIFOS";
    FavTitle.setAttribute("class", "FavTitle");

    if (GifUp == null || GifUp.length == 0) {

        // MIS GIFOS  SIN RESULTADOS
        let nonFav = document.createElement("div");
        misGifDiv.appendChild(nonFav);
        nonFav.setAttribute("class", "nonFav");

        let FavImg = document.createElement("img")
        nonFav.appendChild(FavImg);
        FavImg.setAttribute("src", "assets/icon-mis-gifos-sin-contenido.svg");
        FavImg.setAttribute("class", "FavImg");

        let FavTitle = document.createElement("h2")
        nonFav.appendChild(FavTitle);
        FavTitle.innerHTML = '¡Anímate a crear tu primer GIFO!  ';
        FavTitle.setAttribute("class", "FavTitle");


    } else {

        //// Muestra los gif en Mis favoritos

        // listado de gifos
        let gridFav = document.createElement("div");
        misGifDiv.appendChild(gridFav);
        gridFav.setAttribute("class", "gridFav");

        console.log("urlMyGif ANTES", urlMyGif);
        //// Rescata los gif del localStorage storage
        for (let i = 0; i < GifUp.length; i++) {
            gifId = GifUp[i];
            let uploadUrl = `https://api.giphy.com/v1/gifs?api_key=${myApiKey}&ids=${gifId}`;
            let misGifos = myFetch(uploadUrl)
            misGifos.then(json => {
                urlMyGif = json.data[0].images.fixed_width.url;
                let urlMyGifArray = [];
                urlMyGifArray.push(urlMyGif);
                console.log("urlMyGifArray", urlMyGifArray)
                // crear div con el overlay con iconos en cada gifos////
                //div general
                let divGifos = document.createElement("div");
                gridFav.appendChild(divGifos);
                divGifos.setAttribute("class", "gifos");
                //div contenedor de iconos
                let iconsGifos = document.createElement("div");
                divGifos.appendChild(iconsGifos);
                iconsGifos.setAttribute("class", "icons_gifos");

                //icono favoritos//
                let aTrash = document.createElement("a");
                iconsGifos.appendChild(aTrash);
                let trash = document.createElement("img");
                aTrash.appendChild(trash);
                trash.setAttribute("class", "favSearch");
                trash.setAttribute("src", "assets/icon-trash-normal.svg");
                hoverSearch(trash, "assets/icon-trash-hover.svg", "assets/icon-trash-normal.svg");

                //icono download//
                let aDownload = document.createElement("a");
                iconsGifos.appendChild(aDownload);
                let download = document.createElement("img");
                aDownload.appendChild(download);
                download.setAttribute("class", "downS");
                download.setAttribute("src", "assets/icon-download.svg");
                hoverSearch(download, "assets/icon-download-hover.svg", "assets/icon-download.svg");
                //icono maximize//
                let aMax = document.createElement("a");
                iconsGifos.appendChild(aMax);
                let max = document.createElement("img");
                aMax.appendChild(max);
                max.setAttribute("class", "max");
                max.setAttribute("id", "maxS");
                max.setAttribute("src", "assets/icon-max-normal.svg");
                hoverSearch(max, "assets/icon-max-hover.svg", "assets/icon-max-normal.svg");

                //////////// TRAE GIFOS DE LA API//////////////////
                let gifo = document.createElement("img");
                gifo.setAttribute("src", urlMyGif);
                gifo.setAttribute("class", "gif");
                divGifos.appendChild(gifo);


                ///// CLICK en ICONO TRASH
                trash.addEventListener("click", () => {
                    //localStorage.removeItem(`${urlMyGif}`);
                    console.log("urlMyGifArray TRASH", urlMyGifArray);
                    console.log("GifUp DESPUES", GifUp);

                    let element = GifUp[i];
                    console.log("GIF element ID buscado", element)
                    let idx = GifUp.indexOf(element);
                    console.log("idx INDEX OF. EN QUE LUGAR ENCONTRO EL ID del ELEMENT", idx);
                    let removed = GifUp.splice(idx, 1);
                    console.log("removed", removed);
                    console.log("GifUp SPLICE", GifUp);
                    localStorage.setItem("myGifs", JSON.stringify(GifUp))

                    location.reload();

                })

                ///// CLICK en ICONO DOWNLOAD
                download.addEventListener("click", () => {
                    console.log(gifo.src)
                    fetch(gifo.src)
                        .then((response) => response.blob())
                        .then(function (myGifBlob) {
                            gifDown(myGifBlob, i);
                        });
                })



            });

        }
        let favSeeMore = document.createElement("button")
        misGifDiv.appendChild(favSeeMore);
        favSeeMore.innerHTML = "VER MÁS";
        favSeeMore.setAttribute("class", "favSeeMore");
    }

}

myGifos();


function gifDown (blob, idBlob) {
    console.log("user"+ idBlob);
    var objectURL = URL.createObjectURL(blob);
    console.log(objectURL);
    let flags = document.createElement("a");
    flags.href = objectURL;
    flags.download = `Gif DOwnload ${idBlob}.gif`;
    console.log(flags)
    flags.click();
  }
