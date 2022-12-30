<script>
import MetamaskIcon from '@/components/icons/metamask-icon.vue';
import WalletconnectIcon from '@/components/icons/walletconnet-icon.vue';
import CoinbaseIcon from '@/components/icons/coinbase-icon.vue';
export default {
    name: "ConnectWallet",
    components: {
        MetamaskIcon,
        WalletconnectIcon,
        CoinbaseIcon,
    }
}
</script>

<template>
    <section class="relative">
        <div class="grid md:grid-cols-2">
            <div class="max-h-[43rem]">
                <picture>
                    <source media="(min-width: 800px)" srcset="@/assets/img/Create_Account_Screen=Tablet.png">
                    <source media="(min-width: 1200px)" srcset="@/assets/img/Create_Account_Screen=Desktop.png">
                    <img srcset="@/assets/img/Create_Account_Screen=Mobile.png" />
                </picture>
            </div>
            <div class="container mx-auto py-8 px-4 md:px-8 lg:px-20">
                <div class="grid gap-8">
                    <h1 class="text-4xl xl:text-6xl font-bold">Connect Wallet</h1>
                    <p class="text-lg xl:text-2xl tracking-wider">Choose a wallet you want to connect. <br/> There are several wallet providers</p>

                    <div class="grid gap-8 w-full lg:max-w-xs">
                        <div class="flex items-center gap-4 px-10 py-4 bg-backgroundSecond border border-primaryColor rounded-2xl">
                            <metamask-icon/>
                            <span class="text-2xl font-bold">Metamask</span>
                        </div>
                        <div class="flex items-center gap-4 px-10 py-4 bg-backgroundSecond border border-primaryColor rounded-2xl">
                            <walletconnect-icon/>
                            <span class="text-2xl font-bold">Wallet Connect</span>
                        </div>
                        <div class="flex items-center gap-4 px-10 py-4 bg-backgroundSecond border border-primaryColor rounded-2xl">
                            <coinbase-icon/>
                            <span class="text-2xl font-bold">Coinbase</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>