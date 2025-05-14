// require, exports, module, __filename, __dirname // Módulos de Node.js	

// console.log(__filename);
// console.log(__dirname);

let names = ['Caro', 'Cele', 'Facu'];
let scores = [23, 25, 30];

exports.names = names;
module.exports.scores = scores;
exports.data = [1, 2, 3];


// module.exports.data = [4, 5, 6]; // Modifiqué la propiedad data de module.exports 
// module.exports = "module_not_found"; // Sobreescribí module.exports, por lo que no se exporta nada



// console.log(module);
