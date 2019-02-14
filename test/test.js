'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
  it('should return Boys', () => {
    var result = index.test1();
    expect(result).to.equal("test1");
  });
})