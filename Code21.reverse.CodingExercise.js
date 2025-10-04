/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

function reverse(string){
    let splitarr = string.split('');
    let value = [];
   function helperReverse (index){
       if(index<0){
           return;
       }
       value.push(splitarr[index]);
       return helperReverse(index-1);
   }
    helperReverse(splitarr.length);
    return value.join('');
}