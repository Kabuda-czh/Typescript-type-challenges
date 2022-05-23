type Replace<
	S extends string,
	From extends string,
	To extends string,
> = S extends ""
	? S
	: From extends ""
	? S
	: S extends `${infer First}${From}${infer Last}`
	? `${First}${To}${Last}`
	: S;
