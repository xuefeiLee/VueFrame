<template>
  <div>
    <BreadCrumb :childWords="childWords"></BreadCrumb>
    PayCase
  </div>
</template>
<style>

</style>
<script type="text/javascript">
  import bread from '../components/BreadCrumb.vue'
  import NavBar from '../components/NavBar.vue'
  export default {
    name: 'PayCase',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    props: ['childWords'],
    components: {
      BreadCrumb: bread,
      NavBar: NavBar
    }
  }
</script>
