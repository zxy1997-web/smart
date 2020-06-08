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
  <el-menu-item index="1" style="color:#5CBCFF;border-bottom:none;">首页</el-menu-item>
  <el-menu-item index="2">集成系统</el-menu-item>
  <el-menu-item index="3">物业管理系统</el-menu-item>
  <el-menu-item index="4">信息服务系统</el-menu-item>
</el-menu>
</el-header>
<el-main>
<div class="left clearfix">
<div class="event" style="color:#ffffff;margin-top:20px;margin-bottom:10px;">异常事件　<span style="font-size:6px">Abnormal events</span></div>
<div class="list_one">
  
  <el-card class="card_one" style="color:#ffffff;margin-bottom:20px;">
    <div class="icon" style="background:rgba(42,42,42,1);float:left;margin-right:20px;">
    <img src="../../assets/slices/finsh.png" alt="">
  </div><span style="font-size:8px">已结束事件</span><br><span style="font-size:6px;opacity:0.5;">Finished event</span><span 
  style="float:right;
  margin-bottem:20px;
  font-size:7px">2,120条></span></el-card>
  <el-card class="card_one" style="color:#ffffff;margin-bottom:20px;">
    <div class="icon" style="background:rgba(42,42,42,1);float:left;margin-right:20px;">
    <img src="../../assets/slices/await.png" alt="">
  </div><span style="font-size:8px">未开始事件</span><br><span style="font-size:6px;opacity:0.5;">Await event</span><span 
  style="float:right;
  margin-bottem:20px;
  font-size:7px">5,100条></span></el-card>
  <el-card class="card_one" style="color:#ffffff;margin-bottom:20px;"><div class="icon" style="background:rgba(42,42,42,1);float:left;margin-right:20px;">
    <img src="../../assets/slices/ngoing.png" alt="">
  </div><span style="font-size:8px">进行中事件</span><br><span style="font-size:6px;opacity:0.5;">Ngoing event</span><span 
  style="float:right;
  margin-bottem:20px;
  font-size:7px">5,100条></span></el-card>
<table>
  <tr style="margin-bottom:15px;">
    <th style="width:300px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:50px;padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;">发生时间</th>
    <th style="width:150px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:50px;padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;">管理区</th>
    <th style="width:200px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:50px;padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;">事件描述</th>
    <th style="width:200px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:50px;padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;
padding-left:20px;box-sizing:border-box;">操作</th>
  </tr>
  <tbody style="margin-top:15px;">
    <tr v-for="(item,key) in list" :key="item.id">
      <td style="font-size:6px;font-family:PingFang SC;font-weight:400;line-height:50px;padding-left:20px;box-sizing:border-box;">{{item.date}}</td>
      <td style="font-size:6px;font-family:PingFang SC;font-weight:400;line-height:50px;padding-left:20px;box-sizing:border-box;">{{item.way}}</td>
      <td style="font-size:6px;font-family:PingFang SC;font-weight:400;line-height:50px;padding-left:20px;box-sizing:border-box;">{{item.event}}</td>
      <td >
        <img v-if="key === 0" src="../../assets/slices/search-2.png" alt="" style="margin-left:15px;">
           <img  v-if="key === 0"  src="../../assets/slices/del-2.png" alt="" style="margin-left:20px;">
        <img  v-if="key !== 0"  src="../../assets/slices/search-1.png" alt="" style="margin-left:15px;">
     
        <img  v-if="key !== 0"  src="../../assets/slices/del-1.png" alt="" style="margin-left:20px;">
      </td>
      
    </tr>
  </tbody>
