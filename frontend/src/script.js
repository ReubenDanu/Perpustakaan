function number(){
    let number = ''
    for(let i = 0; i < 20; i++){
        number += Math.floor(Math.random() * 10)
    }
    return number
}

console.log(number())