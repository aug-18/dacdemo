setInterval(()=>{
    let a = document.getElementById("id1");
    
    let ref = new Date();
    let hours = ref.getHours();
    let minutes = ref.getMinutes();
    let seconds = ref.getSeconds();

    a.innerHTML = hours + ":" + minutes + ":" + seconds;
    
}, 1000);
