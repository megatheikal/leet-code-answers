import { api } from "../sum";

test('adds 1 + 2 to equal 3', () => {
  expect(api(1, 2)).toBe(3);
});