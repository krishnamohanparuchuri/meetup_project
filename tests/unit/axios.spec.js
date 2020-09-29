import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue'
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
        }

        actions = {

        }

        store = new Vuex.Store({
            state,
            actions
        })

    })
    test('mocking the axios call to get products should work', async () => {
        const wrapper = shallowMount(App, {
            localVue,
            store
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.products.length).toBe(1);
    })
})