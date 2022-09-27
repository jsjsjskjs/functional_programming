const log = console.log

const curry =
  (f) =>
  (a, ...etc) =>
    etc.length ? f(a, ...etc) : (...etc) => f(a, ...etc)

// const map = curry((f, iter) => {
//   let res = []
//   for (const a of iter) {
//     res.push(f(a))
//   }
//   return res
// })

// const filter = curry((f, iter) => {
//   let res = []
//   for (const a of iter) {
//     if (f(a)) res.push(a)
//   }
//   return res
// })

// const reduce = curry((f, acc, iter) => {
//   if (!iter) {
//     iter = acc[Symbol.iterator]()
//     acc = iter.next().value
//   }
//   for (const a of iter) {
//     acc = f(acc, a)
//   }
//   return acc
// })

const go = (...args) => reduce((a, f) => f(a), args)

const pipe = (f, ...fs) => (...el) => go(f(...el), ...fs)

const L = {}