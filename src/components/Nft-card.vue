<template>
    <div class="grid rounded-2xl bg-backgroundSecond overflow-hidden">
        <div class="w-full h-80">
            <img :src="`/img/NFTs/${nftData.image}`" :alt="nftData.name" />
        </div>
        <div class="grid gap-6 p-6">
            <div class="grid gap-3">
                <h3 class="text-2xl font-bold">{{nftData.name}}</h3>
                <div class="flex items-center gap-3">
                    <div class="inline-block w-8 h-8 rounded-full overflow-hidden border">
                      <img :src="`/img/Avatars/${nftData.artist.image}`" :alt="nftData.artist.name" />
                    </div>
                    <p>{{nftData.artist.name}}</p>
                </div>
            </div>
            <div class="flex items-start justify-between gap-6">
                <div class="grid gap-2">
                    <label class="text-labelText">Price</label>
                    <p class="font-lg tracking-wider">{{nftData.price}} ETH</p>
                </div>
                <div class="grid gap-2">
                    <label class="text-labelText">Highest Bid</label>
                    <p class="font-lg tracking-wider">{{nftData.highest_bid}} wETH</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NftCard",
    props: {
        nftData: {type: Object, required: true},
    }
}
</script>

<style>

</style>