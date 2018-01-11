<template>
    <div>
      <HeaderCompontent class="fixed header-component"></HeaderCompontent>
      <el-row>
        <el-col>
          <ImgHeaderBar></ImgHeaderBar>
          <NavBar v-on:child-say="listenToMyBoy"></NavBar>
        </el-col>
        <el-col :span="20" :offset="4">
          <router-view :childWords="childWords"></router-view>
          <div v-show="real">
            <WorkView></WorkView>
          </div>
        </el-col>
      </el-row>
      <AppVersion class="version-component"></AppVersion>
    </div>
</template>
<style lang="css">
.fixed{
  position: fixed;
}
.header-component{
  width: 100%;
  z-index: 1;
}
.version-component{
  position: fixed;
  z-index: 1;
  width: 5%;
  right: 0;
  height: 50px;
  bottom: 0;
}
</style>
<script type="text/javascript">
  import navBar from '../components/NavBar'
  import header from '../components/Header'
  import imgHeaderBar from '../components/ImgHeaderBar'
  import version from '../components/Version'
  import bread from '../components/BreadCrumb.vue'
  import work from './Work'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'hello vue',
        childWords: '',
        isFirstRoute: '',
        real: false
      }
    },
    components: {
      NavBar: navBar,
      HeaderCompontent: header,
      ImgHeaderBar: imgHeaderBar,
      AppVersion: version,
      BreadCrumb: bread,
      WorkView: work
    },
    mounted () {
    },
    methods: {
      listenToMyBoy: function (data) {
        this.childWords = data.name
        this.isFirstRoute = data.path
        if (this.isFirstRoute === 'Home') {
          this.real = true
        } else {
          this.real = false
        }
      }
    }
  }
</script>
