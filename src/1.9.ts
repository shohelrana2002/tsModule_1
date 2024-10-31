{
  // type alias

  //   type /

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: number;
    address: string;
  };

  /////////////////////////////////////////////
  const student: Student = {
    name: "Ran",
    age: 5,
    gender: "Male",
    contactNo: 123,
    address: "Dina_j_Pur",
  };
  const student2: Student = {
    name: "Sho",
    age: 5,
    gender: "Male",
    address: "Dina_j_Pur",
  };

  // Type Alias

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "sho";
  const isAdmin: IsAdmin = true;

  // function type

  type Add = (num1: number, num2: number, num3: number) => number;

  const add: Add = (num1, num2, num3) => num1 + num2;
}
