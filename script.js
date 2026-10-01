```javascript
// =====================================
// BIRTHDAY COUNTDOWN
// Likky Vadhina - October 18, 2026
// =====================================

// Birthday date and time
// October 18, 2026 at 12:00 AM IST

const birthdayDate = new Date("October 18, 2026 00:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


// Update countdown every second
const countdown = setInterval(function () {

    const now = new Date().getTime();

    const difference = birthdayDate - now;


    // Birthday reached
    if (difference <= 0) {

        clearInterval(countdown);

        daysElement.innerHTML = "🎂";
        hoursElement.innerHTML = "🎉";
        minutesElement.innerHTML = "💜";
        secondsElement.innerHTML = "✨";

        document.querySelector(".countdown-section h2").innerHTML =
            "HAPPY BIRTHDAY, LIKKY VADHINA! 💜";

        document.querySelector(".subtitle").innerHTML =
            "Your special day is finally here! 🎂✨";

        document.querySelector(".date").innerHTML =
            "Today is all about YOU! 🌷";

        document
            .querySelector(".countdown-container")
            .classList.add("birthday-mode");

        return;
    }


    // Calculate time
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display
    daysElement.innerHTML = String(days).padStart(2, "0");

    hoursElement.innerHTML = String(hours).padStart(2, "0");

    minutesElement.innerHTML = String(minutes).padStart(2, "0");

    secondsElement.innerHTML = String(seconds).padStart(2, "0");

}, 1000);
```
