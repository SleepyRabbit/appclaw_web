<template>
  <div class="record">

    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a @click="onBack" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>抓取记录</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
      </div>
    </div>

    <div class="content overflow-y-auto">
      <div class="container ">
        <a @click="" class="list flex" v-for="item in items">
          <div class="list-left flex flex-justify-content-center flex-align-items-center">
            <img src="http://ucast.oss-cn-beijing.aliyuncs.com/others/no_bug.jpg" alt="">
          </div>
          <div class="list-center flex-grow-1 flex flex-direction-column flex-justify-content-center">
            <h3>{{item.title}}</h3>
            <p>{{item.time}}</p>
          </div>
          <div class="list-right flex flex-justify-content-center flex-align-items-center">
            <p>{{item.result}}</p>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
  name: 'record',
  data () {
    return {
        items: [
          {
              image: "",
              title: "小恐龙",
              time: "2017/07/16",
              result: "抓取成功",
          }
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
        url: "https://ucast.cc/api/v1/appclaw/my-rounds",
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
    height: calc(100vh - 50px);
    background-color: rgb(255,234,10);
  }

  .container {
    margin: 5px;
    background-color: white;
    border: 0;
    border-radius: 6px;
  }

  .container a {
    text-decoration: none;
  }

  .list {
    height: 80px;
    border-bottom: 1px solid rgb(235, 235, 235);
  }

  .list-left, .list-right {
      width: 80px;
   }

  .list img {
    width: 60px;
    height: 60px;
  }

  .list p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: rgb(192,192,192);
  }
</style>
