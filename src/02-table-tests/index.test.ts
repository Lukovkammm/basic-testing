// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 5, action: Action.Subtract, expected: 0 },
  { a: 3, b: -2, action: Action.Subtract, expected: 5 },
  { a: 3, b: -2, action: Action.Multiply, expected: -6 },
  { a: 0, b: -2, action: Action.Multiply, expected: -0 },
  { a: 8, b: 0, action: Action.Divide, expected: Infinity },
  { a: 5, b: 5, action: Action.Divide, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 2, b: -2, action: Action.Exponentiate, expected: 0.25 },
  { a: 2, b: 'bla', action: Action.Add, expected: null },
  { a: 'bla', b: 2, action: Action.Divide, expected: null },
  { a: 5, b: 1, action: 'bla', expected: null },
  { a: [], b: 'bla', action: {}, expected: null },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should calculate $a, $b using $action and return $expected result',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
