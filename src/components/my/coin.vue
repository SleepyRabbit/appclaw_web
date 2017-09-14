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
        <h1>20</h1>
      </div>

      <div class="container overflow-y-scroll">
        <a @click="" class="list flex flex-justify-content-space-between" v-for="item in items">
          <div class="list-left flex flex-direction-column flex-justify-content-center">
            <h3>{{item.content}}</h3>
            <p>{{item.time}}</p>
          </div>
          <div class="list-right flex flex-justify-content-center flex-align-items-center">
            <p>{{item.bill}}</p>
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
    return {
        items: [
          {
            content: "房间 小恐龙 游戏扣费：16",
            time: "2017/07/16",
            bill: "-16"
          },
        ],
    }
  },
  methods: {
    onBack: function () {
      this.$router.back(-1);
    },
    init: function() {
      /* 获取jwt */
      let jwt = this.getJwt;
//      console.log(jwt);

      if(jwt.length === 0) {
        alert("jwt为空");
        return;
      }

//      this.jwt = this.getJwt('jwt') || "";
//      if (!this.jwt) {
//        alert("该页面不能直接在浏览器打开哦~");
//        return;
//      }
      //console.log(this.jwt);
      this.$http({
        method: 'GET',
        url: "https://ucast.cc/api/v1/games",
        headers: {
          Authorization: "bearer " + this.jwt
        }
      }).then(res => {
//          console.log(res);
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
