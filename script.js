var gifs = ["gifs\\lr7.gif", "gifs\\lr8.gif", "gifs\\lr9.gif", "gifs\\lr10.gif", "gifs\\lr11.gif", "gifs\\lr12.gif"];
var imgs = ["imgs\\lr7.jpg", "imgs\\lr8.jpg", "imgs\\lr9.jpg", "imgs\\lr10.jpg", "imgs\\lr11.jpg", "imgs\\lr12.jpg"];
var srcs = [
    "https://valeria-knv.github.io/front7/",
    "https://valeria-knv.github.io/lr8-Konovalchuk/",
    "https://valeria-knv.github.io/lr9-Konovalchuk/",
    "https://valeria-knv.github.io/lr10-Konovalchuk/",
    "https://valeria-knv.github.io/lr11-Konovalchuk/",
    "https://valeria-knv.github.io/lr12-Konovalchuk/"
];

window.onload = function(){
    $("#apps").hide();
    let divArea = document.createElement('div');
    divArea.classList.add('area');
    divArea.innerHTML = "apps collection<br>";
    document.body.prepend(divArea);
    let divForeground = document.createElement('div');
    divForeground.classList.add('foreground');
    divArea.after(divForeground);
    let divMidground = document.createElement('div');
    divMidground.classList.add('midground');
    divForeground.after(divMidground);
    let divTuna = document.createElement('div');
    divTuna.classList.add('tuna');
    divMidground.prepend(divTuna);
    let divBackground = document.createElement('div');
    divBackground.classList.add('background');
    divMidground.after(divBackground);
    setTimeout(() =>{
        divArea.remove();
        divForeground.remove();
        divMidground.remove();
        divTuna.remove();
        divBackground.remove();
        $("#apps").toggle();
    }, 3500);
}

function MouseOver(index){
    document.getElementById(index).setAttribute('src', gifs[index - 7]);
}

function MouseOut(index){
    document.getElementById(index).setAttribute('src', imgs[index - 7]);
}

function OnClick(index){
    window.location.href=srcs[index - 7];
}
