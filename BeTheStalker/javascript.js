document.getElementById('stalkingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const vaultPin = 850715;
    const userInput = document.getElementById('vaultPin').value;

    if (userInput === vaultPin.toString()) {
        window.location.href = 'hfidjghgt46545hjig45.html';
    } else {
        alert('Incorrect PIN. Please try again.');
        const hint = document.getElementById('hint');
        hint.classList.remove('hidden');

        // Optionally, you can reset the form after a few attempts
        let attemptCount = 0;
        const maxAttempts = 3;

        if (++attemptCount >= maxAttempts) {
            alert('Hint: What information that you can see on his social media profiles?');
        }
    }
});