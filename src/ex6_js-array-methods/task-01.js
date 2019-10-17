function sliceAnalog(array, begin=0, end=array.length){
    if((begin<0)&&(end<0)){
        begin = array.length+begin;//eslint-disable-line no-param-reassign
        end = array.length+end;//eslint-disable-line no-param-reassign
    }
    let newArr = [];
    let countNew = 0;
    let count = begin;
    while ((countNew< end)&&(count<end)){
        newArr[countNew] = array[count]; 
        countNew++;
        count++;
    }
    return newArr;
}
module.exports = sliceAnalog;