/*
Linear Search
This function accepts an array and a value
Loop through the array and check if the current array element is equal to the value
If it is, return the index at which the element is found
If the value is never found retrun -1
*/

function linearSearch(arr, value){
    for(let index in arr){
        if(value === arr[index]){
            return index;
        }
    }
    return -1;
}