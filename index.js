const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search");
const container = document.querySelector(".container");
let searchQuery = "";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("text").value;
  fetchDestination();
});

document.addEventListener("DOMContentLoaded", (event) => {
    fetchDestination();
  });

  fetch('./db.json')
  .then((res) => res.json()) 
  .then((json) => console.log(json))
  async function fetchDestination() {
    const baseURL = `./db.json`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.json);
    console.log(data);
  }

  function generateHTML(results) {
    // container.classList.remove("initial");
    let generatedHTML = "";
    results.map((result) => {
        console.log(result)
      generatedHTML += `
        <div class="item">
          <img src="${result.places.img}" alt="img">
          <div class="flex-container">
            <h1 class="title">${result.places.name}</h1>
          </div>
         
        </div>
      `;
    });
    searchResultDiv.innerHTML = generatedHTML;
  }