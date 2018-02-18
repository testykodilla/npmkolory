var os = require('os');
var colors = require('colors/safe');
function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log(colors.red('System: ') + type);
    console.log(colors.green('Release: ') + release);
    console.log(colors.blue('CPU model: ') + cpu);
    console.log(colors.yellow('User name: ') + userInfo.username);
    console.log(colors.cyan('Home dir: ') + userInfo.homedir);
}
exports.print = getOSinfo;