const expect = require("chai").expect;
const request = require("supertest");

const app = require("../server/main.js");
const agent = request.agent(app);

const db = require("../server/database/connection.js");
const Product = require("../server/database/models/product.js");

describe("Products Route:", () => {
  // before(() => {
  //   return db.sync({ force: true });
  // });
  describe("GET /api/products", () => {
    it("responds with JSON containing all products", done => {
      request(app)
        .get("/api/products")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done());
    });
  });

  describe("GET /api/products/:id", () => {
    it("respond with json containing a single product", done => {
      request(app)
        .get("/api/products/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done());
    });
  });

  describe("delete /api/products/:id", () => {
    it("should return status 201 after DELETING a product", done => {
      request(app)
        .del("/api/products/1")
        .expect(201);
      done();
    });
  });

  // describe("POST /api/products", () => {
  //   let product = {
  //     name: "gumdrops",
  //     price: 3.99,
  //     description: "delicious",
  //     stock: 5
  //   };
  //   it("respond with 201 created", async done => {
  //     const res = await agent
  //       .post("/api/products")
  //       .send(product)
  //       .expect(201)
  //       .set("Accept", "application/json")
  //       .end(err => {
  //         if (err) return done(err);
  //         done();
  //       });
  //     console.log("test result", res.body);
  //   });
  // });
});