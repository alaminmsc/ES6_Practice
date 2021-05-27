function ArrayNumber(numbers){
    const result = numbers.filter(a => a > 50);
    return result;
}
var resultTo = ArrayNumber([3,5,8,9,10,50,100]);
console.log(resultTo);