declare function PromiseAll<T extends unknown[]>(
	values: readonly [...T],
): Promise<{
	[K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
}>;
