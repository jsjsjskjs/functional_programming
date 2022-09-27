L.filter = function* (f, iter) {
    for (const el of iter) {
      if (f(el)) yield el
    }
  }

  let check = L.filter((el) => el % 2, [1, 2, 3, 4])
  log(check)
  log([...check])
  log(reduce((a, b) => a + b, check))