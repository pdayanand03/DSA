/*
Find digit of Number
*/

const digitNumber = (number, digit)=>Math.floor(Math.abs(number)/(10**(digit)))%10; //time complexity O(1)

/*
find largest digit number
*/
const largestdigitNumber = (array) =>{ //time complexity O(n)
    let largestDigitCount=0;
    for(let i =0; i<array.length; i++){
        let value=String(Math.abs(array[i])).length
        largestDigitCount = largestDigitCount<value ? value : largestDigitCount;
    }
    return largestDigitCount;
}
// largestdigitNumber([23,345,23,36,-7890123,45,987,986,89,945]);
// largestdigitNumber([23,2,1]);

function flatrecursive(array){
    let arr = [];
    for(let i=0; i<array.length; i++){
        if(!Array.isArray(array[i])){
           arr.push(array[i]);
        }else{
            arr=arr.concat(flatrecursive(array[i])); 
        }
    }
    // console.log('daya',arr)
    return arr;
}

function radixSort(array){
    let dataBuckets= [],j=0;
    const itertaion = largestdigitNumber(array);
    while(j < itertaion){
        dataBuckets=[];
        // dataBuckets = Array.from({length:10},()=>[]) //This will do same thing as the below for loop will create 10 empty nested loop
        for(let i=0; i<=9; i++){
            dataBuckets.push([])//O(n + k)
        }
        for(let i=0;i<array.length;i++){
            const index = digitNumber(array[i],j)
            dataBuckets[index].push(array[i]);
        }
        
        // array = flatrecursive(dataBuckets);
        array = [].concat(...dataBuckets)
        j++;
    }
    return array;
}
radixSort([10,9680,3221,1,577,9420,7,5622,4793,2030,3138,82,2599,743,4127]);


//If Digits size are samller than it's better to use radix else we need to go with O(nlogn) then in that case merge sort, quick sort