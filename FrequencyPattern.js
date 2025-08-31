/*Write a function called same, which accepts 2 arrays. The function should return true if the every value in Array has it's corresponding
value squared in the second Array. The frequency of the value must be same
same([1,2,3], [4, 1, 9])   //true
same([1,2,3], [1, 9])      //false
same([1,2,3], [4, 4, 1])   //false
same([1,2,3, 2], [4, 1, 9, 4]) //true
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length)
        return false;
    const map = new Map();
    for (const val of arr2){
        map.set(val, (map.get(val) || 0) + 1);
    }
    for (const val of arr1){
        const squared = val**2;
        if(map.has(squared)){ //If its square then check value more than 2 reduce by 1 else delete the value from the map else return false 
            map.get(squared) > 1 ? map.set(squared, map.get(squared)-1) : map.delete(squared);
        }else{
            return false;
        }
    }
    return true; //Its means it has executed all the step then returned the result
}

// function same(arr1, arr2){
//     if(arr1.length !== arr2.length)
//         return false;
//     const set1=new Set(arr1);
//     const set2=new Set(arr2);
//     if(set1.size != set2.size){
//         return false;
//     }
//     for (const val of set1){
//         const squared= val ** 2;
//         if(set2.has(squared)){
//             set2.delete(squared)
//         }
//         else{
//             return false;
//         }
//     }
//     return true; //Its means it has executed all the step then returned the result
// }

//This one is failing in the duplicate case ame([1,2,2,3], [1,4,9,9])
