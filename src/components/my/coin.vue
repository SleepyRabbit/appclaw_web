<template>
  <div class="coin box">

    <div class="content">
      <div class="content-banner flex flex-justify-content-center flex-align-items-center">
        <h1>{{balance.balance}}币</h1>
      </div>

      <div class="container overflow-y-scroll">
        <a @click="" class="list flex flex-justify-content-space-between" v-for="item in bills">
          <div class="list-left flex flex-direction-column flex-justify-content-center">
            <h3>{{item.comment}}</h3>
            <p>{{item.time}}</p>
          </div>
          <div class="list-right flex flex-justify-content-center flex-align-items-center">
            <p>{{item.fee}}</p>
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
    return {bills:[], balance:{}};
  },
  methods: {
    init: function() {
      let jwt = this.getJwt;
      if(!jwt) {
        alert("令牌错误");
        return;
      }

      this.$http({
        method: 'GET',
        url: "https://ucast.cc/api/v1/appclaw/my-coins",
        headers: {
          Authorization: "bearer " + jwt
        }
      }).then(res => {
          console.log(res.body);
          this.bills = res.body.bills;
          this.balance = res.body.balance;
        },
        res => {
          alert("账户有问题哦~");
        });
    }
  },
  computed: {
    ...mapGetters([
      'getJwt',
    ])
  },
  created: function() {
    //console.log("created!");
    this.$nextTick(this.init, 100);
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
    height: calc(100vh - 150px);
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
