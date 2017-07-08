var names = ['Marko', 'Cekic', 'Simic', 'Grcak'];

// names.forEach(function(name){
//      console.log('forEach', name)
// });
// names.forEach(name => console.log('forEach', name));


// var returnMe = (name) => name + '!';

// console.log(returnMe('Marko'));

// var person = {
//     name: 'Marko',
//     greet: function(){
//         names.forEach((name) => {
//             console.log(this.name + ' say hi to ' + name);
//         });
//     }
// };

// person.greet();

function add(a, b){
    return a + b;
}

// console.log(add(1, 3));
// console.log(add(9, 0));

var addStatment = (a, b) => {
    return a + b;
}

// console.log(addStatment(4, 7));

var addExpression = (a, b) => a + b;

console.log(addExpression(3, -2));
