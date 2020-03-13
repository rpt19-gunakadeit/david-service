const words = require('./words');
const _ = require('lodash');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var randomNum = (min = 0, max = min) => {
    return min + Math.floor(Math.random() * ((max + 1) - min));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var sentenceGenerator = (minNumOfWords, maxNumOfWords, possiblyComma) => {
    var sentence = '';
    var numOfWords = randomNum(minNumOfWords, maxNumOfWords);
    var placement;
    if (possiblyComma) {
        var comma = randomNum(0, 1);
        placement = comma ? randomNum(0, numOfWords - 2) : undefined;
    }
       
    for (var i = 0; i < numOfWords; i++) {  
        do { 
            var chosenWord = words[randomNum(0, words.length - 1)]; } 
        while (_.includes(sentence, chosenWord));

        sentence+= i === placement
            ? chosenWord + ', ' 
            : chosenWord + ' ';
    }

    sentence = sentence[0].toUpperCase() + sentence.slice(1, sentence.length - 1) + '. ';
        
    return sentence;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var paragraphGenerator = (numOfSentences, minNumWords, maxNumWords, possiblyComma) => {
    var paragraph = '';
    for(var i = 0; i < numOfSentences; i++) {
        paragraph+= sentenceGenerator(minNumWords, maxNumWords, possiblyComma);
    }
    paragraph = paragraph.substring(0, paragraph.length - 1);
    return paragraph;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var nikeIpsumGenerator = (minNumSent, maxNumSent, minNumWords, maxNumWords, possiblyComma = false, numOfParagraphs = 1) => {
    var ipsums = [];
    for(var i = 0; i < numOfParagraphs; i++) {
        var numOfSentences = randomNum(minNumSent, maxNumSent);
        var paragraph = paragraphGenerator(numOfSentences, minNumWords, maxNumWords, possiblyComma);
        
        ipsums.push(paragraph);
    }
    return ipsums;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = { nikeIpsumGenerator, randomNum };