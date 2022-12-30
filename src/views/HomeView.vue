<script>
import AllArtists from "@/data/artists.json"

import RocketIcon from '@/components/icons/rocket-icon.vue'
import AppButton from '@/components/Button.vue'
import ArtistCard from '@/components/Artist-card.vue'
import ArtIcon from '@/components/icons/art-icon.vue'
import VideoIcon from '@/components/icons/video-icon.vue'
import PhotographyIcon from '@/components/icons/photography-icon.vue'
import CollectiblesIcon from '@/components/icons/collectibles-icon.vue'
import UtilityIcon from "@/components/icons/utility-icon.vue"
import SportIcon from "@/components/icons/sport-icon.vue"
import VirtualIcon from "@/components/icons/virtual-icon.vue"
import musicIcon from "@/components/icons/music-icon.vue"
import EyeIcon from '@/components/icons/eye-icon.vue'
import NftCard from '@/components/Nft-card.vue'
import MessageIcon from "@/components/icons/message-icon.vue"
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    RocketIcon,
    AppButton,
    ArtistCard,
    NftCard,
    ArtIcon,
    VideoIcon,
    PhotographyIcon,
    CollectiblesIcon,
    UtilityIcon,
    VirtualIcon,
    SportIcon,
    musicIcon,
    EyeIcon,
    MessageIcon,
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
      <div class="container mx-auto p-4 md:px-10 flex flex-wrap md:flex-nowrap items-start gap-12">
        <div class="grid gap-8 capitalize">
          <h1 class="inline-block lg:text-7xl text-5xl font-bold">Discover Digital Art &amp; Collect NFTs</h1>

          <p class="text-labelText lg:text-3xl text-lg">NFT Marketplace UI create with Anima for Figma. Collect, Buy and sell art
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

        <div class="lg:shrink-0 w-full max-w-lg">
          <div class="w-full h-full bg-backgroundSecond rounded-xl overflow-hidden">
            <img src="@/assets/img/Image_Placeholder.png" />
            <div class="grid gap-4 p-4">
              <p class="text-xl font-bold capitalize">Space working</p>
              <!-- Avatar -->
              <div class="flex items-center gap-3">
                <div class="inline-block w-8 h-8 rounded-full">
                  <img src="/img/Avatars/AnimaKid.png" />
                </div>
                <p>AnimaKid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto px-4 md:px-10 grid gap-8">
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
                  <img src="/img/Avatars/MrFox.png" />
                </div>
                <p>MrFox</p>
              </div>
            </div>
          </div>

          <div class="relative hidden md:grid gap-4">
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
                  <img src="/img/Avatars/Shroomie.png" />
                </div>
                <p>Shroomie</p>
              </div>
            </div>
          </div>

          <div class="relative hidden lg:grid gap-4">
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
                  <img src="/img/Avatars/BeKind2Robots.png" />
                </div>
                <p>BeKind2Robots</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div class="container mx-auto px-4 md:px-10 grid gap-8">
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
              <img src="/img/categories/Art.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <art-icon />
              </div>
            </div>
            <p class="shrink-0 p-4 text-center text-2xl font-bold">Art</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="/img/categories/Collectibles.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <collectibles-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Collectibles</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="/img/categories/Music.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <music-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Music</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="/img/categories/Photography.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <photography-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Photography</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="/img/categories/Video.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <video-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Video</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="/img/categories/Utility.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <utility-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Utility</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="/img/categories/Sport.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <sport-icon />
              </div>
            </div>
            <p class="p-4 text-center text-2xl font-bold">Sport</p>
          </div>

          <div class="bg-backgroundSecond rounded-2xl overflow-hidden cursor-pointer">
            <div class="relative w-full min-h-[16rem]">
              <img src="/img/categories/Virtual_Worlds.png" />
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                <virtual-icon />
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
            <eye-icon class="text-primaryColor" />
            <span>See All</span>
          </app-button>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <nft-card :nftData="{
            name: 'Distant Galaxy',
            price: 1.63,
            highest_bid: 0.33,
            image: '/img/NFTs/Distant_Galaxy.png',
            artist: {
              name: 'MoonDancer',
              image: '/img/Avatars/MoonDancer.png'
            }
          }" />
          <nft-card :nftData="{
            name: 'Life On Edena',
            price: 1.63,
            highest_bid: 0.33,
            image: '/img/NFTs/Life_On_Edena.png',
            artist: {
              name: 'NebulaKid',
              image: '/img/Avatars/NebulaKid.png'
            }
          }" />
          <nft-card class="hidden lg:block" :nftData="{
            name: 'AstroFiction',
            price: 1.63,
            highest_bid: 0.33,
            image: '/img/NFTs/AstroFiction.png',
            artist: {
              name: 'Spaceone',
              image: '/img/Avatars/Spaceone.png'
            }
          }" />
        </div>
      </div>
    </section>

    <section class="relative min-h-[80vh]">
      <div class="highlight-cover">
        <picture>
          <source media="(min-width: 800px)" srcset="/img/NFTs/Highlights/Screen=Tablet.png">
          <source srcset="/img/NFTs/Highlights/Screen=Desktop.png" media="(min-width: 1200px)">
          <img srcset="/img/NFTs/Highlights/Screen=Mobile.png" />
        </picture>
      </div>
      <div class="relative container mx-auto px-8 py-16 md:px-10 grid gap-6 h-full">
        <div class="grid md:grid-cols-2 gap-8 place-content-end md:place-items-end">
          <div class="grid gap-8 place-self-start">
            <!-- Avatar -->
            <div class="inline-flex items-center gap-3 py-3 px-6 w-fit bg-backgroundSecond rounded-full">
              <div class="inline-block w-8 h-8 rounded-full">
                <img src="/img/Avatars/Shroomie.png" />
              </div>
              <p class="font-semibold tracking-wide">Shroomie</p>
            </div>

            <h1 class="text-5xl font-bold">Magic Mashrooms</h1>

            <router-link to="/"
              class="flex items-center justify-center gap-4 md:max-w-[15rem] bg-white px-8 py-4 rounded-2xl">
              <eye-icon class="text-primaryColor" />
              <span class="text-backgroundSecond text-lg font-bold">See NFT</span>
            </router-link>
          </div>

          <div class="grid gap-3 md:w-fit h-fit py-4 px-8 bg-black/30 rounded-2xl">
            <p class="tracking-wider">Auction ends in:</p>
            <div class="flex items-start justify-between gap-4 text-4xl font-bold">
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
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="container mx-auto px-4 md:px-10 grid gap-8">
        <div class="grid gap-4 capitalize">
          <h1 class="text-4xl font-bold">How it works</h1>
          <p class="text-xl">Find out how to get started</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <div class="flex items-center md:grid gap-4 p-4 lg:px-8 bg-backgroundSecond rounded-2xl md:max-w-xs place-content-baseline">
            <div class="shrink-0 w-28 h-28 lg:w-60 lg:h-60 md:w-40 md:h-40 mx-auto">
              <img src="@/assets/img/how_it_works_01.png" alt="setup wallet" />
            </div>
            <div class="grid gap-4 md:text-center">
              <h1 class="text-lg lg:text-xl font-bold capitalize">Setup your wallet</h1>
              <p class="text-sm lg:text-base tracking-wider">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
            </div>
          </div>

          <div class="flex items-center md:grid gap-4 p-4 lg:px-8 bg-backgroundSecond rounded-2xl md:max-w-xs place-content-baseline">
            <div class="shrink-0 w-28 h-28 lg:w-60 lg:h-60 md:w-40 md:h-40 mx-auto">
              <img src="@/assets/img/how_it_works_01.png" alt="setup wallet" />
            </div>
            <div class="grid gap-4 md:text-center">
              <h1 class="text-lg lg:text-xl font-bold capitalize">Create Collection</h1>
              <p class="text-sm lg:text-base tracking-wider">Upload your work and setup your collection. Add a description, social links and floor price.</p>
            </div>
          </div>

          <div class="flex items-center md:grid gap-4 p-4 lg:px-8 bg-backgroundSecond rounded-2xl md:max-w-xs place-content-baseline">
            <div class="shrink-0 w-28 h-28 lg:w-60 lg:h-60 md:w-40 md:h-40 mx-auto">
              <img src="@/assets/img/how_it_works_01.png" alt="setup wallet" />
            </div>
            <div class="grid gap-4 md:text-center">
              <h1 class="text-lg lg:text-xl font-bold capitalize">Start Earning</h1>
              <p class="text-sm lg:text-base tracking-wider">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="container mx-auto px-4 md:px-10 grid gap-8">
        <div class="grid md:grid-cols-2 gap-6 p-4 md:p-8 place-items-center bg-backgroundSecond rounded-2xl">
          <div class="h-full max-h-72 rounded-2xl overflow-hidden">
            <img src="@/assets/img/weekly_digest.png" alt="weekly digest" />
          </div>
          <div class="grid gap-6">
            <div class="grid gap-2 capitalize">
              <h1 class="text-3xl font-bold">Join our weekly digest</h1>
              <p class="text-lg">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
            </div>
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
    </section>
  </div>
</template>
