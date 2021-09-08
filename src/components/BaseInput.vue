<template>
    <label v-if="label">{{ label }}</label>
    <input
        class="field"
        :plaveholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attr"
    />
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>
<style>
    
</style>