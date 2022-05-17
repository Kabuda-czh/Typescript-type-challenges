实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。

例如

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
额外：同样，您也可以实现Shift，Push和Unshift吗？