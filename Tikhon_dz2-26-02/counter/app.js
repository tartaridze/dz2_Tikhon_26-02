document.querySelector('#counter')
let timer= 0
function counterStart(){
    const interval=setInterval(()=>{
        timer++
        console.log("Секунд прошло", timer)
        if (timer === 30) {
            clearInterval(interval)
        }
    },1000)
}
counterStart()

