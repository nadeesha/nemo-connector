import invariant from 'invariant';
import isArray from 'lodash/isArray.js';

export default function (scores) {
  invariant(isArray(scores), 'scores should be an array');
  invariant(scores.length > 0, 'at least one score should be sent');
  scores.forEach(event => {
    invariant(event.timestamp, 'event.timestamp is required');
    invariant(event.eventType, 'event.eventType is required');
    invariant(event.eventId, 'event.eventId is required');
    invariant(event.score.toString(), 'event.score is required');
  });
}