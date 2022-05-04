export default interface ICacheService {
  setCache<T>(key: string, value: T): Promise<boolean>;
  getCache<T>(key: string): Promise<T>;
  checkCacheExists(key: string): Promise<boolean>;
}

export interface ITimeoutCacheService extends ICacheService {
  setCacheWithTimeout<T>(
    key: string,
    value: T,
    timeout: number
  ): Promise<boolean>;
}
