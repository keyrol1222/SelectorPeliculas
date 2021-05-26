const form = document.querySelector("#form");
const movies = document.querySelector("#listado");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(form.elements.movieInput.value);
  const data = await getData(form.elements.movieInput.value);
  console.log(data)
  movies.innerHTML = ''
  Parse(data)
});

async function getData(nombre) {
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${nombre}`);
  return res.data
}




async function Parse(arry) {
    let contador = 1
  for (movie of arry) {
       
    const card = document.createElement("div");
    const img = document.createElement("img");
    const body = document.createElement("div");
    const tittle = document.createElement("h5");
    const text = document.createElement("p");
    card.classList.add("card");
    card.style = "width: 18rem;";
    img.classList.add("card-img-top");
    body.classList.add("card-body");
    tittle.classList.add("card-title");
    text.classList.add("card-text");

    img.src = movie.show.image.original;
    tittle.innerText = movie.show.name;
    text.innerHTML = movie.show.summary;

    card.append(img);

    body.append(tittle);
    body.append(text);

    card.append(body);

    movies.append(card);
  }
}
