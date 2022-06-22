<template>
  <div class="app">
    <myHeader />
    <mySlider />
    <myAccordion />
    <myProjects />
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/Header.vue";
import mySlider from "@/components/Slider.vue";
import myAccordion from "@/components/Accordion.vue";
import myProjects from "@/components/Projects.vue";
import myFooter from "@/components/Footer.vue";
export default {
  components: {
    myHeader,
    mySlider,
    myAccordion,
    myProjects,
    myFooter
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("@/assets/Montserrat-Black.ttf");
  font-weight: 900;
}
@font-face {
  font-family: "Trebuchet MS";
  src: url("@/assets/Montserrat-Bold.ttf");
  font-weight: 700;
}
@font-face {
  font-family: "Montserrat";
  src: url("@/assets/Montserrat-SemiBold.ttf");
  font-weight: 600;
}
@font-face {
  font-family: "Montserrat";
  src: url("@/assets/Montserrat-Regular.ttf");
  font-weight: 400;
}
:root {
  --primaryColor: #7177f1;
  --whiteColor: #fff;
  --blackColor: #151437;
}
html{
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Montserrat";
  user-select: none;
  
}
img{
  pointer-events: none;
}
::-webkit-scrollbar {
  width: 5px;
  background: var(--primaryColor);
}
::-webkit-scrollbar-thumb{
  background: var(--whiteColor);
}
body {
  background: var(--blackColor);
  cursor: url(@/assets/images/cursor32.png), default;
}
.container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
}
.title {
  font-weight: 600;
  font-size: 40px;
  text-transform: capitalize;
  color: var(--primaryColor);
}
.descr {
  font-weight: 400;
  font-size: 18px;
  text-transform: capitalize;
  color: var(--primaryColor);
}
.link{
  font-weight: 400;
  font-size: 24px;
  text-transform: capitalize;
  color: var(--primaryColor);
  transition: 0.5s;
}
.link:hover {
  color: var(--whiteColor);
}
@media (max-width: 1155px) {
  .container {
    padding: 0 15px;
  }
}
@media (max-width: 460px) {
  .title{
    font-size: 28px;
  }
}
</style>