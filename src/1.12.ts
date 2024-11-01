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

  //unknown typeof

  const getSpeedMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(convertedSpeed);
    } else if (typeof value === "string") {
      const [result, text] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(convertedSpeed);
    } else {
      console.log("Wrong Input");
    }
  };
  getSpeedMeterPerSecond("dhfdgshgds");
}
