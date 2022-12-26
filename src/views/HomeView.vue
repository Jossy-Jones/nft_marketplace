<script>
import RocketIcon from '@/components/svg/rocket-icon.vue'
import AppButton from '@/components/Button.vue'
import ArtistCard from '@/components/Artist-card.vue'
// @ is an alias to /src

import AllArtists from "@/data/artists.json"

export default {
  name: 'HomeView',
  components: {
    RocketIcon,
    AppButton,
    ArtistCard
  },
  data(){
    return{
      artists: AllArtists.data,
    }
  }
}
</script>

<template>
  <div class="grid gap-16 py-8">
    <section class="relative">
      <div class="container mx-auto p-4 md:px-10 flex flex-wrap lg:flex-nowrap items-start gap-12">
        <div class="grid gap-8 capitalize">
          <h1 class="inline-block text-7xl font-bold">Discover Digital Art &amp; Collect NFTs</h1>

          <p class="text-labelText text-3xl">NFT Marketplace UI create with Anima for Figma. Collect, Buy and sell art from more than 20k NFT Artists</p>

          <app-button :type="'primary-btn'">
            <rocket-icon/>
            <span>Get Started</span>
          </app-button>

          <div class="flex items-center gap-8">
            <div class="grid gap-3">
              <h3 class="font-semibold text-2xl">240k</h3>
              <p class="font-medium text-lg">Total Sale</p>
            </div>

            <div class="grid gap-3">
              <h3 class="font-semibold text-2xl">100k</h3>
              <p class="font-medium text-lg">Auctions</p>
            </div>

            <div class="grid gap-3">
              <h3 class="font-semibold text-2xl">240k</h3>
              <p class="font-medium text-lg">Artists</p>
            </div>
          </div>

        </div>

        <div class="lg:shrink-0">
          <div class="w-full h-full max-w-lg bg-backgroundSecond rounded-xl overflow-hidden">
            <img src="../assets/img/Image_Placeholder.png" />
            <div class="grid gap-4 p-4">
              <p class="text-xl font-bold capitalize">Space working</p>
              <div class="flex items-center gap-3">
                <div class="inline-block w-8 h-8 rounded-full">
                  <img src="../assets/img/Avatar_Placeholder.png" />
                </div>
                <p>AnimaKid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto p-4 md:px-10 grid gap-8">
        <div class="grid gap-4 capitalize">
          <h1 class="text-4xl font-bold">Trending Collection</h1>
          <p class="text-xl">Checkout our weekly updated trending collection</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="relative grid gap-4">
            <div class="rounded-lg">
              <img src="/img/collections/Animals-01.png"/>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Animals-02.png" />
              </div>
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Animals-03.png" />
              </div>
              <div class="flex items-center justify-center bg-[#A259FF] text-textColor w-full h-full border border-primaryColor rounded-xl">
                <span class="font-bold text-xl">1025+</span>
              </div>
            </div>
          </div>

          <div class="relative grid gap-4">
            <div class="rounded-lg">
              <img src="/img/collections/Mushrooms-01.png"/>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Mushrooms-02.png" />
              </div>
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Mushrooms-03.png" />
              </div>
              <div class="flex items-center justify-center bg-[#A259FF] text-textColor w-full h-full border border-primaryColor rounded-xl">
                <span class="font-bold text-xl">1025+</span>
              </div>
            </div>
          </div>

          <div class="relative grid gap-4">
            <div class="rounded-lg">
              <img src="/img/collections/Machines-01.png"/>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Machines-02.png" />
              </div>
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Machines-03.png" />
              </div>
              <div class="flex items-center justify-center bg-[#A259FF] text-textColor w-full h-full border border-primaryColor rounded-xl">
                <span class="font-bold text-xl">1025+</span>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>

    <section>
      <div class="container mx-auto p-4 md:px-10 grid gap-8">
        <div class="flex flex-wrap gap-6 items-end justify-between">
          <div class="grid gap-4 capitalize">
            <h1 class="text-4xl font-bold">Top Creators</h1>
            <p class="text-xl">Checkout our top rated creators on the NFT marketplace</p>
          </div>
          <app-button :type="'secondary-btn'">
            <rocket-icon class="text-primaryColor"/>
            <span>View Rankings</span>
          </app-button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <artist-card v-for="(artist, index) in artists" :key="index" :artistData="artist" ranking/>
        </div>
      </div>
    </section>

  </div>
</template>
