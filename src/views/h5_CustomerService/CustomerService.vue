<template>
  <div class="CustomerService">
    <nav-bar />
    <div class="CustomerService_bottom">
      <div class="CustomerService_VcodeBox">
        <img class="VcodeBox_img" src="https://img.alicdn.com/imgextra/i4/62752115/O1CN011RUi95u02uUMun8-62752115.png" alt="">
        <div class="VcodeBox_text">客服小助，全心为您服务</div>
      </div>
      <div class="addweixin">
        <div class="weixinnum">客服私微：{{weixinnum}}</div>
        <button class="copynumbtn" @click="doCopy">复制并添加</button>
      </div>
      <div class="CustomerService_info">
        添加帮助： <br>
        复制微信号，打开微信，添加好友，粘贴复制到微信号即可添加
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      weixinnum: 'jdd7328'
    }
  },
  methods: {
    doCopy () {
      this.$copyText(this.weixinnum).then(e => {
        this.$toast('复制成功')
        setTimeout(() => {
          window.location.href = 'weixin://dl/chat'
        }, 1000)
      }, e => {
        this.$toast('复制失败，请重试')
      })
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .CustomerService {
    padding-top: 80px;
  }

  .CustomerService_bottom {
    width: 600px;
    margin: 0 auto;
  }

  .CustomerService_VcodeBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
  }

  .VcodeBox_img {
    display: block;
    width: 400px;
  }

  .VcodeBox_text {
    font-size: 32px;
    color: #666;
    font-weight: bold;
    padding: 30px 10px;
    text-align: center;
    color: #666;
    margin-bottom: 40px;
  }

  .addweixin {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    border: 4px solid #529900;
    height: 72px;
    border-radius: 80px;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  .copynumbtn {
    width: 30%;
    height: 100%;
    border: none;
    border-radius: 0 80px 80px 0;
    background-color: #529900;
    color: #fff;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weixinnum {
    text-align: center;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #529900;
    font-weight: bold;
    font-size: 26px;
  }

  .CustomerService_info {
    color: #999;
    font-size: 24px;
    line-height: 1.5;
  }
</style>