</table>
<div class="event" style="color:#ffffff;margin-top:30px;">工单分类　<span style="font-size:6px">Work order classification</span></div>
<div class="biao">
  <div class="lb">
    <div style="padding-left:15%;box-sizing:border-box;"><span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;line-height:40px;">居民建议</span><span style="float:right;margin-right:30%;font-size:20px;font-family:DIN;font-weight:500;line-height:40px">52%</span></div>
    <div style="padding-left:15%;box-sizing:border-box;"><span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;line-height:40px;">小区整改</span><span style="float:right;margin-right:30%;font-size:20px;font-family:DIN;font-weight:500;line-height:40px">18%</span></div>
    <div style="padding-left:15%;box-sizing:border-box;"><span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;line-height:40px;">物业投诉</span><span style="float:right;margin-right:30%;font-size:20px;font-family:DIN;font-weight:500;line-height:40px">30%</span></div>
  </div>
  <div class="rb">
    <img src="../../assets/slices/three.png" alt="">
  </div>
</div>
<div class="event" style="color:#ffffff;margin-top:40px;">绿化占比　<span style="font-size:6px">Proportion of greening</span></div>
<div class="biao1">
  <div class="lb_b">
    <div style="padding-left:45%;padding-top:20px;box-sizing:border-box;"><span style="font-size:7px;font-family:Adobe Heiti Std;font-weight:normal;line-height:40px;">小区绿化占比<br><span style="margin-right:10px;">占比</span></span><span style="font-size:36px;font-family:DIN;font-weight:500;">35%</span></div>
  </div>
  <div class="rb_b">
    <img src="../../assets/slices/green-1.png" alt="">
  </div>
