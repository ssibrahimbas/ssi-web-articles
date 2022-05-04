import redis, { createClient } from "redis";
import ICacheService, { ITimeoutCacheService } from "./cache/ICacheService";
import RedisCacheService from "./cache/redis/RedisCacheService";

const createRedis = async (): Promise<redis.RedisClientType> => {
  const client: redis.RedisClientType = createClient();
  await client.connect();
  return client;
};

class Product {
  name: string;
  id: number;
  price: number;

  constructor(name: string, id: number, price: number) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
}

(async () => {
  const redisClient = await createRedis();

  const cacheService: ITimeoutCacheService = new RedisCacheService(redisClient);

  const supra = new Product("Toyota Supra", 22, 10000);

  const setExpireResult = await cacheService.setCacheWithTimeout<Product>(
    "product_22",
    supra,
    3
  );

  console.log("is it set Supra ? ", setExpireResult);

  const supraIsThereOne = await cacheService.checkCacheExists("product_22");
  console.log("is there Supra ? ", supraIsThereOne);

  setTimeout(async () => {
    const supraIsThereTwo = await cacheService.checkCacheExists("product_22");
    console.log("is there still Supra ? ", supraIsThereTwo);
  }, 3100);
})();
