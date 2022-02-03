let oceans = [
	"Pacific",
	"Atlantic",
	"Indian",
	"Arctic",
	"Antarctic",
];
//console.log('first', oceans.length, `second`);
//if not found, returns -1
//console.log(oceans.indexOf(`Pacifice`))

//accessing items in array
//console.log('oceans[0]', oceans[0]);

//adding in back 
oceans.push(`Dead Sea`)
//console.log('oceans', oceans);

//adding in front
oceans.unshift('Arabian Sea')
//console.log('oceans', oceans);

//removing an item
//use splice to alter the original array
//element at index 0 is removed twice, first 0 and then 1 as it shifts to 0 when 0 is deleted
oceans.splice(0,2) // syntax (index to remove, how many times to remove from index 0)
//console.log('oceans', oceans);

let firstArray = oceans.slice(0, 3); //from 0 to 2
//console.log('firstArray', firstArray);

//remove the last element from array
oceans.pop();

//remove the first element from array
oceans.shift();

//modifying array element
oceans[0] = `Sumit`

//console.log('oceans', oceans);
//splice(1, 1, "sea lion"); replace at index 1, times(1), with sea lion
oceans.splice(1, 1, "Sea lion");

//console.log('oceans', oceans);
for( let ocean of oceans){
//    console.log('ocean', ocean);
}

//map function 
//oceans.map( (ocean,index)=>console.log(`this is ${ocean} and the index is ${index}`))


