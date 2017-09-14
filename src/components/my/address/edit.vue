<template>
  <div class="edit">
    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a @click="onBack" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>添加地址</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="list flex flex-align-items-center">
          <label>收货人姓名：</label><input type="text" placeholder="请输入姓名" class="flex-grow-1" v-model="list.name">
        </div>
        <div class="list flex flex-align-items-center">
          <label>手机号码：</label><input type="text" placeholder="请输入手机号码" class="flex-grow-1" v-model="list.tel">
        </div>
        <group>
          <x-address title="" v-model="value" :list="addressData" placeholder="请选择地址">
            <template slot="title" scope="props">
              <i class="icon-address"></i>所在地区
            </template>
          </x-address>
        </group>
        <div class="line"></div>
        <div class="list flex flex-align-items-center">
          <label>街道地址：</label><textarea placeholder="请输入街道地址" class="flex-grow-1" v-model="list.street"></textarea>
          <!--<textarea name="" id="" cols="30" rows="10"></textarea>-->
        </div>
        <div class="list flex flex-align-items-center">
          <label>邮政编码：</label><input type="text" class="flex-grow-1" v-model="list.pos">
        </div>

      </div>
    </div>

    <div class="footer flex flex-justify-content-center flex-align-items-center">
      <!--<router-link to="home" class="flex flex-justify-content-center flex-align-items-center">保存</router-link>-->
      <button @click="onsel" class="flex flex-justify-content-center flex-align-items-center">保存</button>
    </div>

  </div>
</template>

<script>
  import Group from 'vux/src/components/group/';
  import XAddress from 'vux/src/components/x-address/';
  import ChinaAddressV3Data from 'vux/src/datas/china_address_v3.json'

  export default {
  name: 'edit',
  components: {
    Group,
    XAddress,
    ChinaAddressV3Data,
  },
  data () {
    return {
      list: {},
      value: [],
      addressData: ChinaAddressV3Data,
    }
  },
  methods: {
    onsel: function () {
      console.log(this.list.name);
    },
    onBack: function () {
      this.$router.back(-1);
    },
    saveAddress: function () {

    },
    getJwt: function(name) {
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results)
        return results[1] || 0;
      else
        return null;
    },
    init: function() {
      /* 获取jwt */
      this.jwt = this.getJwt('jwt') || "";
      if (!this.jwt) {
        alert("该页面不能直接在浏览器打开哦~");
        return;
      }
      //console.log(this.jwt);
      this.$http({
        method: 'GET',
        url: "https://ucast.cc/api/v1/games",
        headers: {
          Authorization: "bearer " + this.jwt
        }
      }).then(res => {
//          console.log(res);
          this.glbList = res.body;
        },
        res => {
          alert("账户有问题哦，截图发给技术蝈蝈领金币哦~");
      });
    }
  },
  created: function() {
//    console.log(this.$router);
//    console.log("created!");
//    this.$nextTick(this.init, 100);
    this.$nextTick(function () {
      this.list = this.$route.params.list;
    }, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .addaddress {
    background-color: rgb(245,245,245);
  }

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
    height: calc(100vh - 110px);
  }

  .container {
    width: 100%;
    background-color: white;
  }

  .list {
    height: 60px;
    margin: 0 15px;
    font-size: 17px;
    border-bottom: 1px solid rgb(235,235,235);
  }

  .list input {
    height: 100%;
    font-size: 17px;
    border: none;
  }

  .list textarea {
    height: 100%;
    font-size: 17px;
    border: none;
  }

  .line {
    height: 1px;
    margin-left: 15px;
    background-color: rgb(235,235,235);
  }

  .footer {
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    background-color: rgb(245,245,245);
    border-top: 1px solid rgb(235,235,235);
  }

  .footer a {
    background-color: white;
    text-decoration: none;
    color: black;
    font-size: 18px;
    width: 80%;
    height: 40px;
    border: 1px solid rgb(235,235,235);
    border-radius: 5px;
  }

</style>

<style>
  .weui-cells {
    margin: 0 !important;
    height: 60px !important;
    padding: 8px 0 !important;
  }

  .weui-cells:before {
    border-top: 0px !important;
  }

  .weui-cells:after {
    border-bottom: 0px !important;
  }

  .vux-cell-box:before {
    border-top: 0px !important;
  }
</style>
