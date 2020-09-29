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
    addEvent(context, event) {
        context.commit('ADD_EVENT', event)
    },
    deleteEvent(context, event_id) {
        context.commit('DELETE_EVENT', event_id)
    }
}