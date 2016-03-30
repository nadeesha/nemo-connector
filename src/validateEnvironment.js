import invariant from 'invariant';

export default function() {
  invariant(process.env.NEMO_URI, 'process.env.NEMO_URI is required');
  invariant(process.env.AUTH_TOKEN, 'process.env.AUTH_TOKEN is required');
}
