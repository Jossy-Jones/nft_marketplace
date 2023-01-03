<script>
import NftData from "@/data/nfts.json"

import AppButton from '@/components/Button.vue'
import NftCard from '@/components/Nft-card.vue'
import GlobeIcon from '@/components/icons/globe-icon.vue'
import ClipboardIcon from '@/components/icons/clipboard-icon.vue'
import PlusIcon from '@/components/icons/plus-icon.vue'

export default {
    name: "ArtistPage",
    components: {AppButton, NftCard, GlobeIcon, ClipboardIcon, PlusIcon},
    data() {
        return {
            active: "created",
            nfts: NftData.data,
            follow: false,
        }
    },
    methods: {
        setActive(tab){
            this.active = tab
        },
        toggleFollow(){
            this.follow = !this.follow;
        },
        // clipboard(text){
        //     navigator.clipboard.writeText(text).then(()=>{
        //         console.log("copied");
        //         this.$alert("Copied");
        //     }).catch(err=>{
        //         console.error("Error in copying text: ", err);
        //     })
        // }
    }
}
</script>

<template>
  <section>
        <div class="block w-full h-full max-h-[50vh] overflow-hidden">
            <picture>
                <source media="(min-width: 800px)" srcset="@/assets/img/Artist_Cover_Screen=Tablet.png">
                <source srcset="@/assets/img/Artist_Cover_Screen=Desktop.png" media="(min-width: 1200px)">
                <img srcset="@/assets/img/Artist_Cover_Screen=Mobile.png" />
            </picture>
        </div>
        <div class="relative xl:container mx-auto px-4 py-8 md:px-10 grid gap-8">
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 w-16 h-16 rounded-xl overflow-hidden">
                <img src="@/assets/img/Avatar_Placeholder.png" alt="Artist"/>
            </div>
            <div class="grid gap-8 mt-4">
                <div class="flex flex-nowrap flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <h1 class="text-4xl font-bold text-center md:text-left">Animakid</h1>
                    <div class="grid md:grid-cols-2 gap-4 w-full md:w-fit">
                        <app-button :type="'primary-btn'" class="w-full md:w-fit">
                            <clipboard-icon/>
                            <span>0xc0E3...B79C</span>
                        </app-button>
                        <app-button :type="'secondary-btn'" class="w-full md:w-fit" @click="toggleFollow">
                            <template v-if="follow">
                                <span>Following</span>
                            </template>
                            <template v-else>
                                <plus-icon/>
                                <span>Follow</span>
                            </template>
                        </app-button>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-8 w-full max-w-md">
                    <div class="grid gap-1 tracking-wider">
                        <h2 class="text-2xl font-bold">250k</h2>
                        <label class="text-labelText">Volume</label>
                    </div>
                    <div class="grid gap-1 tracking-wider">
                        <h2 class="text-2xl font-bold">50k</h2>
                        <label class="text-labelText">NFTs Sold</label>
                    </div>
                    <div class="grid gap-1 tracking-wider">
                        <h2 class="text-2xl font-bold">3000+</h2>
                        <label class="text-labelText">Followers</label>
                    </div>
                </div>

                <div class="grid gap-2 tracking-wider">
                    <h2 class="text-labelText">Bio</h2>
                    <p>The internet's friendliest desinger kid.</p>
                </div> 
            </div>
        </div>
  </section>
  
  <section class="relative border-t border-backgroundSecond">
    <div class="relative xl:container mx-auto px-4 py-4 md:px-10 grid gap-8">
        <div class="grid grid-cols-3">
            <div class="nav-item inline-flex items-end justify-center gap-2 w-full p-2 text-lg font-bold cursor-pointer before:bg-labelText" :class="[(active === 'created') ? 'active' : '']" @click="setActive('created')">
                <span class="inline-block">Created</span>
                <span class="hidden md:inline-block px-2 py-1 text-sm bg-backgroundSecond rounded-full" :class="[(active === 'created') ? 'bg-labelText' : '']">302</span>
            </div>
            <div class="nav-item inline-flex items-end justify-center gap-2 w-full p-2 text-lg font-bold cursor-pointer before:bg-labelText" :class="[(active === 'owned') ? 'active' : '']" @click="setActive('owned')">
                <span class="inline-block">Owned</span>
                <span class="hidden md:inline-block px-2 py-1 text-sm bg-backgroundSecond rounded-full" :class="[(active === 'owned') ? 'bg-labelText' : '']" >87</span>
            </div>
            <div class="nav-item inline-flex items-end justify-center gap-2 w-full p-2 text-lg font-bold cursor-pointer before:bg-labelText" :class="[(active === 'collections') ? 'active' : '']" @click="setActive('collections')">
                <span class="inline-block">Collections</span>
                <span class="hidden md:inline-block px-2 py-1 text-sm bg-backgroundSecond rounded-full" :class="[(active === 'collections') ? 'bg-labelText' : '']" >4</span>
            </div>
        </div>

        <!-- Content -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <nft-card v-for="(nftData, index) in nfts" :key="index" :nftData="{
                    ...nftData,
                    artist: {
                        name: 'Animakid',
                        image: 'AnimaKid.png',
                    }
                }"/>
            </div>
    </div>
  </section>
</template>    

<style>

</style>