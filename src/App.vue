<template>
<h1 @click="handleHeadingClick">I am {{name}}, {{age}}</h1>
</template>
<!-- <script>
import { ref } from '@vue/reactivity'
export default{
  setup(){
    const name = ref('Violetta')
    const age= ref(23)

    const handleHeadingClick = () => {
      name.value = 'Vi'
      age.value = 24
    }

    return{
      age,
      name,
      handleHeadingClick
    }
  }
}
</script> -->

<script setup>
import { ref } from '@vue/reactivity'
    const name = ref('Violetta')
    const age= ref(24)

    const handleHeadingClick = () => {
      name.value = 'Vi'
      age.value = 24
    }
</script>

