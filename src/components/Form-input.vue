<script>
export default {
    name: 'FormInput',
    props: {
        inputName: { type: String, required: true },
        inputType: { default: "text", type: String },
        inputValue: {type: String},
        placeholder: {type: String},
        required: {type: Boolean},
    }
}
</script>

<template>
    <div class="form-input">
        <div class="flex items-center gap-3">
            <slot name="prepend"></slot>
            <input :type="inputType" :name="inputName" :placeholder="placeholder" :value="inputValue" :required="required" />
            <slot name="append"></slot>
        </div>
    </div>
</template>

<style>

</style>