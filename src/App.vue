<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->

    <nav>
      <h2>可视化-echarts</h2>
      <div class="time">当前时间：{{time}}</div>
    </nav>
    <main>
      <div class="left">
        <div class="panel bar">
          <h2 class="title">柱状图-就业行业</h2>
          <div class="chart" id="bar1"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2 class="title">折线图-人员变化</h2>
          <div class="chart" id="line1"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2 class="title">饼图-年龄分布</h2>
          <div class="chart" id="pie1"></div>
          <div class="panel-footer"></div>
        </div>
      </div>

      <!-- center -->
      <div class="center">
        <div class="top">
          <div class="num">
            <div class="text">125811</div>
            <div class="text">104563</div>
          </div>
          <div class="desc">
            <div class="text">前端需求人数</div>
            <div class="text">市场供应人数</div>
          </div>
        </div>
        <div class="map">
          <div class="chart"></div>
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
        </div>
      </div>

      <!-- right -->
      <div class="right">
        <div class="panel bar">
          <h2 class="title">柱状图-技能掌握</h2>
          <div class="chart" id="bar2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2 class="title">折线图-播放量</h2>
          <div class="chart" id="line2"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2 class="title">饼图-地区分布</h2>
          <div class="chart" id="pie2"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    // time
    getTime() {
      let date = new Date();
      let day = date.toLocaleDateString();
      let hour = date.getHours();
      let minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      let second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      this.time = day + " " + hour + ":" + minute + ":" + second;
    },

    // 柱状图1
    bar1() {
      let bar1 = document.querySelector("#bar1");
      let myEchart = this.$echarts.init(bar1);
      let options = {
        // title: {
        //   //标题
        //   text: "hello",
        // },

        // 提示
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        //下载
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },

        //线条颜色
        color: ["#2f89cf"],
        //网格
        grid: {
          left: "0%",
          top: "10px",
          right: "2%",
          bottom: "4%",
          containLabel: true,
        },
        // 图例
        // legend: {
        //   data: ["销量"],
        // },

        xAxis: {
          // type:'value',
          // boundaryGap:false,//间隙
          data: [
            "旅游行业",
            "教育培训",
            "游戏行业",
            "医疗行业",
            "电商行业",
            "社交行业",
            "金融行业",
          ],
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12",
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          // data: [300, 600, 900, 1200, 1500],
          axisLabel: {
            //刻度标签样式
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
            },
          },
          splitLine: {
            //y轴分割线
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
        series: [
          {
            name: "销量",
            // stack: "xx",
            barWidth: "30%",
            type: "bar",
            itemStyle: {
              barBorderRadius: 5,
            },
            data: [200, 300, 300, 900, 1500, 1200, 600],
          },
        ],
      };
      myEchart.setOption(options);
      window.addEventListener("resize", function () {
        myEchart.resize();
      });
    },
    // 柱状图2
    bar2() {
      let bar2 = document.querySelector("#bar2");
      let myEchart = this.$echarts.init(bar2);
      let options = {
        grid: {
          top: "10%",
          left: "2%",
          right: "0%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          // boundaryGap: [0, 0.01],
          show: false,
        },
        yAxis: [
          {
            type: "category",
            data: ["Html5", "css3", "js", "node", "vue"],
            axisLine: {
              show: false,
            },
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
            },
          },
          {
            type: "category",
            data: ["100", "100", "100", "100", "100"],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
            },
          },
        ],
        // color: ["#1089E7"],
        series: [
          {
            yAxisIndex: 0,
            name: "条",
            type: "bar",
            barWidth: "12",
            barCategoryGap: 150,
            itemStyle: {
              barBorderRadius: 20,
              color: function (e) {
                let arr = [
                  "#1089E7",
                  "#F57474",
                  "#56D0E3",
                  "#F8B448",
                  "#8B78F6",
                ];
                console.log(e);
                return arr[e.dataIndex];
              },
            },
            label: {
              show: true,
              position: "inside",
              formatter: "{c}%",
            },
            data: [48.2, 48.9, 90.3, 97.0, 74.4],
          },
          {
            yAxisIndex: 1,
            name: "框",
            type: "bar",
            barWidth: "15",
            barCategoryGap: 50,
            itemStyle: {
              color: "none",
              barBorderRadius: 20,
              borderColor: "#1089E7",
              borderWidth: 3,
            },
            data: [100, 100, 100, 100, 100, 100],
          },
        ],
      };

      myEchart.setOption(options);
      window.addEventListener("resize", function () {
        myEchart.resize();
      });
    },
    // 折线图1
    line1() {
      let line1 = document.querySelector("#line1");
      let myEchart = this.$echarts.init(line1);
      let options = {
        legend: {
          textStyle: {
            color: "#4c9bfd",
          },
          // right:'10%'
        },
        tooltip:{
           trigger: "axis",
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: "#4c9bfd", //文字颜色
          },
          axisLine: {
            show: false, //x轴线
          },
          axisTick: {
            show: false, //刻度
          },
          boundaryGap: false, //去除轴内间距
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true, // 包含刻度文字在内
        },
        yAxis: {
          type: "value",
          data: [100, 200, 300, 400, 500, 600],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#4c9bfd",
          },
          splitLine: {
            lineStyle: {
              color: "#012f4a",
            },
          },
        },
        color: ["#00f2f1", "#ed3f35"],
        series: [
          {
            name: "新增粉丝",
             data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: "line",
            smooth: true,
          },
          {
            name: "新增游客",
            type: "line",
             data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],  
            smooth:true
          },
        ],
      };
      myEchart.setOption(options);
      window.addEventListener("resize", function () {
        myEchart.resize();
      });
    },
  },
  created() {
    setInterval(() => {
      this.getTime();
    }, 1000);
  },

  mounted() {
    this.bar1();
    this.bar2();
    this.line1();
  },
};
</script>



<style lang='less'>
@import "./assets/style/App.less";
</style>
