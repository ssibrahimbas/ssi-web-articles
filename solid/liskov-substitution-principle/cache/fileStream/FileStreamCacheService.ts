import ICacheService from "../ICacheService";
import fs from "fs";

export default class FileStreamCacheService implements ICacheService {
  private cacheDir: string = "./cacheFiles/";
  private cacheExtension: string = ".txt";
  constructor() {}

  private calculateCachePath = (key: string): string => {
    return this.cacheDir + key + this.cacheExtension;
  };

  checkCacheExists = async (key: string): Promise<boolean> => {
    return fs.existsSync(this.calculateCachePath(key));
  };

  getCache = async <T>(key: string): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      fs.readFile(this.calculateCachePath(key), (err, result) => {
        if (err) return reject(err);
        resolve(JSON.parse(result.toString()));
      });
    });
  };

  setCache = async <T>(key: string, value: T): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      fs.writeFile(
        this.calculateCachePath(key),
        JSON.stringify(value),
        (err: any) => {
          if (err) return reject(false);
          resolve(true);
        }
      );
    });
  };
}
