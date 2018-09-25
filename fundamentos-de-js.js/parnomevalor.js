//par chave valor
const saudacao = "opa"; // contexto lexico
function exec() {
    const saudacao1 = 'fala ai ';
    return 'ola mundo ' +(saudacao + ' '+ saudacao1);
}
console.log(exec())
