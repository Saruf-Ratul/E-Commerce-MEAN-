/**
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/09/16 11:58:40
 */

// 简单的数字处理
// 将安全范围内的数字字符串转为数字类型
// 否则转为字符串类型
if (!Number.parse) {
  Object.defineProperty(Number, 'parse', {
    value: function(val) {
      if (typeof val === 'number' || typeof val === 'string') {
        val += ''
        if (val.startsWith('0') && !val.startsWith('0.')) {
          if (val === '0') {
            return 0
          } else {
            return val
          }
        } else {
          if (isFinite(val)) {
            if (
              val >= Number.MIN_SAFE_INTEGER &&
              val <= Number.MAX_SAFE_INTEGER
            ) {
              val = +val
            }
          }
          return val
        }
      }
      return val
    },
    enumerable: false
  })
}

// 将字符串转为数字类型
if (!Number.fromString) {
  Object.defineProperty(Number, 'fromString', {
    value: function(val) {
      return +val || 0
    },
    enumerable: false
  })
}
