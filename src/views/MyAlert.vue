<!--  -->
<template>
  <div>
      <button @click="myalert">弹框</button>
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

  methods: {
      myalert(){
          /* this.$myAlert({
              title: 'myalert-title',
              msg: 'myalert-msg',
              callback(){
                  console.log('myalert-callback');
              }
          }); */
          this.$messageBox({
              title: 'myalert-title',
              text: 'myalert-msg',
              callback(action){
                  console.log(action);
              }
          })
      }
  }
}

</script>
<style scoped>
</style>