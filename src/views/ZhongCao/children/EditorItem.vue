<template>
  <li class="editor_item">
    <editorAvatar :user="item.user" :created_time="item.created_time" />
    <div class="content" v-html="item.content"></div>
    <editorItemVideo v-if="isVideoItem" :material="item.material"/>
    <editorItemPics v-else :material="item.material"/>
  </li>
</template>
<script>
import editorAvatar from './EditorAvatar.vue'
import editorItemVideo from './EditorItemVideo.vue'
import editorItemPics from './EditorItemPics.vue'
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    editorAvatar,
    editorItemVideo,
    editorItemPics
  },
  data () {
    return {
      isVideoItem: false
    }
  },
  mounted () {
    if (this.item.material) {
      this.item.material.forEach(item => {
        if (item.type === 'v') {
          this.isVideoItem = true
        }
      })
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .editor_item {
    width: 100%;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .content{
    padding: 20px 0 10px;
    line-height: 1.5;
    width: 100%;
  }
</style>
