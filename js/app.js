if ("serviceWorker" in navigator) { //s'il y a un serviceWorker dans le navigateur
  navigator.serviceWorker.register("/serviceWorker.js"); //alors tu me lence et enregistre toutes les directives de "serviceWorker.js"
}
