//accessing array elements

//const fruits = ['mango', 'banana', 'orange', 'lemon', 'kiwi'];

// console.log(fruits[0]);
// console.log(fruits.length);

// //modifying array elements 
// fruits[1] = 'apple';
// fruits[2] = 'papaya';



// //getting index of elements

// console.log(fruits.indexOf('lemon'));

// console.log(fruits.indexOf('kiwi'));

// console.log(fruits.indexOf('apple'));

// console.log(fruits.indexOf('mango'));

// //to check if an item exist

// console.log(fruits.includes('geraps'))

const fruits = ['mango', 'banana', 'orange', 'lemon', 'kiwi'];

//adding item to array using push

fruits.push('new fruit'); //add to end

fruits.unshift('very new fruit'); // add to first

fruits.pop(); //remove last item
fruits.shift(); //remove first item



fruits.sort(); //to sort the array elemets in assending order

fruits.reverse(); // to reverse the array

console.log(fruits);

for (var i = 0; i < fruits.length; i++) {
document.write(fruits[i]+'<br/>');
}
	