<script>
import MenuIcon from './svg/menu-icon.vue';
import UserIcon from './svg/user-icon';

export default {
  name: 'Header',
  components:{
    UserIcon,
    MenuIcon,
  }
}
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-between p-4 md:px-10 mx-auto container">
      <router-link to="/" class="w-48">
        <img src="../assets/img/Logo.png"/>
      </router-link>
      <div class="inline-block lg:hidden cursor-pointer">
        <menu-icon/>
      </div>
      <div class="hidden lg:flex items-center gap-4 md:gap-8 text-white">
        <router-link to="/" class="nav-item">Marketplace</router-link>
        <router-link to="/" class="nav-item">Rankings</router-link>
        <router-link to="/" class="nav-item">Connect a wallet</router-link>
        <router-link to="" class="primary-btn">
          <UserIcon/>
          Sign up
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>

</style>