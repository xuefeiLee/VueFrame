<template>
  <div>
    <BreadCrumb :childWords="childWords"></BreadCrumb>
    Shadow
  </div>
</template>
<style>

</style>
<script type="text/javascript">
  import bread from '../components/BreadCrumb.vue'
  export default {
    name: 'Shadow',
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
