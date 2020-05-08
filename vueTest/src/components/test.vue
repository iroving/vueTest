<template>
  <div style="width: 100%;height: 100%;">
      <div>
        <button @click="alertXXX">调用父方法</button>
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

<style scoped>

</style>
