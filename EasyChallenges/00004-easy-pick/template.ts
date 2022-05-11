type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};

// 对比JS使用方法
function myPick(todo, keys) {
	const obj = {};
	keys.forEach((key) => {
		if (key in todo) {
			obj[key] = todo[key];
		}
	});
	return obj;
}

// 1. 返回的是一个对象
// 2. 遍历key, foreach
// 3. 判断key是否在原todo对象里面
// 4. todo[key] 进行取值
