console.log(Math.ceil(6.1));
const obj1 = {}
obj1.nome = "bola";
console.log(obj1);
obj1["nome"] = 'bola';
console.log(obj1);
function objeto(name) {
    this.name = name;    
}
const objeto2 = new objeto('cadeira');
console.log(objeto2);
