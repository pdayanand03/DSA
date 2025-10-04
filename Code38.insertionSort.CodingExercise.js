/*
Insertion Sort
*/

function insertionSort(array) {
    const swap = (arr, index1,index2) => [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
    for(let i=1; i<array.length; i++){
        let j=i;
        while(j>=0){
            if(array[j] < array[j-1]){
                swap(array, j ,j-1);
                j--;
            }else{
                break;
            }
        }
    }
    return array;
}