// Check if the browser supports Service Workers
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // navigator.serviceWorker.register("service-worker.js").then(
    navigator.serviceWorker.register("service-worker-site.js").then(
      function (registration) {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      },
      function (err) {
        console.log("Service Worker registration failed:", err);
      }
    );
  });
}
