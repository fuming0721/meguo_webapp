<template>
  <div class="LoginAreaInput" :class="{disabled: disabled}">
    <van-icon class="leftIcon" :name="leftIcon"></van-icon>
    <input class="input" :placeholder="placeholder" :type="type" :value="currentValue" @input="handleInput" :disabled="disabled">
    <van-icon class="clear" name="clear" @click="clear" v-if="showClear"></van-icon>
    <button v-if="inputType == 'getCode'" class="getCode" @click="getVerificationCode" :disabled="!currentValue.length || SMSsending">
      <span v-if="!SMSsending">获取验证码</span>
      <span v-else>{{timeNum+'S'}}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'leftIcon', 'value', 'type', 'inputType', 'action', 'disabled'],
  data () {
    return {
      currentValue: this.value,
      showClear: false,
      SMSsending: false,
      timeNum: 60
    }
  },
  methods: {
    handleInput () {
      this.currentValue = event.target.value
      this.$emit('input', event.target.value)
    },
    clear () {
      this.showClear = false
      this.canGetCode = false
      this.currentValue = ''
      this.$emit('input', '')
    },
    getVerificationCode () {
      this.SMSsending = true
      this.$api('getVerificationCode', {
        'action': this.action,
        'mobile': this.currentValue
      }).then(({ data }) => {
        this.$toast(data.message)
        if (data.success) {
          this.SMSsending = true
          var timer = setInterval(() => {
            if (this.timeNum-- <= 1) {
              this.timeNum = 60
              this.SMSsending = false
              clearInterval(timer)
            }
          }, 1000)
        } else {
          this.SMSsending = false
        }
      })
    }
    //    checkPhoneNum () {
    //      if (this.currentValue.length === 11 && (/^1[34578]\d{9}$/.test(this.currentValue))) {
    //        this.canGetCode = true
    //      } else {
    //        this.canGetCode = false
    //      }
    //    }
  },
  watch: {
    currentValue (v) {
      v.length ? this.showClear = true : this.showClear = false
    },
    value (v) {
      this.currentValue = v
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .LoginAreaInput{
    width: 100%;
    height: 80px;
    border: 2px solid #dcdcdc;
    background-color: #fff;
    border-radius: 80px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    &>input{
      height: 78px;
      flex-grow: 1;
    }
  }
  .leftIcon, .clear{
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  .clear{
    opacity: 0.8;
  }
  .getCode{
    height: 60px;
    background-color: #94DA42;
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    margin-right: 10px;
    font-size: 24px;
    &:disabled{
      background-color: #eee;
    }
    &:active{
      opacity: 0.8;
    }
  }
  .disabled {
    background-color: rgb(235, 235, 228);
    input{
      color: #999;
    }
    .clear{
      display: none;
    }
  }
</style>
