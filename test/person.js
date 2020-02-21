let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../index");

//Assert Style
chai.should();

chai.use(chaiHttp);

describe("Person", () => {

    describe("GET /api/persons", () => {
        it("it should GET all the persons", (done) => {
            chai.req(app)
                .get("/api/persons")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                done();
                })
        })
    })
});

