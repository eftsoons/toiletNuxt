<template>
  <div class="page">
    <h1>МЫ ДЕЛАЕМ ТЕПЛЫЕ УЛИЧНЫЕ ТУАЛЕТЫ</h1>
    <div class="photo">
      <img src="/img/tyalet2.png" loading="lazy" />
      <img src="/img/tyalet3.png" loading="lazy" />
      <img src="/img/tyalet4.png" loading="lazy" />
    </div>
    <div class="description">
      <span>Теплый корпус до -40°</span>
      <span>Экономичный смыв 0,5 - 1л</span>
      <span>Установка за 1 день под ключ</span>
    </div>
    <span class="description2">
      Новейшая модель уличного туалета, создана для максимального комфорта и
      гигиены в любое время года
    </span>
    <Button
      :styles="{
        width: '215px',
        marginBottom: '40px',
      }"
      >Узнать больше</Button
    >
  </div>
</template>
<style scoped>
.page {
  background-color: rgba(231, 223, 215, 1);
  height: 547px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 40px;
    font-weight: 500;
    font-family: Druk Cyr;
    color: rgba(142, 128, 114, 1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
    text-align: center;
  }

  .photo {
    display: flex;
    height: 220px;

    img:nth-child(1) {
      transform: rotate(-20deg) translateX(15px) translateY(20px);
    }

    img:nth-child(2) {
      z-index: 1;
    }

    img:nth-child(3) {
      transform: rotate(20deg) translateX(-15px) translateY(20px);
    }

    img {
      width: 121px;
      height: 190px;
      border-radius: 10px;
    }
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-family: VK Sans Display;
      font-size: 13px;
      color: rgba(0, 0, 0, 1);
      font-weight: 500;
    }
  }

  .description2 {
    text-align: center;
    font-family: VK Sans Display;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    padding: 0 2rem;
  }
}
</style>
