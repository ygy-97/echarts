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
          <div class="year">
            <div class="year1" @click="changeYear(0)" :class="flag?'active':''">2020</div>
            <div class="year2" @click="changeYear(1)" :class="flag==false?'active':''">2021</div>
          </div>
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
          <div class="chart" id="chinaMap"></div>
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
      flag: '2020',
      lineData:[ [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]],
    };
  },
  computed: {},
  watch: {},
  methods: {
    //改变year
    changeYear(index) {
      // this.flag = flag;
      console.log(index)
      if(index==0){
        this.lineData = [ [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]]
      }else if(index==1){
        this.lineData = [ [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]]
      }

      this.line1();
    },

    //得到数据
    getDate(){
      let yearData = [
        {
          year: "2020", // 年份
          data: [
            // 两个数组是因为有两条线
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
          ],
        },
        {
          year: "2021", // 年份
          data: [
            // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
          ],
        },
      ];
      // this.lineData = yearData;
    },

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
      let that = this;
      let options = {
        legend: {
          textStyle: {
            color: "#4c9bfd",
          },
          // right:'10%'
        },
        tooltip: {
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
          // data: [100, 200, 300, 400, 500, 600],
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
            data: that.lineData[0],
            type: "line",
            smooth: true,
          },
          {
            name: "新增游客",
            type: "line",
            data: that.lineData[1],
            smooth: true,
          },
        ],
      };
      myEchart.setOption(options);
      window.addEventListener("resize", function () {
        myEchart.resize();
      });
    },
    // 折线图2
    line2() {
      let line2 = document.querySelector("#line2");
      let myEchart = this.$echarts.init(line2);
      let options = {
        color: ["#00f2f1", "#ed3f35"],
        boundaryGap: "false",
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "0%",
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 12,
          },
        },
        grid: {
          left: 10,
          top: 30,
          right: 10,
          bottom: 10,
          containLabel: true,
        },
        xAxis: {
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "26",
            "28",
            "29",
            "30",
          ],

          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)",
            },
          },
        },
        yAxis: {
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
        series: [
          {
            name: "邮件直销",
            type: "line",
            data: [
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              20,
              60,
              50,
              40,
            ],
            itemStyle: {},
            smooth: true,
            lineStyle: {
              width: 2,
              color: "#0184d5",
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 8,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#0184d5",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
          },
          {
            name: "联盟广告",
            type: "line",
            data: [
              130,
              10,
              20,
              40,
              30,
              40,
              80,
              60,
              20,
              40,
              90,
              40,
              20,
              140,
              30,
              40,
              130,
              20,
              20,
              40,
              80,
              70,
              30,
              40,
              30,
              120,
              20,
              99,
              50,
              20,
            ],
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)", // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)", // 渐变线的结束颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 5,
            // 设置拐点颜色以及边框
            itemStyle: {
              color: "#00d887",
              borderColor: "rgba(221, 220, 107, .1)",
              borderWidth: 12,
            },
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            smooth: true,
          },
        ],
      };
      myEchart.setOption(options);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    // 饼图1
    pie1() {
      let pie1 = document.querySelector("#pie1");
      let myEchart = this.$echarts.init(pie1);
      let options = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },

        legend: {
          // orient: 'vertical',
          left: "center",
          bottom: 0,
          itemWidth: 10,
          itemHeight: 10,
          //  data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 12,
          },
        },
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            // left:'center',
            top: "-20%",
            emphasis: {
              label: {
                // show: true,
                fontSize: "16",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1, name: "0岁以下" },
              { value: 4, name: "20-29岁" },
              { value: 2, name: "30-39岁" },
              { value: 2, name: "40-49岁" },
              { value: 1, name: "50岁以上" },
            ],
          },
        ],
      };

      myEchart.setOption(options);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    // 饼图2
    pie2() {
      let pie2 = document.querySelector("#pie2");
      let myEchart = this.$echarts.init(pie2);
      let options = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },

        legend: {
          // orient: 'vertical',
          left: "center",
          bottom: 0,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 12,
          },
        },
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff",
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["10%", "50%"],
            avoidLabelOverlap: false,
            roseType: "area",
            label: {
              show: true,
              position: "center",
            },
            center: ["50%", "40%"],
            // left:'center',
            // top: "-20%",
            labelLine: {
              show: true,
              // smooth:true
              // length:10,//连接图像
              // length2:0//连接文字
            },
            label: {
              fontSize: 10,
              // position: "center",
              // show: false,
            },
            // emphasis: {
            //   label: {
            //     fontSize: 10,
            //     position: "center",
            //     show: true,
            //   },
            // },
            data: [
              { value: 20, name: "云南" },
              { value: 26, name: "北京" },
              { value: 24, name: "山东" },
              { value: 25, name: "河北" },
              { value: 20, name: "江苏" },
              { value: 25, name: "浙江" },
              { value: 30, name: "四川" },
              { value: 42, name: "湖北" },
            ],
          },
        ],
      };

      myEchart.setOption(options);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },

    // map 地图
    chainaMap() {
      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028],
      };

      var XAData = [
        [{ name: "重庆" }, { name: "北京", value: 100 }],
        [{ name: "重庆" }, { name: "上海", value: 100 }],
        [{ name: "重庆" }, { name: "广州", value: 100 }],
        [{ name: "重庆" }, { name: "西宁", value: 100 }],
        [{ name: "重庆" }, { name: "银川", value: 100 }],
      ];

      var XNData = [
        [{ name: "重庆" }, { name: "北京", value: 100 }],
        [{ name: "西宁" }, { name: "上海", value: 100 }],
        [{ name: "西宁" }, { name: "广州", value: 100 }],
        [{ name: "广州" }, { name: "重庆", value: 100 }],
        [{ name: "西宁" }, { name: "银川", value: 100 }],
      ];

      var YCData = [
        [{ name: "银川" }, { name: "北京", value: 100 }],
        [{ name: "银川" }, { name: "广州", value: 100 }],
        [{ name: "银川" }, { name: "上海", value: 100 }],
        [{ name: "银川" }, { name: "西安", value: 100 }],
        [{ name: "银川" }, { name: "西宁", value: 100 }],
      ];

      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      //var planePath = 'arrow';
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];

          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value,
            });
          }
        }
        return res;
      };

      var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
      var series = [];
      [
        ["重庆", XAData],
        ["西宁", XNData],
        ["银川", YCData],
      ].forEach(function (item, i) {
        series.push(
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "red", //arrow箭头的颜色
              symbolSize: 3,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke",
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i],
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value,
                ]),
              };
            }),
          }
        );
      });
      let chinaMap = document.querySelector("#chinaMap");
      let myEchart = this.$echarts.init(chinaMap);
      var options = {
        tooltip: {
          trigger: "item",
          formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
              return "线路：" + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
              return (
                params.data.fromName +
                ">" +
                params.data.toName +
                "<br />" +
                params.data.value
              );
            } else {
              return params.name;
            }
          },
        },
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["重庆 Top3", "西宁 Top3", "银川 Top3"],
          textStyle: {
            color: "#fff",
          },
          selectedMode: "multiple",
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: true,
              color: "#fff",
            },
          },
          zoom: 1.2,
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "rgb(20, 41, 87,.4)",
              borderColor: "#195BB9",
              borderWidth: 1,
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
        },
        series: series,
      };
      myEchart.setOption(options);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
  },
  created() {
    this.getDate();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },

  mounted() {
    this.bar1();
    this.bar2();
    this.line1();
    this.line2();
    this.pie1();
    this.pie2();
    this.chainaMap();
  },
};
</script>



<style lang='less'>
@import "./assets/style/App.less";
</style>
