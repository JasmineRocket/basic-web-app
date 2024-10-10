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
