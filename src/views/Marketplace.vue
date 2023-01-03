<script>
import NftData from "@/data/nfts.json"

import SearchIcon from '@/components/icons/search-icon.vue'
import NftCard from '@/components/Nft-card.vue'
export default {
  components: { SearchIcon, NftCard },
    name: 'Marketplace',
    data() {
        return {
            active: "nfts",
            nfts: NftData.data
        }
    },
    methods: {
        setActive(tab){
            this.active = tab
        }
    }
}
</script>

<template>
    <section>
        <div class="xl:container mx-auto px-4 py-8 md:px-10 grid gap-8">
            <div class="grid gap-4">
                <h1 class="text-4xl font-bold">Browse Marketplace</h1>
                <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                <div class="inline-flex px-6 py-3 text-labelText border border-backgroundSecond rounded-2xl">
                    <input type="search" placeholder="Search your favourite NFTs" class="p-0 text-sm text-labelText">
                    <button class="inline-block">
                        <search-icon/>
                    </button>
                </div>
            </div>
            <div class="grid gap-8">
                <div class="grid grid-cols-2">
                    <div
                        class="nav-item inline-flex items-end justify-center gap-2 w-full p-2 text-lg font-bold cursor-pointer before:bg-labelText" :class="[(active === 'nfts') ? 'active' : '']" @click="setActive('nfts')">
                        <span class="inline-block">NFTs</span>
                        <span class="hidden md:inline-block px-2 py-1 text-sm bg-backgroundSecond rounded-full" :class="[(active === 'nfts') ? 'bg-labelText' : '']">302</span>
                    </div>
                    <div class="nav-item inline-flex items-end justify-center gap-2 w-full p-2 text-lg font-bold cursor-pointer before:bg-labelText" :class="[(active === 'collections') ? 'active' : '']" @click="setActive('collections')">
                        <span class="inline-block">Collections</span>
                        <span class="hidden md:inline-block px-2 py-1 text-sm bg-backgroundSecond rounded-full" :class="[(active === 'collections') ? 'bg-labelText' : '']" >302</span>
                    </div>
                </div>

                <!-- Content -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    <nft-card v-for="(nftData, index) in nfts" :key="index" :nftData="nftData"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>