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
            <img v-bind:src="item.image" alt="">
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
        items: JSON.parse(`[{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/15 17:38:44","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/15 17:26:04","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/14 02:10:40","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/13 22:04:24","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 23:21:42","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 23:21:16","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 23:19:32","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 23:17:04","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 17:53:39","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 17:52:51","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 17:52:04","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 17:51:36","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 17:49:51","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 17:32:05","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 15:43:29","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:46:03","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:45:14","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:44:24","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:43:36","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:42:42","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:41:27","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:36:52","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:35:54","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:35:04","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:34:15","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:33:17","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:32:18","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:31:16","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:30:27","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:23:03","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:22:16","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:21:24","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:16:13","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:15:25","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:14:37","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:13:50","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:13:02","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:12:13","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:11:25","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 14:10:33","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 06:23:05","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 06:21:07","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 06:19:36","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 06:17:02","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 06:16:15","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 05:02:59","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 02:23:40","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/12 02:19:42","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/11 22:49:00","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/11 22:47:23","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/11 22:44:32","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/11 22:41:11","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/11 22:21:54","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/11 05:27:05","result":"抓取失败"},{"image":"http://img2.nuandaoimg.com/Public/images/uploads/product/20130603/51ac6e6e783d7-450.jpg","title":"抓抓抓","time":"2017/09/11 05:10:03","result":"抓取失败"}]`),
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
