<!--  -->
<template>
  <div>
      <ul @click="fun">
          <li v-for="(item, index) in list" 
            :key="index" 
            :data-index="index"
            class="test-clas li-class">
            {{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        list: [
            {name: 'jack'},
            {name: 'lucy'},
            {name: 'mike'}
        ]
    };
  },

  components: {},

  computed: {},

  created(){},

  mounted(){},

  methods: {
      fun(e){
          if (e.target.nodeName.toLowerCase() === 'li'){
              //e.target.dataset.index;
              alert(e.target.className.indexOf('li-class') !== -1);
              //alert(this.list[e.target.dataset.index].name);
          }
      }
  }
}

</script>
<style scoped>
</style>