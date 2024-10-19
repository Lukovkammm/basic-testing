// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue('test value');
    expect(result).toBe('test value');
    // Write your test here
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'Custom error message!';
    expect(() => throwError(message)).toThrowError(message);
    // Write your test here
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {
      throw new MyAwesomeError();
    }).toThrow('This is my awesome custom error!');
    // Write your test here
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!',
    );
    // Write your test here
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(() => rejectCustomError()).rejects.toThrow(MyAwesomeError);
    expect(() => rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
    // Write your test here
  });
});
