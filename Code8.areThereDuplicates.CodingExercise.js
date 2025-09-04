/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

// //frequency counter
// //Here O(n) for time and space complexity
// function areThereDuplicates(...args) {
//     if(!args.length){
//         return false
//     }
//     const freq = {};
//   for (let val of args){
//       freq[val] = (freq[val] || 0) + 1;
//       if(freq[val]>1){
//           return true;
//       }
//   }
//     return false;
// }

//MultiPointers
function areThereDuplicates(...args) {
    if(!args.length){
        return false;
    }
    let i;
    /*[1, 10, 2].sort(); // ["1","10","2"]
    //This may cause unexpected ordering for numbers. To fix:*/
    args.sort((a, b) => (a > b ? 1 : -1)); //O(n logn)
    console.log(args);
    for(let i=0; i<args.length; i++){
       if(args[i] == args[i+1]){
           return true
       }
    }
}