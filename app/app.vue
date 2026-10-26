<script setup>
import Notice from './pages/index.vue';
import Bypass from './pages/x.vue';

const page = /^\/x\/?$/.test(window.location.pathname) ? Bypass : Notice;
</script>

<template>
  <component :is="page" />
</template>
