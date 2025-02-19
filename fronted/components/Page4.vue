<template>
  <div class="page4">
    <div class="menu">
      <h3>УСТАНОВКА В СБОРЕ</h3>
      <p>Замер и подготовка ямы</p>
      <p>Установка кран-бортом</p>
      <p>Подключение и ввод в эксплуатацию</p>
    </div>
    <div>
      <div class="gap" />
    </div>
    <div class="menu">
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
  width: 100%;
  gap: 20px;

  p {
    font-family: VK Sans Display;
    font-weight: 500;
    font-size: 13px;
    color: rgba(0, 0, 0, 1);
    width: 100%;
    text-align: center;
  }

  .gap {
    background-color: rgba(0, 0, 0, 0.5);
    width: 0.5px;
    height: 156px;
    border-radius: 0.5px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .menu {
    width: 100%;
  }
}
</style>
