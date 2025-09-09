/*
Divide and Conquer - countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
Time Complexity - O(log n)
*/

function countZeroes(arr) {
    let left=0, right=arr.length-1, firstZero=-1;
    
    while(left<=right){
        const mid = Math.floor((left + right)/2);
        if(arr[mid]==0){
            if(mid===0 || arr[mid-1] ===1){
                firstZero = mid;
                break;
            }else{
                right = mid-1;
            }
        }else{
            left = mid+1;
        }
        
    }
    return firstZero===-1 ? 0 : arr.length - firstZero
}
