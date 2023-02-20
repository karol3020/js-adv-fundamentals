/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

/*
   return str.split('').every((char, index) => {
        return char === str[str.length - 1 - index]
    })
*/

/*
    const middle =Math.floor(str.length / 2)
    for (let i = 0; i < middle; ++i) {
        if (str[i] !== str[str.length - 1 - i])
    }
    return true
*/

const palindrome = (str) => {
    
    let str2 = str.split('').reverse().join('')
    
            str === str2
        // if ( str === str2 ) { 
        //     return "true"
        // }
};

module.exports = palindrome;
