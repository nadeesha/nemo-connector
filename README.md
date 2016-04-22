This is a connector to the nemo backend.

```js
import Connector from 'nemo-connector';
const connector = new Connector();
```

## Sending scores

Returns a `Promise`

```js
connector.addScores({
  eventId: i * 2,
  timestamp: Date.now(),
  score: i * 10,
  pluginId: 'fake',
  personId: 'fake',
})
```