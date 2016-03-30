import invariant from 'invariant';
import isArray from 'lodash/isArray.js';

export default function (scores) {
  invariant(isArray(scores), 'scores should be an array');
  invariant(scores.length > 0, 'at least one score should be sent');
  scores.forEach(event => {
    invariant(event.personId, 'event.personId is required');
    invariant(event.pluginId, 'event.pluginId is required');
    invariant(event.score.toString(), 'event.score is required');
  });
}