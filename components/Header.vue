<template>
  <header>
    <div>
      <div class="callheader">
        <button>Заказать звонок</button>
        <span>Пн-вс: с 9:00 до 20:00</span>
        <div class="headerborder" />
      </div>
      <div class="logoheader">
        <img class="logo" src="/img/logo.png" />
        <div>
          <img class="telephoneicon" src="/img/telephone.png" />
          <span>272-72-72</span>
        </div>
        <span>+7 (967) 612-72-72</span>
      </div>
    </div>
  </header>
  <svg viewBox="0 0 430 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_76_136)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-22 0H455V109.996L428.76 139.442C414.307 155.662 386.693 155.662 372.24 139.442C354.984 120.078 322.016 120.078 304.76 139.442C290.307 155.662 262.693 155.662 248.24 139.442C230.984 120.078 198.016 120.078 180.76 139.442C166.307 155.662 138.693 155.662 124.24 139.442C106.984 120.078 74.0157 120.078 56.7602 139.442C42.3072 155.662 14.693 155.662 0.240005 139.442L-22 114.484V0Z"
        fill="#655D56"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_76_136"
        x="-26"
        y="0"
        width="485"
        height="159.607"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_76_136"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_76_136"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<style scoped>
.logo {
  height: 30px;
  width: 68.4px;
  border-radius: 4px;
}

.callheader {
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;

  span {
    margin-left: 8px;
    font-family: "VK Sans Display";
    font-size: 16px;
    font-weight: 500;
    color: rgba(251, 246, 241, 1);
  }

  button {
    border: 1px solid rgba(251, 246, 241, 1);
    background: none;
    color: rgba(251, 246, 241, 1);
    font-family: VK Sans Display;
    font-size: 16px;
    font-weight: 700;
    width: 140px;
  }
}

.logoheader {
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 100%;
  margin-top: 5px;
  gap: 5px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  span {
    font-family: VK Sans Display;
    font-size: 12px;
    font-weight: 700;
    color: rgba(251, 246, 241, 1);
  }

  div {
    span {
      font-family: VK Sans Display;
      font-size: 15px;
      font-weight: 600;
      color: rgba(251, 246, 241, 1);
    }
  }
}

.telephoneicon {
  width: 25px;
  height: 25px;
}

.headerborder {
  position: absolute;
  width: 97 px;
  height: 0.5px;
  background-color: rgba(251, 246, 241, 1);
  transform: translateY(-35px) translateX(150%);
}
</style>
