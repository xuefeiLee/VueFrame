<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item>
        <el-col :span="11" :offset="4">
          <el-input :placeholder="placeholder"></el-input>
        </el-col>
        <el-col :span="8" :offset="1">
          <el-button type="info">高级查询</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="css">

</style>
<script type="text/javascript">
export default {
  name: 'SearchInline',
  data () {
    return {
      msg: 'hello vue',
      placeholder: '摘要号，分出公司，再保人名称'
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
  }
}

</script>
