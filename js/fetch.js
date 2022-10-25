const api = "https://jsonplaceholder.typicode.com/albums/2/photos";

var count = 0;
const increment = "increment";
const decrement = "decrement";

var counterDisplay = document.getElementById("counter");

const fetchApi = () => {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      showData(data);
    });
}


const showData = (data) => {
  let imageContainer = `<div></div>`

  data.forEach(element => {
    countTotalImages(increment, "");
    imageContainer +=
      `<div>
      <img onclick=deleteImage() src=${element.url}></img>
        <h2>${element.title} </h2>  
    </div>`;

  });
  document.getElementById("imageContent").innerHTML = imageContainer;
}

const countTotalImages = (increment, decrement) => {
  if (increment) {
    count++;
  }
  if (decrement) {
    count--;
  }
  console.log(count);
  counterDisplay.innerHTML = "Total Posts: " + count;
}

const deleteImage = () => {
  console.log("image clicked");
  countTotalImages("", decrement);
};










