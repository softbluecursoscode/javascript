const fruits = [ "banana", "morango", "maçã", "abacate", "uva" ];

//fruits.push("mamão");
fruits[fruits.length] = "mamão";
fruits.unshift("laranja");

console.log(fruits.toString());