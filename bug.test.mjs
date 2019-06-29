import { Bug } from './bug.mjs';

test('constructor', async () => {
  const bug = await new Bug();
  expect(bug.foo).toEqual('constructed');
});
