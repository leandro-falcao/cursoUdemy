const funcs = [];
for (let i = 0; i < 11; i++) {
    funcs.push( function () {
        console.log(i);
    })
}
funcs[2]();