const apiKey = "T2eGrw8nvRSHQMlxs9aUeJfhhhbwu8AYzDKfcUDq";
const url = "https://api.nasa.gov/planetary/apod?api_key="; //image of the day
const url2 = "https://images-api.nasa.gov"; //search images and video /search?q={q}

const container = document.querySelector(".container");

function setDiv(path) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  const template = `<h3>Picture Of the Day</h3><img id="img" src=${path.hdurl} alt="Avatar" style="width:100%" height="450px" >
            <div class="container">
                <h3>${path.title}</h3>
                <p>${path.explanation}</p><h4>Date:-${path.date}</h4>
     <caption>&copy;${path.copyright}</caption>
            </div>`;
  div.innerHTML = template;
  container.appendChild(div);
}

const form = document.getElementById("myForm");
var inputElement = document.getElementById("search");

window.addEventListener("load", (event) => {
  fetch(url + apiKey)
    .then((response) => response.json())
    .then((data) => {
      setDiv(data);
    });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = inputElement.value;

  const fetchUrl = async () => {
    const res = await fetch(url2 + "/search?q=" + inputValue);
    const data = await res.json();
    const nasa=data.collection.items;
    console.log(data)
    displaySearch(nasa);
  };
  fetchUrl();
  const displaySearch = (path) => {
    const list = document.getElementById("list");
    const html = path
      .map((nasa) => `<li>${nasa.href}</li>`)
      .join("");
    list.innerHTML = html;
    console.log(path);
  };
inputElement.value = "";
  const renderImage = async () => {};
});
