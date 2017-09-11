<template>
  <div class="mydoll">
    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a href="#/my" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>我的娃娃</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
      </div>
    </div>

    <div class="content overflow-y-auto">
      <div class="content-list flex flex-wrap-wrap">
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
        <div class="list-container flex flex-justify-content-center flex-align-items-center"><img src="../../assets/img/cat.jpg" alt=""></div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'mydoll',
  data () {
    return {
      glbList: [],
    }
  },
  methods: {
    onSelect: function(index) {
      //console.log(index);
      //这里是关键代码，将选取的游戏信息提交给native
      window.WebViewJavascriptBridge.callHandler(
        'onListItemSelect',
        this.glbList[index],
        (responseData) => {
          console.log(responseData);
        }
      );
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
          this.glbList = res.body;
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
    height: calc(100vh - 50px);
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

</style>
