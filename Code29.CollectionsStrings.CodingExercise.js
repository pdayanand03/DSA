/*
collectStrings
Write a function called collectStrings which accepts an object and returns an array of all the values in the object 
that have a typeof string

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
*/

function collectStrings(obj) {
    let result = [];
    for(let key in obj){
        if(!Array.isArray(obj[key]) && typeof obj[key] === 'object'){
            result = result.concat(collectStrings(obj[key]));
        }else if(typeof obj[key] === 'string'){
            result.push(obj[key]);
        }
    }
    return result;
}
var object = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
collectStrings(object);