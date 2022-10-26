// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const abc = "abcdefghijklmnopqrstuvwxyz";

  function etTuBrute(shiftLetterPosition, shift) {
    let newLetterPosition = shiftLetterPosition + shift;
    if (newLetterPosition > 25) {
      newLetterPosition -= 26;
      newLetter = abc[newLetterPosition];
      result += newLetter;
    } else if (newLetterPosition < 0) {
      newLetterPosition += 26;
      newLetter = abc[newLetterPosition];
      result += newLetter;
    } else {
      newLetter = abc[newLetterPosition];
      result += newLetter;
    }
  }

  function caesar(input = "", shift = 0, encode = true) {
    // your solution code here
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    inputArray = Array.from(input);
    result = "";
    if (encode === true) {
      inputArray.forEach((inLetter) => {
        if (
          inLetter !== abc[abc.indexOf(inLetter)] &&
          inLetter !== ABC[ABC.indexOf(inLetter)]
        ) {
          result += inLetter;
        } else if (inLetter === ABC[ABC.indexOf(inLetter)]) {
          let shiftLetterPosition = ABC.indexOf(inLetter);
          etTuBrute(shiftLetterPosition, shift);
        } else {
          let shiftLetterPosition = abc.indexOf(inLetter);
          etTuBrute(shiftLetterPosition, shift);
        }
      });
    } else if (encode === false) {
      inputArray.forEach((inLetter) => {
        if (
          inLetter !== abc[abc.indexOf(inLetter)] &&
          inLetter !== ABC[ABC.indexOf(inLetter)]
        ) {
          result += inLetter;
        } else if (inLetter === ABC[ABC.indexOf(inLetter)]) {
          let shiftLetterPosition = ABC.indexOf(inLetter);
          let newLetterPosition = shiftLetterPosition - shift;
          if (newLetterPosition > 25) {
            newLetterPosition -= 26;
            newLetter = abc[newLetterPosition];
            result += newLetter;
          } else if (newLetterPosition < 0) {
            newLetterPosition += 26;
            newLetter = abc[newLetterPosition];
            result += newLetter;
          } else {
            newLetter = abc[newLetterPosition];
            result += newLetter;
          }
        } else {
          let shiftLetterPosition = abc.indexOf(inLetter);
          let newLetterPosition = shiftLetterPosition - shift;
          if (newLetterPosition > 25) {
            newLetterPosition -= 26;
            newLetter = abc[newLetterPosition];
            result += newLetter;
          } else if (newLetterPosition < 0) {
            newLetterPosition += 26;
            newLetter = abc[newLetterPosition];
            result += newLetter;
          } else {
            newLetter = abc[newLetterPosition];
            result += newLetter;
          }
        }
      });
    }
    return result;
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
