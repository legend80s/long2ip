/* global describe it */

const { expect } = require('chai');
const long2ip = require('../index');

describe('long2ip', () => {
  it('should equal "192.0.34.166" when input is 3221234342', () => {
    const input = 3221234342;
    const result = long2ip(input);
    const expected = '192.0.34.166';

    expect(result).to.equal(expected);
  });

  it('float will be rounded', () => {
    const input = 3221234342.1;
    const result = long2ip(input);
    const expected = '192.0.34.166';

    expect(result).to.equal(expected);
  });

  it('should equal "0.0.0.0" when input is 0', () => {
    const input = 0;
    const result = long2ip(input);
    const expected = '0.0.0.0';

    expect(result).to.equal(expected);
  });

  it('should equal "255.255.255.255" when input is 4294967295', () => {
    const input = 4294967295;
    const result = long2ip(input);
    const expected = '255.255.255.255';

    expect(result).to.equal(expected);
  });

  it('should equal false when input is negative', () => {
    const input = -1;
    const result = long2ip(input);
    const expected = false;

    expect(result).to.equal(expected);
  });

  it('should equal false when input is greater than 4294967295', () => {
    const input = 4294967295000;
    const result = long2ip(input);
    const expected = false;

    expect(result).to.equal(expected);
  });

  it('should equal false when input is string of digits', () => {
    const input = '3221234342';
    const result = long2ip(input);
    const expected = false;

    expect(result).to.equal(expected);
  });

  it('should equal false when input is string of letters', () => {
    const input = 'abcdefghij';
    const result = long2ip(input);
    const expected = false;

    expect(result).to.equal(expected);
  });

  it('should equal false when input is object', () => {
    const input = {};
    const result = long2ip(input);
    const expected = false;

    expect(result).to.equal(expected);
  });
});
