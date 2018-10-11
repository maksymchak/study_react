/*
 * Напишите функцию-генератор, которая по номеру книги (book) 
 * получает название дома (house) с максимальным числом погибших 
 * персонажей (character).
 * Документация API: https://anapioficeandfire.com/
*/

{
    function* fetchGenerator(url) {
        const request = yield fetch(url);

        return yield request.json();
    }

    function* dataGenerator(urls) {
        const array = [];

        for (let url of urls) {
            array.push(yield* fetchGenerator(url));
        }

        return array;
    }

    function run(generator, ...args) {
        const iterator = generator(...args);

        const iterate = ({done, value}) => {
            if (done) {
                return value;
            }

            return value.then(data => iterate(iterator.next(data)))
        };

        return iterate(iterator.next());
    }

    function* getHouseWithMaxDiedCharacters(bookId) {

        const { characters: bookCharactersURLs } = yield* fetchGenerator(`http://anapioficeandfire.com/api/books/${bookId}`);
        const bookCharacters = yield* dataGenerator(bookCharactersURLs);
        
        const diedCharacters = bookCharacters.filter(character => character.died.length > 0);

        const houseUrls = diedCharacters.reduce((array, character) => {
            character.allegiances.forEach(houseUrl => {
                array.push(houseUrl);
            });
            return array;
        }, []);

        const houses = yield* dataGenerator(houseUrls);

        const countObj = Object.create({});
        houses.forEach(house => countObj[house.name] = countObj[house.name] + 1 || 1 );

        const getHouseName = (object) => Object.keys(object).reduce((a, b) => object[a] > object[b] ? a : b);

        return getHouseName(countObj);
    }

    run(getHouseWithMaxDiedCharacters, 2).then(console.log).catch(console.error);
}