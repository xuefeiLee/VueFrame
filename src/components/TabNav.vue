<template>
  <div>
    <el-tabs type="border-card" @tab-click="clickDemo" active-name="all" class="height">
      <el-tab-pane v-for="(tab,index) in tabType" :name="tab.type" :key="tab.type">
        <span slot="label"><i :class="tab.icon"></i> {{tab.name}}</span>
        <slot :name="tab.type"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="css">
.height{
  height: 500px;
  background: #fff;
  margin-top: 0px;
}
.el-tabs__content{
  background: #fff;
}
.el-tabs__header{
  border-bottom: #ffffff;
}
.el-tabs__nav{
  float: none;
}
.el-tabs__nav-scroll{
  text-align: center;
  background: #fff;
  padding: 15px;
}
.el-tabs__item{
  background: #1ABC9C;
  padding: 0 30px;
}
.left-radius{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: red;
}
.el-tabs__item:first-of-type{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.el-tabs__item:last-of-type{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.el-tabs__item.is-active{
  color: #fff;
  background: #16A085;
}
.el-tabs__item {
  color: #fff;
}
.el-tabs--border-card{
  border: none;
}
.el-popover, .el-tabs--border-card{
  box-shadow: none;
}
</style>
<script type="text/javascript">
  export default {
    name: 'TabNav',
    data () {
      return {
        msg: true,
        tabType: [
          {
            type: 'all',
            name: '全部',
            icon: 'el-icon-date'
          },
          {
            type: 'progress',
            name: '进行中',
            icon: 'el-icon-date'
          },
          {
            type: 'complete',
            name: '已完成',
            icon: 'el-icon-date'
          }
        ]
      }
    },
    components: {
    },
    methods: {
      clickDemo (tab, event) {
        switch (tab.name) {
          case 'all':
            this.$emit('clickDemo', tab.name)
            break
          case 'progress':
            this.$emit('clickDemo', tab.name)
            break
          case 'complete':
            this.$emit('clickDemo', tab.name)
            break
          default:
            throw new Error('啥也没有')
        }
      }
    }
  }
</script>
