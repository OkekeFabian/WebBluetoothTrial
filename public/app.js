if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
        console.log('Service worker registered!');
    value1:"hello"
    });
        
} 

var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Set time out is still working');
        //reject({ code:500,message:'An error Occurred!'})
    },3000);
    
});
