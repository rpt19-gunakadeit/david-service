const { 
    nikeIpsumGenerator,
    randomNum } = require('./nike_Ipsum_Generator');
const textBlockGenerator = require('./htmlGenerator');

var insert_query_generator = () => {
    var insertQueries = [];

    for (var i = 0; i < 100; i++) {
        var description = nikeIpsumGenerator(1, 2, 6, 8, true);

        var textBlock = textBlockGenerator(description);

        var insertQuery = `INSERT INTO product_descriptions (description, textBlock) VALUES ('${description}', '${textBlock}')`;

        insertQueries.push(insertQuery);
    }

    return insertQueries;
}




