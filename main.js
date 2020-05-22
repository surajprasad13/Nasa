const apiKey = "T2eGrw8nvRSHQMlxs9aUeJfhhhbwu8AYzDKfcUDq";
const url = "https://api.nasa.gov/planetary/apod?api_key="; //image of the day
const url2 = "https://images-api.nasa.gov"; //search images and video /search?q={q}

const container = document.querySelector(".container1");

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
      console.log(data);
      var path = data;
      setDiv(path);
    });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputValue = inputElement.value;
    console.log("form submitted");

fetch(url2+ "/search?q="+inputValue)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });



  });
});
