// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests by Bjorn =)", () => {
  describe("encoding", () => {
    it("should correctly encode the given phrase into number pairs", () => {
      const actual = polybius("tuesday");
      expect(actual).to.equal("44545134411145");
    });
    it("should maintain spaces in the message, before and after encoding", () => {
      const actual = polybius("hello there");
      expect(actual).to.equal("3251131343 4432512451");
    });
    it("should ignore capital letters", () => {
      const actual = polybius("Hello There");
      expect(actual).to.equal("3251131343 4432512451");
    });
    it("should when encoding translate the letters 'i' and 'j' to 42", () => {
      const actual = polybius("injury");
      expect(actual).to.equal("423342542445");
    });
    it("should when encoding return a string.", () => {
      const actual = polybius("hello");
      expect(actual).to.be.a("string");
    });
  });
  describe("decoding", () => {
    it("should correctly decode the given phrase, based on the number pairs given to the function, into letters.", () => {
      const actual = polybius("44545134411145", false);
      expect(actual).to.equal("tuesday");
    });
    it("should maintain spaces in the message, before and after decoding.", () => {
      const actual = polybius("3251131343 4432512451", false);
      expect(actual).to.equal("hello there");
    });
    it("should when decoding translate the letters 42 to (i/j).", () => {
      const actual = polybius("423342542445", false);
      expect(actual).to.equal("(i/j)n(i/j)ury");
    });
    it("should when decoding accept only even number of characters in the input string, excluding spaces, otherwise return `false`.", () => {
      const inputString = "325113135";
      const actual = polybius(inputString, false);
      expect(actual).to.equal(false);
      expect(inputString).to.be.a("string");
    });
  });
});
