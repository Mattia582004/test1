async function run() {
    const registration = await navigator.serviceWorker.register(
        "serviceworker.js",
        {
            scope: "./"
        }
    );

    const button = document.getElementById("notify");
    button.addEventListener("click" , async () => {
        const result = await window.Notification.requestPermission();

        if (result === "granted") {



            await registration.showNotification("Hello World!", {
                body: "My first iOS notification!",
                icon: "favicon.ico",
            })
        }
    })
}

run();