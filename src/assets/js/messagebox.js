/**
 * Created by 屁屁熊 on 2018/7/27.
 */
import  messageBoxVue from '../../components/common/MessageBox.vue'
export default {
  install(Vue){
    let messageBox = Vue.extend(messageBoxVue);
    let $messageBox = new messageBox();
    document.body.appendChild($messageBox.$mount().$el);
    Vue.prototype.$messageBox = (model => {
      model.show=true;
      $messageBox.model=model;
    });
  }
}
