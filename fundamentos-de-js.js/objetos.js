const prod1 = {};
prod1.nome = 'celular ultra mega';
prod1.preco = 199.99;
prod1['desconto bom'] = 0.40 // evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome:'camisa polo',
    preco2: 80.19,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2.obj.obj);
