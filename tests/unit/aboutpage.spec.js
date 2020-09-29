import { mount, createLocalVue, shallowMount } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import AboutPage from "@/views/AboutPage.vue"
import routes from "@/router/routes.js"
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

describe("App.vue", () => {
    let actions
    let state
    let store

    beforeEach(() => {
        state = {
        }

        actions = {
            loadEvents: jest.fn()
        }

        store = new Vuex.Store({
            state,
            actions
        })

    })

    it("renders a child component AboutPage via routing", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(App, {
            localVue,
            router,
            store
        })

        router.push("/about")
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(AboutPage).exists()).toBe(true)
    })

    it('renders a header with name"About us"', () => {
        const wrapper = shallowMount(AboutPage)
        expect(wrapper.find('h1').text()).toBe('About us')
    })

    it('renders all h2 tags with their content', () => {
        const wrapper = shallowMount(AboutPage)
        const h2_elements = wrapper.findAll('h2').wrappers
        expect(h2_elements[0].text()).toBe('Why we started Meetups')
        expect(h2_elements[1].text()).toBe('Build a profile relevant in your field of interest')
    })

    it('check the length how many h4 elements avilable in Aboutpage"', () => {
        const wrapper = shallowMount(AboutPage)
        const h4_elements = wrapper.findAll('h4').wrappers
        const p_elements = wrapper.findAll('p').wrappers
        expect(h4_elements.length).toBe(2)
        expect(p_elements.length).toBe(4)
    })
})