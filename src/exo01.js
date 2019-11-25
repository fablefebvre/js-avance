import { booleanLiteral } from "@babel/types";

// retourne true si la variable passée est une primitive
export function isPrimitive(x) {
    if(x typeof undefined ||
        x typeof boolean ||
        x typeof number ||
        x typeof string ||
        x typeof symbol
        ) {
        return true;
    } else {
        return false;
    }
}
