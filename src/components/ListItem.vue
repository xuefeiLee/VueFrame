<template>
  <div>
    <el-row :gutter="20">
      <el-col :lg='8' :md="12" :sm="24" :span="8" v-for="(v,index) in rackPointAll" :key="v">
        <el-row class="background-row el-row-out">
          <div>
            <div>
              <el-row>
                <el-col :span="20" class="type-number">{{v.number}}</el-col>
                <el-col :span="4" v-bind:class="{'warn-last-date' : v.date === '1'}" v-show="v.date !== '已邀约'">还剩{{v.date}}天</el-col>
                <el-col :span="4" v-bind:class="{'warn-last-date' : v.date === '1'}" v-show="v.date === '已邀约'">{{v.date}}</el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <h3 class="list-color">{{v.typeName}}</h3>
                </el-col>
              </el-row>
            </div>
            <el-row class="out-row-padding">
              <el-col :span="24">
                <ProgressBar class="out-div-progress" :progressArray="v.progress"></ProgressBar>
              </el-col>
            </el-row>
            <el-row class="bottom-background">
              <el-col :span="24">{{v.type}}</el-col>
            </el-row>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="css">
.el-row-out {
  margin-bottom: 20px;
}
.el-row-out .el-row{
  padding:5px 10px;
}
.background-row{
  border: 2px solid #f0f0f0;
  border-radius: 5px;
}
.bottom-background{
  background: #f0f0f0;
  color: #9a9a9a;
}
.warn-last-date{
  background: red;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
}
.list-color{
  color: #2980B9;
}
.type-number{
  font-size: 12px;
  color: #9a9a9a;
}
.out-row-padding{
  padding: 0 !important;
}
.out-div-progress{
  width: 100%;
  height: 10px;
  background: #9a9a9a;
  position: relative;
  overflow: hidden;
}
</style>
<script type="text/javascript">
  import progress from './ListProgress.vue'
  export default {
    name: 'ListItem',
    props: {
      listType: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        tabType: this.listType,
        listData: []
      }
    },
    components: {
      ProgressBar: progress
    },
    mounted () {
      switch (this.tabType) {
        case 'all':
          this.$store.dispatch('rackPointAll')
          break
        case 'progress':
          this.$store.dispatch('rackPointProgress')
          break
        case 'complete':
          this.$store.dispatch('rackPointComplete')
          break
        default:
          throw new Error('为啥啥都不是')
      }
    },
    computed: {
      rackPointAll () {
        if (this.tabType === 'all') {
          return this.$store.state.rackPoint.all
        } else if (this.tabType === 'progress') {
          return this.$store.getters.progressList
        } else if (this.tabType === 'complete') {
          return this.$store.getters.completeList
        } else {
          throw new Error('为啥啥都不是')
        }
      }
    },
    methods: {
    }
  }
</script>
