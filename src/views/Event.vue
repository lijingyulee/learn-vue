<!--  -->
<template>
  <div>
    <textarea id="txtarea">
      阻止单击事件继续传播
      <a v-on:click.stop="doThis"></a>

      提交事件不再重载页面
      <form v-on:submit.prevent="onSubmit"></form>

      修饰符可以串联
      <a v-on:click.stop.prevent="doThat"></a>

      只有修饰符
      <form v-on:submit.prevent></form>

      添加事件监听器时使用事件捕获模式
      即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
      <div v-on:click.capture="doThis">...</div>

      只当在 event.target 是当前元素自身时触发处理函数
      即事件不是从内部元素触发的
      <div v-on:click.self="doThat">...</div>

      <input v-on:keyup.enter="submit"> 
      .enter
      .tab
      .delete (捕获“删除”和“退格”键)
      .esc
      .space
      .up
      .down
      .left
      .right

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
    width: 500px;
    height: 600px;
  }
</style>