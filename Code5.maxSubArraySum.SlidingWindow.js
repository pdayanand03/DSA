/*
Write a function called maxSumArraySum which accepts an array of integer and a number called n.
The function should caluclate the maximum sum of n consecutive elements in the array
maxSumArraySum([1,2,5,2,8,1,5],2) //10
maxSumArraySum([1,2,5,2,8,1,5],4) //17
maxSumArraySum([4,2,1,6],2) //7
maxSumArraySum([4,2,1,6,2],4) //13
maxSumArraySum([],4) //null
*/

// //Mine Approach
// function maxSumArraySum(arr, num){
//     if(!arr.length){
//         return null;
//     }
//     let count=0,prevCount;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i; j<i+num; j++){
//             count=count+arr[j];
//         }
//         if(prevCount<count || !i){
//             prevCount = count;
//         }
//         count=0;
//     }
//     return prevCount;
// }

//By using SlidingWindow Method
function maxSumArraySum(arr, num) {
    if(arr.length < num){
        return null;
    }
    let maxSum,tempSum=0, i;
    for(i=0; i<num; i++){
        tempSum=tempSum+arr[i];
    } //Window Frame sum created
    maxSum = tempSum;
    for (j=i;j<arr.length;j++){
        tempSum = tempSum + arr[j] -arr[j-num];
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum
}

/*
Note:
for mine sceneario if the n and array length are closer in worst case it will n*n-1 which is o(n^2)
For Sliding window it will be o(n)
So the sliding window will be the efficent method to solve this problem
*/