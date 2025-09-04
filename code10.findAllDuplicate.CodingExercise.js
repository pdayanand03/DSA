/*
Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
*/

//Expectation is here time Complexity
//the given array is also not sorted sorting will take of O(n logn) multi pointer we cannot apply
//The best way to solve the Problem is using object or Frequency Pattern which will solve in O(n)

// function findAllDuplicates(arr) {
//     if(!arr.length){
//         return [];
//     }
//     let i=0, freq={};
//     for(let j=0; j<arr.length; j++){
//         freq[arr[j]] = (freq[arr[j]] || 0)+1;
//         if(freq[arr[j]]===2){
//             arr[i++] = arr[j];
//         }
//     }
//     return i ? arr.slice(0,i):[]
// }

//This version of code will mutate the original array it's better to use the below optimized code 

function findAllDuplicates(arr) {
    const freq = {}, result = [];
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] === 2) {
            result.push(num);
        }
    }
    return result;
}
