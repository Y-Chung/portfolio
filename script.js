//bara byta bagrund utan toggle: 
/*function fireworks() {
        document.getElementById("hooray").style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2Fjof1Ck9hcZIOlQyzDL%2Fsource.gif&f=1&nofb=1')";
} */


//toggle
let toggle = true;
function fireworks() {

    if (toggle === true) {
        document.getElementById("hooray").style.backgroundImage = "url('Bilder/fireworks.gif')";
        console.log(toggle)
    }

    else {
        document.getElementById("hooray").style.backgroundImage = "";
        console.log(toggle)
    }
    toggle = !toggle;
    
    document.getElementById("hooray").style.backgroundPosition="center center"; 

}




//navbar får en backgrund vid scroll
var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-light");
    } else {
        nav.classList.remove("bg-light");
    }

});