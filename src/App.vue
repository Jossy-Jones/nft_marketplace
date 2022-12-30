<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from './components/Footer.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<template>
  <app-header/>
  <router-view/>
  <app-footer/>
</template>

<style>
</style>
