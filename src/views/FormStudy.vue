<!--  -->
<template>
  <div>
      <input type="text" placeholder="edit me" v-model.trim="inputTxt">
      {{inputTxt}}
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <br/>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
      <br/>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>

      <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br/>>
      <span>Checked names: {{ checkedNames }}</span>
      <br/>
      <div id="example-4">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
    </div>
    <br>
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <br>
    <div id="example-6">
      <select v-model="selected2" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected2 }}</span>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      inputTxt: '',
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      selected2: []
    }
  },

  components: {},

  computed: {},

  created () {},

  mounted () {},

  methods: {}

}
</script>
