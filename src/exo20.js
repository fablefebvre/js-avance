import data from "../__tests__/fakedata.json";

export const query = array =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtrer les éléments selon une condition sur une propriété
      return query(array.filter(({ [key]: value }) => condition(value)));
    },
    orderBy(key) {
      //TODO: trier les éléments selon une propriété
      return query([...this].sort((a, b) => (a[key] < b[key] ? -1 : 1)));
    },
    take(number) {
      //TODO: retourner les N premiers éléments de la liste
      return query(array.slice(0, number));
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", n => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map(user => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
