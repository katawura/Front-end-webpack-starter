import Polygon from './class.js';


let funcs = [];

for (let i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log( i );
	} );
}
	
funcs[3]();		// 3

//creating an instance  
var polyObj = new Polygon(10,20); 
polyObj.test(); 

