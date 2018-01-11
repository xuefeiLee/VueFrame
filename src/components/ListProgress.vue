<style lang="css">
  .out-div-progress{
    width: 100%;
    height: 10px;
    background: #9a9a9a;
    position: relative;
    overflow: hidden;
  }
</style>
<script type="text/javascript">
  export default {
    name: 'ListProgress',
    props: ['progressArray'],
    data () {
      return {
        height: '10px',
        position: 'absolute'
      }
    },
    mounted () {
    },
    components: {
    },
    methods: {
    },
    render: function (createElement) {
      var createArray = []
      for (var i = 0; i < this.progressArray.length; i++) {
        if (i === 0) {
          createArray.push(createElement('div', {
            style: {
              background: this.progressArray[i].color,
              width: this.progressArray[i].width + '%',
              position: this.position,
              height: this.height
            }
          }))
        } else {
          var left = 0
          var circulationIndex = i
          while (circulationIndex > 0) {
            left += parseInt(this.progressArray[circulationIndex - 1].width)
            circulationIndex--
          }
          createArray.push(createElement('div', {
            style: {
              background: this.progressArray[i].color,
              width: this.progressArray[i].width + '%',
              position: this.position,
              height: this.height,
              left: left + '%'
            }
          }))
        }
      }
      return createElement('div', createArray)
    }
  }

</script>
