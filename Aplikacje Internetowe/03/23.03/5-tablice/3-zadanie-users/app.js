// Zakładam że masz już const users = [...] w data.js

// Zadanie 1
users.forEach(user => {
    console.log(`${user.name} -> ${user.email}`);
  });
  
  // Zadanie 2
  const pelnoletni = users.filter(user => user.age >= 18);
  console.log("Pełnoletni:", pelnoletni);
  
  // Zadanie 3
  const kobiety = users.filter(user => user.gender === "female");
  console.log("Kobiety:", kobiety);
  
  // Zadanie 4
  const zTagiemDolor = users.filter(user => user.tags.includes("dolor"));
  console.log("Z tagiem 'dolor':", zTagiemDolor);
  
  // Zadanie 5
  const wszyscyPelnoletni = users.every(user => user.age >= 18);
  console.log("Wszyscy pełnoletni:", wszyscyPelnoletni);
  
  // Zadanie 6
  const ktosPelnoletni = users.some(user => user.age >= 18);
  console.log("Chociaż jeden pełnoletni:", ktosPelnoletni);
  
  // Zadanie 7
  const imionaCaps = users.map(user => user.name.split(" ")[0].toUpperCase());
  console.log("Imiona wielkimi literami:", imionaCaps);
  
  // Zadanie 8
  const liczbaKobiet = users.filter(user => user.gender === "female").length;
  const liczbaMezczyzn = users.filter(user => user.gender === "male").length;
  
  console.log(`Kobiety: ${liczbaKobiet}, Mężczyźni: ${liczbaMezczyzn}`);
  
  if (liczbaKobiet > liczbaMezczyzn) {
    console.log("Kobiety wygrywają");
  } else if (liczbaMezczyzn > liczbaKobiet) {
    console.log("Mężczyźni górą");
  } else {
    console.log("Remis! 👀");
  }  