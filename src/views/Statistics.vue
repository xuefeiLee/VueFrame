<template>
  <div>
    <BreadCrumb :childWords="childWords"></BreadCrumb>
    Statistics
  </div>
</template>
<style>

</style>
<script type="text/javascript">
  import bread from '../components/BreadCrumb.vue'
  export default {
    name: 'Statistics',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    props: ['childWords'],
    components: {
      BreadCrumb: bread
    }
  }
</script>
