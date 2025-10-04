/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama')// true
// isPalindrome('amanaplanacanalpandemonium') // false
*/

function isPalindrome(string){
    let found = false;
    function isPalindromeHelper(index){
        if(string[index] !== string[string.length -1 -index]){
            found = false;
            return;
        }
        if(index === string.length -1 -index || index > string.length -1 -index){
            found=true;
            return;
        }
        isPalindromeHelper(index+1)
    }
    isPalindromeHelper(0);
    return found;
}