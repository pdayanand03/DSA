/*
capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/
function capitalizedWords(words) {
    function capitalizedWordsHelper(index) {
        if(index < 0){
            return;
        }
        words[index] = words[index].toUpperCase();
        capitalizedWordsHelper(index - 1)
    }
    capitalizedWordsHelper(words.length-1);
    return words;
}