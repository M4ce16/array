let value = document.getElementById("menukaart");
let leeg = [];
let pasta = ["Spaghetti met ham en kaas",
  "Macaroni met ham en kaas",
  "Tagliatelli met ham en kaas",
  "Spaghetti met spinazie en room",
  "Macaroni met spinazie en room",
  "Tagliatelli met spinazie en room",
  "Spaghetti met gehakt-tomatensaus en kaas",
  "Macaroni met gehakt-tomatensaus en kaas",
  "Tagliatelli met gehakt-tomatensaus en kaas",
  "Spaghetti met spekjes, spinazie en room",
  "Macaroni met spekjes, spinazie en room",
  "Tagliatelli met spekjes, spinazie en room",
  "Spaghetti met courgette en tomatensaus",
  "Macaroni met courgette en tomatensaus",
  "Tagliatelli met courgette en tomatensaus",
  "Lasagne met courgette en tomatensaus",
  "Lasagne met room, doperwten en tomatensaus",
  "Lasagne met spinazie en tomatensaus en kaas"
];


let pasta1 = pasta[0];
let pasta2 = pasta[1];

console.log(pasta[17]);

pasta.push("Spaghetti met ham en kaas");
pasta.reverse("Spaghetti met spekjes, spinazie en room")
pasta.unshift("Macaroni met gehakt-tomatensaus en kaas", "Spaghetti met courgette en tomatensaus");

for (let count = 0; count < pasta.length; count++) {
  console.log(pasta[count])
}
value.innerHTML = pasta;
console.log(value);
