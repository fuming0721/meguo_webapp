<template>
  <table class="ranking">
    <tr class="rankingHead">
      <th>排名</th>
      <th>用户名</th>
      <th>人数</th>
      <th>收入奖励(元)</th>
    </tr>
    <tr class="rankingBody" v-for="(item, index) in rankingList" :key="index">
      <td :class="{rankingTop: index<3}">{{index+1}}</td>
      <td>{{item.username}}</td>
      <td>{{item.num}}</td>
      <td class="rankingMoney">{{item.dinheiro}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data () {
    return {
      rankingList: [
        { username: '秋林红', num: 1573, dinheiro: '¥28630.81' },
        { username: '我只为倪你变乖', num: 1289, dinheiro: '¥24311.09' },
        { username: '(_少伤ωǒ鈊', num: 1074, dinheiro: '¥17357.23' },
        { username: '崔小晴晴', num: 846, dinheiro: '¥12471.55' },
        { username: '℡寵tingル愛', num: 792, dinheiro: '¥11085.00' },
        { username: '邸梦曦0℃', num: 764, dinheiro: '¥10989.77' },
        { username: '崔诺一', num: 701, dinheiro: '¥8930.72' },
        { username: 'xmy151727472', num: 685, dinheiro: '¥8647.56' },
        { username: '一颗小白羊', num: 627, dinheiro: '¥8480.09' },
        { username: 'scx1997126', num: 598, dinheiro: '¥8004.14' }
      ]
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      //      console.log(this.$cache.get('userInfo'))
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .ranking {
    width: 100%;
  }

  th, td {
    text-align: center;
    font-size: 26px;
    height: 80px;
    line-height: 80px;
  }

  .rankingBody {
    border-bottom: 2px solid #f2f2f2;
    background-color: #fff;
  }

  .rankingMoney {
    color: @base_font_color;
  }

  .rankingTop {
    color: #F5A623;
  }
</style>
