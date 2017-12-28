<template>
  <div class="recharge">
    <div class="content">
      <div class="content-banner flex flex-justify-content-center flex-align-items-center">
        <h1>{{items[sel].comment}}</h1>
      </div>
      <div class="container">
        <a @click="onSelect(index)" v-for="(item, index) in items">
          <div :class="index === sel ? 'sel':'nosel'" class="list flex flex-justify-content-space-between flex-align-items-center">
            <div class="list-left">{{item.coins}}币</div>
            <div class="list-right">{{item.charge/100}}元</div>
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
  data() {
    return {
      sel: 0,
      items: [{
          comment: "小试牛刀",
          coins: 50,
          charge: 500
        },
        {
          comment: "赠送20，小玩怡情",
          coins: 120,
          charge: 1000
        },
        {
          comment: "赠送60，绝不沉迷",
          coins: 260,
          charge: 2000
        },
        {
          comment: "赠送200，畅玩无忌",
          coins: 700,
          charge: 5000
        },
        {
          comment: "蚊腿虽小，它却是肉",
          coins: 1,
          charge: 1
        }
      ],
    }
  },
  methods: {
    onSelect: function(index) {
      this.sel = index;
    },
    onCharge: function() {
      let fee = this.items[this.sel].charge;
      let path = "https://ucast.cc/api/v1/appclaw/wxpay?fee=" + fee;
      let jwt = this.getJwt;
      if (!jwt) {
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
          /* 返回类如
          {
              "wxpay_param": {
                  "appId": "wx2d8e08d1b89ce587",
                  "partnerId": "1490051992",
                  "prepayId": "wx201711121901284eb68dcb570924263783",
                  "packageValue": "Sign=WXPay",
                  "nonceStr": "xWLXur4xyTWl9J9wQd1VFDyd8bKk3aHS",
                  "timeStamp": "1510484488",
                  "sign": "6BA442624001A7D60545A56AD1AA4511"
              },
              "bill_id": "5a082a08c5f0d472284f6160",
              "fee": 1
          }
        */
          if (res.body.wxpay_param) {

//            alert(`微信支付${res.body.fee}分，后台返回支付所需参数，点击确认后，即将调用native代码`);
            //这里是关键代码，将预支付相关信息转交 native
            window.WebViewJavascriptBridge.callHandler(
              'onWechatPayPreOrder',
              res.body,
              (responseData) => {
                console.log(responseData);
              }
            );

          } else if (res.message)
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
  },

  mounted: function() {

    let jwt = this.getJwt;

    //安排好native回调回来的入口
    window.onWxpayRet = (bill_id) => {
      if (bill_id) {
          this.$http({
            method: 'GET',
            url: "https://ucast.cc/api/v1/appclaw/wxpay?bill_id=" + bill_id,
            headers: {
              Authorization: "bearer " + jwt
            }
          }).then(res => {
              alert("ucast后台查询结果：" + res.body.message);
            },
            res => {
              alert("支付查询失败~");
            });
      }
    }


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
  height: 150px;
  border-bottom: 1px solid rgb(235, 235, 235);
  background-color: rgb(5, 188, 255);
}

.content-banner h1 {
  font-size: 40px;
  color: rgb(250, 222, 70)
}

.container {
  height: calc(100vh - 200px);
  background-color: rgb(245, 245, 245);
  padding-top: 20px;
  border: 0;
  border-radius: 4px;
}

.container a {
  text-decoration: none;
}

.sel {
  background-color: rgb(255, 103, 0);
  color: white;
  box-shadow: 3px 3px 5px rgb(205, 210, 210);
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

.list-left,
.list-right {
  /*width: 80px;*/
}

.list p {
  margin: 0;
  padding: 0;
  color: rgb(192, 192, 192);
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
  background-color: rgb(26, 173, 25);
}

.footer a {
  text-decoration: none;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  color: white;
  border-bottom: 1px solid rgb(223, 223, 223);
}

</style>
