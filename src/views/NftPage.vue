<script>
import NftData from "@/data/nfts.json"

import AppButton from '@/components/Button.vue'
import NftCard from '@/components/Nft-card.vue'
import GlobeIcon from '@/components/icons/globe-icon.vue'
import ArrowRightIcon from '@/components/icons/arrow-right-icon.vue'

export default {
    components: { AppButton, GlobeIcon, ArrowRightIcon, NftCard },
    data() {
        return {
            nfts: NftData.data,
        }
    },
}
</script>

<template>
    <section>
        <div class="block w-full h-full max-h-[50vh] overflow-hidden">
            <picture>
                <source media="(min-width: 800px)" srcset="@/assets/img/NFT_Cover_Screen=Tablet.png">
                <source srcset="@/assets/img/NFT_Cover_Screen=Desktop.png" media="(min-width: 1200px)">
                <img srcset="@/assets/img/NFT_Cover_Screen=Mobile.png" />
            </picture>
        </div>
        <div class="relative xl:container mx-auto px-4 py-8 md:px-10 grid gap-8">
            <div class="grid gap-8 max-w-sm">
                <div class="grid gap-2">
                    <h1 class="text-2xl font-bold">The Orbitians</h1>
                    <p class="text-sm text-labelText">Minted on Sep 30, 2022</p>
                </div>

                <!-- Aution Modal -->
                <div
                    class="grid gap-3 md:w-fit max-w-sm h-fit py-4 px-8 bg-backgroundSecond rounded-2xl md:absolute right-4 top-4 md:top-10 md:right-10">
                    <p class="text-sm tracking-wider">Auction ends in:</p>
                    <div class="flex items-start justify-between gap-4 text-3xl font-bold">
                        <div class="grid text-center">
                            <span>59</span>
                            <span class="text-sm font-normal tracking-wider">Hours</span>
                        </div>
                        <span>:</span>
                        <div class="grid text-center">
                            <span>59</span>
                            <span class="text-sm font-normal tracking-wider">Minutes</span>
                        </div>
                        <span>:</span>
                        <div class="grid text-center">
                            <span>59</span>
                            <span class="text-sm font-normal tracking-wider">Seconds</span>
                        </div>
                    </div>
                    <app-button :type="'primary-btn'" class="w-full py-2">Place Bid</app-button>
                </div>

                <div class="grid gap-1">
                    <h2 class="tracking-wider text-labelText">Created By</h2>
                    <div class="flex items-center gap-3">
                        <div class="inline-block w-8 h-8 rounded-full">
                            <img src="/img/Avatars/BeKind2Robots.png" />
                        </div>
                        <p>BeKind2Robots</p>
                    </div>
                </div>

                <div class="grid gap-2">
                    <h2 class="text-labelText">Description</h2>
                    <div class="grid gap-2">
                        <p>The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain, </p>
                        <p>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the
                            bunch are Orbitians.</p>
                        <p>They live in a metal space machines, high up in the sky and only have one foot on Earth. </p>
                        <p>These Orbitians are a peaceful race, but they have been at war with a group of invaders for
                            many generations. The invaders are called Upside-Downs, because of their inverted bodies
                            that live on the ground, yet do not know any other way to be. Upside-Downs believe that they
                            will be able to win this war if they could only get an eye into Orbitian territory, so
                            they've taken to make human beings their target.</p>
                    </div>
                </div>

                <div class="grid gap-2">
                    <h2>Details</h2>
                    <router-link to="#" class="flex items-center gap-2 font-semibold hover:text-primaryColor">
                        <globe-icon class="text-labelText" />
                        <span>View on Etherscan</span>
                    </router-link>
                    <router-link to="#" class="flex items-center gap-2 font-semibold hover:text-primaryColor">
                        <globe-icon class="text-labelText" />
                        <span>View Original</span>
                    </router-link>
                </div>

                <div class="grid gap-2">
                    <h2 class="tracking-wider text-labelText">Tags</h2>
                    <div class="flex flex-wrap items-center gap-4">
                        <label
                            class="inline-block px-4 py-2 text-xs font-bold bg-backgroundSecond hover:bg-primaryColor uppercase rounded-full transition-all ease-in delay-200 cursor-pointer">Animation</label>
                        <label
                            class="inline-block px-4 py-2 text-xs font-bold bg-backgroundSecond hover:bg-primaryColor uppercase rounded-full transition-all ease-in delay-200 cursor-pointer">Illustration</label>
                        <label
                            class="inline-block px-4 py-2 text-xs font-bold bg-backgroundSecond hover:bg-primaryColor uppercase rounded-full transition-all ease-in delay-200 cursor-pointer">Moon</label>
                        <label
                            class="inline-block px-4 py-2 text-xs font-bold bg-backgroundSecond hover:bg-primaryColor uppercase rounded-full transition-all ease-in delay-200 cursor-pointer">Space</label>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="relative xl:container mx-auto px-4 py-8 md:px-10 grid gap-8">
            <div class="flex flex-wrap gap-6 items-end justify-between">
                <div class="grid gap-4 capitalize">
                    <h1 class="text-4xl font-bold">More From This Artist</h1>
                </div>
                <router-link to="/artist-page" class="secondary-btn">
                    <arrow-right-icon class="text-primaryColor" />
                    <span>Go To Artist Page</span>
                </router-link>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <nft-card v-for="(nftData, index) in nfts" :key="index" :nftData="{
                    ...nftData,
                    artist:{
                        name: 'BeKind2Robots',
                        image: 'BeKind2Robots.png'
                    }
                }"/>
            </div>
        </div>
    </section>
</template>

<style>

</style>