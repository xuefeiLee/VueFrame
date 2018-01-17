<template>
  <div>
    <el-col :span="4" class="createBg heightImg">
      <el-menu :default-active="nowIndex" class="onBg el-menu-vertical-demo align-text" @open="handleOpen" @close="handleClose" theme="dark">
        <router-link :to="{name:menu.path}" v-for="menu in menus" :key="menu.index">
          <el-menu-item :index="menu.index" v-on:click="chooseMenu(menu.index,menu.name,menu.path)"><i class="el-icon-message"></i>{{menu.name}}</el-menu-item>
        </router-link>
      </el-menu>
    </el-col>

  </div>
</template>
<style lang="css">
  .align-text{
    text-align: center;
  }
  .align-text a{
    text-decoration: none;
  }
  .createBg{
    background-color: #ecf0f1;
    height: 100%;
  }
  .heightImg{
    margin-top: 232px;
    position: fixed;
  }
  .onBg{
    width: 80%;
    margin-left: 10%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 100px;
  }
  .lastBottomRadius{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

</style>
<script type="text/javascript">
  import bread from '../components/BreadCrumb.vue'
  export default {
    name: 'NavBar',
    data () {
      return {
        msg: 'hello vue',
        menus: [
          {
            'name': '工作台',
            'path': 'Home',
            'index': '1'
          },
          {
            'name': '菜单一',
            'path': 'RackPoint',
            'index': '2'
          },
          {
            'name': '赔案',
            'path': 'PayCase',
            'index': '3'
          },
          {
            'name': '账单',
            'path': 'AccountBill',
            'index': '4'
          },
          {
            'name': '结算',
            'path': 'AccountSettlement',
            'index': '5'
          },
          {
            'name': '发票',
            'path': 'Invoice',
            'index': '6'
          },
          {
            'name': '统计',
            'path': 'Statistics',
            'index': '7'
          },
          {
            'name': '客户',
            'path': 'Client',
            'index': '8'
          },
          {
            'name': '影像',
            'path': 'Shadow',
            'index': '9'
          }
        ],
        nowIndex: '0'
      }
    },
    components: {
      bread: bread
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      chooseMenu (index, name, path) {
        this.nowIndex = index
        this.$emit('child-say', {name, path})
      }
    },
    mounted () {
      var path = this.$route.name
      var name = ''
      var freshIndex = ''
      this.menus.forEach(function (item) {
        if (path === item.path) {
          freshIndex = item.index
          name = item.name
        }
      })
      this.$emit('child-say', {name, path})
      this.nowIndex = freshIndex
    }
  }
</script>
