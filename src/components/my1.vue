<template>
  <div class="my1">

    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
        <a href="#">返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>我的</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">

      </div>
    </div>

    <div class="content-banner flex-shrink-0 flex flex-justify-content-center">
      <div class="banner-content flex flex-direction-column flex-align-items-center">
        <img src="../assets/img/user1.jpg" alt="">
        <h4>哆啦a梦</h4>
        <h5>共抓中0次</h5>
      </div>
    </div>

    <div class="user-list overflow-y-scroll">
      <group>
        <cell title="我的金币" :value="gold"><i slot="icon" class="icon icon-user"></i></cell>
        <cell title="我的娃娃" link="mydoll"><i slot="icon" class="icon icon-happy"></i></cell>
      </group>
    </div>

    <div class="footer">
      <a onclick="" class="flex flex-align-items-center flex-justify-content-center"><h3>退出登录</h3></a>
    </div>

  </div>
</template>

<script>
import { Group, Cell, CellBox } from 'vux';

export default {
  name: 'my1',
  components: {
    Group,
    Cell,
    CellBox,
  },
  data () {
    return {
        gold: 20,
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

  .head {
    height: 60px;
    border-bottom: 1px solid rgb(235,235,235);
  }

  .head-left, .head-right {
    width: 40px;
    /*background-color: #00AA88;*/
  }

  .head a {
    text-decoration: none;
  }

  .content-banner {
    height: 140px;
    border-bottom: 1px solid rgb(235,235,235);
    background-color: rgb(241,233,49);
  }

  .banner-content {
    width: 80px;
  }

  .banner-content img {
    width: 80px;
    height: 80px;
    margin: 5px 0 5px 0;
    border: 2px solid white;
    border-radius: 40px;
  }

  .banner-content h4 {
    font-weight: bold;
  }

  .banner-content h5 {
    font-size: 11px;
  }

  .user-list {
    background-color: rgb(235,235,235);
  }

  .user-list i {
    margin: 0 5px 0 0;
  }

  .footer {
    height: 50px;
    width: 100%;
    padding-top: 5px;
    background-color: rgb(235,235,235);
  }

  .footer a {
    text-decoration: none;
    height: 45px;
    width: 100%;
    padding: 0 10px;
    background-color: white;
    border-top: 1px solid rgb(223,223,223);
    border-bottom: 1px solid rgb(223,223,223);
  }
</style>

<style>
  .vux-no-group-title {
    margin-top: 5px !important;
  }
</style>
