import { stringWithoutRepeat } from "./index.js";

const text1 = "oo ratoato roeuoeu aa roupaoupa dodo reiei dee romaoma";

const text2 = "banana";

const text3 = "a bananeira tem banana";

describe("Detecta palavras com letras repetidas e remove a repetição caso ocorra no texto todo", () => {
  it("Remove repetição", () => {
    expect(stringWithoutRepeat(text1)).toBe(
      "o rato roeu a roupa do rei de roma."
    );
  });

  it("Remove repetição", () => {
    expect(stringWithoutRepeat(text2)).toBe("bana.");
  });

  it("Não há remoção", () => {
    expect(stringWithoutRepeat(text3)).toBe("a bananeira tem banana.");
  });
});
