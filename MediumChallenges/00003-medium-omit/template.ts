type MyOmit<T, K extends keyof T> = {
    [P in MyExclude<keyof T, K>]: T[P]
}