/*
Bubble Sort
*/
// const swap = (arr,i,j)=>[arr[i],arr[j]]=[arr[j],arr[i]];
// function bubbleSort(arr) {
//     for(let i=arr.length-1; i>=0; i--){
//         for(let j=0; j<i;j++){
//             if(arr[j]>arr[j+1]){
//                 //swap here
//                 swap(arr,j,j+1)
//             }
//         }
//     }
//     return arr;
// }

//Optimized Solution
const swap = (arr,i,j)=>[arr[i],arr[j]]=[arr[j],arr[i]];
function bubbleSort(arr) {
    let noSwap;
    for(let i=arr.length-1; i>=0; i--){
        noSwap=true;
        for(let j=0; j<i;j++){
            if(arr[j]>arr[j+1]){
                //swap here
                swap(arr,j,j+1)
                noSwap = false;
            }
            console.log("=>",arr,arr[j],arr[j+1])
        }
        if(noSwap)break; //It will break from the loop if swap has not happened
        console.log('==========================================');
    }
    return arr;
}

