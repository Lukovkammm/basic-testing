// Uncomment the code below and write your tests
import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  let account: BankAccount;

  beforeEach(() => {
    account = getBankAccount(100);
  });

  test('should create account with initial balance', () => {
    expect(account.getBalance()).toBe(100);
    // Write your test here
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(101)).toThrow(InsufficientFundsError);
    expect(() => account.withdraw(101)).toThrow(
      'Insufficient funds: cannot withdraw more than 100',
    );
    // Write your test here
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => account.transfer(200, getBankAccount(0))).toThrow(
      InsufficientFundsError,
    );
    expect(() => account.transfer(200, getBankAccount(0))).toThrow(
      'Insufficient funds: cannot withdraw more than 100',
    );
    // Write your test here
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(50, account)).toThrow(TransferFailedError);
    expect(() => account.transfer(50, account)).toThrow('Transfer failed');
    // Write your test here
  });

  test('should deposit money', () => {
    expect(account.deposit(50).getBalance()).toBe(150);
    // Write your test here
  });

  test('should withdraw money', () => {
    expect(account.withdraw(50).getBalance()).toBe(50);
    // Write your test here
  });

  test('should transfer money', () => {
    const friendAccount = getBankAccount(0);
    expect(account.transfer(20, friendAccount).getBalance()).toBe(80);
    expect(friendAccount.getBalance()).toBe(20);
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(100);
    const result = await account.fetchBalance();
    expect(typeof result).toBe('number');
    expect(result).toBe(100);
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(200);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(200);
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);
    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
    await expect(account.synchronizeBalance()).rejects.toThrow(
      'Synchronization failed',
    );
    // Write your tests here
  });
});
