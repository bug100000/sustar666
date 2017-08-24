var n = 1
// postMessage(n)
search: while(true){
    n += 1;
    for (var i=2; i<=Math.sqrt(n); i += 1)
        if (n % i == 0)
            continue search;
    //向主线程中发送消息
    postMessage(n);
}
