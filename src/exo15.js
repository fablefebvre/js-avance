export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// TODO : assigner person comme prototype
export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};

// 1) avec Object.setPrototypeOf
Object.setPrototypeOf(user, person);

// 2) avec Object.create et avec Object.assign
// TODO: assigner user comme prototype
export const bob = Object.create(user);
Object.assign(bob, {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
});
