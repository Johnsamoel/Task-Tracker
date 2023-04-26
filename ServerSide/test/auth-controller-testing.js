const expect = require('chai').expect;
const sinon = require('sinon')
const User = require('../Models/user')
const authController = require('../Controllers/auth')
describe('Auth-register', function () {
    it('Should throw error when one or more fields are required', function (done) {
        const req = {
            body: {
                name: "menna",
                password: "mennaGhyu@!Y",
                age: 20,
                email: "menaaaa@gmail.com"
            }
        }
        authController.RegisterUser(req, {}, () => { }).then((res) => {
            expect(res).to.be.an("Error")
            expect(res).to.have.property('StatusCode', 500)
        })
        done()
    })

})
describe('Auth-Login', function () {
    it('Should throw error when user is not found in database', function (done) {

        sinon.stub(User, 'findOne')
        User.findOne.throws()
        const req = {
            body: {
                email: "testtt@test.com",
                password: "HjffA@_!99"
            }
        }
        authController.Login(req, {}, () => { }).then((result) => {
            expect(result).to.have.property("StatusCode", 500)
            done()
        })
        User.findOne.restore()
    })

})