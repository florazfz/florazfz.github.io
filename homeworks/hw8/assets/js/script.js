
/* Toggles the hidden class for the #songs-second-half element*/
function toggleSongs() {
    var songsSecondHalf = document.getElementById("songs-second-half");
    if (songsSecondHalf.classList.contains("hidden")) {
        songsSecondHalf.classList.remove("hidden");
    } else {
        songsSecondHalf.classList.add("hidden");
    }
}

document.getElementById("toggle-button").onclick = toggleSongs;
