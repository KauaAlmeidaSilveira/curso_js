function inverso(arg){

    const vlr = typeof(arg)

    if(vlr == "boolean"){
        return console.log(!arg)
    }else if(vlr == "number"){
        return console.log(-arg)
    }else{
        return console.log('booleano ou número esperado, mas o parâmetro é do tipo ' + typeof(arg))
    }


}


inverso(true)
inverso("6")
inverso(2000)
inverso("programação")
