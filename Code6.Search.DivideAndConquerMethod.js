/*
Write a method search where he is given in given array need to check the value is present or not
If yes then retunrn the index else -1
search([1,2,3,4,5,6,7,8,9,10],8) //7
search([1,2,3,4,5],8) //-1
search([1,2,3,4,5],5) //4
*/

//This problem is solved with the help of divide and conquer method
function search(arr, val){
    let min=0, max = arr.length-1;
    while(min<=max){
        let middle = Math.floor((min+max)/2);
        let middleElement = arr[middle];
        if(val<middleElement){
            max = middle;
        }else if(val>middleElement){
            min=middle+1;
        }else{
            return middle
        }
    }
    return -1;
}

search([1,2,3,4,5],5)