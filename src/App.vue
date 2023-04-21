<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="header__logo" to="/">
          <img src="../src/assets/img/logo.svg" alt="logo">
        </router-link>
        <div class="header__block">
          <div class="location">
            <div class="location__img">
              <img src="../src/assets/img/location.svg" alt="location">
            </div>
            <div class="location__text">
              {{ location }}
            </div>
          </div>
          <div class="notification" v-if="burgerMenuIsHide">
            <span class="notification-count"></span>
            <div class="notification__img">
              <img src="../src/assets/img/notification.svg" alt="notification">
            </div>
          </div>
          <div
            v-if="burgerMenuIsHide"
            class="burger"
            @click="ShowBurgerMenu">
            <img src="../src/assets/img/burger.svg" alt="burger">
          </div>
          <div
            v-if="!burgerMenuIsHide"
            class="close-btn"
            @click="HideBurgerMenu">
            <img src="../src/assets/img/close.svg" alt="close-btn">
          </div>
        </div>
      </div>
    </div>
    <div
      class="header__burger-menu"
      :class="{header__nav_active : burgerMenuIsHide == false}"
    >
      <ul class="header__burger-list">
        <li class="header__burger-item" @click="HideBurgerMenu">          
          <router-link to="/privilege">
            Преимущества Теle2
          </router-link>
        </li>
        <li class="header__burger-item" @click="HideBurgerMenu">          
          <router-link to="/tariffs">
            Тарифы
          </router-link>
        </li>
        <li class="header__burger-item" @click="HideBurgerMenu">          
          <router-link to="/promotions">
            Акции и спецпредложения
          </router-link>
        </li>
        <li class="header__burger-item" @click="HideBurgerMenu">          
          <router-link to="/promotariff">
            Промотариф Tele2
          </router-link>
        </li>
        <li class="header__burger-item" @click="HideBurgerMenu">          
          <router-link to="/esim">
            Технология eSIM
          </router-link>
        </li>
        <li class="header__burger-item" @click="HideBurgerMenu">          
          <router-link to="/new">
            Подключение нового абонента
          </router-link>
        </li>
      </ul>
      <div class="header__burger-location">
        <div class="header__burger-img">
          <img src="../src/assets/img/location.svg" alt="loc">
        </div>
        <div class="header__burger-text">
          {{ location }}
        </div>
      </div>
    </div>
  </header>
  <div class="navbar">
    <div class="container">
      <div class="navbar__menu">
        <router-link to="/privilege">
          <div class="navbar__item">
            Преимущества Tele2
          </div>
        </router-link>
        <router-link to="/tariffs">
          <div class="navbar__item">
            Тарифы
          </div>
        </router-link>
        <router-link to="/promotions">
          <div class="navbar__item">
            Акции и спецпредложения
          </div>
        </router-link>
        <router-link to="/promotariff">
          <div class="navbar__item">
            Промотариф Tele2
          </div>
        </router-link>
        <router-link to="/esim">
          <div class="navbar__item">
            Технология eSIM
          </div>
        </router-link>
        <router-link to="/new">
          <div class="navbar__item">
            Подключение нового абонента
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const burgerMenuIsHide = ref(true)
    const store = useStore()
    const location = store.getters.getLocation
    
    function ShowBurgerMenu() {
      burgerMenuIsHide.value = false
    }
    function HideBurgerMenu() {
      burgerMenuIsHide.value = true
    }
    return {
      burgerMenuIsHide,
      location,
      ShowBurgerMenu,
      HideBurgerMenu
    }
  }
}
</script>

<style lang="scss" scoped>

.header{
  background-color: #1F2229;
  .header__inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    .header__logo{
      width: 59px;
      height: auto;
    }
    .header__block{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .location{
        display: flex;
        column-gap: 14px;
        margin-right: 32px;
        .location__img{
          flex-shrink: 0;
          width: 13px;
          height: auto;
        }
        .location__text{
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #7C8792;
        }
        &:hover{
          cursor: pointer;
        }
      }
      .notification{
        position: relative;
        .notification__img{
          width: 18px;
          height: auto;
          animation: bell 1s 2s both infinite;
        }
        .notification-count {
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          width: 10px;
          height: 10px;
          line-height: 30px;
          font-size: 18px;
          border-radius: 50%;
          background-color: #3FCBFF;
          border: 2px solid black;
          color: #fff;
          animation: zoom 3s 3s both infinite;
        }
      }
      .burger{
        width: 18px;
        height: auto;
        margin-left: 18px;
        display: none;
      }
      .close-btn{
        width: 24px;
        height: auto;
      }
    }
  }
  .header__burger-menu {
    position: fixed;
    width: 100vw;
    top: 45px;
    right: 0;
    bottom: 0;
    background-color: #F5F5F5;
    z-index: 10;
    padding: 24px 0 60px 15px;
    transform: translateX(100%);
    transition: .2s all linear;
    &.header__nav_active{
      transform: translateX(0);
      overflow-y: hidden;
    }
    .header__burger-list{
      max-width: 100%;
      margin-right: 20px;
      .header__burger-item {
        margin-right: 0;
        margin-bottom: 24px;
        list-style-type: none;
        a{
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          text-decoration: none;
          color: #959597;
        }
      }
    }
    .header__burger-location{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 8.5px;
      position: absolute;
      bottom: 16px;
      left: 15px;
      .header__burger-img{
        width: 15px;
        height: auto;
      }
      .header__burger-text{
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #959597;
      }
    }
  }
}
.navbar {
  padding: 0;
  box-sizing: border-box;
  height: 47px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .navbar__menu {
    list-style: none;
    display: flex;
    column-gap: 18px;
    border-bottom: 1px solid #D3D9DF;
    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #7C8792;
      text-decoration: none;
      flex-shrink: 0;
      .navbar__item{
        height: 47px;
        padding: 15px 0 14px 0;
        vertical-align: middle;
      }
      &:hover, &.active {
        color: #1F2229;
        // border-bottom: 2px solid #1F2229;
        position: relative;
        &::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: #1F2229;
        }
      }
    }    
  }
}
@media (max-width: 375px) {
  .header{
    height: 45px;
    .header__inner{
      padding: 10px 0;
      .header__block{
        .burger{
          display: block;
        }
        .location{
          display: none;
        }
      }
    }
  }
  .navbar{
    display: none;
  }
}
</style>
