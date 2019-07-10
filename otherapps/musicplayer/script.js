const songs = [
    "BoomlingsLoop.mp3",
    "BoomlingsTitle.mp3",
    "CalmCraggyArea.mp3",
    "FirePiano.mp3",
    "GoldenHaze.mp3",
    "Industrial Lullaby.mp3",
    "Milkshake.mp3",
    "OceanOfStars.mp3",
    "RemixOfFinalStoke.mp3",
    "Strawberry-mixup-ControledYT.mp3",
    "Badlands.mp3",
    "Ripples.mp3",
    "Danceoftheviolins.mp3",
    "SonicBlaster.mp3",
    "NineCircles.mp3",
    "CheckOut.mp3"
]

const createSongList = () => {
    const list = document.createElement('ol')
    for(let i = 0; i <songs.length; i++) {
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))
        list.appendChild(item)
    }
    return list
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerText

    document.getElementById('curentlyPlayingSong').innerText = "▶Press Start to play▶: "
    document.getElementById('curentSong').innerText = clickedItem.innerText
    document.getElementById('start').innerText = ""
    player.load()

}

const playAudio = () => {
    if(player.readyState) {
        player.play()
        document.getElementById('curentlyPlayingSong').innerText = "🎧Currently Playing🎧: "
    }
}

const pauseAudio = () => {
    if(player.readyState) {
    player.pause()
    document.getElementById('curentlyPlayingSong').innerText = "⏸Paused Playing⏸: "
    }
}
const slider = document.getElementById('slider')
slider.oninput = (e) => {
 const volume = e.target.value
 player.volume = volume
}

const updateProgress = () => {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress')
        progressBar.value = (player.currentTime / player.duration) * 100
    }

}

//Scripted by ControledYT