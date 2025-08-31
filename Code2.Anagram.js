/*Given 2 strings, write a function to determine if 2nd string is anagram of first. An anagram is a word, phrase or name formed by rearranging
the letter of another such as cinema formed from iceman
validAnagram('', '')                        //true
validAnagram('aaz', 'zza')                  //false
validAnagram('anagram', 'nagaram')           //true
validAnagram('rat', 'car')                   //false
validAnagram('awesome', 'awesom')            //false
validAnagram('qwerty', 'qeywrt')              //true
validAnagram('texttwisttime', 'timetwisttext') //true
*/

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
       return false; 
    } 
    const freqStr1 = {}, freqStr2 = {};
    for(let i=0; i< str1.length; i++){
        const val1=str1[i], val2 =str2[i];
        freqStr1[val1] = (freqStr1[val1] ||  0) + 1;
        freqStr2[val2] = (freqStr2[val2] || 0) + 1;
    }
    for(val of str1){
        if(freqStr1[val] !== freqStr2[val]){
            return false;
        }
    }
    return true; 
} //mine solution

// You can still optimize by using only one freqString

// function validAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const freq = {};
//     for (let char of str1) {
//         freq[char] = (freq[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         if (!freq[char]) return false;
//         freq[char]--;
//     }
//     return true;
// }
