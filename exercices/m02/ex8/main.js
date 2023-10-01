let numbers = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 6 + 1),
);

alert("Vos dés: " + numbers.join(", "));
