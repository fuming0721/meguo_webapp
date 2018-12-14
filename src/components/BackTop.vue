<template>
  <div class="aside_btn">
    <transition name="btn-fade">
      <div class="back-top" @click="backToTop" v-if="showSelf">
        <i class="icon iconfont icon-top"></i>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      showSelf: false
    }
  },
  mounted: function () {
    document.addEventListener('scroll', this.showBox, false);
  },
  methods: {
//    backToTop: function () {
//      $('body,html').animate({
//        scrollTop: 0
//      }, 300);
//    },
//
//    showBox: function () {
//      if ($(document).scrollTop() >= 800) {
//        this.showSelf = true;
//      } else {
//        this.showSelf = false;
//      }
//    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--</style>-->
