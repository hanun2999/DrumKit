"use strict"

// loop for to select all elements
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", audio);
    function audio() {
        let buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
            case "w":
                let audio1 = new Audio("sounds/tom-1.mp3");
                audio1.play();
                break;
            case "a":
                let audio2 = new Audio("sounds/tom-2.mp3");
                audio2.play();
                break;
            case "s":
                let audio3 = new Audio("sounds/tom-3.mp3");
                audio3.play();
                break;
            case "d":
                let audio4 = new Audio("sounds/tom-4.mp3");
                audio4.play();
                break;
            case "j":
                let audio5 = new Audio("sounds/snare.mp3");
                audio5.play();
                break;
            case "k":
                let audio6 = new Audio("sounds/crash.mp3");
                audio6.play();
                break;
            case "l":
                let audio7 = new Audio("sounds/kick-bass.mp3");
                audio7.play();
                break;
            default: console.log("Nothing")
                break;
        }
    }
};

// document.querySelectorAll(".a")[0].addEventListener("click", audio2);
// function audio2() {
//     let audio2 = new Audio("sounds/kick-bass.mp3");
//     audio2.play();
// }       

