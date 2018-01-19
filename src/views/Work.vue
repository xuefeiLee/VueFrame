<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:class="{finish:item.isFinished}"
      @click="toggleFinsh(item)"
      >
        {{item.label}}
      </li>
    </ul>
    <h2>排序</h2>
    <ul>
      <li v-for="(i,index) in sortItem">{{index}}:{{i}}</li>
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
        items1: ['1', '34', '2', '78', '16', '98'],
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
    computed: {
      sortItem: function () {
        return this.items1.sort(this.sortNum)
      }
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
            name: '能量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        })
      },
      sortNum: function (a, b) {
        return a - b
      },
      toggleFinsh: function (obj) {
        obj.isFinished = !obj.isFinished
      },
      myTest: function (index) {
        console.log(index)
        this.$layer.msg('no')
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
