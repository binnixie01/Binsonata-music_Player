let audioElement = new Audio('resource/songs/saib - in your arms.mp3')
let audioElement1 = new Audio('resource/songs/affection.mp3')
let audioElement2 = new Audio('resource/songs/burbank - sorry i like you.mp3')
let audioElement3 = new Audio('resource/songs/Mariya Takeuchi 竹内 まりや Plastic Love.mp3')

let play = document.getElementById('play');
let play1 = document.getElementById('play1');
let play2 = document.getElementById('play2');
let play3 = document.getElementById('play3');

play.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else{
        audioElement.pause()
    }
})
play1.addEventListener('click',()=>{
    console.log("clicked")
    if(audioElement1.paused || audioElement1.currentTime<=0){
        audioElement1.play();
    }
    else{
        audioElement1.pause()
    }
})
play2.addEventListener('click',()=>{
    console.log("clicked")
    if(audioElement2.paused || audioElement2.currentTime<=0){
        audioElement2.play();
    }
    else{
        audioElement2.pause()
    }
})
play3.addEventListener('click',()=>{
    console.log("clicked")
    if(audioElement3.paused || audioElement3.currentTime<=0){
        audioElement3.play();
    }
    else{
        audioElement3.pause()
    }
})
