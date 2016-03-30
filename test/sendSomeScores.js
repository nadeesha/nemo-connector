/*
  eslint-env jest
*/

import Connector from '../index.js';
import _ from 'lodash';
import {expect} from 'chai';

describe('The connector', function() {
  this.timeout(5000);

  it('should not throw when sending proper scores', () => {
    process.env.NEMO_URI = 'http://fakenemo/api/';
    process.env.AUTH_TOKEN = '1234';

    const connector = new Connector();

    expect(() => connector.addScores(_.chain(5).times().map(i => ({
      eventId: i * 2,
      timestamp: Date.now(),
      score: i * 10,
      pluginId: 'fake',
      personId: 'fake',
    })).value())).to.not.throw();
  });
})