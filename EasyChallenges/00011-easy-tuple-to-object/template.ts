type TupleToObject<T extends readonly (string | number | symbol)[]> = {
	[P in T[number]]: P;
};

// keyof -> array 是得到索引 等同于 for in array

// T[number] 就等同于数组的每一个值

// js 对比学习
function tupleToObject(tuple) {
	const obj = {};
	tuple.forEach((element) => {
		obj[element] = element;
	});
	return obj;
}

// 1. 返回对象
// 2. 遍历数组 在ts中为 T[number]
// 3. obj[element] = element 赋值
