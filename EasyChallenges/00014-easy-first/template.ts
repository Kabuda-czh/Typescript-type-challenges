// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never;


// js 对比学习
function first(array) {
	if (array.length === 0) return null;
	return array[0];
}

// 1. extends条件类型判断
// 2. 获取 tuple 的 length 属性
// 3. extends union 判断的规则
// 4. infer 的使用

// First<[]> 如果是一个空数组, 怎么获取到[0] 是 undefined?
