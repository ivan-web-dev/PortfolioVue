<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <img src="@/assets/images/mywork.svg" alt="" class="logo" />
        <ul class="header__list">
          <li><a href="#" class="header__link link">About me</a></li>
          <li><a href="#projects" class="header__link link">Works</a></li>
          <my-btn text="to order"></my-btn>
          <li class="header__phone">
            <a href="#footer" class="header__link link">
              <img src="@/assets/images/Vector.svg" alt="" />
            </a>
          </li>
        </ul>
        <div class="mobile-menu">
          <div class="mobile-menu__content">
            <span class="bars"></span>
          </div>
        </div>
        <ul class="header__list header-mobile__list header-mobile__list_no-show">
          <li><a href="#" class="header__link link">About me</a></li>
          <li><a href="#projects" class="header__link link">Works</a></li>
          <my-btn text="to order"></my-btn>
          <li class="header__phone">
            <a href="#footer" class="header__link link">
              <img src="@/assets/images/Vector.svg" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import MyBtn from "@/components/UI/button-link.vue";
export default {
  components: {
    MyBtn,
  },
  data() {
    return {
      headerStatus: false,
    };
  },
  mounted() {
    let headerStatus = this.headerStatus;
    function clickHandler() {
      let headerMenu = document.querySelector(".mobile-menu");
      let headerMobileList = document.querySelector(".header-mobile__list");

      headerMenu.addEventListener("click", (event) => {
        if (headerStatus) {
          headerStatus = false;
          headerMobileList.classList.add("header-mobile__list_no-show");
        } else {
          headerStatus = true;
          headerMobileList.classList.remove("header-mobile__list_no-show");
        };
        
        console.log(headerStatus);
      });
    }; clickHandler();
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--blackColor);
}
.header__nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.header__list {
  display: flex;
  align-items: center;
  gap: 30px;
}
.header__phone {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-left: 30px;
}
/* burger menu */
.mobile-menu {
  display: none;
  justify-content: center;
  align-items: center;
  min-height: 40px;
}
.mobile-menu__content {
  height: 30px;
  background: var(--whiteColor);
  padding: 20px 15px;
  border-radius: 10px;
}
.header-mobile__list {
  display: none;
}
.bars {
  display: block;
  position: relative;
  width: 25px;
  height: 2px;
  background: var(--primaryColor);
  transition: 0.5s;
  top: 0;
}
.bars::before,
.bars::after {
  content: "";
  display: block;
  background: var(--primaryColor);
  width: 100%;
  height: 2px;
  position: absolute;
  transition: 0.5s;
}
.bars::before {
  top: -7px;
}
.bars::after {
  top: 7px;
}
@media (max-width: 1155px) {
  .container {
    padding: 0 15px;
  }
}
@media (max-width: 768px) {
  .header__nav {
    flex-wrap: wrap;
  }
  .header__list {
    display: none;
  }
  .mobile-menu {
    display: flex;
  }
  .header-mobile__list {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 30px;
    transition: 0.5s;
    top: 40px;
    left: 0;
    padding-left: 20px;
    padding-bottom: 20px;
    background: var(--blackColor);
  }
  .header-mobile__list_no-show{
    left: -1000px;
  }
  .header__phone {
    margin-left: 0;
  }
}
</style>