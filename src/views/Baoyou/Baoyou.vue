<template>
  <div class="baoyou">
    <ul class="ua">
      <li @click="cli(index)" v-for="(item, index) in 10" :key="index" :class="{index: aindex === index}">点击</li>
    </ul>
    <ul>
      <li v-for="item in dataList" :key="item.id">
        <img v-lazy="item.thread_img" style="width: 200px" alt="">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'baoyou',
  components: {
  },
  data () {
    return {
      num: 0,
      dataList: [],
      aindex: 0
    }
  },
  mounted () {
    this.$api('pib', { tid: 22132 }).then(data => {
      console.log(data)
    })
  },
  methods: {
    getList () {
      this.num += 1
      this.$api('pic', { cid: this.num }).then(data => {
        console.log(data)
      })
    },
    cli (index) {
      this.dataList = []
      this.aindex = index
      this.$api('goodList', { cid: index }).then(({ data }) => {
        if (data.success) {
          this.dataList.push(...data.result.articals)
        }
      })
    }
  }
}
</script>

<style>
  .ua {
    display: flex;
    justify-content: center;
  }
  .ua>li{
    width: 100px;
  }
  .index{
    color: red;
  }
</style>
