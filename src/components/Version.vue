<template>
  <div>
    <a class="href" _v_05dfff1dcb78 href="https://modao.cc/app/05dfff1dcb78b5b7fa1440ef9722aee922ed7fef#screen=s53d94e054a9b99640bf23f">墨刀</a>
    <el-button type="text" @click="open">V{{version}}</el-button>
  </div>
</template>
<style lang="css">
.href[_v_05dfff1dcb78]{
  color: #20a0ff;
  text-decoration: none;
}
.href[_v_05dfff1dcb78]:hover{
  text-decoration: underline;
}
</style>
<script type="text/javascript">
  import config from '../common/config'
  export default {
    name: 'Version',
    data () {
      return {
        msg: 'hello vue',
        version: config.versionNumber,
        connect: '1.版本管理'
      }
    },
    components: {
    },
    mounted () {
    },
    methods: {
      open () {
        this.$alert(this.connect, '本次更新 V' + this.version, {
          confirmButtonText: '确定'
        })
      }
    }
  }

</script>
