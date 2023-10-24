self.addEventListener("push", function (event) {
    const options = {
      body: "SERVICE",
      icon: "favicon.ico",
    };
  
    event.waitUntil(
      self.registration.showNotification("SERVICE", options)
    );
  });
  
