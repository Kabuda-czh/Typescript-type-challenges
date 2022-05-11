type MyReturnType<T extends Function> = T extends (...args: any) => infer R
	? R
	: never;

// test
type ComplexObject = {
	a: [12, "foo"];
	bar: "hello";
	prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

type fnR = MyReturnType<typeof fn>
type fnR1 = MyReturnType<typeof fn1>
type COR = MyReturnType<() => ComplexObject>