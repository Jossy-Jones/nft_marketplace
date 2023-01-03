<script>
import AllArtists from "@/data/artists.json"

export default {
    name: "RankingView",
    data() {
        return {
            artists: AllArtists.data,
            active: "today"
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
                <h1 class="text-4xl font-bold">Top Creators</h1>
                <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
            </div>
            <div class="grid gap-8">
                <div class="grid grid-cols-4">
                    <div
                        class="nav-item w-full p-2 text-lg text-center font-bold cursor-pointer before:bg-labelText" :class="[(active === 'today') ? 'active' : '']" @click="setActive('today')">
                        <span class="hidden md:inline-block">Today</span>
                        <span class="inline-block md:hidden">1d</span>
                    </div>
                    <div class="nav-item w-full p-2 text-lg text-center font-bold cursor-pointer before:bg-labelText" :class="[(active === 'week') ? 'active' : '']" @click="setActive('week')">
                        <span class="hidden md:inline-block">This Week</span>
                        <span class="inline-block md:hidden">7d</span>
                    </div>
                    <div class="nav-item w-full p-2 text-lg text-center font-bold cursor-pointer before:bg-labelText" :class="[(active === 'month') ? 'active' : '']" @click="setActive('month')">
                        <span class="hidden md:inline-block">This Month</span>
                        <span class="inline-block md:hidden">30d</span>
                    </div>
                    <div class="nav-item w-full p-2 text-lg text-center font-bold cursor-pointer before:bg-labelText" :class="[(active === 'all-time') ? 'active' : '']" @click="setActive('all-time')">
                        <span class="inline-block">All Time</span>
                    </div>
                </div>
                <!-- Table -->
                <div class="grid gap-2">
                    <div class="grid grid-cols-7 md:grid-cols-11 place-items-center gap-4 px-6 py-2 text-labelText tracking-wider border border-backgroundSecond rounded-2xl capitalize">
                        <span>#</span>
                        <span class="col-span-4 place-self-start">Artist</span>
                        <span class="col-span-2 hidden md:inline-block">Change</span>
                        <span class="col-span-2 hidden md:inline-block">NFTs Sold</span>
                        <span class="col-span-2 inline-block">Volume</span>
                    </div>
                    <div class="grid gap-4">
                        <div v-for="(artist, index) in artists" :key="index" class="grid grid-cols-7 md:grid-cols-11 items-center place-items-center gap-4 px-6 py-2 text-white tracking-wider bg-backgroundSecond rounded-2xl">
                            <span class="flex items-center justify-center w-7 h-7 text-sm font-bold bg-background text-labelText rounded-full">{{ index + 1 }}</span>
                            <div class="col-span-4 place-self-start flex items-center gap-4">
                                <div class="shrink-0 inline-block lg:mx-auto w-10 h-10 lg:w-16 lg:h-16 rounded-full">
                                    <img :src="`/img/artists/${artist.image}`" />
                                </div>
                                <span class="inline-block lg:text-xl font-black">{{artist.name}}</span>
                            </div>
                            <span class="col-span-2 font-bold hidden md:inline-block text-success">+{{ artist.change }}%</span>
                            <span class="col-span-2 font-bold hidden md:inline-block">{{ artist.sold }}</span>
                            <span class="col-span-2 font-bold inline-block">{{ artist.volume }} ETH</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>