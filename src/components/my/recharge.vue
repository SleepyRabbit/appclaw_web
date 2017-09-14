<template>
  <div class="recharge">

    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a @click="onBack" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>充值</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
      </div>
    </div>

    <div class="content">
      <div class="content-banner flex flex-justify-content-center flex-align-items-center">
        <h1>20</h1>
      </div>

      <div class="container">
        <a @click="onSelect(index)" v-for="(item, index) in items">
          <div :class="index === sel ? 'sel':'nosel'" class="list flex flex-justify-content-space-between flex-align-items-center">
            <div class="list-left">{{item.coin}}</div>
            <div class="list-right">{{item.charge}}</div>
          </div>
        </a>
      </div>

      <div class="footer">
        <a @click="onCharge" class="flex flex-align-items-center flex-justify-content-center"><h3>充值</h3></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
  name: 'recharge',
  data () {
    return {
        sel: 100,
        fee: 0,
        items: [
          {
              coin: 50,
              charge: "5元",
          },
          {
            coin: 120,
            charge: "10元",
          },
          {
            coin: 250,
            charge: "20元",
          }
        ],
    }
  },
  methods: {
    onBack: function () {
      this.$router.back(-1);
    },
    onSelect: function (index) {
      this.sel = index;
      switch(index) {
        case 0:
            this.fee = 5;
            break;
        case 1:
            this.fee = 10;
            break;
        case 2:
            this.fee = 20;
            break;
        default:
            break;
      }
    },
    onCharge: function () {
      let path = "https://ucast.cc/portal/appclaw/pay.html?fee=" + this.fee;
      console.log(path);
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
    height: calc(100vh - 250px);
    background-color: rgb(245,245,245);
    padding-top: 20px;
    border: 0;
    border-radius: 4px;
  }

  .container a {
    text-decoration: none;
  }

  .sel {
    background-color: rgb(255,103,0);
    color: white;
    box-shadow: 3px 3px 5px rgb(205,210,210);
  }

  .nosel {
    background-color: white;
    color: black;
  }

  /*.container a:hover .list{*/
    /*!*background-color: rgb(5,188,255);*!*/
    /*background-color: rgb(255,103,0);*/
    /*color: white;*/
    /*box-shadow: 3px 3px 5px rgb(205,210,210);*/
  /*}*/

  .list {
    height: 60px;
    width: 100%;
    padding: 0 15px;
    font-size: 20px;
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

  .footer {
    height: 50px;
    width: 100%;
    background-color: rgb(26,173,25);
  }

  .footer a {
    text-decoration: none;
    height: 50px;
    width: 100%;
    padding: 0 10px;
    color: white;
    border-bottom: 1px solid rgb(223,223,223);
  }
</style>
