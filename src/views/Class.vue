<!--  -->
<template>
  <div>
      <p class="static" :class="{active: isActive, 'text-danger': hasError}">class</p>
      <button @click="isActive = !isActive">变化</button>

      <p class="static" :class="classObj">class</p>

      <div v-bind:style="styleObject">style</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        isActive: true,
        hasError: true,
        classObj:{
            active: true,
            'text-danger': true,
        },
        styleObject: {
            color: 'red',
            fontSize: '20px'
        }
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
    .active{
        background-color: pink
    }
    .text-danger{
        color: red
    }
</style>