/*
Merge Sort Implemented
*/
function merge(arr1,arr2) {
    let i=0,j=0;
    const result=[]; //spcae complexity of O(n)
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i++])
        }else{
            result.push(arr2[j++])
        }
    }
    // remaining to done if one the array is finieshed we need to add remaining all element
    while(i<arr1.length){
        result.push(arr1[i++])
    }
    while(j<arr2.length){
        result.push(arr2[j++])
    }
    return result;
}

function recursiveMergeSort(array) {
    
    if(array.length<=1){
        return array;
    }
    let mid = Math.floor(array.length/2), left=0, right=array.length;
    return merge(recursiveMergeSort(array.slice(left,mid)) , recursiveMergeSort(array.slice(mid,right)));
}