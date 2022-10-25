const api_url = "https://jsonplaceholder.typicode.com/albums/2/photos";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  show(data);
}
// Calling that async function
getapi(api_url);


function show(data) {
  let titleText = `<h2> </h2>`;
  let imageData = `<img></img>`
  for (let r of data) {
    imageData += `<div>
      <img src=${r.url}> </img>
      <h2>${r.title} </h2>  
    </div>`;
  }
  document.getElementById("imageContent").innerHTML = imageData;
  document.getElementById("imageTitle").innerHTML = titleText;
}




