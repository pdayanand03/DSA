/*
QuickSort
*/

function quickSort(array){
    const swap = (i,j)=>[array[i],array[j]]=[array[j],array[i]]
    function quickSortHelper(low,high){
       if(low>=high){
          return
       }
       let pivotValue=array[low];
       let swapIndex=low+1,j=low+1;
       while(j<=high){
          if(array[j] < pivotValue){
             console.log("while-if b:",j,swapIndex,array,array[j] ,'<', pivotValue)
             swap(j,swapIndex);
             // console.log("while-if  :",j,swapIndex,array,array[j] ,'<', pivotValue)
             swapIndex++;
          }else{
             console.log("while-else:",j,swapIndex,array,array[j] ,'<', pivotValue) 
          }
          
          j++;
       }
       console.log(low,swapIndex);
       const pivotFinal = swapIndex-1;
       swap(low,swapIndex-1);
       console.log(array,pivotFinal)
       quickSortHelper(low,pivotFinal-1);
       quickSortHelper(pivotFinal+1,high)
    }
   quickSortHelper(0,array.length-1);
   return array;
}

// let array = [9,8,7,6,5,4,3,2,1];
let array = [4,6,1,7,3,2];
quickSort(array);