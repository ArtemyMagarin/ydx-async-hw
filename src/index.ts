import { AsyncArray, Deferred, Homework, Reduce } from "./types";

export = function (o: Homework): Reduce {
  function getDeferred<T>(): Deferred<T> {
    const d: { [key: string]: any } = {};
    d.promise = new Promise<T>((r) => {
      d.resolve = r;
    });
    return d as Deferred<T>;
  }

  async function getLength(array: AsyncArray): Promise<number> {
    const d = getDeferred<number>();
    array.length(d.resolve);
    return d.promise;
  }

  async function getItem(array: AsyncArray, index: number): Promise<unknown> {
    const d = getDeferred<unknown>();
    array.get(index, d.resolve);
    return d.promise;
  }

  async function less(a: number, b: number) {
    const d = getDeferred<boolean>();
    o.less(a, b, d.resolve);
    return d.promise;
  }

  async function add(a: number, b: number) {
    const d = getDeferred<number>();
    o.add(a, b, d.resolve);
    return d.promise;
  }

  return (array, fn, initialValue, cb) => {
    (async () => {
      const length = await getLength(array);
      let acc = initialValue;
      let i = 0;
      while (await less(i, length)) {
        const item = await getItem(array, i);
        const d = getDeferred<unknown>();
        fn(acc, item, i, array, d.resolve);
        acc = await d.promise;
        i = await add(i, 1);
      }
      cb(acc);
    })();
  };
};
