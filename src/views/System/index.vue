<template>
<el-container>
<el-header style="height:40px">
  <div class="logo">
    <img src="../../assets/slices/logo.png" alt="" >
  </div>
  
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#2a2a2a"
  text-color="#fff"
  active-text-color="#5CBCFF"
>
  <el-menu-item index="1" style="color:#5CBCFF">首页</el-menu-item>
  <el-menu-item index="2">集成系统</el-menu-item>
  <el-menu-item index="3">物业管理系统</el-menu-item>
  <el-menu-item index="4">信息服务系统</el-menu-item>
</el-menu>
</el-header>
<el-main>
  <div class="top w" style="margin-top:20px;">
    <div>
    <span style="margin-right:10px;">党员分布</span><span style="font-size:9px;font-family:PingFang SC;font-weight:400;">Equipment operation</span>
    </div>
    <div class="sel" style="float:right;margin-top:-50px;">
    <el-dropdown @command="handleCommand">
  <el-button type="primary">
    党建系统数据<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown" style="background:rgba(42,42,42,1);border:1px #202020 solid">
    <el-dropdown-item style="width:240px;height:34px;line-height:34px;background:rgba(42,42,42,1);color:#fff;text-align:center;font-size:14px;padding-left:5px;" command="gotoSystem">政府系统数据</el-dropdown-item>
    <el-dropdown-item style="width:240px;height:34px;line-height:34px;background:rgba(42,42,42,1);color:#fff;text-align:center;font-size:14px;padding-left:5px;" command="gotoPolice">公安系统数据</el-dropdown-item>
    <el-dropdown-item style="width:240px;height:34px;line-height:34px;background:rgba(42,42,42,1);color:#fff;text-align:center;font-size:14px;padding-left:5px;" command="gotoDang">党建系统数据</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  
  
  </div>
    <div style="display:flex;width:100%;margin-top:20px;">
      <div class="one " style="width:270px;height:150px;background-color:rgba(42,42,42,1);border-radius:8px;position:relative;margin-right:30px;">
        <div class="icon clearfix" style="float:left;margin-top:30px;margin-left:20px;"><img src="../../assets/slices/xiaoqu.png" alt=""></div>
        <div class="file clearfix " style="float:left;margin-top:30px;background-color:rgba(42,42,42,1);position:relative;margin-left:10px;">
          <span style="font-size:8px;font-family:PingFang SC;font-weight:bold;">平安小区<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;opacity:0.5">Ping'an community</span>
          <span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:10%;right:-80px;">党员人数<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:60%;right:-80px;">136</span>
        </div>
        <div style="width:250px;height:3px;background:rgba(63,63,63,1);border-radius:1px;position:absolute;top:75%;margin-left:15px;">
          <div style="width:76px;height:3px;background:linear-gradient(90deg,rgba(209,127,181,1),rgba(99,81,161,1));border-radius:1px;"></div>
        </div>
      </div>
      <div class="two" style="width:270px;height:150px;background-color:rgba(42,42,42,1);border-radius:8px;position:relative;margin-right:30px;">
        <div class="icon clearfix" style="float:left;margin-top:30px;margin-left:20px;"><img src="../../assets/slices/jim.png" alt=""></div>
        <div class="file clearfix " style="float:left;margin-top:30px;background-color:rgba(42,42,42,1);position:relative;margin-left:10px;">
          <span style="font-size:8px;font-family:PingFang SC;font-weight:bold;">金茂府<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;opacity:0.5">Jinmaofu</span>
          <span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:10%;right:-140px;">党员人数<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:60%;right:-140px;">953</span>
        </div>
        <div style="width:250px;height:3px;background:rgba(63,63,63,1);border-radius:1px;position:absolute;top:75%;margin-left:15px;">
          <div style="width:250px;height:3px;background:linear-gradient(90deg,rgba(0,82,155,1),rgba(122,125,188,1));border-radius:1px;"></div>
        </div>
      </div>
      <div class="three" style="width:270px;height:150px;background-color:rgba(42,42,42,1);border-radius:8px;position:relative;margin-right:30px;">
        <div class="icon clearfix" style="float:left;margin-top:30px;margin-left:20px;"><img src="../../assets/slices/rong.png" alt=""></div>
        <div class="file clearfix " style="float:left;margin-top:30px;background-color:rgba(42,42,42,1);position:relative;margin-left:10px;">
          <span style="font-size:8px;font-family:PingFang SC;font-weight:bold;">融安府<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;opacity:0.5">Ronganfu</span>
          <span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:10%;right:-135px;">党员人数<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:60%;right:-135px;">126</span>
        </div>
        <div style="width:250px;height:3px;background:rgba(63,63,63,1);border-radius:1px;position:absolute;top:75%;margin-left:15px;">
          <div style="width:180px;height:3px;background:linear-gradient(90deg,rgba(58,188,167,1),rgba(0,105,62,1));border-radius:1px;"></div>
        </div>
      </div>
      <div class="four" style="width:270px;height:150px;background-color:rgba(42,42,42,1);border-radius:8px;position:relative;margin-right:30px;">
        <div class="icon clearfix" style="float:left;margin-top:30px;margin-left:20px;"><img src="../../assets/slices/yong.png" alt=""></div>
        <div class="file clearfix " style="float:left;margin-top:30px;background-color:rgba(42,42,42,1);position:relative;margin-left:10px;">
          <span style="font-size:8px;font-family:PingFang SC;font-weight:bold;">永州城<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;opacity:0.5">Yongzhoucheng</span>
          <span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:10%;right:-95px;">党员人数<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:60%;right:-95px;">460</span>
        </div>
        <div style="width:250px;height:3px;background:rgba(63,63,63,1);border-radius:1px;position:absolute;top:75%;margin-left:15px;">
          <div style="width:100px;height:3px;background:linear-gradient(90deg,rgba(241,100,119,1),rgba(243,121,62,1));border-radius:1px;"></div>
        </div>
      </div>
      <div class="five" style="width:270px;height:150px;background-color:rgba(42,42,42,1);border-radius:8px;position:relative;margin-right:30px;">
        <div class="icon clearfix" style="float:left;margin-top:30px;margin-left:20px;"><img src="../../assets/slices/ming.png" alt=""></div>
        <div class="file clearfix " style="float:left;margin-top:30px;background-color:rgba(42,42,42,1);position:relative;margin-left:10px;">
          <span style="font-size:8px;font-family:PingFang SC;font-weight:bold;">明洲二期<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;opacity:0.5">Mingzhouerqi</span>
          <span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:10%;right:-110px;">党员人数<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:60%;right:-110px;">66</span>
        </div>
        <div style="width:250px;height:3px;background:rgba(63,63,63,1);border-radius:1px;position:absolute;top:75%;margin-left:15px;">
          <div style="width:220px;height:3px;background:linear-gradient(90deg,rgba(232,233,105,1),rgba(109,192,104,1));border-radius:1px;"></div>
        </div>
      </div>
      <div class="six" style="width:270px;height:150px;background-color:rgba(42,42,42,1);border-radius:8px;position:relative;margin-right:30px;">
        <div class="icon clearfix" style="float:left;margin-top:30px;margin-left:20px;"><img src="../../assets/slices/hua.png" alt=""></div>
        <div class="file clearfix " style="float:left;margin-top:30px;background-color:rgba(42,42,42,1);position:relative;margin-left:10px;">
          <span style="font-size:8px;font-family:PingFang SC;font-weight:bold;">华茂悦峰<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;opacity:0.5">Huamao Yuefeng</span>
          <span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:10%;right:-90px;">党员人数<br></span>
          <span style="font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;position:absolute;top:60%;right:-90px;">192</span>
        </div>
        <div style="width:250px;height:3px;background:rgba(63,63,63,1);border-radius:1px;position:absolute;top:75%;margin-left:15px;">
          <div style="width:50px;height:3px;background:linear-gradient(90deg,rgba(159,204,233,1),rgba(81,142,154,1));border-radius:1px;"></div>
        </div>
      </div>
    </div>
    <div class=" clearfix" style="width:100%;">
      <div class="left clearfix">
        <div style="margin-top:20px;">
          <span style="margin-right:10px;">党员新增</span><span style="font-size:9px;font-family:PingFang SC;font-weight:400;">New party expenses</span>
        </div>
        <div class="Line">
          <img src="../../assets/slices/line-1.png" alt="">
        </div>
      </div>
      <div class="right clearfix">
        <div style="margin-top:20px;">
          <span style="margin-right:10px;">公开课</span><span style="font-size:9px;font-family:PingFang SC;font-weight:400;">Open class</span>
          <table style="margin-top:20px;">
  <tr style="margin-bottom:15px;">
    <th style="width:300px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">开课时间</th>
    <th style="width:150px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">管理区</th>
    <th style="width:200px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">课名</th>
    <th style="width:200px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">地点</th>
  </tr>
  <tbody style="margin-top:15px;">
    <tr v-for="(item,a) in list" :key="item.id">
      <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">{{item.date}}</td>
      <td  style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">{{item.way}}</td>
      <td :class="sst[a]" style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">{{item.name}}</td>
      <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">本小区</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>
  <div style="height:280px;">
    <div class="middle clearfix" style="width:40%;margin-top:20px;position:relative;float:left;">
        <div class="LF_box">
          <span style="font-size:16px;font-family:PingFang SC;font-weight:400;margin-right:10px;">党费上缴</span><span style="font-size:9px;font-family:PingFang SC;font-weight:400;">Party dues</span>
          <div class="biao">
          <span class="oone">15,453,070人</span><br>
          <span class="ttwo">全部人数</span>
          </div>
      </div>
      <div class="RG_box" style="border-left:1px solid rgba(255,255,255,0.1)">
        <img src="../../assets/slices/jiao5.png" alt="">
      </div>
    </div>
    <div class="Advanced clearfix">
        <div style="width:100%;margin-bottom:10px;"><span style="margin-right:10px;">先进党员</span><span style="font-size:9px;font-family:PingFang SC;font-weight:400;">Advanced Party member</span></div>
        <div class="aaa clearfix">
          <div class="shang">
            <span style="font-size:10px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:10px;margin-left:20px;">华侨城</span>
            <span style="diaplay:block;font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:30px;margin-left:-40px;">Overseas Chinese town</span>
            <span class="num">293</span><span style="float:left;margin-left:85%;font-size:2px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:-20px;">人</span>
          </div>
          <div class="xia">
            <img src="../../assets/slices/line-2.png" alt="">
          </div>
        </div>
        <div class="bbb clearfix">
          <div class="shang">
            <span style="font-size:10px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:10px;margin-left:20px;">金茂府</span>
            <span style="diaplay:block;font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:30px;margin-left:-40px;">JinMaoFu</span>
            <span class="num">734</span><span style="float:left;margin-left:85%;font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:-20px;">人</span>
          </div>
          <div class="xia">
            <img src="../../assets/slices/line-3.png" alt="">
          </div>
        </div>
        <div class="ccc clearfix">
          <div class="shang">
            <span style="font-size:10px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:10px;margin-left:20px;">永州</span>
            <span style="diaplay:block;font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:30px;margin-left:-30px;">YongZhou</span>
            <span class="num">639</span><span style="float:left;margin-left:85%;font-size:6px;font-family:Adobe Heiti Std;font-weight:normal;margin-top:-20px;">人</span>
          </div>
          <div class="xia">
            <img src="../../assets/slices/line-4 (1).png" alt="">
          </div>
        </div>
    </div>
    </div>
    <div class="active clearfix" style="float:left;">
      <div class="L-box clearfix">
        <span style="font-size:16px;font-family:PingFang SC;font-weight:400;margin-right:10px;">党建活动</span><span style="font-size:9px;font-family:PingFang SC;font-weight:400;">Party dues</span>
        <div style="margin-top:13.5px; background: rgba(42,42,42,1);border-radius: 7.5px;">
          <img src="../../assets/slices/echarts-1.png" alt="">
        </div>
      </div>
      <div class="R-box clearfix">
        <span style="font-size:16px;font-family:PingFang SC;font-weight:400;margin-right:10px;">志愿者活动</span><span style="font-size:9px;font-family:PingFang SC;font-weight:400;">Volunteer activities</span>
        <div style="margin-top:13.5px;">
          <table>
        <tr style="margin-bottom:15px;">
          <th style="width:300px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">活动时间</th>
          <th style="width:150px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">管理区</th>
          <th style="width:200px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">活动内容</th>
          <th style="width:200px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">地点</th>
        </tr>
        <tbody style="margin-top:15px;">
        <tr  v-for="(item,a) in listOne" :key="item.id">
           <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">{{item.date}}</td>
           <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">{{item.control}}</td>
           <td :class="sst[a]" style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">{{item.content}}</td>
           <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:60px;">{{item.way}}</td>
        </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  </div>
