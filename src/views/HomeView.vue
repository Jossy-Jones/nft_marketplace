<script>
import AllArtists from "@/data/artists.json"

import RocketIcon from '@/components/svg/rocket-icon.vue'
import AppButton from '@/components/Button.vue'
import ArtistCard from '@/components/Artist-card.vue'
import ArtIcon from '@/components/svg/art-icon.vue'
import VideoIcon from '@/components/svg/video-icon.vue'
import PhotographyIcon from '@/components/svg/photography-icon.vue'
import CollectiblesIcon from '@/components/svg/collectibles-icon.vue'
import UtilityIcon from "@/components/svg/utility-icon.vue"
import SportIcon from "@/components/svg/sport-icon.vue"
import VirtualIcon from "@/components/svg/virtual-icon.vue"
import musicIcon from "@/components/svg/music-icon.vue"
import EyeIcon from '@/components/svg/eye-icon.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    RocketIcon,
    AppButton,
    ArtistCard,
    ArtIcon,
    VideoIcon,
    PhotographyIcon,
    CollectiblesIcon,
    UtilityIcon,
    VirtualIcon,
    SportIcon,
    musicIcon,
    EyeIcon,
  },
  data() {
    return {
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

          <p class="text-labelText text-3xl">NFT Marketplace UI create with Anima for Figma. Collect, Buy and sell art
            from more than 20k NFT Artists</p>

          <app-button :type="'primary-btn'">
            <rocket-icon />
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
            <img src="@/assets/img/Image_Placeholder.png" />
            <div class="grid gap-4 p-4">
              <p class="text-xl font-bold capitalize">Space working</p>
              <!-- Avatar -->
              <div class="flex items-center gap-3">
                <div class="inline-block w-8 h-8 rounded-full">
                  <img src="@/assets/img/Avatars/AnimaKid.png" />
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
            <div class="rounded-2xl">
              <img src="/img/collections/Animals-01.png" />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Animals-02.png" />
              </div>
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Animals-03.png" />
              </div>
              <div
                class="flex items-center justify-center bg-[#A259FF] text-textColor w-full h-full border border-primaryColor rounded-xl">
                <span class="font-bold text-xl">1025+</span>
              </div>
            </div>
            <div class="grid gap-4 mt-2">
              <h3 class="text-2xl font-bold capitalize">DSGN Animals</h3>
              <!-- Avatar -->
              <div class="flex items-center gap-3">
                <div class="inline-block w-8 h-8 rounded-full">
                  <img src="@/assets/img/Avatars/MrFox.png" />
                </div>
                <p>MrFox</p>
              </div>
            </div>
          </div>

          <div class="relative grid gap-4">
            <div class="rounded-2xl">
              <img src="/img/collections/Mushrooms-01.png" />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Mushrooms-02.png" />
              </div>
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Mushrooms-03.png" />
              </div>
              <div
                class="flex items-center justify-center bg-[#A259FF] text-textColor w-full h-full border border-primaryColor rounded-xl">
                <span class="font-bold text-xl">1025+</span>
              </div>
            </div>
            <div class="grid gap-4 mt-2">
              <h3 class="text-2xl font-bold capitalize">Magic Mushrooms</h3>
              <!-- Avatar -->
              <div class="flex items-center gap-3">
                <div class="inline-block w-8 h-8 rounded-full">
                  <img src="@/assets/img/Avatars/Shroomie.png" />
                </div>
                <p>Shroomie</p>
              </div>
            </div>
          </div>

          <div class="relative grid gap-4">
            <div class="rounded-2xl">
              <img src="/img/collections/Machines-01.png" />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Machines-02.png" />
              </div>
              <div class="flex items-center justify-center w-full h-full border border-primaryColor rounded-xl">
                <img src="/img/collections/Machines-03.png" />
              </div>
              <div
                class="flex items-center justify-center bg-[#A259FF] text-textColor w-full h-full border border-primaryColor rounded-xl">
                <span class="font-bold text-xl">1025+</span>
              </div>
            </div>
            <div class="grid gap-4 mt-2">
              <h3 class="text-2xl font-bold capitalize">Disco Machines</h3>
              <!-- Avatar -->
              <div class="flex items-center gap-3">
                <div class="inline-block w-8 h-8 rounded-full">
                  <img src="@/assets/img/Avatars/BeKind2Robots.png" />
                </div>
                <p>BeKind2Robots</p>
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
            <rocket-icon class="text-primaryColor" />
            <span>View Rankings</span>
          </app-button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <artist-card v-for="(artist, index) in artists" :key="index" :artistData="artist" ranking />
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto p-4 md:px-10 grid gap-6">
        <div class="grid gap-4 capitalize">
          <h1 class="text-4xl font-bold">Browse Categories</h1>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="grid relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Art.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <art-icon />
              </div>
            </div>
            <p class="shrink-0 p-4 text-center text-2xl font-bold">Art</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Collectibles.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <collectibles-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Collectibles</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Music.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <music-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Music</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Photography.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <photography-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Photography</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Video.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <video-icon/>
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Video</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Utility.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <utility-icon/>
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Utility</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Sport.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <sport-icon/>
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Sport</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="@/assets/img/categories/Virtual_Worlds.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <virtual-icon/>
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Virtual Worlds</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto p-4 md:px-10 grid gap-6">
        <div class="flex flex-wrap gap-6 items-end justify-between">
          <div class="grid gap-4 capitalize">
            <h1 class="text-4xl font-bold">Discover More NFTs</h1>
            <p class="text-xl">Explore new trending NFTs</p>
          </div>
          <app-button :type="'secondary-btn'">
            <eye-icon class="text-primaryColor"/>
            <span>See All</span>
          </app-button>
        </div>
        <div class="grid">
          <div class="bg-backgroundSecond rounded-2xl">
            <div class="w-full"></div>
            <div class="grid gap-4 p-6">
                <div>
                    <h3>Distant Galaxy</h3>
                    <div class="flex items-center gap-3">
                        <div class="inline-block w-8 h-8 rounded-full overflow-hidden border">
                          <img src="@/assets/img/Avatars/MoonDancer.png" alt="MoonDancer" />
                        </div>
                        <p>MoonDancer</p>
                    </div>
                </div>
                <div class="flex items-start justify-between gap-6">
                    <div class="grid gap-4">
                        <label>Price</label>
                        <p>1.63 ETH</p>
                    </div>
                    <div>
                        <label>Highest Bid</label>
                        <p>0.33 wETH</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>

  </div>
</template>
