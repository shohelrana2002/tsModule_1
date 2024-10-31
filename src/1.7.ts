{
  // spread operator
  // rest operator
  // destructuring
  // spread operator  learn

  const bors: string[] = ["tonmay", "nahid", "rahat"];
  const bors1: string[] = ["tonmay", "nahid", "rahat"];

  bors.push(...bors1);

  const mentor1 = { tyscript: "Mizba ", redux: "Mir", mongo: "Mizan" };
  const mentor2 = { prisma: "Mizba ", nextjs: "Tonmay", mongo: "Mizan" };
  const mentorList = {
    ...mentor1,
    ...mentor2,
  };
  // learn reset operator
  const greetFriends = (...friends: string[]) => {
    // console.log(friend);
    friends.forEach((friend: String) => console.log(friend));
  };
  greetFriends("rana", "Jabu", "mabuu");
}
