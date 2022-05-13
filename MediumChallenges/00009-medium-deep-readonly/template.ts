type DeepReadonly<T> = {
	readonly [P in keyof T]: keyof T[P] extends undefined ? T[P] : DeepReadonly<T[P]>;
};

// js
function deepReadonly(obj) {
	let res = {};
	for (let i in obj) {
		if (obj[i] !== typeof Object) {
			/*readonly*/ res[i] = obj[i];
		} else {
			/*readonly*/ res[i] = deepReadonly(obj[i]);
		}
	}
	return res;
}
