/*
capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each 
string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/
function capitalizeFirst(arr) {
    function capitalizeFirstHelper(index) {
        if(index<0){
            return;
        }
        arr[index] = arr[index][0].toUpperCase()+arr[index].slice(1);
        capitalizeFirstHelper(index-1)
    }
    capitalizeFirstHelper(arr.length-1);
    return arr;
}
//First thing understand are here strings are immutable