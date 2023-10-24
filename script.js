async function run() {
    const registration = await navigator.serviceWorker.register(
        "serviceworker.js",
        {
            scope: "./"
        }
    );

    const button = document.getElementById("notify");
    button.addEventListener("click", async () => {
        const result = await window.Notification.requestPermission();

        if (result === "granted") {
            const delayInSeconds = parseInt(document.getElementById("delayInput").value);
            const customTitle = document.getElementById("customTitle").value; // Otteniamo il titolo personalizzato
            const customMessage = document.getElementById("customMessage").value; // Otteniamo il messaggio personalizzato

            setTimeout(async () => {
                const notificationOptions = {
                    body: customMessage || "My first iOS notification!",
                    icon: "favicon.ico",
                };
                if (customTitle) {
                    notificationOptions.title = customTitle; // Impostiamo il titolo personalizzato
                }

                await registration.showNotification(customTitle, notificationOptions);
            }, delayInSeconds * 1000);
        }
    });
}

run();
