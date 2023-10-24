// Verifica se il browser supporta le notifiche
if ("Notification" in window) {
  // Richiedi l'autorizzazione per inviare notifiche
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      // L'utente ha dato l'autorizzazione, ora puoi creare e inviare una notifica
      document.getElementById("notifyButton").addEventListener("click", function () {
        const delayInSeconds = parseInt(document.getElementById("delayInput").value);
        const preset = document.getElementById("presetSelector").value;
        const customTitle = document.getElementById("customTitle").value;
        const customMessage = document.getElementById("customMessage").value;

        // Crea un oggetto di notifica
        const notificationOptions = {
          title: customTitle || "Titolo predefinito",
          body: customMessage || "Messaggio predefinito",
        };

        // Imposta un ritardo prima di inviare la notifica
        setTimeout(function () {
          const notification = new Notification(notificationOptions.title, notificationOptions);
        }, delayInSeconds * 1000);
      });
    }
  });
}
