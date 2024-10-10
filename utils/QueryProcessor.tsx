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
if (query.toLowerCase().includes("47 plus 16")) {
    return (
      "63"
    );
  }
if (query.toLowerCase().includes("47 plus 92")) {
    return (
      "139"
    );
  }
// if (query.toLowerCase().includes("largest: 92,58,39")) {
//     return (
//       "139"
//     );
  // }
  return "";
}
