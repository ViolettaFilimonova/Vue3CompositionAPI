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
    <NotesLenght/>
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
import NotesLenght from './NotesLenght.vue'
import {useStore} from 'vuex'
import {ref, computed} from 'vue'
export default{
  components: { NotesLenght },
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
    font-size: 60px;
    color: red;
}
h2{
    color: red;
}
.buttons button{
    font-size: 60px;
    width: 100px;
    margin: 0 10px;
}
</style>
