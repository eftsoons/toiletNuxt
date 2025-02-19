<template>
  <div class="page5">
    <div class="content">
      <h4>Часто задаваемые вопросы</h4>
      <div class="content2">
        <img src="/img/tyalet13.jfif" loading="lazy" />
        <div class="infocontent">
          <h5>Сколько будет стоить доставка?</h5>
          <p>Стоимость доставки будет зависеть от удаленности</p>
          <h5>Как будет происходить установка?</h5>
          <h5>Демонтаж старого туалета</h5>
          <h5>Можно ли установить на старую яму?</h5>
          <h5>Сколько будет стоить установка?</h5>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 430 386" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M402.128 17.2184C412.55 4.39689 427.403 -1.11236 441.634 0.690636V349.413C425.375 347.642 408.515 354.071 396.625 368.699C378.352 391.181 346.451 391.181 328.178 368.699C306.966 342.602 269.935 342.602 248.723 368.699C230.451 391.181 198.549 391.181 180.277 368.699C159.065 342.602 122.034 342.602 100.822 368.699C82.5493 391.181 50.6482 391.181 32.3753 368.699C20.4854 354.071 3.62473 347.642 -12.634 349.413V0.690607C1.5965 -1.11237 16.4504 4.3969 26.8716 17.2184C48.0831 43.3154 85.1144 43.3154 106.326 17.2184C124.599 -5.2632 156.5 -5.2632 174.773 17.2184C195.984 43.3154 233.016 43.3154 254.227 17.2184C272.5 -5.2632 304.401 -5.2632 322.674 17.2184C343.886 43.3154 380.917 43.3154 402.128 17.2184Z"
        fill="#655D56"
      />
    </svg>
  </div>
</template>
<style scoped>
.page5 {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: visible;
  margin-top: 30px;

  svg {
    position: absolute;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 9px;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
  }

  .content2 {
    display: flex;
    gap: 30px;
    height: 100%;
    width: 100%;
    justify-content: center;

    p {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 400;
      font-size: 9px;
      line-height: 11px;
      color: #fbf6f1;
      margin-left: 6px;
    }

    img {
      width: 140px;
      height: 171px;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  .infocontent {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
