const container = document.querySelector(".container");

const cats = [
  { name: "Chi", image: "images/cat1.jpg" },
  { name: "Bobbi", image: "images/cat2.jpg" },
  { name: "Jelly Bean", image: "images/cat3.jpg" },
  { name: "Dora", image: "images/cat4.jpg" },
  { name: " Squeaky", image: "images/cat5.jpg" },
  { name: " Wyatt", image: "images/cat6.jpg" },
  { name: " Addison", image: "images/cat7.jpg" },
  { name: " Lucy", image: "images/cat8.jpg" },
  { name: " Niko", image: "images/cat9.jpg" },
  { name: " Stella", image: "images/cat10.webp" },
  { name: " Cara", image: "images/cat11.jpg" },
  { name: " Rouge", image: "images/cat12.png" },
  { name: " Ruby", image: "images/cat13.jpeg" },
  { name: " Petyr", image: "images/cat14.jpg" },
  { name: " Catelyn", image: "images/cat15.jpg" },
];

const showCats = () => {
  let output = "";
  cats.forEach(
    ({ name, image }) =>
      (output += `
        <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="#">Taste</a>
        </div>
        `)
  );
  container.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCats);

//register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service is not registered", err));
  });
}
