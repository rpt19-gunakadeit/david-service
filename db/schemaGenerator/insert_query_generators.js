const { 
    nikeIpsumGenerator, 
    insertGenerator,
    generateRandomAmountForEachProductId } = require('./data_generators');



//product_descriptions///////////////////////////////////////////////////////////////////////////////////////////
var descriptions = nikeIpsumGenerator(100, 1, 2, 7, 10, 1);
var titles = nikeIpsumGenerator(100, 1, 1, 5, 7, 0);

module.exports.product_descriptions_Inserts = insertGenerator(100, 'product_descriptions', ['description', 'title'], [descriptions, titles])
.join('\n');


//benefits///////////////////////////////////////////////////////////////////////////////////////////////////////
var benefits__productIds = generateRandomAmountForEachProductId(100, 3, 5);
var numOfBenefits = benefits__productIds.length;
var benefits_descriptions = nikeIpsumGenerator(numOfBenefits, 1, 1, 6, 8, 0);

module.exports.benefits_Inserts = insertGenerator(numOfBenefits, 'benefits', ['description', 'product_id'], [benefits_descriptions, benefits__productIds])
.join('\n');


//details////////////////////////////////////////////////////////////////////////////////////////////////////////
var details_productIds = generateRandomAmountForEachProductId(100, 2, 4);
var numOfDetails = details_productIds.length;
var details_descriptions = nikeIpsumGenerator(numOfDetails, 1, 1, 7, 9, 0);

module.exports.details_Inserts = insertGenerator(numOfDetails, 'details', ['description', 'product_id'], [details_descriptions, details_productIds])
.join('\n');



