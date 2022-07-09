// The NODE JS path module
const path = require('path');
const baseName = path.basename('meo/etc/meo.js', '.js'); // returns meo
const extName = path.extname('meo/etc/meo.js'); // returns file extension
const dirName = path.dirname('meo/etc/meo.js'); // returns the directory name which is in this case meo/etc
const formatPath = path.format({ dir: 'etc/meo', base: 'etc.js' }); // returns etc/meo/etc.js
const name = 'path';
const joinPath = path.join('/', 'users', name, 'files', 'main.js'); // returns the joined path
const normalizePath = path.normalize('/users/joe/..//test.txt'); // returns the actual path regardless of . or ..
const parsePath = path.parse('/users/etc/main.js'); // returns an object containing extension, dirname, base etc
const relativePath = path.relative('/users/meo', 'meo/hello.js'); // returns the relative path
const resolvedPath = path.resolve('path.js'); // returns the full path
console.log(relativePath);