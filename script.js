const btn1 = document.querySelector('.applause');
const btn2 = document.querySelector('.wrong');
const btn3 = document.querySelector('.victory');
const btn4 = document.querySelector('.tada');
const btn5 = document.querySelector('.gasp');
const btn6 = document.querySelector('.boo');

const audio1 = document.querySelector('#applause');
const audio2 = document.querySelector('#wrong');
const audio3 = document.querySelector('#victory');
const audio4 = document.querySelector('#tada');
const audio5 = document.querySelector('#gasp');
const audio6 = document.querySelector('#boo');

btn1.addEventListener('click', ()=>{
    stopAudio();
    audio1.play()
})

btn2.addEventListener('click', ()=>{
    stopAudio();
    audio2.play()
})

btn3.addEventListener('click', ()=>{
    stopAudio();
    audio3.play()
})

btn4.addEventListener('click', ()=>{
    stopAudio();
    audio4.play()
})

btn5.addEventListener('click', ()=>{
    stopAudio();
    audio5.play()
})

btn6.addEventListener('click', ()=>{
    stopAudio();
    audio6.play()
})

function stopAudio(){
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
}