// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 6, action: Action.Add })).toBe(8);
    // Write your test here
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 6, action: Action.Subtract })).toBe(-4);
    // Write your test here
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 6, action: Action.Multiply })).toBe(12);
    // Write your test here
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: Action.Divide })).toBe(3);
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 6, action: Action.Exponentiate })).toBe(
      64,
    );
    // Write your test here
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 2, b: 6, action: 'action' })).toBeNull();
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 'a', b: 6, action: Action.Add })).toBeNull();
    // Write your test here
  });
});
