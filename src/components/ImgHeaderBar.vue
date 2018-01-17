<template>
  <div>
    <el-col :span="4" class="grayBg">
      <div class="imgHeaderBarBg">

        <div class="headerCircle">
          <div class="redHeaderCircle">
            <div class="whiteFont">5</div>
          </div>
        </div>
        <p class="imgHeaderBarFont">Lee<br><span class="fontSize">我的首页</span></p>
      </div>
    </el-col>

  </div>
</template>
<style scoped>
  .grayBg{
    background-color: #ecf0f1;
    width: 16.68%;
    margin-top: 58px;
    display: inline-block;
    position: fixed;
  }
  .imgHeaderBarBg{
    background-color: #00be9c;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 80%;
    margin-left: 10%;
    margin-top: 15px;
  }
  .imgHeaderBarFont{
    color: #ffffff;
    margin: 0;
    padding-bottom: 15px;
    text-align: center;
  }
  .fontSize{
    font-size: 12px;
  }
  .headerCircle{
    width: 65px;
    height: 65px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    margin-left: 36%;
    margin-top: 25px;
    margin-bottom: 10px;
    display: inline-block;
    background-color: black;
  }
  .redHeaderCircle{
    width: 18px;
    height: 18px;
    display: inline-block;
    background-color: #f84338;
    color: #ffffff;
    border-radius: 50%;
    text-align: center;
    font-size: 10px;
    float: right;
    margin-right: -8px;
  }
  .whiteFont{
    margin-top: 4px;
  }
</style>
<script type="text/javascript">
  export default {
    name: 'imgHeaderBar',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
    }
  }
</script>
