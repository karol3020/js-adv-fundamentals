/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
    const aMap = buildCharMap(strA)
    const bMap = buildCharMap(strB)
    
    if (aMap.size !== bMap.size) {
        return false
    }

    for (const [charA, countA] of aMap) {
        if (bMap.get(charA) !== countA) {
            return false
        }
    }

    return true
}
    const buildCharMap = (str) => {
        
        const charMap = new Map()

        for (const char of removeSpacesAndLowerCase(str) ) {
            charMap.set(char, charMap.get(char) + 1 || 1)
        }   

        return charMap
    }

    const removeSpacesAndLowerCase = (str) => {
        return str.toLowerCase().replaceAll(" ", "")
    }

    /**
     * 2 FREAKIN LINES SOLUTION
     * const cleanString = (str) => {
     * return str.toLowerCase().replaceAll(" ", "").split("").sort().join("")
     * }
     * 
     * return cleanString(strA) === cleanString(strB)
     */

module.exports = anagrams;
