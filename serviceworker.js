self.addEventListener("push", function (event) {
    const options = {
      body: "My first notification on iOS",
      icon: "favicon.ico",
    };
  
    event.waitUntil(
      self.registration.showNotification("Hello World", options)
    );
  });
  
