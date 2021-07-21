const clock = document.querySelector("#clock");

clock.innerText = "kkk" ;

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

getClock();
setInterval(getClock,1000);