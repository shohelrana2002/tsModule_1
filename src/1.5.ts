// Reference  Types ---> Object

// readonly  je_ta fixed edit kor_te par_be na
const user: {
  readonly companyName: string; // literal types //// jet a ekh_ane di__bo ot__ay types
  fastName: string;
  middleName?: string; // ? optional chain type
  lastName: string;
  isMarried: boolean;
} = {
  companyName: "Programming Hero",
  fastName: "sho",
  // middleName:"h",
  lastName: "Ran",
  isMarried: false,
};
