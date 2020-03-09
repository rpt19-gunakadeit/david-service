var words = "culture fly style essentials legendary global icon premium gear swoosh ignite virgil clothing vapormax exclusive flight pattern run tech kickoff world homage air explore collection knit reserved limitless shilouette innovation access versatile member sport equality offwhite ethos attack zoom stealth quick force ultra womens flyknit upper custom max pack mens running lab launch advance hurache retro classic training significant inspired breaking snkrs jordan importance futuristic brand heritage strength future cortez retailers special trancendant transformation court strike available athlete skate stength finesse innovate unlock sneakers"
.split(' ');


var randomNum = (min = 0, max = min) => {
    return min + Math.floor(Math.random() * ((max + 1) - min));
}

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

var paragraphGenerator = (numOfSentences, minNumWords, maxNumWords, possiblyComma) => {
    var paragraph = '';
    for(var i = 0; i < numOfSentences; i++) {
        paragraph+= sentenceGenerator(minNumWords, maxNumWords, possiblyComma);
    }
    paragraph = paragraph.substring(0, paragraph.length - 1);
    return paragraph;
}

var nikeIpsumGenerator = (num, minNumSent, maxNumSent, minNumWords, maxNumWords, possiblyComma) => {
    var ipsums = [];
    for(var i = 0; i < num; i++) {
        var numOfSentences = randomNum(minNumSent, maxNumSent);
        var paragraph = paragraphGenerator(numOfSentences, minNumWords, maxNumWords, possiblyComma);
        
        ipsums.push(paragraph);
    }
    return ipsums;
}

var insertGenerator = (numOfInserts, table, valueNames, ipsums) => {
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

        inserts.push(`INSERT INTO ${table} ${valueNames} VALUES ${values}`);
    }

    return inserts;
}

var generateProductIds = (numOfProducts, minNumOfIds, maxNumOfIds) => {
    var productIds = [];
    for (var i = 0; i < numOfProducts; i++) {
        var numOfIds = randomNum(minNumOfIds, maxNumOfIds);
        for (var j = 0; j < numOfIds; j++) {
            productIds.push(i);
        }
    }
    return productIds;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//product_descriptions///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var descriptions = nikeIpsumGenerator(100, 1, 2, 7, 10, 1);
var titles = nikeIpsumGenerator(100, 1, 1, 5, 7, 0);

//// console.log(insertGenerator(100, 'product_descriptions', ['description', 'title'], [descriptions, titles]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//benefits///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var benefits__productIds = generateProductIds(100, 3, 5);
var numOfBenefits = benefits__productIds.length;
var benefits_descriptions = nikeIpsumGenerator(numOfBenefits, 1, 1, 6, 8, 0);

// console.log(insertGenerator(numOfBenefits, 'benefits', ['description', 'product_id'], [benefits_descriptions, benefits__productIds]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//details////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var details_productIds = generateProductIds(100, 2, 4);
var numOfDetails = details_productIds.length;
var details_descriptions = nikeIpsumGenerator(numOfDetails, 1, 1, 7, 9, 0);

// console.log(insertGenerator(numOfDetails, 'details', ['description', 'product_id'], [details_descriptions, details_productIds]));


