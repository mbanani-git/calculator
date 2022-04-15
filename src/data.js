const papBlocData = [
  { id: 10101, ref: "10101", des: "Bloc Steno 5x5 A5" },
  { id: 10102, ref: "10102", des: "Bloc Steno 5x5 A5" },
  { id: 10103, ref: "10103", des: "Bloc Steno 5x5 A5" },
  { id: 10104, ref: "10104", des: "Bloc Steno 5x5 A5" },
  { id: 10105, ref: "10105", des: "Bloc Steno 5x5 A5" },
  { id: 10106, ref: "10106", des: "Bloc Steno 5x5 A5" },
  { id: 10107, ref: "10107", des: "Bloc Steno 5x5 A5" },
  { id: 10108, ref: "10108", des: "Bloc Steno 5x5 A5" },
];

const papData = [
  { id: 1, abv: "bloc", name: "bloc", data: papBlocData },
  { id: 2, abv: "car", name: "carnet" },
  { id: 3, abv: "reg", name: "registre" },
  { id: 4, abv: "fch", name: "fiches" },
  { id: 5, abv: "cls", name: "classement" },
  { id: 6, abv: "rmt", name: "ramette" },
];

export const data = [
  {
    pap: {
      id: 1,
      abv: "pap",
      name: "papeterie",
      data: papData,
    },
    id: "pap",
  },
  { id: 2, abv: "fs", name: "fourniture scolaire" },
  { id: 3, abv: "fb", name: "fourniture bureau" },
  { id: 4, abv: "afg", name: "article fin année et gadgets" },
  { id: 5, abv: "mc", name: "machines et consommables" },
  { id: 6, abv: "div", name: "divers" },
];
