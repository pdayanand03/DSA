/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)
Space Complexity - O(1)
*/
function minSubArrayLen(arr,val) {
    let tempSum =0; //temp varaible for sum
    let i=0, j=1; //for driving the iteration
    let tempI, tempJ, tempLength, minlength = arr.length;
    while(j<arr.length){
        if(j==1){
            tempSum = arr[i] + arr[j];
        }else {
            tempSum = tempSum + arr[j];
        }
        while(tempSum >= val){
            tempLength = j-i;
            if(tempLength < minlength){
                minlength = tempLength;
                tempI = i;
                tempJ = j;
            }
            if(tempI === tempJ){
                // return arr.slice(tempI, tempJ+1);
                return minlength+1;
            }
            tempSum = tempSum - arr[i++];
            
        }
        j++;//last statement
    }
    // return arr.slice(tempI, tempJ+1);
    return minlength+1> arr.length ? 0 : minlength+1
}

