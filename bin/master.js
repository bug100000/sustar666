var fork = require('child_process').fork
var cp = require('child_process')
var cpus = require('os').cpus();
for (var i = 0; i < cpus.length; i++){
    //成功    
    fork('./bin/www.js')
    
    //未成功，有待研究
    // cp.execFile('www', function(err, stout, stderr){
    //     console.log(err)
    //     console.log(stout)
    //     console.log(stderr)
    // })

    //未成功，有待研究
    // cp.exec('node www.js', function(err, stout, stderr){
    //     console.log(err)
    //     console.log(stout)
    //     console.log(stderr)
    // })

    //未成功，有待研究
    // cp.spawn('node', ['www.js'])
}