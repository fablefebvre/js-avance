export function addWatcher(obj, prop, getter, setter) {
  var value = obj[prop];
  Object.defineProperty(obj, prop, {
    get: function() {
      getter();
      return value;
    },
    set: function(val) {
      setter();
      value = val;
    },
    configurable: true
  });
  // change le descripteur de la propriété prop de l'objet obj pour appeler les fonctions:
  // - getter lorsque la propriété prop est accédée
  // - setter lorsque la propriété prop est modifiée
  // il doit toujours être possible d'écrire et de lire une valeur pour la propriété prop
}

export function setPrivatesAndConstants(obj) {
  // changer le descripteur de chaque propriété de l'objet:
  // énumérable si la clé ne commence pas par par un _
  // mutable et configurable si la clé ne commence pas par une majuscule (regex: /[A-Z]/)
  for (var k in obj) {
    //Object.keys(obj)) {
    if (k.startsWith("_")) {
      Object.defineProperty(obj, k, { enumerable: false });
    }
    if (/[A-Z]/.test(k[0])) {
      Object.defineProperty(obj, k, { writable: false, configurable: false });
    }
  }
}
