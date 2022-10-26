// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const polybiusSquare = [
    {"a": 11}, {"b": 21}, {"c": 31}, {"d": 41}, {"e": 51}, 
    {"f": 12}, {"g": 22}, {"h": 32}, {"i/j": 42}, {"k": 52},
    {"l": 13}, {"m": 23}, {"n": 33}, {"o": 43}, {"p": 53},
    {"q": 14}, {"r": 24}, {"s": 34}, {"t": 44}, {"u": 54},
    {"v": 15}, {"w": 25}, {"x": 35}, {"y": 45}, {"z": 55} 
  ]

  function polybius(input, encode = true) {
    // your solution code here

    let finalResult = "";
    if (encode === true) {
      let encodeResult = "";
      let inputArray = Array.from(input);
      inputArray.forEach((inLetter) => {
        if (inLetter.toLowerCase() === "i" || inLetter.toLowerCase() === "j") {
          encodeResult += "42";
        } else if (inLetter == " ") {
          encodeResult += inLetter;
        }
        polybiusSquare.forEach((poly) => {
          if (inLetter.toLowerCase() === Object.keys(poly).toString()) {
            encodeResult += Object.values(poly);
          }
        });
      });
      finalResult = encodeResult.toString();
    } else if (encode === false) {
      if (input.replace(/\s/g, "").length % 2 !== 0) {
        return false;
      }
      let decodeResult = "";
      let inputPairs = input.match(/[0-9]{2}||\s/g);

      inputPairs.forEach((inNumber) => {
        if (inNumber === "42") {
          decodeResult += "(i/j)";
        } else if (inNumber === "") {
          decodeResult += " ";
        }
        polybiusSquare.forEach((poly) => {
          if (
            inNumber === Object.values(poly).toString() &&
            inNumber !== "42"
          ) {
            decodeResult += Object.keys(poly);
          }
        });
      });
      finalResult = decodeResult.trim();
    }
    return finalResult;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
