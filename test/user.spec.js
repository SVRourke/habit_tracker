// const assert = require("assert");
// const { expect } = require("chai");

// const { dbConnect, dbDisconnect } = require("./test_helpers/dbConnect");

// const User = require("../models/User");

// describe("User Model", function () {
//   before(function (done) {
//     dbConnect(() => {
//       User.create({ name: "Sam" }, done);
//     });
//   });

//   it("valid user", async () => {
//     const users = await User.find().exec();
//     expect(users.length).to.be.eq(1);
//   });

//   // #createHabit creates a valid habit
//   // it("requires a birthday");

//   // runs once after the last test in this block
//   after(async () => {
//     await User.deleteMany({});
//     dbDisconnect();
//   });
// });
