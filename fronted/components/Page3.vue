<template>
  <div itemscope itemtype="http://schema.org/Product" class="page3">
    <div class="content">
      <h3>ТЕПЛЫЙ КОРПУС</h3>
      <img
        @click="
          setdata([
            '/img/tyalet12.webp',
            '/img/tyalet5.webp',
            '/img/tyalet4.webp',
          ])
        "
        class="imgtype1"
        src="/img/tyalet12.webp"
      />
      <ul itemprop="additionalType">
        <li>Основание из лиственницы, обработанной биозащитным раствором</li>
        <li>Толщина стен с утеплителем 68мм</li>
        <li>Корпус обработан антисептиком</li>
        <li>Задний съемный люк для откачки отходов</li>
        <li>Крыша покрыта ондулином</li>
        <li>Детали герметично склеены между собой</li>
      </ul>
    </div>
    <div class="content">
      <h3>ЭЛЕКТРООБОРУДОВАНИЕ</h3>
      <img
        itemprop="image"
        @click="setdata(['/img/tyalet7.webp', '/img/tyalet18.webp'])"
        class="imgtype1"
        src="/img/tyalet7.webp"
      />
      <ul itemprop="additionalType">
        <li>
          Предусмотрено освещение и две розетки, позволяющие подключить
          различные приборы
        </li>
        <li>
          В помещении установлен обогреватель, который поддерживает оптимальную
          температуру в любое время года.
        </li>
      </ul>
    </div>
    <div class="content">
      <h3>СИСТЕМА СМЫВА</h3>
      <img
        class="imgtype1"
        src="/img/tyalet19.webp"
        itemprop="image"
        @click="
          setdata([
            '/img/tyalet19.webp',
            '/img/tyalet13.webp',
            '/img/tyalet17.webp',
            '/img/tyalet16.webp',
          ])
        "
      />
      <ul itemprop="additionalType">
        <li>
          Экономичная система смыва (0,2-0,5л за смыв) в сочетании с бочкой
          (90л), обеспечивает автономность работы туалета
        </li>
        <li>
          Полный бак обеспечивает 200 - 300 смывов, исключаяя необходимость
          частой заправки.
        </li>
        <li>
          Это не только экономит воду, но и значительно упрощает обслуживание
          туалета.
        </li>
      </ul>
    </div>
    <div class="content">
      <h3>ВЕНТИЛЯЦИЯ</h3>
      <img
        itemprop="image"
        @click="setdata(['/img/tyalet99.webp', '/img/tyalet21.webp'])"
        class="imgtype1"
        src="/img/tyalet99.webp"
      />
      <ul itemprop="additionalType">
        <li>Вентиляция эффективно устраняет неприятные запахи</li>
        <li>
          Предотвращает появление насекомых и обеспечивает свежий воздух в
          помещении
        </li>
      </ul>
    </div>
    <div class="content">
      <h3>КОМПЛЕКТАЦИЯ</h3>
      <img
        @click="
          setdata([
            '/img/tyalet10.webp',
            '/img/tyalet14.webp',
            '/img/tyalet22.webp',
          ])
        "
        class="imgtype1"
        src="/img/tyalet10.webp"
      />
      <ul itemprop="additionalType">
        <li>Гравитационный унитаз с педальным смывом</li>
        <li>Освещение и 2 розетки 220В</li>
        <li>Раковина с рукомойником</li>
        <li>Обогреватель</li>
        <li>Бочка для подачи воды 90л</li>
        <li>Термометр</li>
        <li>3D Коврик</li>
        <li>Крючки для одежды и полотенца</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Buttonimg from "./Buttonimg.vue";

export default {
  components: { Buttonimg },
  props: { setdata: { type: Function, required: true } },
};
</script>

<style scoped>
.page3 {
  display: flex;
  flex-direction: column;
  padding: 0 19px;
  gap: 50px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;

    p {
      font-family: VK Sans Display;
      color: rgba(0, 0, 0, 1);
      font-size: 11px;
      font-weight: 500;
    }

    img {
      width: 320px;
      height: 432px;
      border-radius: 10px;
    }

    li {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      line-height: 24px;

      color: #000000;
    }

    ul {
      width: 80%;
    }
  }
}

.menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 33px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    box-sizing: border-box;
  }
}

.textblock {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
}

.imgtype1 {
  width: 324px;
  height: 432px;

  border-radius: 10px;
  object-fit: cover;
}

.imgtype2 {
  width: 100%;
  height: 208px;
  border-radius: 10px;
  object-fit: cover;
}
</style>
