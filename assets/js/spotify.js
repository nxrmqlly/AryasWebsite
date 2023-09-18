fetch("https://api.lanyard.rest/v1/users/1147999469854523414/")
    .then((e) => e.json())
    .then((e) => {
        const spotifyData = e.data.spotify;
        if (spotifyData) {
            const songName = spotifyData.song;
            const artist = spotifyData.artist;
            const albumName = spotifyData.album;
            const albumArtUrl = spotifyData.album_art_url;
            
            const spotifyInfoElement = document.getElementById("spotify-info");
            spotifyInfoElement.innerHTML = `
                <p class="song-title">Song: <span class="song-name">${songName}</span></p>
                <p class="artist">Artist: <span class="artist-name">${artist}</span></p>
                <p class="album">Album: <span class="album-name">${albumName}</span></p>
                <img src="${albumArtUrl}" alt="Album Art" class="album-art">
            `;
        } else {
            const spotifyInfoElement = document.getElementById("spotify-info");
            spotifyInfoElement.innerHTML = "User is not listening to Spotify.";
        }
    })
    .catch((e) => {
        console.error("[ERROR] Could not fetch/find Spotify.");
    });
