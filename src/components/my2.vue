<template>
  <div class="my1">
    <blur :blur-amount=40 url="../assets/img/banner1.jpg">
      <p class="center"><img src="../assets/img/banner1.jpg" alt=""></p>
    </blur>
    <flexbox :gutter="0">
      <flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
//  import { Blur } from 'vux';
import { Flexbox, FlexboxItem, Blur } from 'vux'
//  import Blur from 'vux/src/components/blur/'

export default {
  name: 'my1',
  components: {
    Blur,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      images: [
        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
//        url: '../assets/img/banner1.jpg',
    }
  },
  methods: {
  },
  created: function() {
    console.log("created!");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }

</style>
