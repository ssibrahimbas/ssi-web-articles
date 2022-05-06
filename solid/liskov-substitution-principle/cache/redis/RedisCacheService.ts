import { ITimeoutCacheService } from "../ICacheService";
import redis from "redis";

export default class RedisCacheService implements ITimeoutCacheService {
  private redisClient: redis.RedisClientType;

  constructor(redisClient: redis.RedisClientType) {
    this.redisClient = redisClient;
  }

  checkCacheExists = async (key: string): Promise<boolean> => {
    return (await this.redisClient.exists(key)) === 1;
  };

  getCache = async <T>(key: string): Promise<T> => {
    const result = await this.redisClient.get(key);
    if (!result) throw new Error(`Not found: ${key}`);
    return JSON.parse(result);
  };

  setCache = async <T>(key: string, value: T): Promise<boolean> => {
    const result = await this.redisClient.set(key, JSON.stringify(value));
    return result === "OK";
  };

  setCacheWithTimeout = async <T>(
    key: string,
    value: T,
    timeout: number
  ): Promise<boolean> => {
    const result = await this.redisClient.setEx(
      key,
      timeout,
      JSON.stringify(value)
    );
    return result === "OK";
  };
}
