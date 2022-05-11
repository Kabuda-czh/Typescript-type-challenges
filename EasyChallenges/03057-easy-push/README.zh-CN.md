在类型系统里实现通用的 Array.push 。

举例如下，

type Result = Push<[1, 2], '3'> // [1, 2, '3']