<template>
  <div class="container">
    <h1 @click="handleHeadingClick">I am {{name}}, {{age}}</h1>
  <MyButton  
  text="My button"
  @buttonClicked="showAlerts"
  />
  <MyCounter/>
  </div>
</template>
<!-- <script>
import MyButton from '@/components/MyButton.vue'
import { ref } from '@vue/reactivity'
export default{
  setup(){
    const name = ref('Violetta')
    const age= ref(23)

    const handleHeadingClick = () => {
      name.value = 'Vi'
      age.value = 24
    }
    const showAlerts = () => {
      alert('Button was clicked')
    }

    return{
      age,
      name,
      handleHeadingClick,
      showAlerts
    }
  },
  components: {
      MyButton
    }
}
</script> -->

<script setup>
import MyCounter from './components/MyCounter.vue';
import MyButton from '@/components/MyButton.vue'
import { ref } from '@vue/reactivity'
    const name = ref('Violetta')
    const age= ref(24)

    const handleHeadingClick = () => {
      name.value = 'Vi'
      age.value = 24
    }
    const showAlerts = (newAhe) => {
      age.value = 29
    }
</script> 
<style>
.container{
  max-width: 1280px;
  margin: 0 auto;
}
</style>