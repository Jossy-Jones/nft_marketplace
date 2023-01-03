<script>
export default {
    name: "ArtistCard",
    props: {
        "artistData": {
            type: Object,
            required: true,
        },
        "ranking":{
            type: Boolean
        }
    },
    data(){
        return{
            rank: parseInt(this.artistData.id),
            profilePic: `/img/artists/${this.artistData.image}`,
        }
    }
}
</script>

<template>
    <div class="relative flex items-center lg:grid gap-4 px-6 py-4 lg:py-6 rounded-2xl lg:text-center bg-backgroundSecond">
        <span v-if="ranking" class="absolute top-2 left-4 flex items-center justify-center w-7 h-7 bg-background text-labelText rounded-full">{{rank}}</span>
        <div class="shrink-0 inline-block lg:mx-auto w-16 h-16 lg:w-32 lg:h-32 rounded-full">
            <img :src="profilePic" />
        </div>
        <div class="grid gap-1.5">
            <h3 class="text-textColor text-2xl font-bold">{{artistData.name}}</h3>
            <p class="inline-flex lg:inline-block gap-4 text-lg text-labelText whitespace-nowrap">Total Sales: <span class="text-textColor font-bold">{{artistData.sales}} ETH</span></p>
        </div>
    </div>
  
</template>

<style>

</style>