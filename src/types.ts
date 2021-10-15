export type AsyncArray = {
  set: (index: number, value: unknown, cb: () => void) => void;
  push: (value: unknown, cb: () => void) => void;
  get: (index: number, cb: (value: unknown) => void) => void;
  pop: (cb: (value: unknown) => void) => void;
  length: (cb: (value: number) => void) => void;
  print: () => void;
};

type MathOperation = (a: number, b: number, cb: (n: number) => void) => void;
type LogicOperation = (
  a: number,
  b: number,
  cb: (v: boolean) => void
) => void;

export type Homework = {
  AsyncArray: AsyncArray;
  add: MathOperation;
  subtract: MathOperation;
  multiply: MathOperation;
  divide: MathOperation;
  less: LogicOperation;
  equal: LogicOperation;
  lessOrEqual: LogicOperation;
};

export type Reduce = (
  array: AsyncArray,
  fn: (
    acc: any,
    cur: any,
    i: number,
    src: AsyncArray,
    cb: (result: any) => void
  ) => void,
  initialValue: any,
  cb: (result: any) => void
) => void;

export type Deferred<T> = {
  promise: Promise<T>;
  resolve: (value: T) => void;
};
