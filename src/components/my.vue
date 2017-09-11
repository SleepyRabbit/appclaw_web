<template>
  <div class="my box">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'my',
  data () {
    return {
    }
  },
  methods: {
  },
  created: function() {
//    console.log("created!");
//    this.$nextTick(this.init, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
