const { spawn } = require('child_process');
const process   = require('process');

const helper = {
    get isWindows() {
        return /^win/.test(process.platform);
    },

    runMac(command) {
        const child = spawn('yarn', [`${command}-mac`], { stdio: 'inherit', shell: true });

        // child.on('exit', (code) => process.exit(code));
    },

    runWin(command) {
        const child = spawn('yarn', [`${command}-win`], { stdio: 'inherit', shell: true });

        // child.on('exit', (code) => process.exit(code));
    },

    get arguments() {
        return process.argv;
    },
};

module.exports = helper;

