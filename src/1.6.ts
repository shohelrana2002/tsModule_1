// learning function
// normal function
// Arrow function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(20, 50);

// function arrow

const arrowFunction = (num1: number, num2: number = 50): number => num1 + num2;

// Object function

let poor = {
  name: "Ra",
  balance: 50,
  addBalance(balance: number): string {
    return `This is My Balance${this.balance + balance}`;
  },
};

// call Back Function
const arr: number[] = [10, 5, 7];

const newArray: number[] = arr.map((ele: number): number => ele * ele);
