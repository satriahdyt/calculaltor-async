const { divide, dividePromise } = require('./tugasCalc');
const { expect } = require('chai');
const { addPromise, ERROR_MSG } = require("./lib/calculator");

divide(10, 2, function(err, result) {
    expect(err).to.be.not.exist;
    expect(result).to.be.exist;
    expect(result).to.be.eq(5);
});

divide(1, null, function(err, result) {
    expect(err).to.be.exist;
    expect(result).to.be.not.exist;
});

dividePromise(100, 2)
.then((result) => dividePromise(result, 2))
.then((result) => dividePromise(result, 5))
.then((result) => dividePromise(result, 1))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(5);
});

dividePromise(100, 2)
.then((result) => dividePromise(result, 5))
.then((result) => {
    console.log(result);
    expect(result).to.be.eq(10);
});


Promise.all([
  addPromise(1,1, 3000),
  addPromise(1,null, 1000)
]).then(results => {
}).catch(err => {
  expect(err).to.be.exist;
  expect(err.message).to.be.eq(ERROR_MSG);
});
