<template>
  <section class="capabilities">
    <div class="container">
      <div class="capabilities__content">
        <h2 class="capabilities__title title">capabilities</h2>
        <div class="capabilities__blocks">
          <div class="accordion">
            <div class="accordion__item accordion__item_active">
              <div class="accordion__header">
                <div class="accordion__header_start">
                  <img
                    src="@/assets/images/html.png"
                    alt=""
                    class="accordion-image"
                  />
                  <h3 class="accordion__title title">HTML</h3>
                </div>
                <div class="accordion__header_end">
                  <div class="arrow"></div>
                </div>
              </div>
              <div class="accordion__body accordion__body_active">
                <p class="accordion__descr">In my work I use the 5th version of html. developed PDF on the libraries vkhtmltopdf and dompdf. I use the BEM methodology.</p>
              </div>
            </div>
            <div class="accordion__item">
              <div class="accordion__header">
                <div class="accordion__header_start">
                  <img
                    src="@/assets/images/css.png"
                    alt=""
                    class="accordion-image"
                  />
                  <h3 class="accordion__title title">CSS</h3>
                </div>
                <div class="accordion__header_end">
                  <div class="arrow"></div>
                </div>
              </div>
              <div class="accordion__body">
                <p class="accordion__descr">I have good knowledge of both pure css and scss. Worked with the bootstrap library. also worked with gulp and webpack, BEM is very well compatible with them.</p>
              </div>
            </div>
            <img src="@/assets/images/circle.png" alt="" class="absolute-six" />
            <div class="accordion__item">
              <div class="accordion__header">
                <div class="accordion__header_start">
                  <img
                    src="@/assets/images/vue.png"
                    alt=""
                    class="accordion-image"
                  />
                  <h3 class="accordion__title title">VUE 3</h3>
                </div>
                <div class="accordion__header_end">
                  <div class="arrow"></div>
                </div>
              </div>
              <div class="accordion__body">
                <p class="accordion__descr">I can write code in native javascript. Didn't use jquery. this portfolio site is written in vue.js</p>
              </div>
            </div>
          </div>
          <div class="capabilities__block-right">
            <img
              src="@/assets/images/accordion-img.png"
              alt=""
              class="accordion-right__img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  mounted() {
    function accordionLogics() {
      let accordionItems = document.querySelectorAll(".accordion__item"),
        accordionBody = document.querySelectorAll(".accordion__body");

      for (let i = 0; i < accordionItems.length; i++) {
        for (let k = 0; k < accordionBody.length; k++) {
          accordionItems[i].addEventListener("click", () => {
            accordionBody[k].classList.remove("accordion__body_active");
            accordionItems[k].classList.remove("accordion__item_active");
            if (i == k) {
              accordionItems[k].classList.add("accordion__item_active");
              accordionBody[k].classList.add("accordion__body_active");
            }
          });
        }
      }
    }
    accordionLogics();
  },
};
</script>

<style scoped>
.capabilities {
  margin-top: 100px;
}
.accordion-image {
  max-width: 35px;
  width: 100%;
  min-height: 40px;
}
.arrow {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 10px solid var(--primaryColor);
  transform: rotate(270deg);
  transition: 0.3s;
}
.capabilities__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.capabilities__title {
  margin-bottom: 100px;
}
.capabilities__blocks {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordion {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 630px;
  width: 100%;
  margin-right: 50px;
  box-shadow: 0px 0px 5px 3px rgba(113, 119, 241, 0.15);
  border-radius: 8px;
}
.accordion__item {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  background: var(--blackColor);
  transition: 0.5s;
}
.accordion__item:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.accordion__item:last-child {
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.accordion__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #fff;
}
.accordion__header_start {
  display: flex;
  align-items: center;
}
.accordion__title {
  font-size: 18px;
  font-weight: 900;
  margin-left: 25px;
}
.accordion__header_end {
  margin-right: 25px;
}
.accordion__body {
  max-height: 0px;
  transition: 0.3s;
  overflow: hidden;
}
.accordion__item_active {
  background: var(--primaryColor);
}
.accordion__item_active .accordion__title {
  color: #fff;
}
.accordion__item_active .accordion__header {
  border-bottom: 0;
}
.accordion__item_active .arrow {
  border-left: 10px solid #fff;
  transform: rotate(90deg);
}
.accordion__body_active {
  padding-bottom: 20px;
  max-height: 300px;
}
.accordion-right__img {
  width: 100%;
}
.absolute-six {
  position: absolute;
  top: -35px;
  left: 30px;
  z-index: 1;
}
@media (max-width: 960px) {
  .capabilities__blocks {
    flex-direction: column;
    align-items: center;
  }
  .accordion-right__img {
    max-width: 440px;
  }
  .capabilities__block-right {
    margin-top: 50px;
  }
  .accordion {
    margin-right: 0;
    min-width: fit-content;
    max-width: 300px;
    width: 100%;
  }
}
</style>