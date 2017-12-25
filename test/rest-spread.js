var test = require('tap').test;
var detective = require('../');
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/files/rest-spread.js');

test('rest-spread', function (t) {
    try { 
        require('acorn5-object-spread/inject')
        t.doesNotThrow(detective.bind(detective, src), 'Files with rest or spread do not throw')
    } catch (_) {
        // node 0.12
        t.pass('SKIPPED rest spread')
    }
    t.end();
});
