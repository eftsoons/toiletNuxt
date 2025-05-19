<template>
  <div itemscope itemtype="http://schema.org/Product" class="page">
    <div>
      <div itemprop="additionalType" class="text">
        <strong><span style="font-size: 98px">ТЕПЛЫЕ</span></strong>
        <strong><span style="font-size: 88px">УЛИЧНЫЕ</span></strong>
      </div>
      <div class="photo">
        <img itemprop="image" src="/img/tyalet1.webp" />
      </div>
    </div>
    <strong
      ><span itemprop="additionalType" style="font-size: 138px"
        >ТУАЛЕТЫ</span
      ></strong
    >
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin-left: 26px;

  div {
    display: flex;
  }

  .photo {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  span {
    font-family: Druk Cyr;
    color: rgba(90, 83, 78, 1);
    font-weight: 500;
    z-index: 1;
  }

  img {
    /* FRONT BEZ FONA */

    width: 170.25px;
    height: 227px;
  }
}
</style>
