export function PubSub() {
  this.events = new Map();
}

PubSub.prototype.on = function(event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  if (!this.events.has(event)) {
    this.events.set(event, []);
  }
  if (event === "*") {
    this.events.values(e => e.push(callback));
  } else {
    this.events.get(event).push(callback);
  }
};

PubSub.prototype.emit = function(event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`
  this.events.get(event).map(callback => callback(data));
};

PubSub.prototype.off = function(event, callback) {
  this.events.set(event, this.events.get(event).filter(c => c !== callback));
};
// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
