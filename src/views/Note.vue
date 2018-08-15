<!--  -->
<template>
  <div>
      <textarea id="txtarea">
          1、组件名为多个单词
            Vue.component('todo-item', {
            // ...
            })
            export default {
            name: 'TodoItem',
            // ...
            }

        2、在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。
            var myGreatMixin = {
            // ...
            methods: {
                $_myGreatMixin_update: function () {
                // ...
                }
            }
            }
        3、单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。（单词大写开头对于代码编辑器的自动补全最为友好）
        4、应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。
        5、单例组件：只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。这不意味着组件只可用于一个单页面，而是每个页面只使用一次。
        6、props: {
            greetingText: String
            }
            <WelcomeMessage greeting-text="hi"/>
        7、多个特性的元素应该分多行撰写，每个特性一行。
            <img
            src="https://vuejs.org/images/logo.png"
            alt="Vue Logo"
            >
            <MyComponent
            foo="a"
            bar="b"
            baz="c"
            />
        8、组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法
        9、应该把复杂计算属性分割为尽可能多的更简单的属性。
            computed: {
                basePrice: function () {
                    return this.manufactureCost / (1 - this.profitMargin)
                },
                discount: function () {
                    return this.basePrice * (this.discountPercent || 0)
                },
                finalPrice: function () {
                    return this.basePrice - this.discount
                }
            }
        10、组件实例中的空行
            props: {
            value: {
                type: String,
                required: true
            },

            focused: {
                type: Boolean,
                default: false
            },

            label: String,
            icon: String
            },

            computed: {
            formattedValue: function () {
                // ...
            },

            inputClasses: function () {
                // ...
            }
            }
        11、如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 <div> 元素)。
            <div v-if="error" key="search-status"></div>
            <div v-else key="search-results"></div>
        12、应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。

        13、for…of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for…of循环

        14、字符串在ES6直接用includes就可以判断是否存在；判断开头是否存在：blog.startsWith(jspang);判断结尾是否存在：blog.endsWith(jspang);复制字符串'jspang|'.repeat(3)

        15、数字验证Number.isFinite( xx )，可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。

        16、整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)，判断是否为整数Number.isInteger(xx)

        17、数组的遍历方法 forEach；filter；some；map

        18、for-in循环用来遍历对象属性。for-of循环用来遍历数据—例如数组中的值。

      </textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  created(){},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
    #txtarea{
        width: 800px;
        height: 1500px;
    }
</style>