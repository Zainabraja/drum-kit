window.onkeypress = function (event) {
    switch (event.key) {
        case "a":
        case "A":
            const ride = new Audio("sounds/ride-cymbal.mp3");
            const activeRide = document.querySelector(".ride");

            activeRide.classList.add("click");

            ride.play();

            setTimeout(function () {
                activeRide.classList.remove("click");
            }, 300);

            break;

        case "s":
        case "S":
            const floor = new Audio("sounds/floor-tom.mp3");
            const activeFloor = document.querySelector(".floor");

            activeFloor.classList.add("click");

            floor.play();

            setTimeout(function () {
                activeFloor.classList.remove("click");
            }, 300);

            break;

        case "d":
        case "D":
            const tomtom = new Audio("sounds/tom-tom.wav");
            const activeTomTom = document.querySelector(".tomtom");

            activeTomTom.classList.add("click");

            tomtom.play();

            setTimeout(function () {
                activeTomTom.classList.remove("click");
            }, 300);

            break;

        case "f":
        case "F":
            const bass = new Audio("sounds/bass-drum.mp3");
            const activeBass = document.querySelector(".bass");

            activeBass.classList.add("click");

            bass.play();

            setTimeout(function () {
                activeBass.classList.remove("click");
            }, 300);

            break;

        case "j":
        case "J":
            const snare = new Audio("sounds/snare-drum.mp3");
            const activeSnare = document.querySelector(".snare");

            activeSnare.classList.add("click");

            snare.play();

            setTimeout(function () {
                activeSnare.classList.remove("click");
            }, 300);

            break;

        case "k":
        case "K":
            const hihat = new Audio("sounds/hi-hat.mp3");
            const activeHiHat = document.querySelector(".hihat");

            activeHiHat.classList.add("click");

            hihat.play();

            setTimeout(function () {
                activeHiHat.classList.remove("click");
            }, 300);

            break;

        case "l":
        case "L":
            const crash = new Audio("sounds/crash-cymbal.mp3");
            const activeCrash = document.querySelector(".crash");

            activeCrash.classList.add("click");

            crash.play();

            setTimeout(function () {
                activeCrash.classList.remove("click");
            }, 300);

            break;

        default:
            console.log(event.key)
    }
}
