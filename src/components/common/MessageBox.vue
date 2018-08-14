<template>
  <div>
    <transition name="alpha">
      <div v-show="model.show" class="messageBox_model" @click="close('cancel')"></div>
    </transition>
    <transition name="bounce">
      <div v-show="model.show" class="messageBox">
        <div class="messageBox_header">
          <div class="messageBox_header_title">
            {{model.title}}
          </div>
        </div>

        <div class="messageBox_content">
          {{model.text}}
          <div v-html="model.html"></div>
        </div>
        <div class="messageBox_btns">
          <div class="messageBox_btns_default messageBox_btns_primary" @click="close('confirm')">确定</div>
          <div class="messageBox_btns_default " @click="close('cancel')">取消</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'messageBox',
    data(){
      return {
        model: {
          show: false,
          title: '提示',
        }
      }
    },
    methods: {
      close(state){
        this.model.show = false;
        if(this.model.callback){
          this.model.callback(state);
        }
      },
    }
  }
</script>

<style scoped>

  .messageBox {
    position: fixed;
    z-index: 10000;
    left: 50%;
    transform: translateX(-50%);
    width: 420px;
    border-radius: 4px;
    background-color: #fff;
    top: 10%;
  }

  .messageBox_header {
    padding: 20px 20px 0;
  }

  .messageBox_header_title {
    padding-left: 0;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    height: 18px;
    color: #333;
  }

  .messageBox_content {
    padding: 30px 20px;
    color: #48576a;
    font-size: 14px;

  }

  .messageBox_btns {
    padding: 10px 20px 15px;
    text-align: right;
    overflow: hidden;
  }

  .messageBox_btns_default {
    user-select: none;
    float: right;
    padding: 8px 15px;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }

  .messageBox_btns_default:hover {
    border-color: #1d90e6;
  }

  .messageBox_btns_primary {
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
    margin-left: 10px;
  }

  .messageBox_btns_primary:hover {
    background: #4db3ff;
    border-color: #4db3ff;
  }

  .messageBox_model {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
    z-index: 9999;
  }

  .alpha-enter-active {
    animation: bg .3s;
  }

  .alpha-leave-active {
    animation: bg .5s reverse;
  }

  @keyframes bg {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }

  @keyframes show-messageBox {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;

    }
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .3s reverse;
  }

  @keyframes bounce-in {
    from {
      opacity: 0;
      top: 5%;
    }
    to {
      opacity: 1;
      top: 10%;
    }
  }


</style>
