<template>
  <section class="projects" id="projects">
    <div class="container">
      <div class="projects__content">
        <h2 class="title">My Works</h2>
        <div class="projects__blocks">
          <div class="tabs">
            <div
              class="tab"
              v-for="project in projects"
              :key="project.title"
              :class="{ tab_active: project.status }"
            >
              <h3 class="projects__title descr">{{ project.title }}</h3>
            </div>
          </div>
          <div
            class="tabs-content"
            v-for="project in projects"
            :key="project.title"
            v-show="project.status"
          >
            <img alt="" :src="project.imgSrc" class="tab__img">
            <div class="tabs-text">
              <h3 class="projects__texts-title title">{{ project.title }}</h3>
              <p class="projects__texts-descr descr">{{ project.descr }}</p>
              <div class="projects__texts-links">
                <a :href="project.file" class="projects__texts-link link" download>download</a>
              </div>
              <!-- <my-btn text="download"></my-btn> -->
            </div>
            <!-- <iframe src="@/views/dist/index.html" frameborder="0"></iframe> -->
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/bg-projects.png" alt="" class="absolute-five">
    <img src="@/assets/images/circle.png" alt="" class="absolute-img_six">
    <img src="@/assets/images/square.png" alt="" class="absolute-img_seven">
  </section>
</template>

<script>
import MyBtn from "@/components/UI/button-link.vue";
export default {
  components: {
    MyBtn,
  },
  data() {
    return {
      projects: [
        {
          id: 0,
          title: "night watch",
          file: "../assets/sites/night-watch.zip",
          status: true,
          descr: "in creating the project, I used the \"swiper.js\" library and the vue.js 3-version framework. The data came from a free Rest Api (\"https://www.themoviedb.org\"). You can see the project at the link below.",
          imgSrc: "/img/night-watch.96a4aac5.png",
        },
        {
          id: 1,
          title: "pixel",
          file: "../assets/sites/pixel.zip",
          status: false,
          descr: "when creating a pixel, I used Gulp and scss. it has many elements in 3D format, I achieved this using CSS.",
          imgSrc: "/img/pixel.7fc35603.png"
        },
        {
          id: 2,
          title: "decor-design",
          file: "../assets/sites/decor-design.zip",
          status: false,
          descr: "decor design is one of my first big projects. This project can be used as a template. it is written in clean HTML and CSS.",
          imgSrc: "./img/decor-design.d6dccda5.png"
        },
        {
          id: 3,
          title: "parallax",
          file: "../assets/sites/parallax.zip",
          status: false,
          descr: "This is an educational project, developed in order to improve the knowledge of native JavaScript.",
          imgSrc: "./img/parallax.ba7904a9.png"
        },
        {
          id: 4,
          title: "vue-cinema",
          file: "../assets/sites/vue-cinema.zip",
          status: false,
          descr: "Vue-Cinema is another one of my best projects. It is written in pure HTML and CSS. in the future, I will improve this project, it is well suited for introducing rest api into it.",
          imgSrc: "./img/vue-cinema.b2448c4e.png"
        },
        {
          id: 5,
          title: "cube",
          file: "../assets/sites/cube.zip",
          status: false,
          descr: "Cube, implemented in 3D format on CSS. Added some features to the project. I recommend to watch!",
          imgSrc: "./img/cube.eb89c2e4.png"
        },
        {
          id: 6,
          title: "burger",
          file: "../assets/sites/burger.zip",
          status: false,
          descr: "burger is another project for training hard skills. used HTML and CSS in the development of the project, used native javascript to add interactivity.",
          imgSrc: "./img/burger.33610344.png"
        },
        {
          id: 7,
          title: "air-pods",
          file: "../assets/sites/air-pods.zip",
          status: false,
          descr: "In developing! air-pods is a project that I made up at the beginning of my career. this is not the best project in my portfolio, but it will be interesting for you to look at it.",
          imgSrc: "./img/air-pods.18c70d1f.png"
        },
        {
          id: 8,
          title: "turon",
          file: "../assets/sites/turon.zip",
          status: false,
          descr: "In developing! Turon - freelance project. As a result, I was not paid for it, and another similar site. the development uses HTML, CSS and the \"swiper.js\" library. I worked on it at the very beginning of my career.",
          imgSrc: "./img/turon.8694dd91.png"
        },
        {
          id: 9,
          title: "realgram",
          file: "../assets/sites/realgram.zip",
          status: false,
          descr: "In developing! The very first site I created. It uses HTML and CSS. I created the project for myself, for educational purposes.",
          imgSrc: "./img/realgram.22eb6868.png"
        },
      ],
    };
  },
  methods() {
    console.log(projects.src);
  },
  mounted() {
    let projectArray = this.projects;

    function changeActiveTab() {
      let tabsItems = document.querySelectorAll(".tab");

      for (let i = 0; i < tabsItems.length; i++) {
        tabsItems[i].addEventListener("click", (event) => {
          for (let k = 0; k < projectArray.length; k++) {
            const elementArray = projectArray[k];

            if (i == k) {
              elementArray.status = true;
            } else {
              elementArray.status = false;
            }
          };
        });
      };
    }; changeActiveTab();
  },
};
</script>

