import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'
import App from "@/App.vue"
import VueRouter from "vue-router"
import HomePage from "@/views/HomePage.vue"
import routes from "@/router/routes.js"
import events from '@/data/db.json'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
    }
})

describe("App.vue", () => {

    it("renders a child component AboutPage via routing", async () => {
        const router = new VueRouter({ routes })
        const wrapper = mount(App, {
            localVue,
            router,
            store
        })

        router.push("/")
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(HomePage).exists()).toBe(true)
    })
    it('The total number of li components should be 12', () => {
        const length_li = '12'
        const wrapper = shallowMount(HomePage, { localVue, store })
        const li_elements = wrapper.findAll('ul>li').wrappers
    })
    expect(li_elements.length).toBe(length_li)
})