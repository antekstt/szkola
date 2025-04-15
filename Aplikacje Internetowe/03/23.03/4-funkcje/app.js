//1
function countLetters(text) {
    return `Liczba liter: ${text.length}`;
  }
  console.log("Zadanie 1:");
  console.log(countLetters("Testowy tekst"));
  console.log("--------------------");
  
//2
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  const arrayToSum = [1, 2, 3, 4, 5];
  const sumResult = sumArray(arrayToSum);
  console.log("Zadanie 2:");
  console.log("Suma tablicy:", sumResult);
  console.log("--------------------");
  
//3
  console.log("Zadanie 3:");
  const txt = "Marcin";
  function print(txt) {
    console.log(txt);
  }
  print(); // Wynik: undefined (bo funkcja wywołana bez argumentu)
  console.log("--------------------");
  
//4
  function mixCase(text) {
    return text.split('').map((char, index) => 
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
  }
  console.log("Zadanie 4:");
  console.log(mixCase("Ala ma kota"));
  console.log("--------------------");
  
//5
  function multiplyIfNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a * b;
    }
    return false;
  }
  console.log("Zadanie 5:");
  console.log(multiplyIfNumbers(5, 3)); // 15
  console.log(multiplyIfNumbers(5, "3")); // false
  console.log("--------------------");
  
//6
  function sortAndJoin(text, separator) {
    const array = text.split(separator);
    array.sort();
    return array.join(separator);
  }
  const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
  console.log("Zadanie 6:");
  console.log(sortAndJoin(str, "|"));
  console.log("--------------------");
  
//7
  const tab = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
  function getMinFromTab(arr) {
    return Math.min(...arr);
  }
  console.log("Zadanie 7:");
  console.log("Tablica:", tab);
  console.log("Minimalna wartość:", getMinFromTab(tab));
  console.log("--------------------");
  
//8
  function toUpperCaseNames(names) {
    return names.map(name => name.toUpperCase());
  }
  
  function toMixedCaseNames(names) {
    return names.map(name => 
      name.split('').map((char, i) => 
        i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      ).join('')
    );
  }
  const names = ["Ania", "Marcin", "Bartek", "Piotr"];
  console.log("Zadanie 8:");
  console.log("Wersja wielkie litery:", toUpperCaseNames(names));
  console.log("Wersja mieszane litery:", toMixedCaseNames(names));
  console.log("--------------------");
  
//9
  console.log("Zadanie 9:");
  (function(name, age) {
    console.log(`${name} ma ${age} lat`);
  })("Marek", 10);
  console.log("--------------------");
  
//10
  const showFile = (function() {
    let counter = 0;
    return function(fileName) {
      counter++;
      console.log(`${counter}. ${fileName}`);
    };
  })();
  console.log("Zadanie 10:");
  showFile("plik.jpg");
  showFile("inny.jpg");
  showFile("my.txt");