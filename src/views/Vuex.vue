<template>
  <div id="app2">
    {{temperature}}
    {{suggestion}}

    <button @click="add">add</button>
    <button @click="sub">sub</button>

    <h3>{{ $store.state.count }}</h3>
    <h3>{{ count }}</h3>
    <h3>{{ num }}</h3>
    <button @click="vadd(10)">vuex add</button>
    <button @click="vreduce">vuex vreduce</button>

    <router-view/>
  </div>
</template>

<script>
let suggestion=['T恤短袖','夹克长裙','棉衣羽绒服'];
import Vue from 'vue';
import store from '@/vuex/store'
import { mapState, mapMutations  } from 'vuex';
export default {
  data(){
    return {
      temperature: 16,
      suggestion: '夹克长裙',
      Vue
    }
  },
  store,
  methods: {
    add(){
      this.temperature += 5;
    },
    sub(){
      this.temperature -= 5;
    },
    fchajian(){
      this.$fchajian2();
    },
    ...mapMutations([
      'vadd','vreduce'
    ])
  },
  watch:{
        temperature:function(newVal,oldVal){
            newVal >= 26 && (this.suggestion = suggestion[0]);
            (newVal >= 0 && newVal < 26) && (this.suggestion = suggestion[1]);
            newVal < 0 && (this.suggestion = suggestion[2]);
        }
    },
    computed: mapState(['count', 'num'])
    
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
