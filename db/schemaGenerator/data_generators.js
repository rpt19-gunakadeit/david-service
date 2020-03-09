const words = require('./words');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var randomNum = (min = 0, max = min) => {
    return min + Math.floor(Math.random() * ((max + 1) - min));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var sentenceGenerator = (minNumOfWords, maxNumOfWords, possiblyComma) => {
    var tempMem_chosenIndexes = [];
    var sentence = '';
    var numOfWords = randomNum(minNumOfWords, maxNumOfWords);
    var placement;
    if (possiblyComma) {
        var comma = randomNum(0, 1);
        placement = comma ? randomNum(0, numOfWords - 2) : undefined;
    }
       
    for (var i = 0; i < numOfWords; i++) {  
        do { var chosenIndex = randomNum(0, words.length - 1); } 
        while (tempMem_chosenIndexes.indexOf(chosenIndex) > -1);

        tempMem_chosenIndexes.push(chosenIndex);

        sentence+= i === placement
            ? words[chosenIndex] + ', ' 
            : words[chosenIndex] + ' ';
    }

    tempMem_chosenIndexes = [];
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
module.exports.nikeIpsumGenerator = (num, minNumSent, maxNumSent, minNumWords, maxNumWords, possiblyComma) => {
    var ipsums = [];
    for(var i = 0; i < num; i++) {
        var numOfSentences = randomNum(minNumSent, maxNumSent);
        var paragraph = paragraphGenerator(numOfSentences, minNumWords, maxNumWords, possiblyComma);
        
        ipsums.push(paragraph);
    }
    return ipsums;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.insertGenerator = (numOfInserts, table, valueNames, ipsums) => {
    var inserts = [];
    
    valueNames = `(${valueNames.join(', ')})`;

    for (var i = 0; i < numOfInserts; i++) {
        var values = [];
        for (var j = 0; j < ipsums.length; j++) {
            var value = ipsums[j][i];
            if (typeof value === 'string') {
                values.push(`"${ipsums[j][i]}"`);
            } else {
                values.push(`${ipsums[j][i]}`);
            }
            
        }
        values = `(${values.join(', ')})`;

        inserts.push(`INSERT INTO ${table} ${valueNames} VALUES ${values};`);
    }

    return inserts;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.generateRandomAmountForEachProductId = (numOfProducts, minNumOfIds, maxNumOfIds) => {
    var productIds = [];
    for (var i = 0; i < numOfProducts; i++) {
        var numOfIds = randomNum(minNumOfIds, maxNumOfIds);
        for (var j = 0; j < numOfIds; j++) {
            productIds.push(i);
        }
    }
    return productIds;
}