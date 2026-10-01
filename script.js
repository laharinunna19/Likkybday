```javascript
// =====================================
// 💜 LIKKY VADHINA BIRTHDAY COUNTDOWN
// 🎂 October 18, 2026 — 12:00 AM IST
// =====================================

// October 18, 2026 00:00 IST
// IST = UTC + 5:30
// So in UTC it is October 17, 2026 18:30

const birthdayDate = Date.UTC(
    2026,
    9,      // October (0 = January)
    17,     // October 17 UTC
    18,     // 18:30 UTC
    30,
    0
);

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {

    const now = Date.now();

    const difference = birthdayDate - now;

    // 🎂 Birthday has arrived
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

    // Calculate remaining time
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

    // Display countdown
    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}

// Start immediately
updateCountdown();

// Update every second
const countdown = setInterval(updateCountdown, 1000);
```
