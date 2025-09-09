/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') //  1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

// function findLongestSubstring(str) {
//     if(!str.length){
//         return 0;
//     }
//     const obj = {};
//     let i=0, j, longestStringLength=0, tempLongestStringLength=0;
//     for (j=0; j<str.length; j++){
//         if(obj[str[j]] >=1){
//             ++obj[str[j]];

//             do{
//                --obj[str[i]]; 
//                ++i;  
//             }while(str[i-1] !== str[j])
            
//             tempLongestStringLength = j-i+1
//             if(tempLongestStringLength>longestStringLength){
//                   longestStringLength = tempLongestStringLength;
                
//             }
            
//         }else{
//           obj[str[j]]=1  
//              tempLongestStringLength = j - i + 1;
//             if (tempLongestStringLength > longestStringLength) {
//                 longestStringLength = tempLongestStringLength;
//             }
//         }
//     }
//     console.log(longestStringLength)
// }

//Optimum Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

/*
This is how the efficienct code run

findLongestSubstring('rithmschool')

i=0, start=0
longest - max(0,1) for r longest=1
seen{'r':1,}

i=1, start=0
longest - max(1,2) for i longest=2
seen{'r':1,'i':2}

i=2, start=0
longest - max(2,3) for t longest=3
seen{'r':1,'i':2,'t':3}

i=3, start=0
longest - max(3,4) for h longest=4
seen{'r':1,'i':2,'t':3,'h':4}

i=4, start=0
longest - max(4,5) for m longest=5
seen{'r':1,'i':2,'t':3,'h':4,'m':5}

i=5, start=0
longest - max(5,6) for s longest=6
seen{'r':1,'i':2,'t':3,'h':4,'m':5,'s':6}

i=6, start=0
longest - max(6,7) for c longest=7
seen{'r':1,'i':2,'t':3,'h':4,'m':5,'s':6,'c':7}

i=7, start = (0,4) =>4
longest - max(7,(7-4+1 = 4)) for h longest=7
seen{'r':1,'i':2,'t':3,'h':(7+1 = 8),'m':5,'s':6,'c':7}

i=8, start = 4
longest - max(7,(8-4+1 = 5)) for h longest=7
seen{'r':1,'i':2,'t':3,'h':(7+1 = 8),'m':5,'s':6,'c':7,'o':9}

i=9, start = max(4, 9) = 9
longest - max(7,(9-9+1 =1)) for h longest=7
seen{'r':1,'i':2,'t':3,'h':(7+1 = 8),'m':5,'s':6,'c':7,'o':10}

i=10, start = 9
longest - max(7,(10-9+1 = 2)) for h longest=7
seen{'r':1,'i':2,'t':3,'h':(7+1 = 8),'m':5,'s':6,'c':7,'o':10, l:'11'}

*/