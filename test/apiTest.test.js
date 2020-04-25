var request = require('supertest');
var app = require('../server/index.js');
import 'babel-polyfill';



describe('Test the root path', () => {
    test('It should respond to the GET method with a status of 200',  async (done) => {
        request(app)
            .get('/product/1/description')
            .expect(200)
            .then(() => {
                done();
            })
    })

    test('should return a JSON object when request sent to GET /product/1/description',  async (done) => {
        var description = `{\"id\":1,\"description\":\"Attack homage world tech swoosh hurache running retro. Finesse transformation force max running, unlock.\",\"textBlock\":\"<h1>Premium gear hurache training quick clothing lab trancendant custom exclusive.</h1><p>Attack homage world tech swoosh hurache running retro. Finesse transformation force max running, unlock.</p><div><h2>Benefits</h2><li>Fly world futuristic zoom strength unlock.</li><li>Member collection equality offwhite reserved exclusive.</li><li>Special sneakers pattern classic training global.</li><li>Futuristic virgil retailers importance lab attack inspired womens.</li><li>Virgil flight premium cortez culture homage gear.</li></div><div><h2>Details</h2><li>Pack sport air retailers pattern classic futuristic unlock.</li><li>Quick force upper premium access hurache.</li><li>Clothing pack stength sneakers member custom strike.</li><li>Classic finesse skate ignite flight retro pattern futuristic.</li></div>\"}`;

        request(app)
            .get('/product/1/description')
            .expect(200)
            .then((res) => {
                expect(res.text).toBe(description);
                done();
            })

    })
})


