document.addEventListener('DOMContentLoaded', function() {
    const surprisebutton = document.getElementById('surprisebutton');
    const infoLink = document.getElementById('infoLink');
    const memoriesLink = document.getElementById('memoriesLink');

    function navigateWithTransition(targetUrl) {
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 250);
    }

    if (surprisebutton) {
        surprisebutton.addEventListener('click', function() {
            navigateWithTransition('phrases.html');
        });
    }

    if (infoLink) {
        infoLink.addEventListener('click', function(event) {
            navigateWithTransition('info.html');
        });
    }

    if (memoriesLink) {
        memoriesLink.addEventListener('click', function(event) {
            navigateWithTransition('memories.html');
        });
    }

    const returnButton = document.getElementById('returnButton');
    if (returnButton) {
        returnButton.addEventListener("click", (event) => {
            window.location.href = "index.html";
        });
    }
});