<style>
.tab_active {
  background: var(--primaryColor) !important;
}
.tab_active .projects__title {
  color: var(--blackColor) !important;
}
.tab__img{
  max-width: 250px;
  width: 100%;
  height: fit-content;
  min-height: 260px;
}
.projects {
  position: relative;
  margin-top: 100px;
}
.projects__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projects__blocks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
  width: 100%;
}
.projects__block-left {
  display: flex;
  flex-direction: column;
}
.tabs {
  position: relative;
  z-index: 1;
  filter: drop-shadow(0px 0px 5px rgba(113, 119, 241, 0.15));
  min-width: 300px;
}
.tab {
  background: var(--blackColor);
  padding: 20px;
  box-shadow: 0px 0px 5px 3px rgba(113, 119, 241, 0.15);
  cursor: pointer;
  transition: 0.3s;
}
.tab:first-child {
  border-radius: 8px 8px 0px 0px;
}
.tab:last-child {
  border-radius: 0px 0px 8px 8px;
}
.projects__title {
  font-weight: 600 !important;
  font-size: 18px;
  transition: 0.3s;
}
.projects__title.active {
  color: var(--blackColor);
}
.absolute-five {
  position: absolute;
  top: -110px;
  left: 0;
  z-index: 0;
}
.absolute-img_six{
  position: absolute;
  bottom: -100px;
  right: 600px;
}
.absolute-img_seven{
  position: absolute;
  bottom: 120px;
  right: 200px;
}
.tabs-content {
  display: flex;
  background: var(--blackColor);
  box-shadow: 0px 0px 5px 3px rgba(113, 119, 241, 0.15);
  border-radius: 8px;
  z-index: 99;
  padding: 20px;
  max-width: 810px;
  width: 100%;
  height: fit-content;
  min-height: 300px;
}
.tabs-text{
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 20px;
}
.projects__texts-title {
  font-size: 24px !important;
}
.projects__texts-descr {
  color: #fff !important;
  margin: 20px 0 30px;
  text-align: justify;
}
.projects__texts-links{
  padding: 5px 43px;
  background: var(--primaryColor);
  box-shadow: 0px 0px 5px 1px rgba(113, 119, 241, 0.5);
  border-radius: 8px;
}
.projects__texts-link{
  color: var(--whiteColor) !important;
  transition: 0.5s;
}
@media (max-width: 1780px){
  .absolute-img_seven{
    right: 50px;
  }
}
@media (max-width: 1480px){
  .absolute-img_seven{
    display: none;
  }
}
@media (max-width: 1140px) {
  .absolute-five{
    width: 100%;
    top: -30px;
  }
}
@media (max-width: 970px) {
  .projects__blocks{
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 800px) {
  .absolute-img_six{
    right: 300px;
  }
}
@media (max-width: 640px) {
  .tabs-content{
    flex-direction: column;
    align-items: center;
  }
  .tab__img{
    max-width: 100%;
    margin-bottom: 30px;
  }
  .tabs-text{
    margin-left: 0;
  }
}
@media (max-width: 600px) {
  .absolute-five{
    display: none;
  }
}
@media (max-width: 370px){
  .tabs-text{
    word-wrap: break-word;
  }
  .projects__texts-descr{
    text-transform: none !important;
    max-width: 300px;
    width: 100%;
  }
  .absolute-img_six{
    right: 100px;
  }
}
@media (max-width: 355px){
  .projects__texts-descr{
    max-width: 260px;
  }
}
</style>