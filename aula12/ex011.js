var idade = 15
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Menor de idade')
    } else if (idade < 18 || idade > 65 && idade >=16){
    console.log('o voto é opcional')
    } else if (idade >= 18){
        console.log('Com sua idade o voto é obrigatório')
    }