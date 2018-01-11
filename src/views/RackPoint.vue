<template>
  <div>
    <BreadCrumb :childWords="childWords"><i></i></BreadCrumb>
   <p class="more"><i class="el-icon-more" @click="dialogTableVisible = true"></i></p>
    <el-dialog  v-model="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="title" width="900px"></el-table-column>
      </el-table>
    </el-dialog>
  <!--  <TabBar v-on:clickDemo="getType">
      <div :slot="listType" v-cloak>
        <ListItem :listType="listType"></ListItem>
        <keep-alive>
          <Page :type="listType" class="center-page" :key="listType" v-on:thisPage="getPageCount"></Page>
        </keep-alive>
      </div>
    </TabBar>-->
    <SearchInline></SearchInline><br><hr><br>
    <el-row :gutter="20"><el-col :span="7" v-for="menu in menus">
      <div class="grid-content bg-purple"><p class="p2">
        <i v-if="!menu.isLike" class="el-icon-star-off" @click="menu.isLike = !menu.isLike"></i>
        <i v-if="menu.isLike" class="el-icon-star-on" @click="menu.isLike = !menu.isLike"></i>
      </p><p class="p1">{{menu.title}}</p><p>{{menu.index}}</p></div>
    </el-col></el-row>
  </div>
</template>
<style lang="css">
[v-cloak] {
  display: none;
}
.input {
  width: 500px;
  margin-left: 360px;

}
.btn {
  float: right;
  margin-right: -100px;
  margin-top: 0;
}
hr {
  width: 80%;
  margin-right: 240px;
}
.more {
  float: right;
  margin-top: -36px;
  margin-right: 30px;
}
.bg-purple {
  margin: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 150px;
  border: 1px #bbbbbb solid;
}
.grid-content p {
  margin-left: 20px;
}
.grid-content .p1 {
   color: #5e7382;
  font-size: 12px;
}
.grid-content .p2 {
  float: right;
  margin-right: 10px;
  font-size: 16px;
}
.el-pager li {
  border-radius: 16px;
  padding: 0px 4px;
  border: 1px solid #f0f0f0;
  background: #fff;
  font-size: 13px;
  min-width: 24px;
  height: 24px;
  margin-top: 5px !important;
  line-height: 24px;
  text-align: center;
  margin: 2px;
}
.el-pager li.active {
  height: 29px;
  width: 29px;
  margin-top: 3px !important;
  line-height: 29px;
  background: #fff;
  color: #1ABC9C;
  border: 1px solid #1ABC9C;
}
.el-pager li:hover {
  color: #1ABC9C;
}
.el-pagination button{
  padding: 18px;
}
[class*=" el-icon-"], [class^=el-icon-]{
  line-height: 0;
}
.el-pagination button.disabled{
  background: #f0f0f0;
}
.el-pagination .btn-next, .el-pagination .btn-prev{
  background: #f0f0f0;
  border: 1px solid #f0f0f0;
  margin: 0 2px;
}
.el-pagination .btn-prev{
  border-radius: 5px 0 0 5px
}
.el-pagination .btn-next{
  border-radius: 0 5px 5px 0
}
</style>
<script type="text/javascript">
  import search from '../components/SearchInline'
  import page from '../components/Pagination'
  import tab from '../components/TabNav'
  import list from '../components/ListItem'
  import bread from '../components/BreadCrumb'
  export default {
    name: 'RackPoint',
    data () {
      return {
        msg: 'hello vue',
        listType: 'all',
        gridData: [{
          title: '置入相关摘要表'
        }, {
          title: '新建摘要表'
        }
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        menus: [
          {
            title: 'FC002017B0123',
            index: 'High Valued Moto',
            isLike: false
          },
          {
            title: 'FC002017B0123',
            index: 'High Valued Moto',
            isLike: false
          },
          {
            title: 'FC002017B0123',
            index: 'High Valued Moto',
            isLike: false
          },
          {
            title: 'FC002017B0123',
            index: 'High Valued Moto',
            isLike: false
          },
          {
            title: 'FC002017B0123',
            index: 'High Valued Moto',
            isLike: true
          },
          {
            title: 'FC002017B0123',
            index: 'High Valued Moto',
            isLike: false
          }
        ]
      }
    },
    props: ['childWords'],
    components: {
      Page: page,
      TabBar: tab,
      ListItem: list,
      BreadCrumb: bread,
      SearchInline: search
    },
    computed: {
    },
    methods: {
      getType (data) {
        this.listType = data
      },
      getPageCount (data) {
        this.$store.dispatch('changePage', {
          type: this.listType,
          count: data
        })
      }
    }
  }
</script>
