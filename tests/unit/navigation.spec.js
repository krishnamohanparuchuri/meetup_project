import { mount, shallowMount } from '@vue/test-utils';
import App from '@/App.vue'
import NavigationPage from '@/components/NavigationPage'

describe('NavigationPage.vue', () => {
    it('check whether the NavigationPage component renders without stubs in App.vue', () => {
        const wrapper = mount(App)
        expect(wrapper.findComponent(NavigationPage).exists()).toBe(true)
    })

    it('check the child component with stubs', () => {
        const wrapper = mount(App, {
            stubs: {
                NavigationPage: true,
                name: 'NavigationPage'
            }
        })
        expect(wrapper.findComponent(NavigationPage).exists()).toBe(true)

    })

    it('check the child component with stubs', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.findComponent(NavigationPage).exists()).toBe(true)

    })

})