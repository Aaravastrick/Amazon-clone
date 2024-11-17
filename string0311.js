// String

// let name = "gaurav";
// let age = 25;
// let isMarried = "unmarried";
// let address = "delhi";
// console.log(name,age,isMarried,address); // comma separated valueset


// let nam = "my       name       is        Gaurav"
// console.log(nam.split(' ').filter(nam => nam !="").join(' ')); // trim() function removes the leading and trailing spaces from the string.


function pallidrome(str){
    let nstr = str.toUpperCase();
    let word = nstr.split('').reverse()
    return (str.toUpperC fvase() == word.join(''))
}
console.log(pallidrome("madam")); // true
console.log(pallidrome("hello")); // false