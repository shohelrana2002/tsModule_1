{
  //nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("nothing to search ");
    }
  };
  searchName(null);
}
