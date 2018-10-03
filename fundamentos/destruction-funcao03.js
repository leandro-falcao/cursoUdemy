function random({min = 0, max = 1000}) {
   const valorRandom = Math.random() * (max - min) + min;
   return Math.floor(valorRandom);
}
let fu = random();

let objeto = {max: 50, min: 30};

console.log(random(objeto));
//console.log(fu);