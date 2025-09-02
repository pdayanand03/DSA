/*Implement function called countUniqueValue whcih accepts a sorted array,  and counts the unique value in array. There can be negative numbers in array
but it will always be sorted
countUniqueValue([1,1,1,1,1,2]) //2
countUniqueValue([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValue([]) //0
countUniqueValue([-2,-1,-1,0,1]) //4
*/

/*Mine method 
I am trying to use the set because 
1. For setting it will take O(n) and size also O(n)
2. For fetching the size also it will take O(1)
overall its O(1)
*/

// function countUniqueValue(arr){
//     const set = new Set(arr);
//     return set.size;
// }

//Using Multipointer
function countUniqueValue(arr){
    if(!arr.length){
      return 0; //return length
        // return []; //return Array
    }
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
          arr[++i] = arr[j];  
        }
    }
    return i+1;  //return unique count value
    // return arr.slice(0,i+1); //return array
}
/*
Note:
Here Multipointer is optimum because
Set approach → simple, readable, but O(n) time + O(n) space.
Two-pointer approach → O(n) time, O(1) space, better for scalability.
*/