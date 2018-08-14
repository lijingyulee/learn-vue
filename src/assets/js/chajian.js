export default {
    install: function (Vue) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          // 逻辑...
        }

        Vue.$quanju = function () {
            alert('quanju')
        }

        // 2. 添加全局资源
        // Vue.directive('my-directive', {
        //   bind (el, binding, vnode, oldVnode) {
        //     // 逻辑...
        //   }
        // })
      
        // 3. 注入组件
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
          // 逻辑...
        }
    
        Vue.prototype.$fchajian2 = function () {
            // 逻辑...
            alert('fchajian2')
          }
    
      }
}
