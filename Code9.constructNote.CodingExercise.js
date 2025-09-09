/*
Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.
Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:
If M is the length of message and N is the length of letters:
Time Complexity: O(M+N)
Space Complexity: O(N)

Examples:
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
*/

// function constructNote(str1, str2) {
//     if(str1.length>str2.length)
//         return false;
//     const freq1={},freq2={};
//     for(let val of str1){
//         freq1[val] = (freq1[val] || 0) +1;
//     }
//     for(let val of str2){
//         freq2[val] = (freq2[val] || 0) +1;
//     }
//     for(let val in freq1){
//         if(freq1[val] !== freq2[val]){
//             return false;
//         }
//     }
//     return true;
// }

// optimized solution 

function constructNote(message, letters) {
    if (message.length > letters.length) return false;

    const freq = {};

    // count available letters
    for (let char of letters) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // use letters to build message
    for (let char of message) {
        if (!freq[char]) return false;  // not enough letters
        freq[char]--;
    }

    return true;
}



/*
Note:
1.Mine solution fails for scecarion constructNote('a', 'aa') whic gives false but expected is true
| Version           | Time Complexity | Space Complexity | Correctness                      |
| ----------------- | --------------- | ---------------- | -------------------------------- |
| Your code         | O(M+N)          | O(M+N)           | ❌ fails in cases like `"a","aa"` |
| Optimized version | O(M+N)          | O(N)             | ✅ correct                        |


*/
