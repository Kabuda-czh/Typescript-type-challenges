type StringToArray<S extends string> = S extends `${infer T}${infer R}` ? [T, ...StringToArray<R>] : []
type LengthOfString<S extends string> = StringToArray<S>['length']
