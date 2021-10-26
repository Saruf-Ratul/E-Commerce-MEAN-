/**
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/09/16 12:07:09
 */

/**
 * [ 判断对象/数组是否为空]
 * eg.
 * Object.empty(obj/arr)
 */
if (!Object.empty) {
  Object.defineProperty(Object, 'empty', {
    value: function(obj) {
      try {
        for (let i in obj) {
          return false
        }
      } catch (e) {}
      return true
    },
    enumerable: false
  })
}
