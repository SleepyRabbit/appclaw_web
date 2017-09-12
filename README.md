# appclaw_web使用说明

## "我的"页面
![image](https://github.com/SleepyRabbit/img/blob/master/appclaw_web/my.jpeg)  
---
<pre><code>
路径： #/my  #/my/home
数据请求：
null
数据返回:
null
</code></pre>
---

## "我的金币"页面
![image](https://github.com/SleepyRabbit/img/blob/master/appclaw_web/my_coin.jpeg)  
---
<pre><code>
路径： #/my/coin
数据请求：
this.$http({  
            method: 'GET',  
            url: "https://ucast.cc/api/v1/appclaw/my/coin",  
            headers: {  
                      Authorization: "bearer " + this.jwt  
                      }  
          })  
数据返回：  
{  
  coin: 20,  
}
</code></pre>
---

## "我的抓取记录"页面
![image](https://github.com/SleepyRabbit/img/blob/master/appclaw_web/my_coin.jpeg)  
---
<pre><code>
路径： #/my/record
数据请求：   
this.$http({
        method: 'GET',
        url: "https://ucast.cc/api/v1/appclaw/my/record",
        headers: {
          Authorization: "bearer " + this.jwt
        }
      }) 
数据返回：
{
  img: "",    //项目图片
  sceneName: "",    //项目名称
  time: "",   //游戏时间
  result: ""    //游戏结果
}
</code></pre>
---
