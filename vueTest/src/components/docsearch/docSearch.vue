<template>
  <div style="width: 100%;height: 100%;">
    <div id="conditionDiv" style="width: 100%; height: 82px; background-color: #5bc0de">
      <el-row :gutter="10" style="width: 100%">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row :gutter="10" style="width: 100%">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <div style="width: 100%; height: 64px; background-color: #de583c">

    </div>
    <div style="width: 100%; height: calc(100% - 164px); background-color: #45de24">
      <div style="width: 100%; height: 74px; background-color: #8a6d3b">

      </div>
      <div style="width: 100%; height: calc(100% - 114px); background-color: #298a28">

      </div>
      <div style="width: 100%; height: 40px; background-color: #8a8220">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "test",
      methods : {
        alertXXX(){
          this.$emit("alertXXX");
        }
      }
    }
</script>

<style>
  #conditionDiv:last-child {
    margin-bottom: 0;
  }
</style>
<style scoped>
  .el-row {
    margin-bottom: 10px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
