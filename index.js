var osinfo = require('./modules/osinfo');
var czas = require('./modules/czas');
var colors = require('colors/safe');
var EventEmitter = require("events").EventEmitter;

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instrukcja) {
    console.log('You wrote: ' + instrukcja + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instrukcja = input.toString().trim();
		emitter.emit('beforeCommand', instrukcja);
		switch(instrukcja) {
			case "/exit":
				console.log(colors.green('zamykam'));
				process.exit();
			case "/ver":
				console.log(" Wersja node.js: " + process.versions.node);
				break;
			case "/lang":
				console.log(" Ustawienia języka: " + process.env.LANG);
				break;
			case "/getOSinfo":
			osinfo.print();
			czas.print();
				break;
			default :
				console.log('co ty piszesz?');
};
emitter.emit('afterCommand');
}})
