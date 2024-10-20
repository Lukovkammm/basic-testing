// Uncomment the code below and write your tests
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import path from 'node:path';
import * as fs from 'fs';
import * as fsPromises from 'fs/promises';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const callback = jest.fn();
    const timeout = 1000;
    doStuffByTimeout(callback, timeout);
    jest.advanceTimersByTime(timeout);
    expect(callback).toHaveBeenCalled();
    // Write your test here
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    const timeout = 1000;
    doStuffByTimeout(callback, timeout);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(timeout);
    expect(callback).toHaveBeenCalledTimes(1);
    // Write your test here
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    const timeout = 500;
    doStuffByInterval(callback, timeout);
    jest.advanceTimersByTime(timeout);
    expect(callback).toHaveBeenCalled();
    // Write your test here
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();
    const timeout = 500;
    doStuffByInterval(callback, timeout);
    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1500);
    expect(callback).toHaveBeenCalledTimes(4);
    // Write your test here
  });
});

jest.mock('fs');
jest.mock('fs/promises');

describe('readFileAsynchronously', () => {
  const pathToFile = 'path/to/file';

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call join with pathToFile', async () => {
    const joinSpy = jest.spyOn(path, 'join');
    readFileAsynchronously(pathToFile);
    expect(joinSpy).toHaveBeenCalledWith(__dirname, pathToFile);
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    const result = await readFileAsynchronously(pathToFile);
    expect(result).toBeNull();
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fsPromises.readFile as jest.Mock).mockResolvedValue(
      Buffer.from('Test content'),
    );

    const result = await readFileAsynchronously(pathToFile);
    expect(result).toBe('Test content');
    // Write your test here
  });
});
