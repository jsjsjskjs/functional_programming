import { log, map, filter, reduce } from './fx.js'

const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 }
]

const add = (a, b) => a + b

log(reduce(add, [1, 2]))

log(
  reduce(
    add,
    map(
      (el) => el.price,
      filter((el) => el.price < 20000, products)
    )
  )
)

const go = (...args) => reduce((acc, f) => f(acc), args)

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  log
)
