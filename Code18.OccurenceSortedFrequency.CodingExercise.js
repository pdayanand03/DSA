/*
Divide and Conquer - sortedFrequency
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

sortedFrequency([1,1,2,2,2,2,3],2) // 4 
sortedFrequency([1,1,2,2,2,2,3],3) // 1 
sortedFrequency([1,1,2,2,2,2,3],1) // 2 
sortedFrequency([1,1,2,2,2,2,3],4) // -1
Time Complexity - O(log n)
*/

function sortedFrequency(arr,val) {
    let firstOccurence=-1, lastOccurence=arr.length, left=0, right=arr.length-1;
    //find the first occurence
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(arr[mid] === val){
            if(mid ===0 || arr[mid-1] !==val){
                firstOccurence=mid;
                break;
            }else{
                right = mid-1;
            }
        }else{
           left = mid+1; 
        }
    }
    left=0, right=arr.length-1;
    //Find the second occurence
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(arr[mid] === val){
            if(mid ===arr.length-1 || arr[mid+1] !==val){
                lastOccurence=mid;
                break;
            }else{
                left = mid+1;
            }
        }else{
           right = mid-1; 
        }
    }
    if(firstOccurence===-1 && lastOccurence===arr.length){
        return -1;
    }
    firstOccurence = firstOccurence===-1 ? 0 : firstOccurence
    lastOccurence = lastOccurence===arr.length ? arr.length-1 : lastOccurence
    return  lastOccurence-firstOccurence+1;
}


//We can further rectify the code if wanted it into 2 function which is good practices but I have kept the raw code because this is how i think first and then refactor the code