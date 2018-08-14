<!--  -->
<template>
  <div v-show="show" class="my-alert">
      <div>{{ options.title }}</div>
      <div>{{ options.msg }}</div>
      <div>
          <button @click="btnOk()">确定</button>
          <button @click="btnCancel()">取消</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        options: {
            title: '',
            msg: ''
        },
        show: false
    };
  },

  components: {},

  computed: {},

  created(){},

  mounted(){},

  methods: {
      btnOk(){
          this.options.callback && this.options.callback();
      },
      btnCancel(){
          this.show = false;
      }

  }
}

</script>
<style scoped>
.my-alert{
    position: fixed;
    top: 100px;
    left: 100px;
    z-index: 999;
    background-color: #c0c0c0;
    width: 100%;
    height: 100%;
}
</style>