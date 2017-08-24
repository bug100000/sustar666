var fork = require('child_process').fork
var cp = require('child_process')
var cpus = require('os').cpus();

var n = []

for (var i = 0; i < cpus.length; i++){
    //成功    
    n[i] = fork('./bin/www.js')
    
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

//父子进程间的通信（未成功）
// n[0].on('message', function(m){
//     console.log('Parent got message0:', m)
// })
// n[1].on('message', function(m){
//     console.log('Parent got message1:', m)
// })
// n[2].on('message', function(m){
//     console.log('Parent got message2:', m)
// })
// n[3].on('message', function(m){
//     console.log('Parent got message4:', m)
// })

// n[0].send({hello: 'world0'})
