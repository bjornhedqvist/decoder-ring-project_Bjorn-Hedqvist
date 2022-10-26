// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests by Bjorn =)", () => {
  describe("substitution encoding", () => {
    it("should correctly translate the given phrase, based on the alphabet given to the function.", () => {
      const input = "hello";
      const subAlphabet = "qwertyuiopasdfghjklzxcvbnm";
      //       alphabet = "abcdefghijklmnopqrstuvwxyz"
      const actual = substitution(input, subAlphabet);
      const expected = "itssg";
      expect(actual).to.equal(expected);
    });
    it("should allow the imput to include letters as well as special characters.", () => {
      const input = "zoinks";
      const subAlphabet = "qwertyuiopasdfghjkl!@#$%^&";
      //       alphabet = "abcdefghijklmnopqrstuvwxyz"
      const actual = substitution(input, subAlphabet);
      const expected = "&gofal";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces throughout.", () => {
      const input = "hi hello";
      const subAlphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, subAlphabet);
      const expected = "io itssg";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters in the input.", () => {
      const input = "Hi Hello";
      const subAlphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, subAlphabet);
      const expected = "io itssg";
      expect(actual).to.equal(expected);
    });
    it("should return false if no substitution alphabet is given.", () => {
      const input = "zoinks";
      const actual = substitution(input);
      expect(actual).to.be.false;
    });
    it("should return false if there are any duplicate characters in the given alphabet.", () => {
      const input = "zoinks";
      const subAlphabet = "xyzghsjhhstygscclananfdffg";
      //       alphabet = "abcdefghijklmnopqrstuvwxyz"
      const actual = substitution(input, subAlphabet);
      expect(actual).to.be.false;
    });
    it("should it returns false if the given alphabet isn't exactly 26 characters long.", () => {
      const input = "zoinks";
      const subAlphabet = "thatstooshortsilly";
      const actual = substitution(input, subAlphabet);
      expect(actual).to.be.false;
    });
  });
  describe("substitution decoding", () => {
    it("should correctly decode the given phrase, based on the alphabet given to the function.", () => {
      const input = "itssg";
      const subAlphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, subAlphabet, false);
      const expected = "hello";
      expect(actual).to.equal(expected);
    });
    it("should allow the imput to include letters as well as special characters.", () => {
      const input = "&gofal";
      const subAlphabet = "qwertyuiopasdfghjkl!@#$%^&";
      const actual = substitution(input, subAlphabet, false);
      const expected = "zoinks";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces throughout.", () => {
      const input = "io itssg";
      const subAlphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, subAlphabet, false);
      const expected = "hi hello";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters in the input.", () => {
      const input = "Io Itssg";
      const subAlphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(input, subAlphabet, false);
      const expected = "hi hello";
      expect(actual).to.equal(expected);
    });
    it("should return false if there are any duplicate characters in the given alphabet.", () => {
      const input = "&gofal";
      const subAlphabet = "xyzghsjhhstygscclananfdffg";
      const actual = substitution(input, subAlphabet, false);
      expect(actual).to.be.false;
    });
    it("should it returns false if the given alphabet isn't exactly 26 characters long.", () => {
      const input = "&gofal";
      const subAlphabet = "sillyshorttoothats";
      const actual = substitution(input, subAlphabet, false);
      expect(actual).to.be.false;
    });
  });
});
