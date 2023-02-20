/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

/*
  0-  str[i] = d, reversed = 'd' + '' = 'd'
  1-  str[i] = a, reversed = 'a' + 'd' = 'ad'
  2-  str[i] = v, reversed = 'v' + 'ad' = 'vad'
  3-  str[i] = i, reversed = 'i' + 'avd' = 'ivad'
  4-  str[i] = d, reversed = 'd' + 'ivad' = 'divad'


    let reversed = ''

    for (let i = 0; i < str.length; ++i) {
        reversed = str[i] + reversed
    }
    return reversed
*/

//NEW FOR OF LOOP ES6
/*

    0-  char = d, reversed = 'd' + '' = 'd'
    1-  char = a, reversed = 'a' + 'd' = 'ad'
    2-  char = v, reversed = 'v' + 'ad' = 'vad'
    3-  char = i, reversed = 'i' + 'avd' = 'ivad'
    4-  char = d, reversed = 'd' + 'ivad' = 'divad'
    
    let reversed = ''

    for (let char of str) {
        reversed = char + reversed
    }
*/

const reverseString = (str) => {
    return str.split('').reverse().join('')
};

//TOP TECH SOLUTION !!!!!!
// const reverseString = (str) => {
// tylko array so we need to make string into array 
// str.split('').reduce((accumulator, currentValue) => {
    // return accumulator + currentValue
//}, 0(can be delete if we dont need to start looping from 0)) ==========================> 'david'
// };
module.exports = reverseString;
