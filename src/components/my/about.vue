<template>
  <div class="about">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'about',
	created: function() {
//    console.log("created!");
//    this.$nextTick(this.init, 100);
    document.title = '关于我们';

  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
