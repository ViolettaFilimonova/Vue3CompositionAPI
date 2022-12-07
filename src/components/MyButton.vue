<template>
    <button @click="$emit('buttonClicked')">{{text}}</button>
</template>
<script>
export default{
    setup() {
        
    },
    props:{
        text:{
            type: String,
            default: 'No button text'
        }
    },
    emits:['buttonClicked']
}
</script>
<!-- <script setup>
    const props = defineProps({
        text:{
            type: String,
            default: 'No button text'
        }
    })
    
</script> -->

