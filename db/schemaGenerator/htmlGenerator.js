const { 
    nikeIpsumGenerator,
    randomNum } = require('./nike_Ipsum_Generator');

var headerAndLisGenerator = (headerName) => {
    var textBlock = `<h2>${headerName}`;

    for(var i = 0; i < randomNum(4, 6); i++) {
        var sentence = nikeIpsumGenerator(1, 1, 6, 8);
        textBlock+=`<li>${sentence}</li>`;
    }

    textBlock+= `</h2>`;

    return textBlock;
}

var textBlockGenerator = (description) => {
    var textBlock = '';

    var title = nikeIpsumGenerator(1, 1, 7, 10);

    var benefits = headerAndLisGenerator('benefits');

    var details = headerAndLisGenerator('details');

    textBlock = 
    `<h1>${title}</h1>
     <p>${description}</p>
     ${benefits}
     ${details}
     `;

     return textBlock;

}

module.exports = textBlockGenerator;