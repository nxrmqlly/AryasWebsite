function fetchSpotifyData() {
  fetch("https://api.lanyard.rest/v1/users/1147999469854523414/")
      .then((response) => response.json())
      .then((data) => {
          const spotifyData = data.data.spotify;
          if (spotifyData) {
              const song = spotifyData.song;
              const artist = spotifyData.artist;
              const album = spotifyData.album;
              const albumArtUrl = spotifyData.album_art_url;

              // Define your desired colors
              const songColor = "#81A1C1"; // Replace with your preferred color
              const artistColor = "#A3BE8C"; // Replace with your preferred color
              const albumColor = "#B48EAD"; // Replace with your preferred color

              // Update the HTML with colored text
              document.querySelector(".album-art").src = albumArtUrl;
              document.querySelector(".song-title").innerHTML = `<span style="color: ${songColor};">${song}</span>`;
              document.querySelector(".artist-name").innerHTML = `By <span style="color: ${artistColor};">${artist}</span>`;
              document.querySelector(".album-name").innerHTML = `On <span style="color: ${albumColor};">${album}</span>`;
          } else {
              document.querySelector(".other-info").innerHTML = "Not listening to Spotify.";
          }
      })
      .catch((error) => {
        document.querySelector(".other-info").innerHTML = `<span style="color: #FF6961;">Error while fetcing.</span>`;
      });
}

// Fetch data initially
fetchSpotifyData();

// Fetch data every 5 seconds
setInterval(fetchSpotifyData, 5000);
