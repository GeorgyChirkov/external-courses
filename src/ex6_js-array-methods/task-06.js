function reduceAnalog (array, callback, initialValue){
    let i = 0, newInitialValue;
    if (initialValue===undefined){
        i+=1;
        newInitialValue = array[0];
    } 
    else {
        newInitialValue = initialValue
    }
    let result = newInitialValue;
    for (i; i < array.length; i++){
        result = callback(result, array[i], i, array);
    }
    return result
}
module.exports = reduceAnalog;