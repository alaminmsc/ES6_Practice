
function ArrayNumber(numbers){
    const result = numbers.map(a => a*2);
    return result;
}
var resultTo = ArrayNumber([3,5,8,9,10,50]);
console.log(resultTo);