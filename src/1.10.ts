{
  // Union Tag  Types |

  //   type FrontendDeveloper = "fak_i_bazDeveloper" | "juniorDeveloper";
  //   type FullstackDeveloper = "frontendDeveloper" | "SeniorDeveloper";
  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "Male" | "Female";
  //     bloodGroup: "O+" | "A+";
  //   };
  //   const user: User = {
  //     name: "sho",
  //     gender: "Male",
  //     bloodGroup: "O+",
  //   };

  type FrontendDeveloper = {
    sk: string[];
    designation1: "FrontendDeveloper";
  };
  type BackendDeveloper = {
    sk: string[];
    designation2: "BackendDeveloper";
  };

  /// & sob theke  habe
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    sk: ["h", "h"],
    designation1: "FrontendDeveloper",
    designation2: "BackendDeveloper",
  };
}
