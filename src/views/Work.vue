<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:class="{finish:item.isFinished}"
      @click="toggleFinsh(item)"
      >
        {{item.label}}
      </li>
    </ul>
    <button @click=" myTest('1')">我的测ssssss试</button>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <input v-model="msg" @keyup.enter="addView">
  </div>

</template>
<style lang="css">
.finish{
  text-decoration: underline;
}
</style>
<script type="text/javascript">
  import Store from '../store'
  console.log(Store)
  export default {
    name: 'Work',
    data () {
      // es6写法
      return {
        msg: 'hello vue',
        items: Store.fetch(),
        liClass: 'thisIsIiClass'
      }
    },
    watch: {
      items: {
        // 当items深层赋值
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    components: {
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ['列表1', '列表2', '列表3', '列表4', '列表5', '列表6']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      },
      toggleFinsh: function (obj) {
        obj.isFinished = !obj.isFinished
      },
      myTest: function (index) {
        console.log(index)
        console.log('对了')
      },
      addView: function () {
        this.items.push({
          label: this.msg,
          isFinished: false
        })
        this.msg = ''
      }
    }
  }

</script>
