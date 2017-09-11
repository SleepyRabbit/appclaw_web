<template>
  <div class="myaddress">

    <div class="head flex">
      <div class="head-left flex-shrink-0 flex flex-align-items-center">
        <a href="#/my" class="flex flex-justify-content-center flex-align-items-center"><i class="icon-back"></i>返回</a>
      </div>
      <div class="head-title flex-grow-1 flex flex-justify-content-center flex-align-items-center">
        <h3>管理收货地址</h3>
      </div>
      <div class="head-right flex-shrink-0 flex flex-justify-content-center flex-align-items-center">
      </div>
    </div>

    <div class="content overflow-y-auto">
      <div class="list-container" v-for="list in lists">
        <a href="#/add_address">
          <div class="list-name flex flex-justify-content-space-between flex-align-items-center">
            <p>{{ list.name }}</p>
            <p>{{ list.tel }}</p>
          </div>
          <p>{{ list.addr }}</p>
          <div class="list-footer">
          </div>
        </a>
      </div>
    </div>

    <div class="footer flex flex-justify-content-center flex-align-items-center">
      <x-button @click.native="addAddress">+添加地址</x-button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import XButton from 'vux/src/components/x-button/';

export default {
  name: 'myaddress',
  components: {
    XButton,
  },
  data () {
    return {
        lists: [
                {
                  name: "侯恩星",
                  tel: "18501053820",
                  addr: "北京市海淀区清河中街68号五彩城写字楼10F-155 100085"
                },
                {
                  name: "侯恩星",
                  tel: "18501053820",
                  addr: "北京市海淀区清河中街68号五彩城写字楼10F-155 100085"
                },
                {
                  name: "侯恩星",
                  tel: "18501053820",
                  addr: "北京市海淀区清河中街68号五彩城写字楼10F-155 100085"
                },
                {
                  name: "侯恩星",
                  tel: "18501053820",
                  addr: "北京市海淀区清河中街68号五彩城写字楼10F-155 100085"
                },
                {
                  name: "侯恩星",
                  tel: "18501053820",
                  addr: "北京市海淀区清河中街68号五彩城写字楼10F-155 100085"
                },
                {
                  name: "侯恩星",
                  tel: "18501053820",
                  addr: "北京市海淀区清河中街68号五彩城写字楼10F-155 100085"
                },
        ],
    }
  },
  methods: {
    addAddress: function () {
      this.$router.replace('/add_address');
//      this.$router.replace('/address');
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
    color: black;
    font-size: 16px;
  }

  .head i {
    font-size: 16px;
  }

  .content {
    height: calc(100vh - 110px);
    background-color: rgb(245,245,245);
  }

  .list-container {
    margin-bottom: 10px;
    padding: 5px 10px 0 10px;
    background-color: white;
  }

  .list-container a {
    text-decoration: none;
    color: black;
  }

  .list-container a:active {
    color: black;
  }

  .list-name {
    height: 50px;
  }

  .list-name p {
    font-size: 17px;
  }

  .list-footer {
    height: 35px;
    border-top: 1px solid rgb(235,235,235);
    /*margin-bottom: 10px;*/
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
