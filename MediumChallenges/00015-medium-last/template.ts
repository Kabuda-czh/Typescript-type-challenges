type Last<T extends any[]> = T extends [...unknown[], infer R] ? R : never;

// js
function last(arr) {
	return arr[arr.length - 1];
}
