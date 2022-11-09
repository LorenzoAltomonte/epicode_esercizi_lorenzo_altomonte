function resetStartTime() {
    startTime = new Date();
    window.localStorage.setItem('startTime', startTime);
    return startTime;
  }
  document.addEventListener('DOMContentLoaded', function(event) { 

    startTime = new Date(window.localStorage.getItem('startTime') || resetStartTime());

    window.setInterval(function() {
      var secsDiff = new Date().getTime() - startTime.getTime();
      document.getElementById('tempo').innerText = Math.floor(secsDiff / 1000) + ' secondi passati.';
    }, 1000);
  });