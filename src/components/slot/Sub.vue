<!--  -->
<template>
  <div>
    <slot></slot>
    <slot name="name-1"></slot>
    <slot name="name-2" msg="name-2-text"></slot>
    <slot name="name-3" :data="data"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: ['jack','rose','mike']
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
</style>