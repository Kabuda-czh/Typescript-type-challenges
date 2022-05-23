type AppendArgument<Fn, A> = Fn extends (...args: infer U) => infer R
	? (...args: [...U, A]) => R
	: never;