</div>
</div>
</div>
<div class="right clearfix" style="60%">
  <div class="sel">
    <el-dropdown @command="handleCommand">
  <el-button type="primary">
    政府系统数据<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown" style="background:rgba(42,42,42,1);border:1px #202020 solid">
    <el-dropdown-item style="width:240px;height:34px;line-height:34px;background:rgba(42,42,42,1);color:#fff;text-align:center;font-size:14px;padding-left:5px;" command="gotoSystem">政府系统数据</el-dropdown-item>
    <el-dropdown-item style="width:240px;height:34px;line-height:34px;background:rgba(42,42,42,1);color:#fff;text-align:center;font-size:14px;padding-left:5px;" command="gotoPolice">公安系统数据</el-dropdown-item>
    <el-dropdown-item style="width:240px;height:34px;line-height:34px;background:rgba(42,42,42,1);color:#fff;text-align:center;font-size:14px;padding-left:5px;" command="gotoDang">党建系统数据</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  
  </div>
  <div class="top">
    <div class="left_box clearfix">
      <div class="event" style="color:#ffffff">入住情况　<span style="font-size:6px">Occupancy</span></div>
      <div class="first" style="position:relative">
        <div style="width:50%;height:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"><span style="width:70px;
        height:18px;
        font-size:35px;
        font-family:DIN;
        font-weight:500;">153,212</span><span style="display:block;
        width:120px;
        height:7px;
        text-align:right;
        font-size:7px;
        font-family:PingFang SC;
        font-weight:400;">全部人数</span></div>
        <div></div>
      </div>
      <div class="second clearfix">
        <div class="shang">
          <div style="float:left">
            <span style="
          display:block;
          width:56px;
          height:7px;
        margin:5% 0 15px 10%;
        font-size:5px;
        font-family:PingFang SC;
        font-weight:400;">外来人口</span>
        <span style="
        display:block;
        width:150px;
        height:7px;
        margin-left:10%;
        font-size:4px;
        font-family:Adobe Heiti Std;
        font-weight:normal;">External population</span>
          </div>
          
        <div style="
        display:inline-block;
        width:64px;
        height:26px;
        line-height:30px;
        margin-top:5%;
        margin-right:5%;
        padding-bottom:10%;
        box-sizing:border-box;
        float:right;
        font-size:18px;
        font-family:DIN;
        font-weight:500;">8663</div></div>
        <div class="xia">
          <img src="../../assets/slices/echarts-3.png" alt="">
        </div>
      </div>
      <div class="third clearfix">
        <div class="shang">
          <div style="float:left">
            <span style="
          display:block;
          width:56px;
          height:7px;
        margin:5% 0 15px 10%;
        font-size:5px;
        font-family:PingFang SC;
        font-weight:400;">华侨</span>
        <span style="
        display:block;
        width:150px;
        height:7px;
        margin-left:10%;
        font-size:4px;
        font-family:Adobe Heiti Std;
        font-weight:normal;">Overseas Chinese</span>
          </div>
          
        <div style="
        display:inline-block;
        width:64px;
        height:26px;
        line-height:30px;
        margin-top:5%;
        margin-right:5%;
        padding-bottom:10%;
        box-sizing:border-box;
        float:right;
        font-size:18px;
        font-family:DIN;
        font-weight:500;">734</div></div>
        <div class="xia" style="width:100%;height:80%;">
          <img src="../../assets/slices/echarts-2.png" alt="">
        </div>
      </div>
    </div>
    <div class="right_box clearfix" style="float:right">
      <div class="event" style="color:#ffffff;margin-bottom:10px;">社区活动　<span style="font-size:6px">Community activities</span></div>
      <table>
        <tr style="margin-bottom:15px;">
          <th style="width:300px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">活动时间</th>
          <th style="width:150px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">参与人数</th>
          <th style="width:200px;text-align:left;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:30px;padding-left:20px;box-sizing:border-box;">活动名称</th>
        </tr>
        <tbody style="margin-top:15px;">
        <tr v-for="item in listOne" :key="item.id">
           <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:55px;">{{item.date}}</td>
           <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:55px;">{{item.num}}</td>
           <td style="padding-left:20px;box-sizing:border-box;font-size:6px;font-family:PingFang SC;font-weight:400;line-height:55px;color:#07D10C">{{item.name}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="event1" style="color:#ffffff;margin-top:380px;">能源耗损　<span style="font-size:6px">Energy consumption</span></div>
  <div class="energy">
    <ve-line  style="width: 100%;height: 100%"
          :settings="LinechartSettings"
          :data="LinecharData"
          :x-axis="xLineAxis"
          :y-axis="yLineAxis"
          :series="series"
          height="350px"></ve-line>
        
  </div>
  <div class="event" style="color:#ffffff">车位占有率　<span style="font-size:6px">Occupancy rate of parking space</span></div>
  <div class="car">
    <div><el-progress :text-inside="true" :stroke-width="34" :percentage="50" class="progress" color="#F19021" type="line">
    </el-progress></div>
    <div style="font-size:8px;width:90px;height:20px;line-height:20px;float:left;margin-left:25%;">剩余车位359</div>
    <div style="font-size:8px;width:90px;height:20px;line-height:20px;margin-right:10%;float:right;">全部车位1652</div>
    
  </div>
  <div class="car1" style="border-radius:15px;">
    <div class="one_b clearfix" 
    style="float:left;
    padding-top:10px;
    padding-left:8%;
    margin-right:10%;
    box-sizing:border-box;color:#ffffff;">
      <span 
      style="display:block;
      margin-top:10px;
      margin-bottom:5px;
      font-size:20px;
      font-family:Adobe Heiti Std;
      font-weight:normal;">16,000辆</span>
      <span 
      style="display:block;
      font-size:2px;
      font-family:PingFang SC;
      font-weight:400;">月租车数量</span>
    </div>
    <div class="two_b clearfix" style="width:25%;float:left">
      <img src="../../assets/slices/one.png" alt="">
      </div>
    <div class="three_b clearfix"
    style="float:left;
    padding-top:10px;
    padding-left:5%;
    margin-right:10%;
    box-sizing:border-box;color:#ffffff;">
      <span 
      style="display:block;
      margin-top:10px;
      margin-bottom:5px;
      font-size:20px;
      font-family:Adobe Heiti Std;
      font-weight:normal;">13,050辆</span>
      <span 
      style="display:block;
      font-size:2px;
      font-family:PingFang SC;
      font-weight:400;">临时车数量</span>
    </div>
    <div class="four_b clearfix" style="width:10%;float:left;">
      <ve-ring
:data="retained"
:legend-visible="false"
:settings="ringextend"
:colors="ringcolor"
:title="title"
width="100px"
hright="100px"
class="huan"
></ve-ring>
    </div>
    
  </div>
  <div class="event" style="color:#ffffff;margin-bottom:10px;">政务数量　<span style="font-size:6px">Number of government affairs</span></div>
  <div class="government">
    <ve-histogram 
    :data="chartData" 
    :legend-visible="false"
    :settings="chartSettings" 
    :extend="chartExtend"
    :x-axis="xAxis"
    :y-axis="yAxis"
    height="350px"
></ve-histogram>
</div>
</div>
</el-main>
</el-container>
</template>

<script>
export default {
data() {
  this.gradient = ["#4D78FE", "#2A2A2A"],
  this.title = {
      text: "30%",
      x: "center",
      y: "center",
      itemGap: 20,
      textStyle: {
        color: "#ffffff",
        fontFamily: "微软雅黑",
        fontSize: 20,
        fontWeight: "bolder"
      }
    },
    (this.ringextend = {
      radius: ["50%", "80%"],
      label: {
        //去除饼图的指示折线label
        normal: {
          show: false,
          position: "inside"
        }
      },
      labelLine: {
        normal: {
          label: {
            show: true,
            formatter: "({d}%)"
          },
          labelLine: { show: true }
        }
      },
      // 全局字体样式
      textStyle: {
        color: "#ffffff"
      }
    }),
      // 环形图颜色
      (this.ringcolor = ["#395667", "#32E380"]),
  this.LinechartSettings = {
      stack: { '能源': ['电能', '水能'] },
      area: true,
    },
  
this.chartSettings = {
        showHistogram: ['政务数量'],
      },
this.chartExtend = {  
  color:["#ffffff"],
  barWidth: "20%"
},
this.yLineAxis = [{
             // 坐标轴名称的文字样式
              nameTextStyle: {
                  padding: [0, 10, 0, 0]
              },
              Name: ['数值'],
              Type:['KMB'],
              // 坐标轴线设置
              axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#ccc'
                  }
                    },
            axisLabel: {
              show: true,
              textStyle: {
                color: "white",//这里是改变字体颜色
                fontSize: 9 //字体大小
              }
            },
            axisLine: { 
              show: false,//是否显示Y轴线
              lineStyle: {
                color: "#202020",//Y轴线颜色
                width: 1,//线的大小
                type: "solid"//Y轴线的类型
              }
            },
          }]
this.xLineAxis = [
  {
            data: ['09:00', '13:00', '17:00',  '21:00', '01:00', '05:00']
            ,
            name: "日期",
            axisLabel: {
              show: true,
               interval: 0,
          rotate: '45',
          color: '#c1cadf',
              textStyle: {
                color: "white",
                fontSize: 9
              }
            },
            axisLine: { 
              lineStyle: {
            color: 'transparent'
          }
          }
  }
],

this.yAxis = [           
          {
             // 坐标轴名称的文字样式
              nameTextStyle: {
                  padding: [0, 10, 0, 0]
              },
              yAxisName: ['数值'],
              yAxisType:['KMB'],
              // 坐标轴线设置
              axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#ccc'
                  }
                    },
            axisLabel: {
              show: true,
              textStyle: {
                color: "white",//这里是改变字体颜色
                fontSize: 9 //字体大小
              }
            },
            axisLine: { 
              show: false,//是否显示Y轴线
              lineStyle: {
                color: "#202020",//Y轴线颜色
                width: 1,//线的大小
                type: "solid"//Y轴线的类型
              }
            },
          }
        ];
        this.xAxis = [
          {
            data: ['2012','2013','2014','2015','2016','2017','2018']
            ,
            name: "日期",
            axisLabel: {
              show: true,
              textStyle: {
                color: "white",
                fontSize: 9
              }
            },
            axisLine: { 
              show: true,//是否显示Y轴线
              lineStyle: {
                color: "#FFFFFF",//Y轴线颜色
                width: 1,//线的大小
                type: "solid"//Y轴线的类型
              }
            },
          }
        ];
      return {
        listOne:[
          {
            id:'1',
            date:'2020-05-15 14:56',
            num:'32',
            name:'厨艺比赛'
          },
          {
            id:'2',
            date:'2020-05-10 15:32',
            num:'25',
            name:'关爱老人'
          },
          {
            id:'3',
            date:'2020-05-09 15:32',
            num:'65',
            name:'我是小棋手'
          },
          {
            id:'4',
            date:'2020-05-05 12:20',
            num:'65',
            name:'健康讲座'
          },
          {
            id:'5',
            date:'2020-05-03 16:20',
            num:'36',
            name:'乒乓球比赛'
          },
        ],
        list:[
          {
          id:'1',
          date:'2020-05-15 14:56',
          way:'华茂悦锋',
          event:'乱踩花坛'
          },
          {
          id:'2',
          date:'2020-05-10 15:32',
          way:'甬城楼',
          event:'偷井盖'
          },
          {
          id:'3',
          date:'2020-05-09 15:32',
          way:'金茂府',
          event:'漏电'
          },
          {
          id:'4',
          date:'2020-05-05 12:20',
          way:'华侨城',
          event:'违章自建'
          },
          {
          id:'5',
          date:'2020-05-03 16:20',
          way:'华侨城',
          event:'树木枯死'
          },
          {
          id:'6',
          date:'2020-05-03 16:20',
          way:'华侨城',
          event:'灯泡损坏'
          },
          {
          id:'7',
          date:'2020-05-03 16:20',
          way:'华侨城',
          event:'打翻琉璃盏'
          },
          ],
        
        
        activeIndex: '1',
        activeIndex2: '1',
         retained: {
        columns: ["留存", "未完成"],
        labelLine: {
          normal: {
            show: false
          }
        },
        rows: [{ 留存: 70, 未完成: 70 }, { 留存: 30, 未完成: 30 }]},
        
        chartData: {
          columns:['date','政务数量'],
          rows: [
            { 'date': '2012', '政务数量': 9093,},
            { 'date': '2013', '政务数量': 19530,},
            { 'date': '2014', '政务数量': 25923,},
            { 'date': '2015', '政务数量': 22723,},
            { 'date': '2016', '政务数量': 5792,},
            { 'date': '2017', '政务数量': 14593,},
            { 'date': '2018', '政务数量': 20593,}
          ]
        },
        LinecharData:{
          columns:['date','电能','水能'],
          rows:[
            { 'date': '09:00', '电能': 21093,'水能':30894},
            { 'date': '13:00', '电能': 26530,'水能':36894},
            { 'date': '17:00', '电能': 17923,'水能':23894},
            { 'date': '21:00', '电能': 8723,'水能':25894},
            { 'date': '01:00', '电能': 5792,'水能':16894},
            { 'date': '05:00', '电能': 21593,'水能':26894}
          ]
        }
      };
},
    methods: {
      deleteClick(id){
     this.tableBodyData.splice(id,1);
   },
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
}
.logo{
  float: left;
  line-height: 80px;
  width: 240px;
  height: 60px;
  background-color: rgba(42,42,42,1);
}
.el-header{
  background-color: rgba(42,42,42,1);
  height:60px !important;
}
.left{
  width: 40%;
  float: left;
  margin-right: 37.5px;
}
.right{
  width: 55%;
  float: left;
}
.el-menu-demo{
  width: 80%;
  margin-left: 240px;
}
.el-menu.el-menu--horizontal{
  border:none;
}
.card_one{
  border:1px solid rgba(50,50,50,1);
  width:100%;
background:rgba(42,42,42,1);
border-radius:8px;
}
table{
  border-collapse:collapse;
} tr{
  border: 1px solid rgba(50,50,50,1);
  background-color:rgba(42,42,42,1) ;
  border-radius: 7.5px;
  margin-bottom: 15px;
}
.biao{
  margin-top: 10px;
  margin-bottom: 30px;
  width:100%;
height:300px;
background:rgba(42,42,42,1);
border-radius:7px;
position: relative;
.lb{
  width: 50%;
  height:60%;
  background:rgba(42,42,42,1);
  position: absolute;
  top: 50%; /*偏移*/
  transform: translate(0,-50%);
  border-right: 1px solid rgba(255,255,255,0.1);
}
.rb{
  width: 50%;
  height:50%;
  padding-left:15% ;
  box-sizing: border-box;
  position: absolute;
  left:50%;
  top: 60%; /*偏移*/
  transform: translate(0,-50%);

  
}
}
.biao1{
  margin-top: 7.5px;
  width:100%;
height:300px;
background:rgba(42,42,42,1);
border-radius:7px;
position: relative;
.lb_b{
  width: 50%;
  height:60%;
  position: absolute;
  top: 50%; /*偏移*/
  transform: translate(0,-50%);
  border-right: 1px solid rgba(255,255,255,0.1);
}
.rb_b{
  width: 50%;
  height:50%;
  padding-left:15% ;
  box-sizing: border-box;
  position: absolute;
  left:50%;
  top: 60%; /*偏移*/
  transform: translate(0,-50%);

  
}
}
.sel{
  float: right;
  .el-button--primary{
    width: 270px;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    padding: 0;
    background-color:rgba(42,42,42,1);
    border-color:rgba(42,42,42,1);
    border-radius: 2px;
  }
  .el-icon--right{
    margin-left: 150px;
  }
}
.top{
  content: '';
    display: block;
    clear: both;
}
.left_box{
  width: 48%;
  float: left;
}
.first{
  margin-top: 10px;
  width:100%;
height:130px;
background:rgba(42,42,42,1);
border-radius:15px;
}
.second{
  margin-top: 10px;
  margin-right: 15px;
  float: left;
  width: 48%;

  background:rgba(42,42,42,1);
border-radius:15px;
.xia{
  margin-top:30px;
  width: 100%;
  height:60%;
  padding-top:30px;
  box-sizing: border-box;
img{
  width: 100%;
  height: 100%;
}
}

}
.third{
  margin-top: 10px;
  float: left;
  width: 48%;
  background:rgba(42,42,42,1);
border-radius:15px;
.xia{
  margin-top:30px;
  width: 100%;
  height:60%;
  padding-top:30px;
  box-sizing: border-box;
img{
  width: 100%;
  height: 100%;
}
}
}
.right_box{
  width: 48%;
  float: left;

}
.event1{
  margin-top: 350px;
}
.energy{
  margin-top:10px ;
  width:100%;
background:rgba(42,42,42,1);
box-shadow:0px 18px 30px 0px rgba(0, 0, 0, 0.05);
border-radius:8px;
img{
  width: 100%;
}
}
.car{
  margin-top:10px ;
  margin-bottom:10px;
  width:100%;
  height:150px;
  padding-top:50px;
  box-sizing: border-box;
background:rgba(42,42,42,1);
border-radius:7px;
}

.progress{
  width: 80%;
  margin: 0 auto;
  line-height: 60px;
  background:rgba(42,42,42,1);
 /deep/ .el-progress-bar__outer{
    background-color: #3f3f3f;
  }
}
.car1{
  margin-bottom:10px;
  width:100%;
  height: 150px;
  padding-top:30px;
  box-sizing: border-box;
background:rgba(42,42,42,1);
border-radius:7px;
}
.government{
  
  width:100%;
background:rgba(42,42,42,1);
box-shadow:0px 18px 30px 0px rgba(0, 0, 0, 0.05);
border-radius:8px;
}
</style>