self.onmessage = function(e){
    let x=0;
    for(let i=1; i<=100000000;i++){

        x++;
    }
    self.postMessage(x);//will triggered onmessage event handler in main thread
}



