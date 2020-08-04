// Dependancies
const request = require('supertest');
const server = require('../server');
const db = require("../data/connection");

// beforeEach(async () => {
// 	await db.seed.run()
// })
// afterAll(async () => {
// 	await db.destroy()
// })

// API
describe("API Running", () => {
	it("GET /", async () => {
		const res = await request(server).get("/")
		expect(res.statusCode).toBe(200)
	})
})

// Login
describe("user logs in", () => {
	it("GET /api/login", async () => {
		const res = await request(server).get("/")
		expect(res.statusCode).toBe(404)
		expect(res.headers["content-type"]).toBe("text/html; charset=utf-8")
	})
	it("POST /api/login", async () => {
		const res = await request(server)
			.post("/api/login")
			.send({ username: "misspiggy", password: "kermit" })
		expect(res.statusCode).toBe(200)
		expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
		expect(res.headers.authed).toBeDefined()
	})
})

// Registration
describe("user registers", () => {
	it("GET /api/register", async () => {
		const res = await request(server).get("/")
		expect(res.statusCode).toBe(500)
		expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
	})
	it("POST /api/register", async () => {
		const res = await request(server)
			.post("/api/register")
			.send({ username: "grover", password: "oscar" })
		expect(res.statusCode).toBe(422)
		expect(res.errors).toBeDefined()
		expect(res.body.id).not().toBeDefined()
  })
  it("POST /api/register", async () => {
		const res = await request(server)
			.post("/api/register")
			.send({ username: "grover", password: "oscar", email: "mytrashcanisbetter" })
		expect(res.statusCode).toBe(201)
		expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
		expect(res.body.id).toBeDefined()
    expect(res.body.username).toBe("grover")
    expect(res.body.email).toBe("mytrashcanisbetter")
	})
})

// Get User by Id
describe("get a single user", () => {
	it("GET /api/user/:id", async () => {
    const res = await request(server)
      .get(`/api/user/${req.params.id}`)
		expect(res.statusCode).toBe(200)
		expect(res.body.errorMsg).toBe("Incorrect login. Please try again.")
	})

})
