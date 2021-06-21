import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store  = new Vuex.Store({
    state: {
          participants: [{
              id: 1,
              tim: 'Ac Milan',
              qualified: true
            },
            {
              id: 2,
              tim: 'Parma',
              qualified: false
            }
          ]
    },
    getters: {
        all(state) {
            return state.participants
        },
        isQualified(state) {
            return state.participants.filter(participant => {
                return participant.qualified
            })
        },
        notQualified(state) {
            return state.participants.filter(participant => {
                return !participant.qualified
            })
        },
        detail:  (state, getters) => (id) => {
            return state.participants.find(participant => participant.id == id)
        }
    },
    mutations: {
        register(state, data) {
            state.participants.push(data)
        },
        update(state, data) {
            var participant = state.participants.find(o => o.id == data.id)
            var index = state.participants.indexOf(participant)
            state.participants[index].tim = data.tim
            state.participants[index].qualified = data.qualified
        },
        delete(state, value) {
            var participant = state.participants.find(o => o.id == value)
            state.participants.splice(state.participants.indexOf(participant), 1)
        }
    }
})