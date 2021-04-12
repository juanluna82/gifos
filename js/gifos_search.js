let keyPress = document.getElementById("searchInput");
let indexS = 0;
let keyInput = null;
keyPress.addEventListener("input", () => {
  let url = `https://api.giphy.com/v1/tags/related/${keyInput}?api_key=${apiKey}&lang=es&limit=8`;
  console.log("La key tecleada fue " + keyPress.value);
  keyInput = keyPress.value;
  if (keyInput == 0) {
    console.log("campos vacio");
    for (let pointer = 0; pointer < indexS; pointer++) {
      var d = document.getElementById("busqueda");
      var d_nested = document.getElementById("sug" + pointer);
      d.removeChild(d_nested);
    }
    indexS=0;
    document.getElementById("inpu").setAttribute("style","border-bottom: none")
  }
  if (keyInput.length > 2) {
    console.log("fecheamos");
    document.getElementById("inpu").setAttribute("style","border-bottom: solid 2px rgb(167, 167, 167)")
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        for (let index = 0; index < indexS; index++) {
          var d = document.getElementById("busqueda");
          var d_nested = document.getElementById("sug" + index);
          d.removeChild(d_nested);
        }
        indexS = 0;
        json.data.forEach((element) => {
          console.log(element.name);
          let div = document.createElement("div");
          div.innerText = element.name;
          div.setAttribute("class", "sug");
          div.setAttribute("id", "sug" + indexS);
          document.getElementById("busqueda").appendChild(div);
          indexS++;
        });
      })
      .catch((error) => (document.body.appendChild = error));
  }
  {
    console.log("todavia nada");
  }
});

//////////////////////////////////
//////////////////////////////////

const input = document.querySelector('input[type="search"]');
var buscar = null;
input.addEventListener("search", () => {
  console.log("The term searched for was " + input.value);
  event.preventDefault();
  buscar = input.value;
  document.getElementById("inpu").setAttribute("style","border-bottom: none")
  //////
  for (let fla = 0; fla < indexS; fla++) {
    var d = document.getElementById("busqueda");
    var d_nested = document.getElementById("sug" + fla);
    d.removeChild(d_nested);
   
  }
  indexS=0;
  /////

  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${buscar}&api_key=${apiKey}&limit=12`
  )
    .then((response) => response.json())
    .then((json) => {
      json.data
        .map((gif) => gif.images.fixed_height.url)
        .forEach((url) => {
          let img = document.createElement("img");
          img.src = url;
          img.setAttribute("width", "260px");
          img.setAttribute("height", "200px");
          document.getElementById("imagenes").appendChild(img);
        });
    })
    .catch((error) => (document.body.appendChild = error));
});