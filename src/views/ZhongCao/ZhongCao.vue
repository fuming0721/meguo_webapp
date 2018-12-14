<template>
  <div class="home">
    我种草
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      num: 0
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
    }
  }
}
</script>
