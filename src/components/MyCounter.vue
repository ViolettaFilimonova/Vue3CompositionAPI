<template>
    <!-- <div class="counter">
        <div class="counter__num">
        <p>{{store.state.counter}}</p>
    </div>
    <div class="buttons">
        <button @click="increaseCounter">+</button>
        <button @click="decreaseCounter">-</button>
    </div>
    </div> -->
    <h2>{{title}}</h2>
    <ul>
        <li v-for="(note, index) in notes" :key="index">{{note}}</li>
        <input type="text" v-model="text" @keypress.enter="save">
    </ul>
</template>
<!-- <script setup>
import {ref} from 'vue'
    const counter = ref(0)
    const decreaseCounter = () => {
        counter.value--
    }
    const increaseCounter = () => {
        counter.value++
    }
</script> -->
<script>
import {useStore} from 'vuex'
import {ref, computed} from 'vue'
export default{
    setup(){
        const store = useStore()
        // const notes = computed(() => store.state.notes);
        const text = ref('');

        const save = () => {
            store.dispatch('SEND_NOTE', text.value)
            text.value = ''
        }

        return{
            title: computed(() => store.state.title),
            notes: computed(() => store.getters.ADD_NOTE),
            text,
            save
        }
    }
}
</script>
<style>
.counter{
    display: grid;
    justify-content: center;
}
.counter__num{
    display: flex;
    justify-content: center;
}
.counter__num p{
    font-size: 80px;
}
.buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
}
</style>
