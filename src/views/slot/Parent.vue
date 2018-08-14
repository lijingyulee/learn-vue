<!--  -->
<template>
  <div>
      <Child>
          <p>父传子段落</p>
          <p slot="name-1">name-1</p>
          <p slot="name-2" slot-scope="msg">{{ msg.msg }}</p>
          <ul slot="name-3" slot-scope="data">
              <li v-for="(item, index) in data.data" :key="index">{{ item }}</li>
          </ul>
      </Child>
  </div>
</template>

<script>
import Child from '../../components/slot/Sub'//子组件不能命名为Sub,否则子组件向父组件传数据没有效果
export default {
  data () {
    return {
    };
  },

  components: {Child},

  computed: {},

  created(){},

  mounted(){},

  methods: {}
}

</script>
<style scoped>
</style>