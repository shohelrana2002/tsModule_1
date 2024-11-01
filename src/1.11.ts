{
  //

  const age = 18;

  // if (age >= 18) {
  //   console.log("Adult");
  // } else {
  //   console.log("Not A Adult");
  // }

  /// ternary Operator

  const adult = age >= 18 ? "Adult" : "Not Adult";
  console.log({ adult });
  // nullish coalescing operator
  // null undefined ------------> decision make just
  const isAuthentication = ""; // null undefined kaj kor_be just

  const result1 = isAuthentication ?? "Guest";
  const result2 = isAuthentication ? isAuthentication : "Guest"; //    ??  nullish coalescing operator
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress?: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "lajuuuu",
    address: {
      city: "Dinajpur",
      road: "21no",
      presentAddress: "Dinajpur",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No Defined Address";
  console.log(permanentAddress);
}
