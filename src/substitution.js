// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) {
      return false;
    }
    if (alphabet.length !== 26) {
      return false;
    }
    let inputArray = Array.from(input);
    let alphabetArray = Array.from(alphabet);
    let abcs = Array.from("abcdefghijklmnopqrstuvwxyz");
    let result = "";
    if (encode === true) {
      alphabetArray.forEach((alphaObj, j) => {
        if (alphabetArray.indexOf(alphaObj) !== j) {
          result = false;
        }
      });
      if (result === false) {
        return result;
      } else {
        inputArray.forEach((letterObj) => {
          if (letterObj === " ") {
            result += " ";
          } else {
            let origSpot = abcs.indexOf(letterObj.toLowerCase());
            result += alphabetArray[origSpot];
          }
        });
      }
    }
    if (encode === false) {
      alphabetArray.forEach((alphaObj, j) => {
        if (alphabetArray.indexOf(alphaObj) !== j) {
          result = false;
        }
      });
      if (result === false) {
        return result;
      } else {
        inputArray.forEach((letterObj) => {
          if (letterObj === " ") {
            result += " ";
          } else {
            let origSpot = alphabetArray.indexOf(letterObj.toLowerCase());
            result += abcs[origSpot];
          }
        });
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
