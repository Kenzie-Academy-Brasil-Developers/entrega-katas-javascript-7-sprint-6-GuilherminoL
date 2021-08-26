const add1 = (element)=>{
   return element++
}
const moreThan10 = (element)=> element > 10

const equal1 = (element) => element === 1

function forEach(array, callback) {
   for(element of array){
       element = callback(element)
   }
}

function fill(array, num ,inicio = 0, fim = array.length) {
    for(let i=0; inicio < fim; inicio++){
        array[inicio] = num
    }
    return array
}

function map(array, callback) {
    output = [] 
    for(element of array){
        output.push(callback(element))
    }
    return output
}

function some(arr,callback){
    for (element of arr){
        let result = callback(element)
        if (result) return result
    }
    return false
}

function find(arr,callback){
    for (element of arr){
        let result = callback(element)
        if (result) return element
    }
    return undefined
}

function findIndex(arr,callback){
    for (element in arr){
       if(callback(arr[element])){
           return element
       }
    }
}


function every(arr,callback){

    for(element of arr){
        if(!callback(element)) return false
    }
    return true
}

function filter(arr,callback){
    let output = []
    for (element of arr){
        if (callback(element)){
            output.push(element)
        }
    }
    return output
}

function concat(){
    output = []
    for(element in arguments){
       output.push(arguments[element])
    }
    return output
}

function includes(arr,callback){
    for (element of arr){
        let result = callback(element)
        if (result) return result
    }
    return false
}

function indexOf(arr,element,indexInicial = 0){
    for (let index = indexInicial; index < arr.length; index++){
        if (arr[index] === element) return index
    }
    return -1
}

function join(arr,divisor){
    let output = ''
    for (let i = 0; i < arr.length; i++){
        output += arr[i]
        if(i !== arr.length - 1){
            output += divisor
        }
    }
    return output
}
function reduce(arr ,callback, acumulador=0, valorAtual, index, array=arr){
    console.log(callback)
    for (index = 0; index < arr.length; index++){
        valorAtual = array[index]
        acumulador = callback(acumulador, valorAtual, index, array)
        
    }
    return acumulador
}


