  <template>
  <div class="doll box">
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
  name: 'doll',
  data () {
    return {
      items: [],
    }
  },
  methods: {
    init: function() {
      let jwt = this.getJwt;

      if(jwt.length === 0) {
        alert("令牌错误");
        return;
      }

      this.$http({
        method: 'GET',
        url: "https://ucast.cc/api/v1/appclaw/my-rounds?win=true",
        headers: {
          Authorization: "bearer " + jwt
        }
      }).then(res => {
          this.items = res.body;
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
    this.$nextTick(this.init, 100);
    document.title = '我的娃娃';

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
