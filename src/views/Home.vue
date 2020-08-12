<template>
  <div class="home">
    <div id= 'echarts'>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      option:{},
    }
  },
  mounted(){
    let myChar = this.$echarts.init(document.getElementById('echarts'));
    let option = {
      title:{
        text:'demo',
        
      },
      tooltip:{},
      legend:{
        data:['销量']
      },
      xAxis:{
        data:['1','2','3','4']
      },
      yAxis:{},
      series:[
        {
          name:'sole',
          type:'line',
          data:[11,223,44,55]
        }
      ]
    }
    myChar.setOption(option);

  }
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
#echarts{
  width: 50%;
  height: 50%;
}
</style>
