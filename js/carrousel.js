

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
        if ((firstIF + index) >= (arrayOfGifs.length - 1)) {
            if (firstIF > arrayOfGifs.length) {
                firstIF = infiniteIF;
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[arrayOfGifs.length - 2])
                document.getElementById("h2" + index).textContent = arrayOfGifsUser[arrayOfGifs.length - 2];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[arrayOfGifs.length - 2];
                console.error("index =" + index);
                console.error("IF INFINITE RIGHT");
                console.error("arrayOfGifs.length-2 SUMATORIA =" + (arrayOfGifs.length - 2));
            }


            else {
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF - arrayOfGifs.length + 1]);
                document.getElementById("h2" + index).textContent = arrayOfGifsUser[index + firstIF - arrayOfGifs.length + 1];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[index + firstIF - arrayOfGifs.length + 1];
                //console.error("first > array " + firstIF > arrayOfGifs.length);
                console.error("index =" + index);
                console.error("IF ELSE RIGHT  (firstIF+index) >= (arrayOfGifs.length-1) y firstIF <= arrayOfGifs.length ");
                console.log("FirstIF =" + firstIF);
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
            console.log("FirstIF =" + firstIF);
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
        if ((firstIF + index) <= 0) {
            if (firstIF > arrayOfGifs.length) {
                firstIF = infiniteIF;
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[arrayOfGifs.length - 2])
                /*document.getElementById("h2" + index).textContent = arrayOfGifsUser[arrayOfGifs.length-2];
                document.getElementById("p" + index).textContent = arrayOfGifsTitle[arrayOfGifs.length-2];*/
                //console.error("<= 0 " + (firstIF+index) <= 0);
                //console.error("first > array " + firstIF > arrayOfGifs.length);
                console.error("index =" + index);
                console.log("LEFT IF INFINITE");
                console.error("arrayOfGifs.length-2 SUMATORIA =" + (arrayOfGifs.length - 2));

            } else {
                document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[arrayOfGifs.length + firstIF + index - 1]);
                console.error("index =" + index);
                console.log("LEFT firstIF+index MAYOR 0 y firstIF > arrayOfGifs.length");
                console.error("arrayOfGifs.length + firstIF + index - 1 SUMATORIA =" + (arrayOfGifs.length + firstIF + index - 1));
                console.log("FirstIF =" + firstIF);

            }
        }
        //PRIMERA VUELTA DE TRENDING GIFOS//
        else {

            document.getElementById("gif" + index).setAttribute("src", arrayOfGifs[index + firstIF - 1]);
            console.error("index =" + index);
            console.log("LEFT NORMAL firstIF+index MAYOR 0");
            console.error("index + firstIF + 1 SUMATORIA =" + (index + firstIF - 1));
            console.log("FirstIF =" + firstIF);

        }
    }
    firstIF--;
}


let buttonNL = document.getElementById("left");
buttonNL.addEventListener('click', () => {
    updateGifosLeft();

});