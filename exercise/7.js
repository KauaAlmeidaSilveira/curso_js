function estaEntre(num, min, max){
    if(num >= min && num <= max){
        return console.log(true) 
    }else{
        return console.log(false) 
    }
}

estaEntre(100, 50, 101)
estaEntre(100, 200, 400)
estaEntre(1458, 1460, 2000)
