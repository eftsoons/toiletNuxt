<template>
  <div itemscope itemtype="http://schema.org/Product" class="page4">
    <div itemprop="additionalType" class="menu">
      <h3>УСТАНОВКА В СБОРЕ</h3>
      <p>Замер и подготовка ямы</p>
      <p>Установка кран-бортом</p>
      <p>Подключение и ввод в эксплуатацию</p>
    </div>
    <div>
      <div class="gap" />
    </div>
    <div itemprop="additionalType" class="menu">
      <h3>СБОРКА НА МЕСТЕ</h3>
      <p>Замер и подготовка ямы</p>
      <p>Доставка и сборка по частям</p>
      <p>Подключение и ввод в эксплуатацию</p>
    </div>
  </div>
</template>
<style scoped>
.page4 {
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  gap: 15px;

  p {
    font-family: VK Sans Display;
    font-weight: 500;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    width: 100%;
  }

  .gap {
    background-color: rgba(0, 0, 0, 0.5);
    width: 0.5px;
    height: 100%;
    border-radius: 0.5px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .menu {
    width: 100%;
    display: flex;
  }
}
</style>
