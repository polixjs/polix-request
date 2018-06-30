const assert = require('assert');
const { get } = require('..');

describe('get', () => {

    it('get single-byte', async () => {
      let result = await get('https://baidu.com');
      assert.equal(result.statusCode, 200, 'The request failed');
    });

});