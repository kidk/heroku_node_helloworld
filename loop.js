var page = require('webpage').create();

const url = "https://enigmatic-escarpment-32911.herokuapp.com/"

// Keep loading the same page, and restart on finish
function loop() {
    page.open(url, function(status) {
        console.log("Page loaded with status: " + status);
        loop();
    });
}

// Initiate loop
loop();

