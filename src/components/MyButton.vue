<template>
    <!-- <button @click="$emit('buttonClicked')">{{text}}</button> -->
    <button @click="handleButtonClicked">{{text}}</button>
</template>
<!-- <script>
export default{
    setup() {
        
    },
    props:{
        text:{
            type: String,
            default: 'No button text'
        }
    },
     emits:['buttonClicked']//необязательно 
}
</script> -->
<script setup>
    const props = defineProps({
        text:{
            type: String,
            default: 'No button text'
        }
    })
    const emits = defineEmits(['buttonClicked'])
    const handleButtonClicked = () => {
        emits('buttonClicked', 29)
    }
</script>

