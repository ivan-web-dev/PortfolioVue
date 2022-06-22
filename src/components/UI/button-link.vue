<template>
  <li class="btn">
    <a href="#" class="btn-link link">{{ text }}</a>
  </li>
</template>

<script>
export default {
    name: 'my-btn',
    props: {
        text: {
            type: String
        },
    },
}
</script>

<style scoped>
.btn{
    padding: 5px 43px;
    background: var(--primaryColor);
    box-shadow: 0px 0px 5px 1px rgba(113, 119, 241, 0.5);
    border-radius: 8px;
}
.btn-link{
    color: var(--whiteColor);
    transition: 0.5s;
}
</style>