</el-main>
</el-container>
</template>

<script>
export default {
  data(){
    return{
      list:[
          {
          
          id:'1',
          date:'2020-05-15 14:56',
          way:'华茂悦锋',
          name:'火灾故事如何应对'
          },
          {
          
          id:'2',
          date:'2020-05-10 15:32',
          way:'甬城楼',
          name:'发电机原理'
          },
          {
          
          id:'3',
          date:'2020-05-09 15:32',
          way:'金茂府',
          name:'电梯紧急措施'
          },
          {
            
          id:'4',
          date:'2020-05-05 12:20',
          way:'华侨城',
          name:'火警自救'
          },
          {
            
          id:'5',
          date:'2020-05-03 16:20',
          way:'华侨城',
          name:'逃生措施'
          }
          ],
      listOne:[
        {
          
          id:'1',
          date:'2020-05-15 14:56',
          control:'华茂悦锋',
          content:'关爱老人',
          way:'本小区老年活动中心'
        },
        {
          
          id:'2',
          date:'2020-05-10 15:32',
          control:'甬城楼',
          content:'过马路小交警',
          way:'永成路'
        },
        {
          
          id:'3',
          date:'2020-05-09 15:32',
          control:'金茂府',
          content:'文明城市',
          way:'社区'
        },
        {
          
          id:'4',
          date:'2020-05-05 12:20',
          control:'华侨城',
          content:'街道清洁',
          way:'本小区'
        },
        {
          
          id:'5',
          date:'2020-05-03 16:20',
          control:'华侨城',
          content:'慰问老人',
          way:'本小区'
        }
      ],
      sst:[
        "ss1","ss2","ss3","ss4","ss5"
      ]
    }
  },
  methods:{
    handleCommand(cmditem) {
      if (!cmditem) {
        this.$message("菜单选项缺少command属性");
        return;
      }
      switch (cmditem) {
        case "gotoPolice":
          this.gotoPolice();
          break;
        case "gotoSystem":
          this.gotoSystem();
          break;
        case "gotoDang":
          this.gotoDang();
          break;
      }
    },
   gotoDang(){
     this.$router.push('/System')
   },
  gotoSystem(){
this.$router.push('/home')
  }
  }
}
</script>

