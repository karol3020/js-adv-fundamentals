/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
  return (
    //reversed =
      parseFloat(
          int.toString().split('').reverse().join('')
          )
            * 
          Math.sign(int)
          //if (int < 0 ) {return reversed * -1} return reversed
      )
};

module.exports = reverseInteger;
