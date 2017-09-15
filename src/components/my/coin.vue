<template>
  <div class="coin">

    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a @click="onBack" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>我的金币</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
        <router-link to="recharge">充值</router-link>
      </div>
    </div>

    <div class="content">
      <div class="content-banner flex flex-justify-content-center flex-align-items-center">
        <h1>{{balance.balance}}币</h1>
      </div>

      <div class="container overflow-y-scroll">
        <a @click="" class="list flex flex-justify-content-space-between" v-for="item in bills">
          <div class="list-left flex flex-direction-column flex-justify-content-center">
            <h3>{{item.comment}}</h3>
            <p>{{item.time}}</p>
          </div>
          <div class="list-right flex flex-justify-content-center flex-align-items-center">
            <p>{{item.fee}}</p>
          </div>
        </a>

      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
  name: 'coin',
  data () {
    return JSON.parse(`{"balance":{"_id":"59b5a77969a81f61337ac157","userID":"59344ab517da16c07ed4f4e9","balance":17706,"lastBillCode":"1505468309_59344ab517da16c07ed4f4e9_lvs7V9v1"},"bills":[{"_id":"59b5a888bce46052cc938853","userID":"59344ab517da16c07ed4f4e9","fee":1000,"billAt":1530000030,"comment":"大爷充值","time":"2018/06/26 16:00:30"},{"_id":"59b7fac2816cbf62fabe83d4","userID":"59344ab517da16c07ed4f4e9","billCode":"sdsfsffleknfknse","fee":8888,"billAt":1530000030,"comment":"自家生意，柜里银子随便花","time":"2018/06/26 16:00:30"},{"_id":"59b7fb3c816cbf62fabe83d7","userID":"59344ab517da16c07ed4f4e9","billCode":"sdsfsffleknfknse","fee":8888,"billAt":1530000030,"comment":"自家生意，柜里银子随便花","time":"2018/06/26 16:00:30"},{"_id":"59bb9f98a29f0c403ca3b0de","billCode":"1505468309_59344ab517da16c07ed4f4e9_lvs7V9v1","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505468309,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505468309","time":"2017/09/15 17:38:29"},{"_id":"59bb9c89a29f0c403ca3b0dc","billCode":"1505467526_59344ab517da16c07ed4f4e9_DfBNxboa","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505467526,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505467526","time":"2017/09/15 17:25:26"},{"_id":"59bb9484a29f0c403ca3b0db","billCode":"1505465476_59344ab517da16c07ed4f4e9_ohEIFwAD","userID":"59344ab517da16c07ed4f4e9","fee":50,"billAt":1505465476,"comment":"支付宝充值","nickname":"一一","aTrade":{"time":"2017.09.15 16:50","memo":"","description":"0051000","orderId":"TQP0040619a98e51bfbff423186295364003f0d9f","tradeNo":"2017091521001004060298099404","username":"*一","amount":5,"status":"交易成功"},"time":"2017/09/15 16:51:16"},{"_id":"59b97494816cbf62fabe8409","billCode":"1505326225_59344ab517da16c07ed4f4e9_GHAw6vh2","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505326225,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505326225","time":"2017/09/14 02:10:25"},{"_id":"59b93acb816cbf62fabe83f9","billCode":"1505311432_59344ab517da16c07ed4f4e9_P4hnfhqz","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505311432,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505311432","time":"2017/09/13 22:03:52"},{"_id":"59b7fb7c816cbf62fabe83da","billCode":"1505229689_59344ab517da16c07ed4f4e9_mAobUDVe","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505229689,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505229689","time":"2017/09/12 23:21:29"},{"_id":"59b7fb62816cbf62fabe83d8","billCode":"1505229662_59344ab517da16c07ed4f4e9_3DcAv9N3","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505229662,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505229662","time":"2017/09/12 23:21:02"},{"_id":"59b7fafc816cbf62fabe83d5","billCode":"1505229561_59344ab517da16c07ed4f4e9_gD3SmnFR","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505229561,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505229561","time":"2017/09/12 23:19:21"},{"_id":"59b7fa62816cbf62fabe83d1","billCode":"1505229407_59344ab517da16c07ed4f4e9_HqubGaxn","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505229407,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505229407","time":"2017/09/12 23:16:47"},{"_id":"59b7ec6a816cbf62fabe83d0","billCode":"1505225831_59344ab517da16c07ed4f4e9_3yXPDrXR","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505225831,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505225831","time":"2017/09/12 22:17:11"},{"_id":"59b7ae80816cbf62fabe83cc","billCode":"1505209981_59344ab517da16c07ed4f4e9_mzzYloRd","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505209981,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505209981","time":"2017/09/12 17:53:01"},{"_id":"59b7ae6a816cbf62fabe83ca","billCode":"1505209959_59344ab517da16c07ed4f4e9_AHi69SpP","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505209959,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505209959","time":"2017/09/12 17:52:39"},{"_id":"59b7ae38816cbf62fabe83c8","billCode":"1505209909_59344ab517da16c07ed4f4e9_DUyAY3NL","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505209909,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505209909","time":"2017/09/12 17:51:49"},{"_id":"59b7ae1b816cbf62fabe83c6","billCode":"1505209880_59344ab517da16c07ed4f4e9_RwBNdI73","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505209880,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505209880","time":"2017/09/12 17:51:20"},{"_id":"59b7ad9c816cbf62fabe83c4","billCode":"1505209753_59344ab517da16c07ed4f4e9_UvEqDhs4","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505209753,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505209753","time":"2017/09/12 17:49:13"},{"_id":"59b7a972816cbf62fabe83c2","billCode":"1505208686_59344ab517da16c07ed4f4e9_xkNexGzT","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505208686,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505208686","time":"2017/09/12 17:31:26"},{"_id":"59b78fff816cbf62fabe83c0","billCode":"1505202171_59344ab517da16c07ed4f4e9_hkdcjPUJ","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505202171,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505202171","time":"2017/09/12 15:42:51"},{"_id":"59b78289816cbf62fabe83be","billCode":"1505198725_59344ab517da16c07ed4f4e9_Wim8wvhw","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198725,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198725","time":"2017/09/12 14:45:25"},{"_id":"59b78258816cbf62fabe83bc","billCode":"1505198676_59344ab517da16c07ed4f4e9_YDqV2EZz","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198676,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198676","time":"2017/09/12 14:44:36"},{"_id":"59b78226816cbf62fabe83ba","billCode":"1505198626_59344ab517da16c07ed4f4e9_W2BmPTJT","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198626,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198626","time":"2017/09/12 14:43:46"},{"_id":"59b781f6816cbf62fabe83b8","billCode":"1505198578_59344ab517da16c07ed4f4e9_kw4FwkpA","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198578,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198578","time":"2017/09/12 14:42:58"},{"_id":"59b781c1816cbf62fabe83b6","billCode":"1505198524_59344ab517da16c07ed4f4e9_G7CtDHKo","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198524,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198524","time":"2017/09/12 14:42:04"},{"_id":"59b78175816cbf62fabe83b4","billCode":"1505198449_59344ab517da16c07ed4f4e9_MuCqb16z","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198449,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198449","time":"2017/09/12 14:40:49"},{"_id":"59b78062816cbf62fabe83b2","billCode":"1505198173_59344ab517da16c07ed4f4e9_9kmlr9N4","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198173,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198173","time":"2017/09/12 14:36:13"},{"_id":"59b78028816cbf62fabe83b0","billCode":"1505198116_59344ab517da16c07ed4f4e9_k5qXuiSx","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198116,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198116","time":"2017/09/12 14:35:16"},{"_id":"59b77ff6816cbf62fabe83ae","billCode":"1505198066_59344ab517da16c07ed4f4e9_XStiC1nl","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198066,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198066","time":"2017/09/12 14:34:26"},{"_id":"59b77fc5816cbf62fabe83ac","billCode":"1505198016_59344ab517da16c07ed4f4e9_m5xApCLQ","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505198016,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505198016","time":"2017/09/12 14:33:36"},{"_id":"59b77f8b816cbf62fabe83aa","billCode":"1505197958_59344ab517da16c07ed4f4e9_miErUxQX","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505197958,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505197958","time":"2017/09/12 14:32:38"},{"_id":"59b77f50816cbf62fabe83a8","billCode":"1505197900_59344ab517da16c07ed4f4e9_ekzrT9yq","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505197900,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505197900","time":"2017/09/12 14:31:40"},{"_id":"59b77f12816cbf62fabe83a6","billCode":"1505197838_59344ab517da16c07ed4f4e9_MzCW95Gb","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505197838,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505197838","time":"2017/09/12 14:30:38"},{"_id":"59b77ee1816cbf62fabe83a4","billCode":"1505197789_59344ab517da16c07ed4f4e9_yBBUeMTx","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505197789,"comment":"参与:抓抓抓","nickname":"一一","roundCode":"clawSimple_10003_1505197789","time":"2017/09/12 14:29:49"},{"_id":"59b77d24816cbf62fabe83a2","billCode":"1505197345_59344ab517da16c07ed4f4e9_avLlQBTr","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505197345,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505197345","time":"2017/09/12 14:22:25"},{"_id":"59b77cf5816cbf62fabe83a0","billCode":"1505197298_59344ab517da16c07ed4f4e9_7BMi7ohP","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505197298,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505197298","time":"2017/09/12 14:21:38"},{"_id":"59b77cc1816cbf62fabe839e","billCode":"1505197246_59344ab517da16c07ed4f4e9_s2nASXLn","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505197246,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505197246","time":"2017/09/12 14:20:46"},{"_id":"59b77b8a816cbf62fabe839c","billCode":"1505196935_59344ab517da16c07ed4f4e9_LhZJNFem","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196935,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196935","time":"2017/09/12 14:15:35"},{"_id":"59b77b5a816cbf62fabe839a","billCode":"1505196887_59344ab517da16c07ed4f4e9_V4ag5R91","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196887,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196887","time":"2017/09/12 14:14:47"},{"_id":"59b77b2a816cbf62fabe8398","billCode":"1505196839_59344ab517da16c07ed4f4e9_Dqt1NLlP","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196839,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196839","time":"2017/09/12 14:13:59"},{"_id":"59b77afb816cbf62fabe8396","billCode":"1505196792_59344ab517da16c07ed4f4e9_Rfchw97R","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196792,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196792","time":"2017/09/12 14:13:12"},{"_id":"59b77acb816cbf62fabe8394","billCode":"1505196744_59344ab517da16c07ed4f4e9_HdnHgyFc","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196744,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196744","time":"2017/09/12 14:12:24"},{"_id":"59b77a9a816cbf62fabe8392","billCode":"1505196695_59344ab517da16c07ed4f4e9_9RCPQBvE","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196695,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196695","time":"2017/09/12 14:11:35"},{"_id":"59b77a69816cbf62fabe8390","billCode":"1505196646_59344ab517da16c07ed4f4e9_HfvaVMPd","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196646,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196646","time":"2017/09/12 14:10:46"},{"_id":"59b77a36816cbf62fabe838e","billCode":"1505196595_59344ab517da16c07ed4f4e9_IfndGn2G","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505196595,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505196595","time":"2017/09/12 14:09:55"},{"_id":"59b70ca6816cbf62fabe838a","billCode":"1505168547_59344ab517da16c07ed4f4e9_sWx7uWZ5","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505168547,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505168547","time":"2017/09/12 06:22:27"},{"_id":"59b70c30816cbf62fabe8388","billCode":"1505168429_59344ab517da16c07ed4f4e9_ZxRTs73k","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505168429,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505168429","time":"2017/09/12 06:20:29"},{"_id":"59b70bd5816cbf62fabe8386","billCode":"1505168337_59344ab517da16c07ed4f4e9_cboeL1q4","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505168337,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505168337","time":"2017/09/12 06:18:57"},{"_id":"59b70b3b816cbf62fabe8384","billCode":"1505168184_59344ab517da16c07ed4f4e9_kttxFmsv","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505168184,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505168184","time":"2017/09/12 06:16:24"},{"_id":"59b70b0c816cbf62fabe8382","billCode":"1505168137_59344ab517da16c07ed4f4e9_Pq6LWqqF","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505168137,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505168137","time":"2017/09/12 06:15:37"},{"_id":"59b6f9e0816cbf62fabe8380","billCode":"1505163741_59344ab517da16c07ed4f4e9_78VoqzZo","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505163741,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505163741","time":"2017/09/12 05:02:21"},{"_id":"59b6d489816cbf62fabe837c","billCode":"1505154182_59344ab517da16c07ed4f4e9_NPfLQ3dr","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505154182,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505154182","time":"2017/09/12 02:23:02"},{"_id":"59b6d39b816cbf62fabe8378","billCode":"1505153944_59344ab517da16c07ed4f4e9_7qzlzVQA","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505153944,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505153944","time":"2017/09/12 02:19:04"},{"_id":"59b6a239816cbf62fabe8373","billCode":"1505141302_59344ab517da16c07ed4f4e9_zVGuyEIm","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505141302,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505141302","time":"2017/09/11 22:48:22"},{"_id":"59b6a1d8816cbf62fabe836f","billCode":"1505141205_59344ab517da16c07ed4f4e9_vMrCmfTV","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505141205,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505141205","time":"2017/09/11 22:46:45"},{"_id":"59b6a12d816cbf62fabe836a","billCode":"1505141034_59344ab517da16c07ed4f4e9_PmcL8sGK","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505141034,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505141034","time":"2017/09/11 22:43:54"},{"_id":"59b6a063816cbf62fabe8368","billCode":"1505140832_59344ab517da16c07ed4f4e9_wvU9TRvj","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505140832,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505140832","time":"2017/09/11 22:40:32"},{"_id":"59b69bdf816cbf62fabe835e","billCode":"1505139676_59344ab517da16c07ed4f4e9_qEpHcwE4","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505139676,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505139676","time":"2017/09/11 22:21:16"},{"_id":"59b5ae06bce46052cc938857","billCode":"1505078787_59344ab517da16c07ed4f4e9_SKU97iYm","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505078787,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505078787","time":"2017/09/11 05:26:27"},{"_id":"59b5aa08bce46052cc938854","billCode":"1505077765_59344ab517da16c07ed4f4e9_QpzSlDrx","userID":"59344ab517da16c07ed4f4e9","fee":-20,"billAt":1505077765,"comment":"参与:抓抓抓","roundCode":"clawSimple_10003_1505077765","time":"2017/09/11 05:09:25"}]}`);
  },
  methods: {
    onBack: function () {
      this.$router.back(-1);
    },
    init: function() {
      /* 获取jwt */
      let jwt = this.getJwt;

      if(jwt.length === 0) {
        alert("jwt为空");
        return;
      }

//      this.jwt = this.getJwt('jwt') || "";
//      if (!this.jwt) {
//        alert("该页面不能直接在浏览器打开哦~");
//        return;
//      }

      this.$http({
        method: 'GET',
        url: "https://ucast.cc/api/v1/appclaw/my-coins",
        headers: {
          Authorization: "bearer " + this.jwt
        }
      }).then(res => {
          this.recordList = res.body;
        },
        res => {
          alert("账户有问题哦，截图发给技术蝈蝈领金币哦~");
        });
    }
  },
  computed: {
    ...mapGetters([
      'getJwt',
    ])
  },
  created: function() {
//    console.log("created!");
//    this.$nextTick(this.init, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 50px;
    background-color: rgb(245,245,245);
    border-bottom: 1px solid rgb(235,235,235);
  }

  .head-left, .head-right {
    width: 60px;
  }

  .head a {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }

  .head i {
    font-size: 16px;
  }

  .content {
    position: absolute;
    top: 50px;
    width: 100%;
    /*height: calc(100vh - 50px);*/
    background-color: rgb(255,234,10);
  }

  .content-banner {
    height: 150px;
    border-bottom: 1px solid rgb(235,235,235);
    background-color: rgb(5,188,255);
  }

  .content-banner h1 {
    font-size: 40px;
    color: rgb(250,222,70)
  }

  .container {
    height: calc(100vh - 200px);
    background-color: white;
    border: 0;
    border-radius: 4px;
  }

  .container a {
    text-decoration: none;
  }

  .list {
    height: 50px;
    margin: 0 15px;
    border-bottom: 1px solid rgb(235, 235, 235);
  }

  .list-left, .list-right {
      /*width: 80px;*/
   }

  .list p {
    margin: 0;
    padding: 0;
    color: rgb(192,192,192);
  }

  .list-left p {
    font-size: 12px;
  }

  .list-right p {
    font-size: 18px;
  }
</style>
