'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
  it('should return Boys', () => {
    var result = index.test1();
    expect(result).to.equal("test1");
  });

  it('should return Girls', () => {
    var test = {a:1};
    var result = index.test2(test);
    expect(result.a).to.equal(test.a);
  });
})