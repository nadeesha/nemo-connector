import validateEnvironment from './validateEnvironment.js';
import superagent from 'superagent';
import validateScores from './validateScores.js';

export default class Connector {
  constructor(options) {
    validateEnvironment();
    this._api = superagent(process.env.NEMO_URI);
    this._options = options;
  }

  addScores(scores) {
    validateScores(scores);

    const {_api} = this;

    return new Promise((resolve, reject) => {
      _api
        .post(`/events`)
        .set(...['Authorization', process.env.AUTH_TOKEN])
        .send(scores)
        .end((err, response) => {
          if (err) {
            return reject(err);
          }

          resolve(response.body);
        });
    });
  }
}