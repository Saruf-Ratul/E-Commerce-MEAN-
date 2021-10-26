/**
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/09/16 11:54:31
 */

if (!Array.prototype.flat) {
  Object.defineProperty(Array.prototype, 'flat', {
    value: function(deep = 1) {
      var arr = []
      if (deep < 0) {
        deep = 0
      }

      deep--

      for (let it of this) {
        if (it === void 0) {
          continue
        }
        if (Array.isArray(it) && deep >= 0) {
          arr = arr.concat(it.flat(deep))
        } else {
          arr.push(it)
        }
      }

      return arr
    },
    enumerable: false,
    writable: true
  })

  // 没有flat, 当然也不会flatMap
  Object.defineProperty(Array.prototype, 'flatMap', {
    value: function(fn) {
      return this.map(fn).flat()
    },
    enumerable: false,
    writable: true
  })
}

if (!Array.prototype.item) {
  Object.defineProperty(Array.prototype, 'item', {
    value: function(num) {
      var n = +num
      if (n < 0) {
        n = this.length + n
      }
      return this[n]
    },
    enumerable: false,
    writable: true
  })
}
