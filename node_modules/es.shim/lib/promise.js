/**
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/09/16 12:09:06
 */

if (!Promise.defer) {
  Promise.defer = function() {
    let obj = {}
    obj.promise = new Promise((resolve, reject) => {
      obj.resolve = resolve
      obj.reject = reject
    })
    return obj
  }
}
