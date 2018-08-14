import myAlert from '../../components/common/myAlert.vue'
export default {
    install(Vue){
        let myVue = Vue.extend(myAlert);
        let $myVue = new myVue();
        // $myVue.$mount(document.body.$el);
        document.body.appendChild($myVue.$mount().$el);
        Vue.prototype.$myAlert = options => {
            $myVue.options = options;
            $myVue.show = true;
        }
    }
}