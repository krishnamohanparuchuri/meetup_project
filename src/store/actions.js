import axios from 'axios'
export const actions = {

    loadEvents({ commit }) {
        axios.get('http://localhost:5000/events')
            .then(res => res.data)
            .then(events => {
                console.log(events)
                commit('SET_EVENTS', events)
            })
    },

    getEventInfo(context, id) {
        context.commit('FIND_EVENT_ID', id)
    },

    addUser(context, user) {
        context.commit('ADD_USER', user)
    },
    async addEvent(context, event) {
        await context.commit('ADD_EVENT', event)
    }
}