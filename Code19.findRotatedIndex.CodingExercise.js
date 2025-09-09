/*
Divide and Conquer - findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

Constraints:
Time Complexity - O(log n)
Space Complexity - O(1)

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/

/*
midIndex = check the mid Index;

check the value is there in midindex if yes thenre return the midIndex only else leave it

if(check left half is sorted) {
if(value between first number of mid number){
 then make right as midindex-1
}else{
 then make left as midindex+1
}
}else{ //(2nd half should be sorted)
  if(value between mid and last number){
    then make left as midindex+1
  }else{
    then make right as index +1
  }

  if number doesnt came anywhere here then return -1
}*/

function findRotatedIndex(arr, val) {
    let left=0, right=arr.length-1;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(arr[mid] === val){
            return mid;
        }
        //check left half is sorted or not
        if(arr[left] <= arr[mid]){
           //If its sorted check the value is there in the range of first half
            if(val>=arr[left] && val<arr[mid]){
                right =mid-1;
            }else{
                left=mid+1;
            }
        }else{  //check second half is sorted or not
        //If its sorted check the value is there in the range of second half
          if(val>arr[mid] && val<=arr[right]){
              left=mid+1
          }else{
              right= mid-1;
          } 
        }  
    }
    return -1;
}