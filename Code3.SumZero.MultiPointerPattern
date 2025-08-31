/* Write a function called sum zero which accepts sorted array of integers. The function should find the first pair where the sum is zero.
Return an array that include both that value sum to zero or undefined if pair doesn't exist

sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
sumZero([-2,0,1,3]) // return undefined
sumZero([1,2, 3]) //return undefined
*/


//Note if we are getting the sorted Array multipointer is best is optimum and if we are having the unsorted array then FrequencyPattern method used by map method works better


//This method has writeen somewhat concept as FrequencyPattern this will work only if the duplicates are not there for example [0,0]is there then it don't works
//If array is not sorted use this method 

function sumZero(arr) {
    const map = new Map();
    for(const val of arr){
        map.set(val, (map.get(val) || 0)+1);
    }
    for(const val of arr){
        if(map.has(-1 * val)){
            if(val){
                return [-val, val];
            }else if( map.get(val) >= 2){
              return [val,val];  
            }
            
        }
    }
    return undefined;
}

//This method is multipointer method where we get sorted array
// function sumZero(arr){
//     let left=0, right=arr.length-1;
//     while(left<right){
//         const sum = arr[left] + arr[right];
//         if(sum===0){
//             return [arr[left],arr[right]];
//         }else if(sum > 0){
//             right--;
//         }else{
//             left++;
//         }
//     }
// }