<style lang="less" scoped>
*{
  color:#fff;
  background-color: #202020;
}
.ss1{
  color:#F7363B;
}
.ss2{
  color:#07D10C;
}
.ss3{
   color:#07D10C;
}
.ss4{
   color:#07D10C;
}
.ss5{
   color:#F7363B;
}
.clearfix:after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
        
        .clearfix {
            *zoom: 1;
        }
.el-header{
  background-color: rgba(42,42,42,1);
  height:60px !important;
}
.logo{
  float: left;
  line-height: 80px;
  width: 240px;
  height: 60px;
  background-color: rgba(42,42,42,1);
}
.el-menu-demo{
  width: 80%;
  margin-left: 240px;
}
.el-menu.el-menu--horizontal{
  border:none ;

}
  .sel{
  float: right;
  margin-right:80px;
  .el-button--primary{
    width: 270px;
    height: 34px;
    font-size: 14px;
    line-height: 34px;
    padding: 0;
    background-color:rgba(42,42,42,1);
    border-color:rgba(42,42,42,1);
    border-radius: 2px;
  }
  .el-icon--right{
    margin-left: 150px;
  }
}
.left{
  width:50%;
  float: left;
  margin-right:30px ;

img{
  width: 100%;
}
}
.right{
  width: 40%;
  float: left;
  margin-left:30px;
}
.LF_box{
  width: 100%;
  .biao{
    width: 100%;
    height:200px;
    background-color: rgba(42,42,42,1);
    margin-top:11.5px;
    position: relative;
    .oone{
      font-size: 20px;
      margin-left:15%;
      position: absolute;
      top:40%
    }
    .ttwo{
      font-size:7px;
      font-family:Adobe Heiti Std;
      font-weight:normal;
      margin-left:26.5%;
      position: absolute;
      top:53%
    }
  }
}
.RG_box{
  background-color: rgba(42,42,42,1);
  position: absolute;
  left: 50%;
  top: 30%;
  img{
    margin-left:100px;
  }
}
.Advanced{
  width:55%;
  float: left;
  margin-left:50px;
  margin-top:20px ;
  .aaa{
    width:25%;
    height: 200px;
    background-color: rgba(42,42,42,1);
    border-radius: 8px;
    float: left;
    margin-right: 30px;
    .shang{
      background-color: rgba(42,42,42,1);
      span{
        float: left;
      }
      .num{
        font-size:20px;
        font-family:Adobe Heiti Std;
        font-weight:normal;
        float: right;
        margin-right:40px;
        margin-top: 20px;
      }
      
    }
    .xia{
      margin-top:10px;
      background-color: rgba(42,42,42,1);
      img{
      width: 100%;
    }
    }
    
  }
  .bbb{
    width:25%;
    height: 200px;
    background-color: rgba(42,42,42,1);
    border-radius: 8px;
    float: left;
    margin-right: 50px;
    .shang{
      background-color: rgba(42,42,42,1);
      span{
        float: left;
      }
      .num{
        font-size:20px;
        font-family:Adobe Heiti Std;
        font-weight:normal;
        float: right;
        margin-right:40px;
        margin-top: 20px;
      }
      
    }
    .xia{
      margin-top:10px;
      
      background-color: rgba(42,42,42,1);
      img{
      width: 100%;
    }
    }
  }
  .ccc{
    width:25%;
    height: 200px;
    background-color: rgba(42,42,42,1);
    border-radius: 8px;
    float: left;
   .shang{
      background-color: rgba(42,42,42,1);
      span{
        float: left;
      }
      .num{
        font-size:20px;
        font-family:Adobe Heiti Std;
        font-weight:normal;
        float: right;
        margin-right:40px;
        margin-top: 20px;
      }
      
    }
    .xia{
      margin-top:10px;
      background-color: rgba(42,42,42,1);
      img{
      width: 100%;
    }
    }
  }
}
.active{
  width: 100%;
  .L-box{
    width:55%;
    float: left;
    margin-right: 30px;
   
    img{
      width:100%;
    }
  }
  .R-box{
    width: 40%;
    float: left;
  }
}

</style>