<template>
  <div class="scan flex flex-direction-column">
    <div class="header flex">
      <img src="../assets/img/claw_3D_qrcode.png" alt="">
    </div>

    <div class="tip flex-grow-1 flex flex-align-items-center flex-justify-content-center">
      <div class="tip-content">
        <p>请扫描机器上二维码，扫码值为：{{qrCode}}</p>
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
      qrCode: "Hi,I'm code."
    }
  },
  methods: {
    onScan: function () {
      let self = this;

      //安排好native回调回来的入口
      window.onQRCodeScanRet = (ret)=>{
        delete window.onQRCodeScanRet;
        self.qrCode = ret;

        if(ret == "hahauCast"){
          setTimeout(()=>{
            self.$router.push({ path: 'list', query: {}});
          }, 200);}
      }

      //调用扫码
      window.WebViewJavascriptBridge.callHandler(
        'onScanQrcode',
        0,
        (ret) => {console.log(ret);}
      );
    }
  },
  created: function() {
    document.title = '扫码进入（#￣▽￣#）';
  }

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
    //height: 240px;
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
    height: 200px;
    background-color: rgb(5,188,255);
  }

  i {
    color: blue;
    font-size: 80px;
  }
</style>
