export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
if (query.toLowerCase().includes("andrew id")) {
    return (
      "jiayangs "
    );
  }
if (query.toLowerCase().includes("name")) {
    return (
      "Jasmine Shi"
    );
  }
const addMatch = query.match(/What is (\d+) plus (\d+)/);
if (addMatch) {
  const x: number = parseInt(addMatch[1]);
  const y: number = parseInt(addMatch[2]);
  return (x+y).toString();
}
  
const minusMatch = query.match(/What is (\d+) minus (\d+)/);
if (minusMatch) {
  const x: number = parseInt(minusMatch[1]);
  const y: number = parseInt(minusMatch[2]);
  return (x-y).toString();
}

const minusMatch = query.match(/What is (\d+) minus (\d+)/);
if (minusMatch) {
  const x: number = parseInt(minusMatch[1]);
  const y: number = parseInt(minusMatch[2]);
  return (x-y).toString();
}

const SquareCube = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/); 
if (Largest) {
  const n1: number = parseInt(SquareCube[1]);
  const n2: number = parseInt(SquareCube[2]);
  const n3: number = parseInt(SquareCube[3]);
  const n4: number = parseInt(SquareCube[4]);
  const n5: number = parseInt(SquareCube[5]);
  const n6: number = parseInt(SquareCube[6]);
  // Filter numbers that are both square and cube
  const numbers = [n1, n2, n3, n4, n5, n6];
  const squareAndCubeNumbers = numbers.filter(isSquareAndCube);

  // Return the numbers that are both square and cube as a string
  if (squareAndCubeNumbers.length > 0) {
    return squareAndCubeNumbers.join(", ");
}
const isSquareAndCube = (n: number): boolean => {
const sqrt = Math.sqrt(n);
const cbrt = Math.cbrt(n);
return Number.isInteger(sqrt) && Number.isInteger(cbrt);
  };



const Largest = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/); 
if (Largest) {
  const x: number = parseInt(Largest[1]);
  const y: number = parseInt(Largest[2]);
  const z: number = parseInt(Largest[3]);
  return Math.max(x, y, z).toString();
}

const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/); 
if (multiplyMatch) {
  const x: number = parseInt(multiplyMatch[1]);
  const y: number = parseInt(multiplyMatch[2]);
  return (x*y).toString();
}

// if (query.toLowerCase().includes("largest: 92,58,39")) {
//     return (
//       "139"
//     );
  // }
  return "";
}
