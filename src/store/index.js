// import {createStore} from 'vuex'
// export default createStore({
//     const store = {
//         state: {
//             title: 'Vuex + Composition API',
//             notes: []
//           },
//           getters:{
//               note(sate){
//                   return state.title
//               }
//           },
//           mutations: {
//               SAVE_NOTE(state, teaxt) {
//                   state.notes.value.push(text)
//               }
//           },
//           actions:{}
//     }
//   })

import {createStore} from 'vuex'
const state = {
    title: 'Vuex + Composition API',
    notes: []
}
const getters = {
    ADD_NOTE(state) {
       return state.notes
    }
}
const mutations = {
    SAVE_NOTE(state, text) {
       state.notes.push(text)
    }
}
const actions = {
    SEND_NOTE({commit}, payload) {
       commit('SAVE_NOTE', payload)
    }
}
const store = createStore({
    state, actions, getters, mutations
})
export default store

// import {reactive} from 'vue'
// const state = reactive ({
//     counter: 0
// })
// export default {
//     state
// }