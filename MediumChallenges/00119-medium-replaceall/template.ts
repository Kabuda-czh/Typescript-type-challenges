type ReplaceAll<
	S extends string,
	From extends string,
	To extends string,
> = S extends ""
	? S
	: From extends ""
	? S
	: S extends `${infer F}${From}${infer R}`
	? `${F}${To}${ReplaceAll<R, From, To>}`
	: S;
