console.log("welcome to spotify clone");

let musicIndex=0;
let audioElement=new Audio('music/1.mp3');
//audioElement.play();
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let musicItems=Array.from(document.getElementsByClassName('musicItem'));


let songs= [
    {musicName:"Dil Ibadat",filePath:"music/1.mp3",fileCover:"cover1.jpg"},

{musicName:"Hai Junoon-KK",filePath:"music/2.mp3",fileCover:"cover/2.jpg"},

{musicName:"Dil kyn ye mera",filePath:"music/3.mp3",fileCover:"cover/3.jpg"},

{musicName:"Let me down slowly",filePath:"music/4.mp3",fileCover:"cover/4.jpg"},

{musicName:"Hymn for the weekend",filePath:"music/5.mp3",fileCover:"cover/5.jpg"},

{musicName:"Arcade",filePath:"music/6.mp3",fileCover:"cover/6.jpg"},

{musicName:"Adiyogi",filePath:"music/7.mp3",fileCover:"cover/7.jpg"},

{musicName:"Jug Jug Jeeve",filePath:"music/8.mp3",fileCover:"cover/8.jpg"},
{musicName:"Nam nazm sa",filePath:"music/9.mp3",fileCover:"cover/9.jpg"},
]

musicItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].fileCover;
    element.getElementsByClassName("musicName")[0].innerText=songs[i].musicName;
}
)
//Play/Puase Music

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
            
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
        
        
})

//Listen to events

audioElement.addEventListener('timeupdate',()=>{
   let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
   
    Array.from(document.getElementsByClassName('musicItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-circle-play');
    })
}



Array.from(document.getElementsByClassName('musicItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
        musicIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`music/${musicIndex+1}.mp3`;
    masterSongName.innerText=songs[musicIndex].musicName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

})
})

document.getElementById('next').addEventListener('click',()=>{
    if (musicIndex>=9){
        musicIndex=0;
    }
    else {
        musicIndex +=1;
    }
    audioElement.src=`music/${musicIndex+1}.mp3`;
    masterSongName.innerText=songs[musicIndex].musicName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if (musicIndex<=0){
        musicIndex=0;
    }
    else {
        musicIndex -=1;
    }
    audioElement.src=`music/${musicIndex+1}.mp3`;
    masterSongName.innerText=songs[musicIndex].musicName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

})