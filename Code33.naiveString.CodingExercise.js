
// naiveString('wowomgzomg','omg') omg is twice in long string

function naiveString(longString, shortString) {
    if(shortString > longString) return 0;
    let match=0, count=0, j=0;
    for(let i=0; i<longString.length; i++){
        if(longString[i]===shortString[j]){
            count++;
            ++j;
        }else{
            if(shortString[0]===longString[i]){
                count=1;
                j=1;
            }else{
                count=0;
                j=0;
            }
        }
        if(count===shortString.length){
           count=0;
            j=0;
            ++match; 
        }
    }
    return match;
}