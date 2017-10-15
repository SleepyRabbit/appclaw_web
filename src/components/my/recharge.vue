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
        <h1>{{items[sel].comment}}</h1>
      </div>

      <div class="container">
        <a @click="onSelect(index)" v-for="(item, index) in items">
          <div :class="index === sel ? 'sel':'nosel'" class="list flex flex-justify-content-space-between flex-align-items-center">
            <div class="list-left">{{item.coins}}币</div>
            <div class="list-right">{{item.charge}}元</div>
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
        sel: 0,
        items: [
          {
            comment: "小试牛刀",
            coins: 50,
            charge: 5
          },
          {
            comment: "赠送20，小玩怡情",
            coins: 120,
            charge: 10
          },
          {
            comment: "赠送60，绝不沉迷",
            coins: 260,
            charge: 20
          },
          {
            comment: "赠送200，畅玩无忌",
            coins: 700,
            charge: 50
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
    },
    onCharge: function () {
      let fee = this.items[this.sel].charge;
      let path = "https://ucast.cc/api/v1/apay/pay?v=" + fee;
      let jwt = this.getJwt;
      if(!jwt) {
        alert("账户错误");
        return;
      }
      this.$http({
        method: 'GET',
        url: path,
        headers: {
          Authorization: "bearer " + jwt
        }
      }).then(res => {
          if(res.body.url){
            window.location.href = res.body.url;
            console.log(res.body.url);
          }
          else if(res.message)
            alert(res.message);
          else
            alert("收款机有点问题~嘿嘿");
        },
        res => {
          alert("账户有问题哦~");
        });

    },


    init: function() {

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
    document.title = '获取金币';

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
