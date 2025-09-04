/*
Frequency Counter / Multiple Pointer - findPair
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true
if the pair exists or false if it does not.

findPair([6,1,4,10,2,4], 2) // true
findPair([8,6,2,4,1,0,2,5,13],1) // true
findPair([4,-2,3,10],-6) // true
findPair([6,1,4,10,2,4], 22) // false
findPair([], 0) // false
findPair([5,5], 0) // true
findPair([-4,4], -8) // true
findPair([-4,4], 8) // true
findPair([1,3,4,6],-2) // true
findPair([0,1,3,4,6],-2) // true
findPair([1,2,3], 0) // false

Part 1 - solve this with the following requirements:
Time Complexity Requirement - O(n)
Space Complexity Requirement - O(n)

Part 2 - solve this with the following requirements:
Time Complexity Requirement - O(n log n)  //sort
Space Complexity Requirement - O(1) //
*/

/*
Part 1
    This problem can be solved by Frequency Counter for storing data its O(n) and time complexity O(n)
*/

// function findPair(arr, val) {
//     if(arr.length <=1 || !val){
//         return false;
//     }
//     const freq = new Map(); //space O(n)
//     for (let val of arr){ //O(n)
//        freq.set(val, (freq.get(val) || 0) + 1);
//     }
//     // console.log(freq);
//     for(const [key,value] of freq){ //O(n)
//         // console.log('key',typeof key);
//          const complement = key-val;
//        if(freq.has(complement)){
//            return true;
//        }
//     }
//     return false;
// }

//My Solution
// function findPair(arr, val) {
//     if(arr.length<=1){
//         return false;
//     }
//     arr.sort((a,b)=>a-b); //O(n logn);
//     let left=0, right=arr.length-1; //O(1)
//     for(let i=0; i<arr.length; i++){ O(n)
//         const difference = Math.abs(arr[i]-arr[i+1]);
//         if(difference === Math.abs(val)){
//             return true;
//         }
//     }
//     return false;
// }
//For this code time complexity is O(n logn) ND space complexity is O(1)


//Chatgpt solution
function findPair(arr, val) {
    if (arr.length <= 1) return false;
    arr.sort((a,b)=>a-b); // O(n log n)

    let left = 0, right = 1;
    val = Math.abs(val);

    while (right < arr.length) { // O(n)
        const diff = arr[right] - arr[left];
        if (diff === val && left !== right) {
            return true;
        } else if (diff < val) {
            right++;
        } else {
            left++;
        }
        if (left === right) right++; // ensure distinct indices
    }
    return false;
}

/*
Mine 2nd solution fails at some condition 
findPair([1, 4, 7], 6) 
expected true but my method it gives false because it checks the adjacent pair but chatgpt's solution if you see inot only check adjacent pair\
but check with other this is an classic example or new approach to deal with mulitpointer
*/


