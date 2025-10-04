/*
Merging Array
*/

function merge(arr1,arr2) {
    let i=0,j=0;
    const result=[];
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
merge([1,10,50],[2,14,99,100,400]);

