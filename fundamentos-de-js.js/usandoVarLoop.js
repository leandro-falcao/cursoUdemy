/*const funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {console.log(i)});
    }
    funcs[3]();
    funcs[5]();     */ //
// agora com let 
const fun = [];
for (let intera = 0; intera < 10; intera++ ) {
    fun.push( function () {
        console.log(intera);
               
    })
}
fun[2]();
fun[7]();
