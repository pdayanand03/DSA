/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2){
    if((num1+'').length !== (num2+'').length){
        return false;
    }
    const freq1 = {}, freq2 = {};
    let tempNum1 = num1, tempNum2 = num2;
    for(let i=0; i<(num1+'').length; i++){
        freq1[tempNum1%10] = (freq1[tempNum1%10] || 0)+1;
        freq2[tempNum2%10] = (freq2[tempNum2%10] || 0)+1;
        tempNum1 = Math.floor(tempNum1/10);
        tempNum2 = Math.floor(tempNum2/10);
    }
    console.log(freq1,freq2);
    for(let key in freq1){
        if(freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
}