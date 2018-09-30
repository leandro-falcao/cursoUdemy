   const tipoNumero = 122;
   const tipoString = "tipo string";
   const tipoObjeto = { numerox: 123,
      casa: 12345678, rua: "rua xyz"
   };
   
   const tipoArray = [12, 'rua tal', "anos", tipoNumero]
   
   console.log(tipoArray[1]);
   
   const dadosArray =[ [tipoArray[2] + " " + tipoArray[3]], tipoObjeto.casa, tipoObjeto.rua ];
   
   console.log(dadosArray);
   
   console.log()