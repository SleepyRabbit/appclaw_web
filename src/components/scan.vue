<template>
  <div class="scan flex flex-direction-column">
    <div class="header flex">
      <img src="../assets/img/banner2.jpeg" alt="">
    </div>

    <div class="tip flex-grow-1 flex flex-align-items-center flex-justify-content-center">
      <div class="tip-content">
        <p>小哥哥，扫码来和我玩吧~~~</p>
      </div>
    </div>

    <div class="content flex flex-align-items-center flex-justify-content-center">
      <i class="icon-scan" @click="onScan"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'scan',
  data () {
    return {
    }
  },
  methods: {
    onScan: function () {
      console.log('scan!');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scan {
    width: 100%;
    height: 100%;
    /*background: rgb(40, 157, 77);*/
  }

  .header {
    height: 240px;
    background-color: yellow;
  }

  .header img {
    width: 100%;
  }

  .tip {
    height: 300px;
  }

  .tip-content {
    width: 90%;
    /*background-color: salmon;*/
  }

  .tip-content p {
    font-size: 30px;
  }

  .content {
    height: 100px;
    background-color: rgb(5,188,255);
  }

  i {
    color: blue;
    font-size: 80px;
  }
</style>
