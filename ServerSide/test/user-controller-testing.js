const expect = require('chai').expect;
const User = require('../Models/user')
const userController = require('../Controllers/User')
const mongoose = require('mongoose');
const { DB_USERNAME, DB_PASSWORD, DB_TESTING } = require("../configuration")


describe('User controller', function () {
    before(function (done) {
        mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wtbncmz.mongodb.net/${DB_TESTING}?retryWrites=true&w=majority`).then((result) => {
            const user = new User({
                email: "mennaatallah@gmail.com",
                password: "mnHjli@_AS12",
                role: "Admin",
                age: 28,
                name: "mennaayman",
                _id: "5c0f66b979af55031b34728a"
            })
            return user.save()
        }).then(() => {
            done()
        })
    })
 
    it("should return a valid user data", function (done) {

        const req = { params: { userId: '5c0f66b979af55031b34728a' } }
        const res = {
            statusCode: 500,
            userRole: null,
            status: function (code) {
                this.statusCode = code
                return this
            },
            json: function (data) {
                this.userRole = data.role
            }
        }
        userController.GetUserById(req, res, () => { }).then((res) => {
            expect(res.userRole).to.be.equal("Admin")
            expect(res.statusCode).to.be.equal(200)
            done()

        })
       done()
    })
    // it("should update the user", function (done) {

    //     const req = { params: { userId: '5c0f66b979af55031b34728a' }, body:{
    //         email: "mennaatallah@gmail.com",
    //             password: "mnHjli@_AS12",
    //             role: "Admin",
    //             name: "mennaayman",
    //             _id: "5c0f66b979af55031b34728a",
    //             age:30
    //     } }

    //     userController.updateUser(req, {}, () => { }).then((res) => {
    //         console.log(res)
    //         expect(res.json.age).to.be.equal(30)
    //         expect(res.statusCode).to.be.equal(200)
    //         done()

    //     })
    //     // done()
    // })

    this.afterAll(function  (done) {
       
        User.deleteMany({}).then(() => {
            return mongoose.disconnect()
        }).then(() => {
            done()
        })
    })

})