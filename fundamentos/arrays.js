const valores = [4.1, 2, 3, 6.6, 7.8, 8.9, 5.6, 3.4];
console.log(valores[0] + valores[2]);

console.log(valores);

//dar um valor pra um indice do array mesmo numa const//
valores[2] = 100;

console.log(valores[2]);
console.log(valores.length);
valores.push('nono', 'decimo', 'teste')
console.log(valores[8]);

console.log(valores.pop());
delete valores[0];
console.log(valores[2]='ptr', valores)

console.log(valores[0]);