const add1 = (element)=>{
   return element++
}
const moreThan10 = (element)=> element > 10

const equal1 = (element) => element === 1

function newForEach(array, callback) {
   for(element of array){
       element = callback(element)
   }
}

function newFill(array, num ,inicio = 0, fim = array.length) {
    for(let i=0; inicio < fim; inicio++){
        array[inicio] = num
    }
    return array
}

function newMap(array, callback) {
    output = [] 
    for(element of array){
        output.push(callback(element))
    }
    return output
}

function newSome(arr,callback){
    for (element of arr){
        let result = callback(element)
        if (result) return result
    }
    return false
}

function newFind(arr,callback){
    for (element of arr){
        let result = callback(element)
        if (result) return element
    }
    return undefined
}

function newFindIndex(arr,callback){
    for (element in arr){
       if(callback(arr[element])){
           return element
       }
    }
}


function newEvery(arr,callback){

    for(element of arr){
        if(!callback(element)) return false
    }
    return true
}

function newFilter(arr,callback){
    let output = []
    for (element of arr){
        if (callback(element)){
            output.push(element)
        }
    }
    return output
}

function newConcat(){
    output = []
    for(element in arguments){
       output.push(arguments[element])
    }
    return output
}

function newIncludes(arr,callback){
    for (element of arr){
        let result = callback(element)
        if (result) return result
    }
    return false
}

function newIndexOf(arr,element,indexInicial = 0){
    for (let index = indexInicial; index < arr.length; index++){
        if (arr[index] === element) return index
    }
    return -1
}

function newJoin(arr,divisor){
    let output = ''
    for (let i = 0; i < arr.length; i++){
        output += arr[i]
        if(i !== arr.length - 1){
            output += divisor
        }
    }
    return output
}
function newReduce(arr ,callback, acumulador=0, valorAtual, index, array=arr){
    for (index = 0; index < arr.length; index++){
        valorAtual = array[index]
        acumulador = callback(acumulador, valorAtual, index, array)
        
    }
    return acumulador
}


