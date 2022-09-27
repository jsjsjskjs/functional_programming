export function log(a) {
  console.log(a)
}

export function map(f, iter) {
  let res = []
  for (const a of iter) {
    res.push(f(a))
  }
  return res
}

export function filter(f, iter) {
  let res = []
  for (const a of iter) {
    if (f(a)) res.push(a)
  }
  return res
}

export function reduce(f, acc, iter) {
  if (!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for (const a of iter) {
    acc = f(acc, a)
    console.log(acc)
  }
  return acc
}
