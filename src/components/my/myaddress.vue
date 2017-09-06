<template>
  <div class="myaddress">

    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a href="#" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>管理收货地址</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
      </div>
    </div>

    <div class="content">

    </div>

    <div class="footer flex flex-justify-content-center flex-align-items-center">
      <x-button :text="submit001" :disabled="disable001" @click.native="">+添加地址</x-button>
    </div>


  </div>
</template>

<script>
  import { XButton } from "vux"

export default {
  name: 'myaddress',
  data () {
    return {
    }
  },
  components: {
    XButton,
  },
  methods: {
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
    console.log("created!");
//    this.$nextTick(this.init, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    height: 50px;
    background-color: rgb(245,245,245);
    border-bottom: 1px solid rgb(235,235,235);
  }

  .head-left, .head-right {
    width: 60px;
  }

  .head a {
    text-decoration: none;
    font-size: 16px;
  }

  .head i {
    font-size: 16px;
  }

  .content {
    height: calc(100vh - 110px);
  }

  .content-list {
    width: 100%;
  }

  .list-container {
    width: 50vw;
    height: 50vw;
    padding: 20px;
    /*border: 1px solid blue;*/
    /*background-color: #00b3ee;*/
  }

  .list-container img {
    width: 100%;
  }

  .footer {
    height: 60px;
    background-color: rgb(245,245,245);
    border-top: 1px solid rgb(235,235,235);
  }

  .footer button {
    background-color: white;
    width: 80%;
  }

</style>
