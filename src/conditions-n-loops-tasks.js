/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result;
  if (a >= b) {
    const max = a;
    if (max >= c) {
      result = max;
    } else {
      result = c;
    }
  } else if (b >= c) {
    result = b;
  } else {
    result = c;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result;
  if (queen.x === king.x || queen.y === king.y) {
    result = true;
  } else if (queen.x === queen.y && king.x === king.y) {
    result = true;
  } else if (queen.x === king.y && king.x === queen.y) {
    result = true;
  } else if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result;
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  const max = Math.max(a, b, c);
  const sum = a + b + c - max;
  if (sum <= max) {
    return false;
  }
  if (a === b) {
    result = true;
  } else if (a === c) {
    result = true;
  } else if (b === c) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let deci = Math.trunc(num / 10);
  if (num >= 10) {
    switch (deci) {
      case 1:
        deci = 'X';
        break;
      case 2:
        deci = 'XX';
        break;
      case 3:
        deci = 'XXX';
        break;
      default:
        break;
    }
  } else {
    deci = '';
  }
  let ed = num % 10;
  switch (ed) {
    case 1:
      ed = 'I';
      break;
    case 2:
      ed = 'II';
      break;
    case 3:
      ed = 'III';
      break;
    case 4:
      ed = 'IV';
      break;
    case 5:
      ed = 'V';
      break;
    case 6:
      ed = 'VI';
      break;
    case 7:
      ed = 'VII';
      break;
    case 8:
      ed = 'VIII';
      break;
    case 9:
      ed = 'IX';
      break;
    default:
      ed = '';
      break;
  }
  return deci + ed;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const element = numberStr[i];
    let el;
    switch (element) {
      case '-':
        el = 'minus';
        break;
      case '0':
        el = 'zero';
        break;
      case '1':
        el = 'one';
        break;
      case '2':
        el = 'two';
        break;
      case '3':
        el = 'three';
        break;
      case '4':
        el = 'four';
        break;
      case '5':
        el = 'five';
        break;
      case '6':
        el = 'six';
        break;
      case '7':
        el = 'seven';
        break;
      case '8':
        el = 'eight';
        break;
      case '9':
        el = 'nine';
        break;
      case '.':
        el = 'point';
        break;
      case ',':
        el = 'point';
        break;
      default:
        break;
    }
    if (i === numberStr.length - 1) {
      result += el;
    } else {
      result += el;
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    const element = str[i];
    res += element;
  }
  return str === res;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  if (num === digit) {
    return true;
  }
  for (let i = 1; i < num; i *= 10) {
    const res = Math.trunc(num / i);
    if (res % 10 === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const len = arr.length;
  if (len < 3) return -1;
  let result;
  let head = arr[0];
  let tail = 0;
  for (let t = 2; t < len; t += 1) {
    tail += arr[t];
  }
  for (let index = 1; index < len - 1; index += 1) {
    const balanseInd = index;
    if (head === tail) {
      result = balanseInd;
      break;
    } else {
      result = -1;
    }
    head += arr[index];
    tail -= arr[index + 1];
  }
  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 * function rotateMatrix(matrix) {
  let newMatrix = [];
  const columnCount = matrix[0].length;
  for (let i = 0; i < matrix.length; i += 1) {
    let row = [];
    for (let j = columnCount - 1; j >= 0; j -= 1) {
      row = [...row, matrix[j][i]];
    }
    newMatrix = [...newMatrix, row];
  }
  return newMatrix;
}
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const dick = matrix;
  for (let i = 0; i < n / 2; i += 1) {
    for (let j = i; j < n - i - 1; j += 1) {
      const tmp = dick[i][j];
      dick[i][j] = dick[n - j - 1][i];
      dick[n - j - 1][i] = dick[n - i - 1][n - j - 1];
      dick[n - i - 1][n - j - 1] = dick[j][n - i - 1];
      dick[j][n - i - 1] = tmp;
    }
  }
  return dick;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const resultArr = arr;
  for (let i = 1; i < resultArr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (resultArr[i] < resultArr[j]) {
        const x = resultArr[i];
        resultArr[i] = resultArr[j];
        resultArr[j] = x;
      }
    }
  }
  return resultArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let string = str;

  function shufle(param) {
    let startString = '';
    let endString = '';
    for (let index = 0; index < param.length; index += 1) {
      const simbol = param[index];
      if (index % 2 === 0) {
        startString += simbol;
      } else {
        endString += simbol;
      }
    }
    return startString + endString;
  }

  let result;

  for (let i = 0; i < iterations; i += 1) {
    result = shufle(string);
    string = result;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let param = number;
  let digits = [];
  while (param > 0) {
    digits = [param % 10, ...digits];
    param = Math.floor(param / 10);
  }
  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] >= digits[i]) {
    i -= 1;
  }
  if (i === 0) {
    return number;
  }
  let j = digits.length - 1;
  while (digits[j] <= digits[i - 1]) {
    j -= 1;
  }
  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];
  const ind = i;
  let rest = [];
  while (i < digits.length) {
    rest = [...rest, digits[i]];
    i += 1;
  }
  const sorted = rest.sort();
  const result = Number.parseInt(
    digits.slice(0, ind).concat(sorted).join(''),
    10
  );
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
