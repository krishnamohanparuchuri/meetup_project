import { shallowMount, createLocalVue } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)


jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] })
}));

describe('products', () => {
    let actions
    let state
    let store

    beforeEach(() => {
        state = {
            events: [{
                id: "10",
                name: "Water Diving",
                price: "800",
                seats_available: "50",
                type: "Water games",
                duration: "12 hours",
                location: "stockholm",
                image: "waterdiving1.jpg",
                start_time: "10:00",
                available_date: "2020-10-06"
            },
            {
                id: "11",
                name: "Water Diving",
                price: "800",
                seats_available: "50",
                type: "Water games",
                duration: "12 hours",
                location: "stockholm",
                image: "waterdiving1.jpg",
                start_time: "10:00",
                available_date: "2020-10-06"
            }]
        }

        actions = {
            loadEvents: jest.fn()

        }

        store = new Vuex.Store({
            state,
            actions
        })

    })
    test('mocking the axios call to get products should work', async () => {
        const wrapper = shallowMount(HomePage, {
            localVue,
            store
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.events.length).toBe(2);
    })
})