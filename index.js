const playSound = (inst) => {
    switch (inst) {
        case "ride":
            const ride = new Audio("sounds/ride-cymbal.mp3");
            const activeRide = document.querySelector("." + inst);

            activeRide.classList.add("click");

            ride.play();

            setTimeout(function () {
                activeRide.classList.remove("click");
            }, 300);

            break;

        case "floor":
            const floor = new Audio("sounds/floor-tom.mp3");
            const activeFloor = document.querySelector("." + inst);

            activeFloor.classList.add("click");

            floor.play();

            setTimeout(function () {
                activeFloor.classList.remove("click");
            }, 300);

            break;

        case "tomtom":
            const tomtom = new Audio("sounds/tom-tom.wav");
            const activeTomTom = document.querySelector("." + inst);

            activeTomTom.classList.add("click");

            tomtom.play();

            setTimeout(function () {
                activeTomTom.classList.remove("click");
            }, 300);

            break;

        case "bass":
            const bass = new Audio("sounds/bass-drum.mp3");
            const activeBass = document.querySelector("." + inst);

            activeBass.classList.add("click");

            bass.play();

            setTimeout(function () {
                activeBass.classList.remove("click");
            }, 300);

            break;

        case "snare":
            const snare = new Audio("sounds/snare-drum.mp3");
            const activeSnare = document.querySelector("." + inst);

            activeSnare.classList.add("click");

            snare.play();

            setTimeout(function () {
                activeSnare.classList.remove("click");
            }, 300);

            break;

        case "hihat":
            const hihat = new Audio("sounds/hi-hat.mp3");
            const activeHiHat = document.querySelector("." + inst);

            activeHiHat.classList.add("click");

            hihat.play();

            setTimeout(function () {
                activeHiHat.classList.remove("click");
            }, 300);

            break;

        case "crash":
            const crash = new Audio("sounds/crash-cymbal.mp3");
            const activeCrash = document.querySelector("." + inst);

            activeCrash.classList.add("click");

            crash.play();

            setTimeout(function () {
                activeCrash.classList.remove("click");
            }, 300);

            break;

        default:
            console.log(inst)
    }
}