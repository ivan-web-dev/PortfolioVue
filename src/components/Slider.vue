<template>
  <section class="slider">
    <div class="container">
      <div class="slider__content">
        <div class="slider-block border border-yellow-400 mt-10 h-">
          <swiper
            :slidesPerView="1"
            :spaceBetween="0"
            :slidesPerGroup="1"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
              clickable: true,
            }"
            class="mySwiper w-1/4"
          >
            <swiper-slide 
              v-for="(item, index) in 1" 
              :key="index"
              class="swiper-slide"
            >
              <div class="slider-slide__left-block">
                <h2 class="slider-slide__title descr">My beginning</h2>
                <p class="slider-slide__descr title">Self-development and training in the training center</p>
                <my-btn text="view portfolio" class="slider-btn"></my-btn>
                <div class="slider-slide__images-columns">
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/html.png" class="column-logo" alt="">
                    <p class="images-column__title title">HTML</p>
                  </div>
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/css.png" class="column-logo" alt="">
                    <p class="images-column__title title">CSS</p>
                  </div>
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/bootstrap.png" class="column-logo" alt="">
                    <p class="images-column__title title">Bootstrap</p>
                  </div>
                </div>
              </div>
              <div class="slider-slide__right-block">
                <img src="@/assets/images/slider-img.png" alt="" class="slider-img">
              </div>
            </swiper-slide>
            
            
            <swiper-slide 
              v-for="(item, index) in 1" 
              :key="index"
            >
              <div class="slider-slide__left-block">
                <h2 class="slider-slide__title descr">Then I studied</h2>
                <p class="slider-slide__descr title">self-study and work on the freelance exchange "freelancehunt"</p>
                <my-btn text="view portfolio" class="slider-btn"></my-btn>
                <div class="slider-slide__images-columns">
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/sass.svg" class="column-logo" alt="">
                    <p class="images-column__title title">SASS</p>
                  </div>
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/webpack.svg" class="column-logo" alt="">
                    <p class="images-column__title title">Webpack</p>
                  </div>
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/vue.png" class="column-logo" alt="">
                    <p class="images-column__title title">Vue 3</p>
                  </div>
                </div>
              </div>
              <div class="slider-slide__right-block">
                <img src="@/assets/images/slider-img2.png" alt="" class="slider-img">
              </div>
            </swiper-slide>
            <swiper-slide 
              v-for="(item, index) in 1" 
              :key="index"
            >
              <div class="slider-slide__left-block">
                <h2 class="slider-slide__title descr">Front-End Developer</h2>
                <p class="slider-slide__descr title">Now I am a junior front-end developer, having positive reviews and a portfolio</p>
                <my-btn text="view portfolio" class="slider-btn"></my-btn>
                <div class="slider-slide__images-columns">
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/php.png" class="column-logo" alt="">
                    <p class="images-column__title title">PHP</p>
                  </div>
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/rest.png" class="column-logo" alt="">
                    <p class="images-column__title title">RestApi</p>
                  </div>
                  <div class="slider-slide__images-column">
                    <img src="@/assets/images/wordpress.png" class="column-logo" alt="">
                    <p class="images-column__title title">WordPress</p>
                  </div>
                </div>
              </div>
              <div class="slider-slide__right-block">
                <img src="@/assets/images/slider-img.png" alt="" class="slider-img">
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <img src="@/assets/images/circle.png" alt="" class="absolute-img_one">
    <img src="@/assets/images/square.png" alt="" class="absolute-img_two">
    <img src="@/assets/images/square.png" alt="" class="absolute-img_three">
    <img src="@/assets/images/square.png" alt="" class="absolute-img_four">
  </section>
</template>
 
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import MyBtn from '@/components/UI/button-link.vue';
SwiperCore.use([Pagination, Navigation]);
export default {
  components: {
    Swiper,
    SwiperSlide,
    MyBtn,
  }
};
</script>

<style>
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 10px;
}
.swiper-container{
  height: 550px;
}
.swiper-pagination-bullet {
  width: 15px !important;
  height: 15px !important;
  background: var(--whiteColor) !important;
  opacity: 1;
}
.swiper-pagination-bullet-active{
  background: var(--primaryColor) !important;
}
.swiper-slide{
  display: flex;
  justify-content: space-between;
}
.slider{
  margin-top: 50px;
  position: relative;
}
.slider-slide__left-block{
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 630px;
  width: 100%;
}
.slider-slide__descr{
  max-width: 520px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 75px;
}
.slider-slide__title{
  color: var(--whiteColor) !important;
  font-size: 24px !important;
  font-weight: 600 !important;
  margin-left: 75px;
}
.slider-slide__images-columns{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.slider-slide__images-column{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 190px;
  width: 100%;
}
.images-column__title{
  margin-top: 15px !important;
  font-size: 24px !important;
  font-weight: 900 !important;
}
.swiper-pagination{
  bottom: 0 !important;
}
.column-logo{
  max-width: 77px;
  width: 100%;
}
.absolute-img_one{
  position: absolute;
  top: -50px;
  left: 300px;
}
.absolute-img_two{
  position: absolute;
  top: 150px;
  left: 100px;
}
.absolute-img_three{
  position: absolute;
  top: 285px;
  right: 340px;
}
.absolute-img_four{
  position: absolute;
  top: -50px;
  right: 200px;
  transform: rotate(45deg);
}
.slider-btn{
  width: fit-content;
  text-align: center;
  margin-left: 75px;
}
@media (max-width: 1420px) {
  .absolute-img_two, .absolute-img_four{
    display: none;
  }
}
@media (max-width: 1200px) {
  .slider-slide__right-block{
    display: flex;
    align-items: center;
  }
  .slider-img{
    width: 420px;
  }
}
@media (max-width: 960px) {
  .swiper-slide{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .swiper-container{
    height: fit-content;
  }
  .absolute-img_one{
    left: 50px;
  }
  .absolute-img_three{
    right: 100px;
    top: 140px;
  }
  .slider-slide__right-block{
    margin-top: 50px;
  }
  .slider-slide__title{
    margin-left: 0;
  }
  .slider-slide__descr {
    margin-left: 0;
  }
}
@media (max-width: 580px) {
  .absolute-img_one, .absolute-img_three{
    display: none;
  }
}
@media (max-width: 450px) {
  .images-column__title{
    font-size: 18px !important;
  }
  .slider-img{
    width: 100%;
  }
  .slider-btn{
    margin-left: 0;
  }
}

</style>