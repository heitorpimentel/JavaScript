let valores = [1, 3, 4, 2, 5]

//console.log(valores[0])
/* for(let pos = 0; pos < valores.length; pos++){
    valores.sort()
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores){
    valores.sort()
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`) //tem a mesma função do código acima
}