// Uncomment the code below and write your tests
import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    throttledGetDataFromApi.cancel();
  });

  test('should create instance with provided base url', async () => {
    const createSpy = jest.spyOn(axios, 'create').mockReturnValue({
      get: jest.fn().mockResolvedValue({ data: {} }),
    } as unknown as AxiosInstance);

    await throttledGetDataFromApi('path');

    expect(createSpy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
    // Write your test here
  });

  test('should perform request to correct provided url', async () => {
    const mockedAxiosInstance = {
      get: jest.fn().mockResolvedValue({ data: {} }),
    } as unknown as AxiosInstance;
    jest.spyOn(axios, 'create').mockReturnValue(mockedAxiosInstance);

    await throttledGetDataFromApi('/posts');

    expect(mockedAxiosInstance.get).toHaveBeenCalledWith('/posts');
    // Write your test here
  });

  test('should return response data', async () => {
    const data = { test: 'bal bla data' };
    const mockedAxiosInstance = {
      get: jest.fn().mockResolvedValue({ data }),
    } as unknown as AxiosInstance;
    jest.spyOn(axios, 'create').mockReturnValue(mockedAxiosInstance);
    const result = await throttledGetDataFromApi('/posts');
    expect(result).toBe(data);
    // Write your test here
  });
});
