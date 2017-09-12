<template>
  <div class="home">

    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a @click="onBack" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>关于我们</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
      </div>
    </div>

    <div class="content">
      <div class="content-banner flex flex-justify-content-center">
        <div class="banner-content flex flex-direction-column flex-justify-content-center flex-align-items-center">
          <img src="../../../assets/img/user1.jpg" alt="">
          <h4>哆啦a梦</h4>
        </div>
      </div>

      <div class="user-list overflow-y-scroll">
        <div class="container">
          <router-link to="" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-score"></i>给我评分</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-question"></i>常见问题</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-feedback"></i>反馈问题</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-protocol"></i>用户协议</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'home',
    data () {
      return {
        coin: 20,
      }
    },
    methods: {
      onBack: function () {
        this.$router.back(-1);
      },
      onSelect: function () {
        console.log(this.value);
      },
      init: function () {
        console.log('init');
      }
    },
    computed: {
      ...mapGetters([
        'getJwt',
      ])
    },
    created: function() {
//      console.log("created!");
//      this.$nextTick(this.init, 100);
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
    height: calc(100vh - 50px);
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
    /*font-weight: bold;*/
    /*color: rgb(235,235,235);*/
  }

  .user-list {
    height: calc(100vh - 190px);
    background-color: rgb(235,235,235);
    /*padding: 5px 0;*/
  }

  .container {
    background-color: white;
    padding: 0 15px;
  }

  .list {
    text-decoration: none;
    height: 44px;
    font-size: 16px;
    color: black;
    border-top: 1px solid rgb(245,245,245);
  }

  .list-left i {
    margin: 0 10px 0 0;
    color:rgb(4,190,2);
    font-size: 16px;
  }

  .list-right p {
    font-size: 16px;
    color: rgb(153,153,153);
  }

  .list-right i {
    font-size: 20px;
    color: rgb(153,153,153);
  }
</style>

<style>
  .vux-no-group-title {
    margin-top: 0px !important;
  }
</style>
