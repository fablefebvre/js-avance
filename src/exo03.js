import { objectExpression } from "@babel/types";

// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  var reversed = {};
  for (let key in obj) {
    reversed[obj[key]] = key;
  }
  return reversed;
}
