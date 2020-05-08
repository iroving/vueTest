<template>
  <div style="width: 100%;height: 100%;">
    <div style="width: 490px;height: 400px;position: absolute;top: 10%;left: 50%;margin-left: -245px;">
      <div style="text-align: center;font-weight: bold;color: #23aeff;font-size: 20px;">HIP-CDA3.2</div>
        <div style="height: 30px;"></div>

      <div style="position: absolute;">
        <div>
          <button @click="test">请求后台</button>
        </div>
        <el-test ref="test"
                 v-on:alertXXX = 'alertXXX'
                 style="background-color: #f8f7f6;height:100%"></el-test>
      </div>
    </div>


  </div>
</template>

<script>
  import test from "./test.vue";
  export default {
    name: "mainurl",
    components: {
      'el-test': test
    },
    methods : {
      test:function(){
        this.$axios({
          method: 'post',
          url: '/hip-dms/welcome/getSystem',
          data: {
            id: "1"
          }
        }).then(res => {
          if (res) {
            alert(res.data.data.data)
          }else{
            this.$message({
              message: '错误！',
              duration: '3000',
              type: 'error',
              offset: 50
            })
          }
        });
      },
      alertXXX:function(){
        alert("xxx")
      }
    }
  }
</script>

<style scoped>

</style>
