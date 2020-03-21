const { randomNum, 
        sentenceGenerator, 
        paragraphGenerator,
        nikeIpsumGenerator } = require('./../db/schema_generator/nike_Ipsum_Generator');

describe('randomNum', () => {
    test('returns 7 when parameters of 7 and 7 are given', () => {
        expect(randomNum(7, 7)).toBe(7);
    })
    
    test('returns a random number between 3 and 5', () => {
        var randomNumber = randomNum(3, 5);
        
        expect(randomNumber).toBeGreaterThanOrEqual(3);
        
        expect(randomNumber).toBeLessThanOrEqual(5);
    })
})

describe('sentenceGenerator', () => {
    test('returns a string', () => {
        var type = typeof sentenceGenerator(1, 2, 0);
       
        expect(type).toBe('string');
    })
    test('returns a string with 4 words', () => {
        var numOfWords = sentenceGenerator(4, 4, 0).split(' ').length;
       
        expect(numOfWords).toBe(4);
    })
    
    test('returns a string with 5 to 8 words', () => {
        var numOfWords = sentenceGenerator(5, 8, 0).split(' ').length;
        
        expect(numOfWords).toBeGreaterThanOrEqual(5);
        
        expect(numOfWords).toBeLessThanOrEqual(8);
    })
})

describe('paragraphGenerator', () => {
    test('returns a string', () => {
        var type = typeof paragraphGenerator(3, 7, 8, 0);
       
        expect(type).toBe('string');
    })
    test('returns a paragraph with 6 sentences', () => {
        var numOfSentences = paragraphGenerator(6, 5, 9, 0).split('. ').length;
       
        expect(numOfSentences).toBe(6);
    })
})


describe('nikeIpsumGenerator', () => {
    test('returns an array', () => {
        var isAnArray = Array.isArray(nikeIpsumGenerator(3, 4, 8, 10, 0, 1));
       
        expect(isAnArray).toBe(true);
    })
    test('returns an array of length 1', () => {
        var numOfIpsums = nikeIpsumGenerator(3, 4, 8, 10, 0, 1).length;
       
        expect(numOfIpsums).toBe(1);
    })

    test('returns an array of length 3', () => {
        var numOfIpsums = nikeIpsumGenerator(3, 4, 8, 10, 0, 3).length;
       
        expect(numOfIpsums).toBe(3);
    })
})



