<template>
  <div class="page3">
    <div class="menu">
      <div>
        <img class="imgtype1" src="/img/tyalet5.webp" />
      </div>
      <div
        style="
          height: 208px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
        <div class="textblock">
          <h3>ЭЛЕКТРООБОРУДОВАНИЕ</h3>
          <p style="font-size: 13px">
            Обогреватель с регулятором 500Вт Вводной автомат 10А Диодное
            освещение 10Вт Двойная розетка 220В Медная проводка проводка с
            заземлением 1.5мм²
          </p>
        </div>
      </div>
      <div>
        <Buttonimg
          :images="[
            '/img/tyalet8.webp',
            '/img/tyalet13.webp',
            '/img/tyalet14.gif',
          ]"
        />
      </div>
      <div style="height: 192px">
        <div class="textblock">
          <h3>СИСТЕМА СМЫВА</h3>
          <p style="font-size: 13px">
            В туалете предусмотрена очень экономичная система смыва. Расход
            0.2-1л за смыв Емкость 80л обеспечивает около 200-300 смывов.
          </p>
        </div>
      </div>
      <div>
        <img class="imgtype2" src="/img/tyalet9.webp" />
      </div>
      <div>
        <img class="imgtype1" src="/img/tyalet10.webp" />
      </div>
    </div>
    <div class="menu">
      <div style="height: 434px">
        <div class="textblock">
          <h3>ТЕПЛЫЙ КОРПУС</h3>
          <p>
            Основание из лиственницы, обработанной биозащитным раствором Толщина
            стен с утеплителем 68мм Корпус обработан антисептиком Задний съемный
            люк для откачки отходов Крыша покрыта ондулином Детали герметично
            склеены между собой
          </p>
        </div>
        <Buttonimg :images="['/img/tyalet12.webp', '/img/tyalet6.webp']" />
      </div>
      <div>
        <img class="imgtype2" src="/img/tyalet7.webp" />
      </div>
      <div>
        <img class="imgtype1" src="/img/tyalet9.webp" />
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 208px;
        "
      >
        <div class="textblock">
          <h3>ВЕНТИЛЯЦИЯ</h3>
          <p>
            Встроенный в стену анемостат обеспечивает эффективную вентиляцию
            внутри помещения Вентиляция выгребной ямы предотвращает гниение
            основания
          </p>
        </div>
      </div>
      <div>
        <Buttonimg :images="['/img/tyalet14.webp', '/img/tyalet15.webp']" />
      </div>
      <div>
        <div class="textblock">
          <h3>КОМПЛЕКТАЦИЯ</h3>
          <p>
            Унитаз гравитационного типа с системой смыва Освещение и розетки
            Раковина с рукомойником Обогреватель Бочка для подачи воды
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buttonimg from "./Buttonimg.vue";

export default { components: { Buttonimg } };
</script>

<style scoped>
.page3 {
  display: flex;
  justify-content: space-between;
  padding: 0 19px;
  gap: 32px;

  p {
    font-family: VK Sans Display;
    color: rgba(0, 0, 0, 1);
    font-size: 11px;
    font-weight: 500;
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
  width: 100%;
  height: 434px;
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
