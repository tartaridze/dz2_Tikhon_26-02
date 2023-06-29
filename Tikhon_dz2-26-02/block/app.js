const box = document.querySelector('.miniBox')
let positionY = 0
let positionX = 0
let positionX_end = 448;
let positionY_end = 448;
const move = () => {
    if(positionX < 439 && positionY === 0){
        positionX += 16
        box.style.left = `${positionX}px`
        setTimeout(move, 30)
    }else if(positionX >= 439 && positionY < 439){
        positionY += 16
        box.style.top = `${positionY}px`
        setTimeout(move, 30)
    }else if(positionX_end > 0){
        positionX_end -= 16
        box.style.left = `${positionX_end}px`
        setTimeout(move, 30)
    }else if(positionY_end > 0){
        positionY_end -= 15
        box.style.top = `${positionY_end}px`
        setTimeout(move, 30)
    } else if(positionY_end === -2){
        location.reload()
    }
}

move()