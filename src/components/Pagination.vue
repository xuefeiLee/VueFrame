<template>
  <div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="500" @current-change="thisPage"
        :current-page="pageCount">
      </el-pagination>
    </div>
  </div>
</template>
<style lang="css">

</style>
<script type="text/javascript">
  export default {
    props: ['type'],
    name: 'Pagination',
    data () {
      return {
        msg: 'hello vue',
        tabType: this.type,
        pageCount: 0
      }
    },
    components: {
    },
    methods: {
      thisPage (page) {
        this.$emit('thisPage', page)
      }
    },
    computed: {
    },
    mounted () {
      switch (this.tabType) {
        case 'progress': this.pageCount = this.$store.state.rackPoint.page['progress']
          break
        case 'complete': this.pageCount = this.$store.state.rackPoint.page['complete']
          break
        default:
          this.pageCount = this.$store.state.rackPoint.page['all']
      }
    }
  }
</script>
