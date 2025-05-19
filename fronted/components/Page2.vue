<template>
  <div itemscope itemtype="http://schema.org/Product" class="page">
    <h1>НАШЕ РЕШЕНИЕ</h1>
    <div itemprop="image" class="photo">
      <img src="/img/tyalet13.webp" />
      <img src="/img/tyalet12.webp" />
      <img src="/img/tyalet4.webp" />
    </div>
    <span itemprop="description" class="description">
      Новейшая модель уличного туалета, создана для максимального комфорта и
      гигиены в любое время года
    </span>
    <ul itemprop="description">
      <li itemprop="description">Теплый корпус выдерживает до -40°</li>
      <li itemprop="description">Бочка обеспечивает 200-300 смывов</li>
      <li itemprop="description">Установка под ключ за 1 день</li>
      <li itemprop="description">Экономичный смыв 0,2 - 0,5л</li>
      <li itemprop="description">Откачка до 10 раз реже!</li>
    </ul>
    <div class="buttoninfo">
      <div class="action">
        <span>Цена по акции:</span>
        <div>
          <span class="minus">120.000₽</span>
          <span>90.000₽*</span>
        </div>
      </div>
      <Button
        @click="setactive"
        :styles="{
          width: '70%',
        }"
        >Рассчитать стоимость</Button
      >
    </div>
    <div class="description2">
      <span>*Стоимость доставки и установки рассчитывается отдельно</span>
      <span>**Акция длится до 31.03.2025г.</span>
    </div>
  </div>
</template>
<script>
export default {
  props: { setactive: { type: Function, required: true } },
};
</script>
<style scoped>
.page {
  background-color: rgba(231, 223, 215, 1);
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 0 0 20px 0;

  .buttoninfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12.5px;
  }

  .description2 {
    font-family: "VK Sans Display";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    flex-direction: column;

    color: #000000;
  }

  .minus {
    color: rgba(61, 50, 50, 0.56) !important;
    text-decoration-line: line-through;
  }

  .action {
    background-color: rgba(236, 201, 111, 1);
    border-radius: 25px;
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    font-family: "VK Sans Display";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    padding: 10px 0;
    gap: 10px;

    /* Rectangle 12 */

    border: 1px solid #c1bfbf;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    div {
      display: flex;
      flex-direction: column;
    }

    span {
      color: rgba(61, 50, 50, 1);
    }
  }

  h1 {
    font-size: 40px;
    font-weight: 500;
    font-family: Druk Cyr;
    color: rgba(142, 128, 114, 1);
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

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;

    li {
      font-family: VK Sans Display;
      font-size: 16px;
      color: rgba(0, 0, 0, 1);
      font-weight: 500;
    }

    li::after,
    li::before {
      font-family: "Font Awesome 5 Free"; /* Укажите шрифт иконок */
      content: "•"; /* Код иконки (например, круг) */
      font-size: 16px;
      color: #000;
      margin: 0 8px;
    }
  }

  .description {
    font-family: "VK Sans Display";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #000000;
    padding: 0 1rem;
  }
}
</style>
