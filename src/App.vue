<template>
<h1>I am {{name}}, {{age}}</h1>
</template>
<!-- <script>
import { ref } from '@vue/reactivity'
export default{
  setup(){
    const name = ref('Violetta')
    const age= ref(23)

    return{
      age,
      name
    }
  }
}
</script> -->
<script setup>
import { ref } from '@vue/reactivity'
    const name = ref('Violetta')
    const age= ref(24)
</script>

