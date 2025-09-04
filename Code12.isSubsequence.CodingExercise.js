/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the 
characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the 
second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - O(1)
*/

/*order matter then we can use 
i for 1st string 
and j for 2nd string
and use for loops for 2nd string 
if it matches add then index of string1(like i++)
ig not then pass it and also check if i===str1.length-1 then don't proceed further return true
*/

function isSubsequence(str1, str2) {
    if(str1.length >str2.length)
        return false;
    let i=0;
    for(let j=0; j<str2.length; j++){
        if(str1[i]===str2[j]){
            ++i;
        }
        if(str1.length === i){
            return true;
        }
    }
    return false;
}