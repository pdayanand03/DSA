/*
Sorting Exercise - pivot helper
In this exercise, your goal is to implement a function called pivot . This function contains nearly all of the logic you'll 
need in order to implement Quick Sort in the next exercise.
The pivot  function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less
than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if 
this helper returns the index of where the pivot value winds up.
For example, if we decide the pivot will always be the first element in the array, it should behave in the following way:

var arr = [4, 2, 5, 3, 6];
pivot(arr); // 2
arr; // [3, 2, 4, 5, 6];


In this code, the specifics of how the arr  variable gets mutated are not important. All that matters is that 4 winds up at index 2,
with 3 and 2 to the left of it (in any order), and with 5 and 6 to the right of it (in any order).
Hint: When we get to Quick Sort, it will be helpful for the pivot  helper to accept not only an array an an optional comparator, 
but also an optional start and end index. These should default to 0 and the array length minus 1, respectively. We've provided 
these to you in the starter code, but their utility may not be apparent yet. That's okay! When you get to implementing Quick Sort, 
their usefulness will become clearer.

Examples
var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strLength(a, b) {
  return a.length - b.length
}
 
pivot(arr1); // 3
pivot(arr2); // 4
pivot(arr3, strLength); // 1
 
arr1.slice(0, 3).sort((a, b) => a - b); // [2, 3, 4]
arr1.slice(3).sort((a, b) => a - b); // [5, 7, 8, 9, 10, 20]
 
arr2.slice(0, 4).sort((a, b) => a - b); // [0, 2, 4, 5]
arr2.slice(4).sort((a, b) => a - b); // [8, 10, 11, 12, 13, 16]
 
arr3.slice(0, 1).sort(strLength); // ["Blue"]
arr3.slice(1).sort(strLength); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]
*/
const swap = (array,i,j)=>[array[i],array[j]]= [array[j],array[i]];
function pivot(array,comparator=null,start=0,end=array.length-1){
    let i=start+1,pivotValue=array[start],swapIndex=start+1;
    while(i<=end){
      if(typeof comparator !== 'function' && array[i]<pivotValue){
        //swap
        swap(array,i,swapIndex);
        swapIndex++;
      }else if (typeof comparator === 'function' && comparator(array[i],pivotValue)<0){
        swap(array,i,swapIndex);
        swapIndex++;
      }
      i++;
    }
    const pivotPoint=swapIndex-1;
    swap(array,start,pivotPoint)
    return pivotPoint;
}

// function quickSort(array){
//   function quickSortHelper(start,end){
//     if(start>=end)return;
//     const pivotPoint = pivot(array,start,end);
//     console.log('Pivot',pivotPoint)
//     swap(array,start,pivotPoint)
//     quickSortHelper(start,pivotPoint-1);
//     quickSortHelper(pivotPoint+1,end);
//   }
//   quickSortHelper(0,array.length-1);
//   return array;
// }
function pivotHelper(arr){
  const pivotPoint = pivot(arr);
  console.log("Pivot index:", pivotPoint);
  console.log("Mutated arr:", arr);
  console.log("Left sorted:", arr.slice(0, pivotPoint).sort((a, b) => a - b));
  console.log("Right sorted:", arr.slice(pivotPoint).sort((a, b) => a - b)); 
}
var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
pivotHelper(arr1)