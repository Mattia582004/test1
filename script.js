const notifyButton = document.getElementById("notifyButton");
const customTitle = document.getElementById("customTitle");
const presetSelector = document.getElementById("presetSelector");
const customMessage = document.getElementById("customMessage");

presetSelector.addEventListener("change", () => {
    const selectedOption = presetSelector.value;
    if (selectedOption === "preset1") {
        customTitle.value = "Movimento in ENTRATA";
    } else if (selectedOption === "preset2") {
        customTitle.value = "Movimento in USCITA";
    }
});

notifyButton.addEventListener("click", () => {
    const title = customTitle.value || presetSelector.value;
    const message = customMessage.value;

    const delayInSeconds = parseInt(delayInput.value, 10);
    if (!isNaN(delayInSeconds) && delayInSeconds >= 0) {
        setTimeout(() => {
            Notification.requestPermission().then(perm => {
                if (perm === "granted") {
                    const notification = new Notification(title, {
                        body: message,
                        data: { hello: "World" },
                        icon: "unnamed.png",
                    });

                    notification.addEventListener("error", e => {
                        alert("error");
                    });
                }
            });
        }, delayInSeconds * 1000); // Convert seconds to milliseconds
    } else {
        alert("Inserisci un valore valido per il ritardo in secondi.");
    }
});
