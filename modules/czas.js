var os = require('os');
var colors = require('colors/safe');

function wyswietlanie() {

    var sekundy = Math.floor(os.uptime());
    var godziny = Math.floor(os.uptime()/3600);
    var minuty = Math.floor(os.uptime()/60);


    console.log(colors.rainbow("Uptime: ") + godziny + " hours " + (minuty - godziny*60) + " minutes and " + (sekundy - minuty*60) + " seconds");
}
exports.print = wyswietlanie;