<template>
  <div class="home">
    <p>{{ msg }}</p>
    <div id="id-bind">
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
    <div id="id-if">
      <p v-if="seen">v-if</p>
      <button @click="seen = !seen">显示隐藏</button>
    </div>
    <ul id="id-for">
      <li v-for="(item, index) in data" :key="index">{{ item.name }}</li>
    </ul>
    <div id="id-model">
      <span>{{ text }}</span>
      <input type="text" v-model="text"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      msg: '声明式渲染',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      data: [
        {name: 'jack'},
        {name: 'rose'},
        {name: 'mike'}
      ],
      text: ''
    }
  },
  components: {
    //HelloWorld
  }
}
</script>
