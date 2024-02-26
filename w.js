self.onmessage=(e)=>{
    let x=0;
    for(var i=1;i<=100000000;i++){
        x++;
    }
    self.postMessage(x);
}
