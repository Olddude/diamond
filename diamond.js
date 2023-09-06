/**
 * Draws a diamond pattern with numbers from 1 to 9 (cycling) on cli
 * @param {number} size - The size of the diamond.
 * @throws {Error} Throws an error if the size provided is not an odd number.
 * @returns {void}
 */
function diamond(size) {
  if (size % 2 === 0) {
    throw new Error("Please provide an odd size.");
  }

  const halfSize = Math.floor(size / 2);
  const validChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const diamondArray = Array.from({ length: halfSize + 1 }, (_, i) => {
    const line = Array(size).fill(" ");
    const lineContent = Array.from({ length: i * 2 + 1 }, (_, j) => validChars[j % validChars.length]).join("");
    line.splice(halfSize - i, i * 2 + 1, ...lineContent);
    return line.join("");
  });

  const fullDiamond = [...diamondArray, ...diamondArray.slice(0, -1).reverse()];

  fullDiamond.forEach((line) => console.log(line));
}

try {
  diamond(Number.parseInt(process.argv[2] ?? '9', 10));
} catch (error) {
  console.error(error.message);
}
