<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <select
            class="field"
            :value="modelValue"
            v-bind="{
                ...$args, 
                onChange: ($event) => {$emit('update:modelValue', $event.target.value)}
            }">
            <option v-for="option in options" :value="option.id" :key="option.id" :selected="option.id === modelValue.id">{{option.name}}</option>
        </select>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type:String,
            default: ''
            
        },
        modelValue: {
            type: [String, Number, Object],
            default: ''
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>