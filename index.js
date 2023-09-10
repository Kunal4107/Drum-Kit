// // if we put soundHandler() then on reloading the button will be in clicked state without user interface. So its better to use without ()
// document.querySelector(".w").addEventListener("click", function soundHandler(){
//     new Audio('sounds/tom-1.mp3').play();
//     this.style.color = "white";
// });
// document.querySelector(".a").addEventListener("click", function soundHandler(){
//     new Audio('sounds/tom-2.mp3').play();
//     this.style.color = "white";
// });
// document.querySelector(".s").addEventListener("click", function soundHandler(){
//     new Audio('sounds/tom-3.mp3').play();
//     this.style.color = "white";
// });
// document.querySelector(".d").addEventListener("click", function soundHandler(){
//     new Audio('sounds/tom-4.mp3').play();
//     this.style.color = "white";
// });
// document.querySelector(".j").addEventListener("click", function soundHandler(){
//     new Audio('sounds/snare.mp3').play();
//     this.style.color = "white";
// });
// document.querySelector(".k").addEventListener("click", function soundHandler(){
//     new Audio('sounds/kick-bass.mp3').play();
//     this.style.color = "white";
// });
// document.querySelector(".l").addEventListener("click", function soundHandler(){
//     new Audio('sounds/crash.mp3').play();
//     this.style.color = "white";
// });

ndrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < ndrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (e) {
        // this.style.color = "cyan";
        console.log(e)
        var clickedButton = this.textContent;
        console.log(clickedButton)
        selectedButton(clickedButton)
        animateButton(clickedButton)
    });
}

// detecting keys pressed
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    console.log(keyPressed);
    selectedButton(keyPressed);
    animateButton(keyPressed)
})

function selectedButton(buttonX)
{
    switch (buttonX) {
        case 'K':
            new Audio('sounds/tom-1.mp3').play();
            break;
        case 'U':
            new Audio('sounds/tom-2.mp3').play();
            break
        case 'N':
            new Audio('sounds/tom-3.mp3').play();
            break
        case 'A':
            new Audio('sounds/snare.mp3').play();
            break
        case 'L':
            new Audio('sounds/crash.mp3').play();
            break
        

        default:
        console.log(this)
    }
}

function animateButton(key)
{
    var activeKey = document.querySelector("." + key);
    activeKey.classList.add("pressed");
    activeKey.classList.add("color");
    setTimeout(function (){
        activeKey.classList.remove("pressed")
        activeKey.classList.remove("color")

    }, 500);
}