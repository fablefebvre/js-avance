import { booleanLiteral } from "@babel/types";

// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
  return (
    x === null ||
    ["undefined", "boolean", "number", "string", "symbol"].includes(typeof x)
  );
}
