const expect = require('chai').expect;
const { IsAuthenticated } = require('../middleware/IsAuthenticated');


describe('Auth middleware testing', function(){
    it('Should throw error if user is not authinticated', function (done) {
        const req = {
            body: {
                token: null
            }
        }
        IsAuthenticated(req, {}, () => { }).then((result) => {
            expect(result).to.have.property('StatusCode', 401)
        }).then(done, done)
    })
    // it('Should get user id after decoding the token', function () {
    //     const req = {
    //         body: {
    //             token: 'dhfbmrjhdggfhw'
    //         }
          
    //     }
    //    sinon.stub(jwt,"verify")
    //    jwt.verify.returns({id:"abc"})
    //    IsAuthenticated(req,{},()=>{})
    //    expect(req).to.have.property('userId',"abc")
    //    expect(jwt.verify.called).to.be.true
    //    jwt.verify.restore()
    // })
})
