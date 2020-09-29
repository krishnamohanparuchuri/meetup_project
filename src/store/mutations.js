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
        state.events = this.state.events.push(event)
        console.log(state.events.length)

    },
    ADD_USER(state, user) {
        const add_user = this.state.users.push(user);
        console.log(add_user)
        state.users = add_user;
    },
    TOGGLE_SUBMITTED(state) {
        state.submitted = true;
    }
}