import request from "supertest";
import User from '../user.interface'
import app from "../app";

describe("Get user appointments", () => {

  it("should show no appointments", async () => {
    const res = await request(app).get("/users").set({'user': ''});
    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBe(0)
  });
  
  it("should show appointments for user1", async () => {
    const res = await request(app).get("/users").set({'user': 'user1'});
    expect(res.statusCode).toBe(200)
    const arrUsers = res.body;
    expect(arrUsers.length).toBe(2)
    arrUsers.forEach( (user: User) => {
      expect(user['user']).toContain('user1')
    })
  });

  it("should show appointments for user2", async () => {
    const res = await request(app).get("/users").set({'user': 'user2'});
    expect(res.statusCode).toBe(200)
    const arrUsers = res.body;
    expect(arrUsers.length).toBe(3)
    arrUsers.forEach( (user: User) => {
      expect(user['user']).toContain('user2')
    })
    
  });  
});
