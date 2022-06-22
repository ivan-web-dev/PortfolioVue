<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__content_right">
          <img src="@/assets/images/mywork.svg" alt="" class="footer__logo" />
          <ul class="footer__list">
            <li><a href="#" class="link footer__link">about Me</a></li>
            <li><a href="#" class="link footer__link">Works</a></li>
            <li class="link footer__link text-underline">Contacts</li>
          </ul>
          <ul class="footer__list">
            <li class="link footer__link">+998 99 884-5395</li>
            <li class="link footer__link">ivan.fullstack.developer@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin-top: 200px;
  margin-bottom: 50px;
}
.footer__content {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.footer__logo{
    width: fit-content;
}
.footer__content_right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__list {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
}
.text-underline{
  text-decoration: underline;
}
@media (max-width: 750px) {
  .footer__content{
    align-items: center;
  }
  .footer__list{
    flex-direction: column;
  }
  .footer__list li{
    text-align: center;
  }
}
@media (max-width: 470px) {
  .footer__list li{
    word-wrap: break-word;
    text-align: center;
    max-width: 300px;
    width: 100%;
  }
}
</style>