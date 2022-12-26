<script>
export default {
    name: 'Button',
    props: {
        type: { required: true, type: String, default: "primary-btn" },
        value: { required: false, type: String },
        loading: {type: Boolean},
    },
    data() {
        return {
            btnType: this.type,
            isLoading: this.loading ?? false,
        }
    }
}
</script>

<template>
    <button :class="[btnType]">
        <span v-if="isLoading" class="loader">Processing</span>
        <slot v-else>{{value}}</slot>
    </button>
</template>

<style>

</style>