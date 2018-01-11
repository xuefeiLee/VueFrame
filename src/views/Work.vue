<template>
  <div>
    <ul>
      <li v-for="item in items" v-bind:class="{finish:item.isFinished}"
      @click="toggleFinsh(item)"
      >
        {{item.label}}
      </li>
    </ul>
    <button @click=" myTest('1')">我的测ssssss试</button>
    <input v-model="msg" @keyup.enter="addView">

  </div>
</template>
<style lang="css">
.finish{
  text-decoration: underline;
}
</style>
<script type="text/javascript">
  import Store from '../store'
  console.log(Store)
  export default {
    name: 'Work',
    data () {
      // es6写法
      return {
        msg: 'hello vue',
        items: Store.fetch(),
        liClass: 'thisIsIiClass'
      }
    },
    watch: {
      items: {
        // 当items深层赋值
        handler: function (items) {
          Store.save(items)
        },
        deep: true
      }
    },
    components: {
    },
    mounted () {
    },
    methods: {
      toggleFinsh: function (obj) {
        obj.isFinished = !obj.isFinished
      },
      myTest: function (index) {
        console.log(index)
        console.log('对了')
      },
      addView: function () {
        this.items.push({
          label: this.msg,
          isFinished: false
        })
        this.msg = ''
      }
    }
  }

</script>
