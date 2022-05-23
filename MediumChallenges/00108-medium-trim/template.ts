type TrimLRType = " " | "\n" | "\t";
type Trim<S extends string> = S extends
	| `${TrimLRType}${infer R}`
	| `${infer R}${TrimLRType}`
	? Trim<R>
	: S;
