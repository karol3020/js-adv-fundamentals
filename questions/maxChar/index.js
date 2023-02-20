/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

/**
 * character map junior
 * const str = "Simplified !"
 * const charMap = {}
 * 
 * for (let char of str ) {
 * charMap[char] = charMap[char] + 1 || 1}
 */

/**
 * Top tech 
 * const str = "Simplyfied !"
 * const charMap = new Map()
 * 
 * for (let char of str) {
 * const count = charMap.get(char)
 * charMap.set(char, count +1 || 1)
 * }
 * 
 * for (let [key, value] of charMap) {
 * console.log(key, value) 
 * }
 */


const maxCharacter = (str) => {
    // const charMap = {}
    // let max = 0 
    // let maxChar = "" 
    
    // for (let char of str) {
    //     charMap[char] = charMap[char] +1 || 1;
    // }
    
    // for (let char in charMap) {
    //     if (charMap[char] > max) {
    //         max = charMap[char]
    //         maxChar = char
    //     }
    // }

    // return maxChar

    const charMap = new Map()
    let max = 0
    let maxChar = ""

    for (const char of str) {
        charMap.set(char, charMap.get(char) + 1 || 1)
    }

    for (const [char, count] of charMap) {
        if (count > max) {
            max = count
            maxChar = char
        }
    }
        return maxChar
};

module.exports = maxCharacter;
