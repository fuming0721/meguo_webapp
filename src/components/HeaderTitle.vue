<template>
  <div class="header_title">
    <div class="header_title_center">
      <div class="header_left">
        <div class="header_line"></div>
        <span class="header_title_text">{{title}}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header_line{
    width: 8px;
    background-color: #F23C4E;
    height: 40px;
    margin-right: 12px;
    border-radius: 4px;
  }
  .header_left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .header_title{
    height: 80px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  .header_title_center{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_title_text{
    font-size: 26px;
    color: #000;
    font-weight: bolder;
  }
</style>
