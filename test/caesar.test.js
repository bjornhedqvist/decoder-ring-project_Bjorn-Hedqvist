// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests by Bjorn =)", () => {
  describe("caesar function encoding", () => {
    it("should shift letters by input", () => {
      actual = caesar("hello", 3);
      expect(actual).to.equal("khoor");
    });
  });
  describe("caesar function decoding", () => {
    it("should shift letters the opposite way by input", () => {
      const actual = caesar("khoor", 3, false);
      expect(actual).to.equal("hello");
    });
  });
  describe("caesar function encoding", () => {
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding by input", () => {
      actual = caesar("hello there $5", 3);
      expect(actual).to.equal("khoor wkhuh $5");
    });
  });
  describe("caesar function decoding", () => {
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after decoding by input", () => {
      const actual = caesar("khoor wkhuh $5", 3, false);
      expect(actual).to.equal("hello there $5");
    });
  });
  describe("caesar function encoding", () => {
    it("should ignore capitals", () => {
      actual = caesar("Hello There", 3);
      expect(actual).to.equal("khoor wkhuh");
    });
  });
  describe("caesar function decoding", () => {
    it("should ignore capitals", () => {
      const actual = caesar("Khoor Wkhuh", 3, false);
      expect(actual).to.equal("hello there");
    });
  });
  describe("caesar function encoding wrap around", () => {
    it("should shift letters at the end of the alphabet back around to the beggining", () => {
      const actual = caesar("wxy z", 3);
      expect(actual).to.equal("zab c");
    });
  });
  describe("caesar function decoding wrap around", () => {
    it("should shift letters at the end of the alphabet back around to the beggining", () => {
      const actual = caesar("zab c", 3, false);
      expect(actual).to.equal("wxy z");
    });
  });
  describe("caesar function encoding negative shift", () => {
    it("should take in a negative shift value that shifts to the left", () => {
      const actual = caesar("cat paw", -3);
      expect(actual).to.equal("zxq mxt");
    });
  });
  describe("caesar function decoding negative shift", () => {
    it("should take in a negative shift value that shifts to the left", () => {
      const actual = caesar("fdw sdz", -3);
      expect(actual).to.equal("cat paw");
    });
  });
  describe("caesar errors", () => {
    it("should returns false if the shift value is equal to 0", () => {
      const actual = caesar("hello there", 0);
      expect(actual).to.be.false;
    });

    it("should return false if the shift value less than -25", () => {
      const actual = caesar("hello there", 26);
      expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
      const actual = caesar("hello there", -26);
      expect(actual).to.be.false;
    });

    it("should return false if the shift value is not present", () => {
      const actual = caesar("hello there");
      expect(actual).to.be.false;
    });
  });
});
