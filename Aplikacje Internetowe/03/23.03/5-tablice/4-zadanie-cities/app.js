// Zakładam że cities jest już zaimportowane z cities.js

// Zadanie 1 – ile miast w Polsce? (czyli po prostu długość tablicy)
console.log("Liczba miast w Polsce:", cities.length);

// Zadanie 2 – ile jest ludzi w tych miastach
const totalPeople = cities.reduce((sum, city) => sum + city.people, 0);
console.log("Liczba ludzi we wszystkich miastach:", totalPeople);

// Zadanie 3 – pierwsze miasto z ponad 10k ludzi
const firstBigCity = cities.find(city => city.people > 10000);
console.log("Pierwsze miasto z > 10k ludzi:", firstBigCity);

// Zadanie 4 – miasta z populacją powyżej średniej
const avgPeople = totalPeople / cities.length;
const aboveAverageCities = cities.filter(city => city.people > avgPeople);
console.log("Miasta powyżej średniej populacji:", aboveAverageCities);

// Zadanie 5 – nazwy miast z ponad 10k ludzi
const bigCityNames = cities
  .filter(city => city.people > 10000)
  .map(city => city.name);
console.log("Miasta z > 10k ludzi:", bigCityNames);

// Zadanie 6 – porównanie liczby dużych i małych miast
const moreThan10k = cities.filter(city => city.people > 10000).length;
const lessOrEqual10k = cities.length - moreThan10k;

console.log(`Miast >10k: ${moreThan10k}, <=10k: ${lessOrEqual10k}`);

if (moreThan10k > lessOrEqual10k) {
  console.log("Więcej miast ma ponad 10k ludzi 💪");
} else if (moreThan10k < lessOrEqual10k) {
  console.log("Więcej miast ma 10k lub mniej ludzi 🧍");
} else {
  console.log("Po równo! Balans jak w przyrodzie 🍃");
}
