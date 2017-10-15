<template>
  <div class="home box">

    <div class="content">
      <div class="content-banner flex flex-justify-content-center">
        <div class="banner-content flex flex-direction-column flex-align-items-center">
          <img  v-bind:src="mine.avatar"  alt="">
          <h4>{{mine.nickname}}</h4>
        </div>
      </div>

      <div class="user-list overflow-y-scroll">
        <div class="container">
          <router-link to="coin" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-coin"></i>我的金币</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
              <!--<p>{{ coin }}</p>-->
            </div>
          </router-link>

          <router-link to="recharge" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-recharge"></i>充值</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="record" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-record"></i>游戏记录</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="doll" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-panda"></i>抓取娃娃</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="address" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-address"></i>我的地址</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="doll" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-share"></i>分享</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>

          <router-link to="about" class="list flex flex-align-items-center flex-justify-content-space-between">
            <span class="list-left flex flex-align-items-center"><i class="icon-about"></i>关于我们</span>
            <div class="list-right flex flex-align-items-center">
              <i class="icon icon-more"></i>
            </div>
          </router-link>
        </div>

      </div>

      <div class="footer">
        <a onclick="" class="flex flex-align-items-center flex-justify-content-center"><h3>退出登录</h3></a>
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
        mine:{}
      }
    },
    methods: {
      onSelect: function () {
        console.log(this.value);
      },
      init: function () {

        let jwt = this.getJwt;
        if(!jwt) {
          alert("令牌错误");
          return;
        }

        this.$http({
          method: 'GET',
          url: "https://ucast.cc/api/v1/me",
          headers: {
            Authorization: "bearer " + jwt
          }
        }).then(res => {
            //console.log(res.body);
            this.mine = res.body;
          },
          res => {
            alert("账户有问题哦~");
          });

      }
    },
    computed: {
      ...mapGetters([
        'getJwt',
      ])
    },
    created: function() {
      this.$nextTick(this.init, 100);
      document.title = '我的';
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    /*position: absolute;*/
    /*top: 50px;*/
    width: 100%;
    height: 100%;
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

  .footer {
    height: 50px;
    width: 100%;
    background-color: rgb(235,235,235);
  }

  .footer a {
    text-decoration: none;
    height: 50px;
    width: 100%;
    padding: 0 10px;
    background-color: white;
    border-top: 1px solid rgb(223,223,223);
    border-bottom: 1px solid rgb(223,223,223);
  }
</style>

<style>
  .vux-no-group-title {
    margin-top: 0px !important;
  }
</style>
