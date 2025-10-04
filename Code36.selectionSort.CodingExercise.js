/*
Selection Sort Implemenatation
*/

const swap = (arr, index1, index2) =>[arr[index1],arr[index2]]=[arr[index2],arr[index1]];

function selectionSort(array) {
    let minValue,minIndex;
    for(let i=0; i<array.length-1; i++){
        minValue=array[i];
        minIndex=i;
        for(let j=i; j<array.length; j++){
            if(minValue>array[j]){
                minValue=array[j];
                minIndex=j;
            }
        }
        if(array[i]!==minValue){
            //Swap
            swap(array, i, minIndex);
        }
    }
    return array;
}