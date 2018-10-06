/*
 * #1
 * Напишите функцию, которая будет преобразовывать массив
 * со вложенными массивами в один плоский массив
 * EX:
 * in  : [1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]]
 * out : [1, 2, 3, 4, 5, 2, 4, 3, 2, 3, 1, 4, 3]
*/

{
    const numbers = [1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]];
    
    // Решение:
    const transform = (arr) => {
        let flatten = [].concat(...arr);
        return flatten.some(Array.isArray) ? transform(flatten) : flatten;
    };
    
    console.log(transform(numbers)); 
}


/*
 * #2
 * Напишите функцию, которая будет преобразовывать
 * ключи объекта в camelCase
 * EX 1:
 * in  : { user_name: 'shar', is_logged_in: true }
 * out : { userName: 'shar', isLoggedIn: true }
 *
 * EX 2:
 * in  : { 'user NAME': 'shar', TYPE: true }
 * out : { userName: 'shar', type: true }
*/

{
	const obj1 = { user_name: 'shar', is_logged_in: true };
	const obj2 = { 'user NAME': 'shar', TYPE: true };

	// Решение:
	const toUpper = (obj) => {
		return Object.keys(obj).reduce((value, key) => {
	 		
	 		const newKey = key.split('_').map((word, index) => {
	      		return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
	    	}).join('')
    
		    return {
		    	...value,
		    	[newKey]: obj[key]
		   		}
	  	}, {});
	}

	const toLower = (obj) => {
		return Object.keys(obj).reduce((value, key) => {
	 		
	 		const newKey = key.split(' ').map((word, index) => {
	      		return index === 0 ? word.toLowerCase() : word.charAt(0) + word.slice(1).toLowerCase()
	    	}).join('')
    
		    return {
		    	...value,
		    	[newKey]: obj[key]
		   		}
	  	}, {});
	}

	console.log(toUpper(obj1));
	console.log(toLower(obj2));
}
