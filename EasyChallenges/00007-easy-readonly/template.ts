type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
};

// js 对比学习
function myReadonly(obj) {
	const result = {};
	for (const key in obj) {
		result["readonly" + key] = obj[key];
	}
	return result;
}

// 1. 返回一个对象
// 2. 遍历原对象 (js->obj,  ts->interface 接口)
// 3. 加上readonly关键字
// 4. 遍历key获取obj[key]的值
