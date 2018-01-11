<template>
  <div>
    <BreadCrumb :childWords="childWords"></BreadCrumb>
    AccountSettlement
  </div>
</template>
<style>

</style>
<script type="text/javascript">
  import bread from '../components/BreadCrumb.vue'
  export default {
    name: 'AccountSettlement',
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
