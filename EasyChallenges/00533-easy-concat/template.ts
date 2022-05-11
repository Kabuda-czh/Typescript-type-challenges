type Concat<T extends any[], U extends any[]> = [...T, ...U];

// js解法
function myConcat(T, U) {
	return [...T, ...U];
}
