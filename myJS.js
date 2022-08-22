    var content = document.getElementById("content");
    var unblocker = "<p> Text here </p> "  
    ;

    function displayUnblocker() {
        "use strict";
        content.innerHTML = unblocker;
        var iframe = document.getElementById('pdf');
        iframe.style.display = 'none';
    }

    function toShow() {
    }
window.onload = function() {
    var iframe = document.getElementById('pdf');
    iframe.style.display = 'none';
}
