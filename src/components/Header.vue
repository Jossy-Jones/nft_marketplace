<script>
import CloseIcon from './icons/close-icon.vue';
import MenuIcon from './icons/menu-icon.vue';
import UserIcon from './icons/user-icon';

export default {
  name: 'Header',
  components:{
    UserIcon,
    MenuIcon,
    CloseIcon
},
  data(){
    return{
      openNav: false,
      isMobile: window.innerWidth < 1024,
    }
  },
  created(){
    window.addEventListener("resize", this.windowSize);
  },
  unmounted(){
    window.removeEventListener("resize", this.windowSize)
  },
  methods: {
    // navButton
    toggleNav() {
      this.openNav = !this.openNav;
    },
    // Get window size
    windowSize(e){
      this.isMobile = e.target.innerWidth < 1024;
    }
  },
}
</script>

<template>
  <header class="relative">
    <div class="flex items-center justify-between p-4 md:px-10 mx-auto container">
      <router-link to="/" class="inline-block w-48">
        <img src="@/assets/img/Logo.png"/>
      </router-link>
      <!-- Tablet And Mobile Navigation -->
      <template v-if="isMobile">
        <div class="inline-block cursor-pointer" @click="toggleNav">
          <menu-icon/>
        </div>
        <div :class="['fixed top-0 w-screen h-screen bg-background z-20 transition-all ease-in duration-200 overflow-y-auto', openNav ? 'left-0' : 'left-full']">
          <div class="flex items-center justify-between gap-8 p-4 border-b-2 border-backgroundSecond">
            <router-link to="/" class="inline-block w-48">
              <img src="@/assets/img/Logo.png"/>
            </router-link>
            <button class="inline-block p-0.5 border rounded-full" @click="toggleNav">
              <close-icon/>
            </button>
          </div>
          <ul class="grid gap-6 place-items-center px-4 py-6">
            <li class="">
              <router-link to="/" class="nav-item">Marketplace</router-link>
            </li>
            <li class="">
              <router-link to="/" class="nav-item">Rankings</router-link>
            </li>
            <li class="">
              <router-link to="/" class="nav-item">Connect a wallet</router-link>
            </li>
            <li class="">
              <router-link to="/sign-up" class="primary-btn">
                <UserIcon/>
                Sign up
              </router-link>
            </li>
          </ul>
        </div>
      </template>
      <!-- Desktop Navigation -->
      <div v-else class="hidden lg:flex items-center gap-4 md:gap-8 text-white">
        <router-link to="/" class="nav-item">Marketplace</router-link>
        <router-link to="/" class="nav-item">Rankings</router-link>
        <router-link to="/" class="nav-item">Connect a wallet</router-link>
        <router-link to="/sign-up" class="primary-btn">
          <UserIcon/>
          Sign up
        </router-link>
      </div>
    </div>
  </header>
</template>

<style>

</style>