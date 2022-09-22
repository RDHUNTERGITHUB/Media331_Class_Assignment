const playButton = document.querySelector(`#play`);
const pauseButton = document.querySelector(`#pause`);


playButton.addEventListener('click', ()=>{
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
)