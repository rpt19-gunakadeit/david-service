const { 
    nikeIpsumGenerator,
    randomNum } = require('./nike_Ipsum_Generator');
const textBlockGenerator = require('./htmlGenerator');

var insertQueryGenerator = () => {
    var insertQueries = '';

    for (var i = 0; i < 100; i++) {
        var description = nikeIpsumGenerator(1, 2, 6, 8, true);

        var textBlock = textBlockGenerator(description);

        insertQueries+= `INSERT INTO product_descriptions (description, textBlock) VALUES ('${description}', '${textBlock}');\n`;
    }

    return insertQueries;
}

module.exports = insertQueryGenerator();




