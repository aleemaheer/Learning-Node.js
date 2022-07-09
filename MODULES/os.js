const os = require('os');

const arch = os.arch(); // returns the 64 bit
const cpus = os.cpus(); // returns the information available on CPU
const endian = os.endianness();
const freemem = os.freemem();
const homeDir = os.homedir();
const hostName = os.hostname();
const loadAvg = os.loadavg();
const networkInterface = os.networkInterfaces();
const platform = os.platform();
const release = os.release();
const tmpdir = os.tmpdir();
const totalMem = os.totalmem();
const ostype = os.type();
const uptime = os.uptime();
const userInfo = os.userInfo();
console.log(userInfo);