<template>
  <div class="page">
    <span style="font-size: 90px">ТЕПЛЫЕ</span>
    <span style="font-size: 80px">УЛИЧНЫЕ</span>
    <span style="font-size: 100px">ТУАЛЕТЫ</span>
    <img src="/public/img/tyalet1.png" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 335px;
  overflow: hidden;

  span {
    font-family: Druk Cyr;
    color: rgba(90, 83, 78, 1);
    z-index: 1;
  }

  img {
    width: 251px;
    height: 335px;
    position: absolute;
    right: -35px;
  }
}
</style>
