const helper = require('./helper');

const [, , arg] = helper.arguments;

if (helper.isWindows) {
    helper.runWin(arg);
} else {
    helper.runMac(arg);
}

