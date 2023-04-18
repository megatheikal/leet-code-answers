import { twoSum } from "../1. Two Sum/answer";


test('Use Case 1', () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([0, 1]);
  });

test('Use Case 2', () => {
    expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
});

test('Use Case 3', () => {
    expect(twoSum([3,3], 6)).toStrictEqual([0,1]);
  });