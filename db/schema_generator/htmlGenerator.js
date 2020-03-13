const { 
    nikeIpsumGenerator,
    randomNum } = require('./nike_Ipsum_Generator');

var headerAndLisGenerator = (headerName) => {
    var header = `<h2>${headerName}</h2>`;

    var lis = '';

    for(var i = 0; i < randomNum(4, 6); i++) {
        var sentence = nikeIpsumGenerator(1, 1, 6, 8);
        lis+=`<li>${sentence}</li>`;
    }

    var textBlock = 
    `<div>${header}${lis}</div>`;

    return textBlock;
}

var textBlockGenerator = (description) => {
    var textBlock = '';

    var title = nikeIpsumGenerator(1, 1, 7, 10);

    var benefits = headerAndLisGenerator('Benefits');

    var details = headerAndLisGenerator('Details');

    textBlock = 
    `<h1>${title}</h1><p>${description}</p>${benefits}${details}`;

     return textBlock;

}

module.exports = textBlockGenerator;