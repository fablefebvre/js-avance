export const range = (start, end) => ({
  [Symbol.iterator]: function*() {
    let nombre = start;
    while (nombre <= end) yield nombre++;
  }
  // retourner un itérable itérant entre les deux bornes numériques
});

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
