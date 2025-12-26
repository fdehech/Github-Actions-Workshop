const request = require("supertest");
const app = require("../app");

describe("Endpoint TEST : GET /health", () => {
  it("Returns 200", async () => {
    await request(app).get("/health").expect(200);
  });
});

describe("Root Endpoint Test /", ()=> {
    it("Returns Hello World", async () => {
    await request(app).get("/").expect("Hello World!");
    })
})