//destructuring

const userDetails = {
  id: 5001,
  name: {
    fasName: "sho",
    middleName: "",
    lastName: "Ran",
  },
  contact: "017555555555",
  address: "Dina_j_pur",
};
const {
  contact,
  id,
  name: { fasName }, //fasName:1stName  chaile evabeo amr name digliar  korte apri
} = userDetails;

// Array destructuring

const myFriend = ["loma", "Kma", "Toma", "mooma", "loma"];
const [, , Love, ...rest] = myFriend; // ,, 2ta diye 3 number ta nilma ,,...rest diye arr baki ta copy  korlam
