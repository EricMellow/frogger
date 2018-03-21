const assert = require('chai').assert;
const Car = require('../lib/Car.js');

describe('Car', () => {
  it('should instantiate a new Car', () => {
    var car = new Car();

    assert.isObject(car);
  });

  it('takes x, y, and velocity as parameters', () => {
    var car = new Car(1, 2, 3);

    assert.equal(car.x, 1);
    assert.equal(car.y, 2);
    assert.equal(car.velocity, 3);
  })

  it('inherits height from the Obstacle class', () => {
    var car = new Car();

    assert.equal(car.height, 50);
  });

  it('inherits functions from the Obstacle class', () => {
    var car = new Car();

    car.moveObstacles();
    car.increaseSpeed();
  });

  it('has a default type and width', () => {
    var car = new Car();

    assert.equal(car.type, 'car');
    assert.equal(car.width, 50);
  })



})
