var jacksonButton = document.getElementById('btn');
jacksonButton.addEventListener("click", addJackson);

var albumsContainer = document.getElementById('album-cover');
var url = "https://api.spotify.com/v1/search?q=artist:jackson 5&type=album";

var albumCount = 0;

function addJackson(){
  var request = new XMLHttpRequest();

  request.open('GET', url);

  request.onreadystatechange = function() {
    console.log(this.readyState);
  }

  request.onload = function(){
    // console.log(this.readyState)
    var jacksonData = JSON.parse(request.responseText);
    renderJackson(jacksonData);
  };

  request.send();
}

function renderJackson(data){
  var newAlbum = '';
  var albumURL = data.albums.items[albumCount].images[0].url;
  newAlbum += "<img src='" + albumURL + "'>"
  albumsContainer.insertAdjacentHTML('beforeend', newAlbum);
  albumCount++;
}
