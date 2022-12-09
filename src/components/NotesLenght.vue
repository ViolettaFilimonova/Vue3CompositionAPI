<template>
    <p>Total notes: {{totalNotes}}</p>
</template>
<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
export default{
    setup(){
        const store = useStore()
        return{
            totalNotes: computed(() => store.getters.TOTAL_NOTES)
        }
    }
}
</script>
<style>
p{
    color: rgb(152, 40, 145);
}
</style>