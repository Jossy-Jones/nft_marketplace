<script>
import AppButton from './Button.vue';
import DiscordIcon from './icons/discord-icon.vue';
import InstagramIcon from './icons/instagram-icon.vue';
import MessageIcon from './icons/message-icon.vue';
import TwitterIcon from './icons/twitter-icon.vue';
import YoutubeIcon from './icons/youtube-icon.vue';

export default {
    name: "Footer",
    components: { DiscordIcon, YoutubeIcon, TwitterIcon, InstagramIcon, MessageIcon, AppButton }
}
</script>

<template>
    <footer class="relative bg-backgroundSecond">
        <div class="px-4 md:px-10 mx-auto container divide-y divide-labelText">
            <div class="grid lg:grid-cols-3 gap-8 tracking-wider py-8">
                <div class="grid gap-5">
                    <div class="relative">
                        <router-link to="/" class="inline-block w-48">
                            <img src="@/assets/img/Logo.png"/>
                        </router-link>
                    </div>
                    <div class="grid gap-4">
                        <p class="">NFT Marketplace UI created with Anima for Figma.</p>
                        <h4 class="">Join our community</h4>
                        <div class="flex items-center gap-4 text-labelText">
                            <router-link to="/#" class="hover:text-primaryColor focus:text-primaryColor">
                                <discord-icon />
                            </router-link>
                            <router-link to="/#" class="hover:text-primaryColor focus:text-primaryColor">
                                <youtube-icon />
                            </router-link>
                            <router-link to="/#" class="hover:text-primaryColor focus:text-primaryColor">
                                <twitter-icon />
                            </router-link>
                            <router-link to="/#" class="hover:text-primaryColor focus:text-primaryColor">
                                <instagram-icon />
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="grid gap-5 lg:place-content-center">
                    <div>
                        <h1 class="text-2xl font-bold">Explore</h1>
                    </div>
                    <div class="grid gap-4">
                        <router-link to="/" class="">Marketplace</router-link>
                        <router-link to="/" class="">Rankings</router-link>
                        <router-link to="/" class="">Connect a wallet</router-link>
                    </div>
                </div>

                <div class="grid gap-5">
                    <div>
                        <h1 class="text-2xl font-bold">Join Our Weekly Digest</h1>
                    </div>
                    <div class="grid gap-4">
                        <p class="tracking-wider">Get exclusive promotions &amp; updates straight to your inbox</p>
                        <div class="flex items-stretch max-w-md h-fit bg-white text-black rounded-2xl">
                            <input type="email" name="weekly_digest" placeholder="Enter your email here" class="">
                            <app-button :type="'primary-btn'">
                                <message-icon class="text-white" />
                                <span>Subscribe</span>
                            </app-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-8">
                <p>&copy; {{ new Date().getFullYear() }} NFT Marktet. Developed by <a href="https://github.com/Jossy-Jones" target="_blank">Jossy Jones</a></p>
            </div>
        </div>
    </footer>
</template>    

<style>

</style>