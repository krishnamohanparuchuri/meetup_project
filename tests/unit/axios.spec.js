import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue'


jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] })
}));

describe('products', () => {
    test('mocking the axios call to get products shuold work', async () => {
        // const wrapper = shallowMount(App);
        // await wrapper.vm.$nextTick();
        // expect(wrapper.vm.products.length).toBe(1);
    })
})