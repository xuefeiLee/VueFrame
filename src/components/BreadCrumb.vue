<template>
  <div class="out_padding">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">工作台</el-breadcrumb-item>
      <el-breadcrumb-item>{{childWords}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="css" scoped>
.out_padding{
  padding: 15px;
  margin-top: 59px;
}
</style>
<script type="text/javascript">
  export default {
    name: 'BreadCrumb',
    props: ['childWords'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
    },
    mounted () {
    }
  }
</script>
