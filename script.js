console.log("Welcome to Apna Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.querySelector('.songItem'));
let songs = [
    { songName: "Tum mile", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Rangi saari", filePath: "songs/2.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Madhaniya", filePath: "songs/3.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Lover", filePath: "songs/4.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Aabad-Barbaad", filePath: "songs/5.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "One Right Now", filePath: "songs/6.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Alone", filePath: "songs/7.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Lakeeran", filePath: "songs/8.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "I Like Me Better", filePath: "songs/9.mp3", coverPath: "covers/cover1.jpg" },
    { songName: "Noor", filePath: "songs/10.mp3", coverPath: "covers/cover1.jpg" },
]
songItems.forEach((element, i) => {
    element.getElementByTagName("img")[0].src = songs[i].coverPath;
    element.getElementByClassName("songName")[0].innerText = songs[i].songName;

})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
}
)
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.querySelector('.songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.querySelector('.songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9)
        songIndex = 0;
    else
        songIndex += 1;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0)
        songIndex = 0;
    else
        songIndex -= 1;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
function playbutton(id){
    audioElement.src = `songs/${id}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

