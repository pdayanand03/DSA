/*
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false.
*/

const isOdd = val => val % 2 !== 0;
function someRecursive(arr,callback){
    let value =false;
    function someRecursiveHelper(index){
        if(index<0){
            value=false;
            return;
        }
        if(callback(arr[index])){
            value=true;
            return;
        }
        
        someRecursiveHelper(index-1)
    }
    someRecursiveHelper(arr.length-1);
    return value;
}