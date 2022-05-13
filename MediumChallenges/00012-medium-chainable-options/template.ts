type Chainable<T extends object = {}> = {
	option<K extends string, V extends any>(
		key: Exclude<K, keyof T>,
		value: V,
	): Chainable<
		T & {
			[P in K]: V;
		}
	>;
	get(): T;
};

// this?
// K extends keyof T ? never : K 排除重复 === exclude