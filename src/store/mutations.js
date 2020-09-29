export const mutations = {

    SET_EVENTS(state, events) {
        state.events = {};
        state.events = events;
    },

    FIND_EVENT_ID(state, id) {
        const event_desc = this.state.events.find(event => event.id === id)
        console.log(event_desc)
        state.event = event_desc
    },
    ADD_EVENT(state, event) {
        console.log(event)
        state.events.push(event)
        console.log(this.state.events)

    },
    ADD_USER(state, user) {
        state.users.push(user)
    },
    DELETE_EVENT(state, id) {
        const index = state.events.find((event) => event.id === id)
        state.events.splice(index, 1)
        console.log(this.state.events)
    },
    TOGGLE_SUBMITTED(state) {
        state.submitted = true;
    }
}