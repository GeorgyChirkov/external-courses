function sliceAnalog(array, begin=0, end=array.length){
    if((begin<0)&&(end<0)){
        newBegin = array.length+begin;
        newEnd = array.length+end;
    } else {
        newBegin = begin;
        newEnd = end;
    }
    let newArr = [];
    let countNew = 0;
    let count = newBegin;
    while ((countNew< newEnd)&&(count<newEnd)){
        newArr[countNew] = array[count]; 
        countNew++;
        count++;
    }
    return newArr;
}
module.exports = sliceAnalog;