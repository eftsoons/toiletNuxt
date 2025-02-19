<template>
  <div class="page">
    <div class="content">
      <span style="font-size: 90px">ТЕПЛЫЕ</span>
      <span style="font-size: 80px">УЛИЧНЫЕ</span>
      <span style="font-size: 100px">ТУАЛЕТЫ</span>
    </div>
    <img src="/img/tyalet1.png" loading="lazy" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
  }

  span {
    font-family: Druk Cyr;
    color: rgba(90, 83, 78, 1);
    z-index: 1;
    margin-left: 27px;
  }

  img {
    width: 251px;
    height: 335px;
    position: absolute;
    right: -38px;
  }
}
</style>
