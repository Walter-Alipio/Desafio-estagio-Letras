import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (entrada) => {
  const resposta = stringWithoutRepeat(entrada);
  console.log(resposta);
});

export function stringWithoutRepeat(entrada) {
  const aux = entrada.split(" ");

  const stringRepeat = (word) => {
    const i = word.length - 1;

    if (word[i] === word[i - 1]) return true;

    const twoLastLetters = word[i - 1] + word[i];

    if (word.indexOf(twoLastLetters) !== i - 1) return true;

    return false;
  };

  if (!aux.every(stringRepeat)) {
    return entrada + ".";
  }

  const remove = (text) => {
    const textLength = text.length - 1;
    const finalLetter = text[textLength];

    const firstAppears = text.lastIndexOf(finalLetter, textLength - 1);

    const textAux = text
      .split("")
      .slice(firstAppears + 1, text.length)
      .join(" ");

    if (text[firstAppears + 1] !== textAux[0]) return text;

    const newText = text
      .split("")
      .slice(0, firstAppears + 1)
      .join("");
    return newText;
  };

  let newOut = aux.map((element) => {
    return remove(element);
  });

  newOut = newOut.join(" ");
  return newOut + ".";
}
