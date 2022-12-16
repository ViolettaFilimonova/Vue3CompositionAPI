<template>
    <!-- <button @click="$emit('buttonClicked')">{{text}}</button> -->
    <!-- <button @click="handleButtonClicked">{{text}}</button> -->
  <button class="uppercase text-sm font-medium tracking-wider py-2.5 px-4 mr-1 focus:outline-none">
    <slot></slot>
  </button>
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
<!-- <script setup>
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
<style scoped>
button{
    background: black;
    color: white;
}
</style>
 -->
