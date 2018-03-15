/* eslint-env mocha */

'use strict';

const expect = require('chai').expect;
const execa = require('execa');
const mooch = require('.');

describe('mooch()', () => {
  it('converts days to mooches', () => {
    expect(mooch(10)).to.equal(1);
  });

  it('defaults to 0 day', () => {
    expect(mooch()).to.equal(0);
  });
});

describe('mooch CLI', () => {
  it('converts days to mooches', () => {
    return execa('./cli.js', ['10']).then(res => {
      expect(res.stdout).to.contain('10 days is 1 Mooch');
    });
  });
});
