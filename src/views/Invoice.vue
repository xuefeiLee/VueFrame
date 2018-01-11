<template>
  <div>
    <BreadCrumb :childWords="childWords"></BreadCrumb>
    Invoice
  </div>
</template>
<style>

</style>
<script type="text/javascript">
  import bread from '../components/BreadCrumb.vue'
  export default {
    name: 'Invoice',
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
