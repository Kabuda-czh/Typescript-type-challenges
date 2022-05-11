type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => unknown ? P : never

// test
const foo = (arg1: string, arg2: number): void => {}
type a = MyParameters<typeof foo>